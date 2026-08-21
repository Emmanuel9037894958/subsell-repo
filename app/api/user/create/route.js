import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      uid,
      fullName,
      email,
      phone,
      accountType,
      companyName,
    } = body;

    // Validate required fields
    if (!uid || !fullName || !email) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required user information.",
        },
        { status: 400 }
      );
    }

    // Create user profile in Firestore
    await adminDb.collection("users").doc(uid).set(
      {
        uid,
        fullName: fullName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || "",
        accountType: accountType || "individual",
        companyName: companyName?.trim() || "",
        role: "user",
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        merge: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: "User profile created successfully.",
    });
  } catch (error) {
    console.error("Create user profile error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create user profile.",
      },
      { status: 500 }
    );
  }
}