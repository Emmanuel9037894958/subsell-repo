import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export async function POST(request) {
  try {
    const body = await request.json();

    const code = String(body.code || "").trim().toUpperCase();

    if (!code) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter your access code.",
        },
        { status: 400 }
      );
    }

    // Find the unique access code in Firestore
    const codeRef = doc(adminDb, "accessCodes", code);
    const codeSnap = await getDoc(codeRef);

    if (!codeSnap.exists()) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid access code. Please request a valid code from the website owner.",
        },
        { status: 401 }
      );
    }

    const codeData = codeSnap.data();

    // Check whether the code has already been used
    if (codeData.used === true) {
      return NextResponse.json(
        {
          success: false,
          message:
            "This access code has already been used. Please request a new code.",
        },
        { status: 401 }
      );
    }

    // Check expiration if the code has an expiresAt field
    if (codeData.expiresAt) {
      const expiresAt = codeData.expiresAt.toDate
        ? codeData.expiresAt.toDate()
        : new Date(codeData.expiresAt);

      if (expiresAt < new Date()) {
        return NextResponse.json(
          {
            success: false,
            message:
              "This access code has expired. Please request a new code.",
          },
          { status: 401 }
        );
      }
    }

    // Mark the code as used
    await updateDoc(codeRef, {
      used: true,
      usedAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      message: "Access code verified successfully.",
    });
  } catch (error) {
    console.error("Access code verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong while verifying your access code.",
      },
      { status: 500 }
    );
  }
}