"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  Briefcase,
  User,
  Lock,
  Mail,
  Phone,
  Building2,
  LogIn,
} from "lucide-react";

import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function SignUp() {
  const router = useRouter();

  const [pageLoading, setPageLoading] = useState(false);

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setAccountType] = useState("individual");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    companyName: "",
    agreedToTerms: false,
  });

  const getPasswordStrength = (pass) => {
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    return score;
  };

  const strength = getPasswordStrength(formData.password);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  const getFirebaseError = (error) => {
    switch (error.code) {
      case "auth/email-already-in-use":
        return "An account already exists with this email address.";

      case "auth/invalid-email":
        return "Please enter a valid email address.";

      case "auth/weak-password":
        return "Your password is too weak. Use at least 8 characters.";

      case "auth/popup-closed-by-user":
        return "Google sign-up was cancelled.";

      case "auth/popup-blocked":
        return "Your browser blocked the Google sign-in popup. Please allow popups and try again.";

      case "auth/network-request-failed":
        return "Network error. Please check your internet connection.";

      case "auth/account-exists-with-different-credential":
        return "An account already exists with this email using another sign-in method.";

      default:
        return error.message || "Something went wrong. Please try again.";
    }
  };

  // --------------------------------------------------
  // SUCCESS REDIRECT
  // --------------------------------------------------
  const handleSuccessfulSignup = () => {
    setError("");
    setSuccess("Account created successfully! Welcome to SUBSELL 🎉");
    setShowSuccessEffect(true);

    // Give Firebase a moment to finish updating the auth state,
    // then replace the signup page with the homepage.
    setTimeout(() => {
      router.replace("/");
      router.refresh();
    }, 1800);
  };

  // --------------------------------------------------
  // EMAIL SIGNUP
  // --------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (step === 1) {
      setStep(2);
      return;
    }

    if (!formData.agreedToTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: formData.fullName.trim(),
      });

      console.log("Firebase user created:", user);

      handleSuccessfulSignup();
    } catch (error) {
      console.error("Signup error:", error);
      setError(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // GOOGLE SIGNUP
  // --------------------------------------------------
  const handleGoogleSignup = async () => {
    setError("");
    setSuccess("");

    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);

      console.log("Google user:", result.user);

      handleSuccessfulSignup();
    } catch (error) {
      console.error("Google signup error:", error);
      setError(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  // --------------------------------------------------
  // PAGE LOADING
  // --------------------------------------------------
  if (pageLoading) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white">
        {/* Background Decorations */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

        <div className="relative flex flex-col items-center text-center">
          {/* Logo / Brand */}
          <div className="relative mb-8">
            {/* Outer animated ring */}
            <div className="absolute -inset-4 animate-pulse rounded-[28px] bg-blue-100/70" />

            {/* Spinning ring */}
            <div className="absolute -inset-2 animate-spin rounded-[24px] border-2 border-transparent border-t-[#0b5ed7] border-r-[#0b5ed7]" />

            {/* Logo container */}
            <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#0b5ed7] shadow-xl shadow-blue-200">
              <span className="text-3xl font-black tracking-tight text-white">
                S
              </span>
            </div>
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
            SUB<span className="text-[#0b5ed7]">SELL</span>
          </h1>

          {/* Loading Text */}
          <p className="mt-2 text-sm font-medium text-slate-500">
            Preparing your experience...
          </p>

          {/* Loading Indicator */}
          <div className="mt-7 flex items-center gap-2">
            <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7] [animation-delay:-0.3s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7] [animation-delay:-0.15s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7]" />
          </div>

          {/* Bottom Status */}
          <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
            Secure connection
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // MAIN SIGNUP PAGE
  // --------------------------------------------------
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-slate-950 font-sans text-slate-100"
      style={{
        backgroundImage: "url('/image2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* DARK BACKGROUND OVERLAY */}
      <div className="absolute inset-0 z-0 bg-slate-950/75" />

      {/* EXTRA BLUR / GLASS EFFECT */}
      <div className="absolute inset-0 z-0 bg-black/20 backdrop-blur-[1px]" />

      {/* SUCCESS FLOWER EFFECT */}
      {showSuccessEffect && (
        <div className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-2xl shadow-emerald-500/20">
            <div className="absolute text-5xl animate-bounce">🌸</div>

            <div className="absolute -top-8 left-4 text-2xl animate-ping">
              🌸
            </div>

            <div className="absolute -right-6 top-5 text-xl animate-pulse">
              🌼
            </div>

            <div className="absolute -bottom-6 left-8 text-2xl animate-bounce">
              🌺
            </div>

            <div className="absolute -left-7 bottom-8 text-xl animate-pulse">
              🌷
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex min-h-screen">
        {/* LEFT BRANDING */}
        <div className="relative hidden w-1/2 flex-col justify-between border-r border-white/10 bg-slate-950/30 p-12 backdrop-blur-sm lg:flex">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-black text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b5ed7] text-white shadow-lg shadow-blue-900/40">
                S
              </span>
              SUBSELL
            </Link>
          </div>

          {/* Main Text */}
          <div className="max-w-lg">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4" />
              Bank-Grade Security Protocol
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-white xl:text-5xl">
              Build your future with verified investments.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Join individuals and enterprise partners using SUBSELL to manage,
              scale, and secure their digital asset portfolio.
            </p>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-bold text-white">256-Bit</p>

                <p className="mt-1 text-xs text-slate-400">
                  AES Data Encryption
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">2 Mins</p>

                <p className="mt-1 text-xs text-slate-400">
                  Account Onboarding
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} SUBSELL Inc. All rights reserved.
            <br />
            Protected by End-to-End KYC standard.
          </div>
        </div>

        {/* RIGHT SIGNUP AREA */}
        <div className="flex w-full items-center justify-center p-5 sm:p-8 lg:w-1/2 lg:p-12">
          <div className="w-full max-w-md space-y-7">
            {/* LOGIN BANNER */}
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 shadow-xl backdrop-blur-xl">
              <span className="text-xs text-slate-300">
                Already have an account?
              </span>

              <Link
                href="/login"
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600/20 px-3 py-1.5 text-xs font-semibold text-blue-400 transition hover:bg-blue-600 hover:text-white"
              >
                <LogIn className="h-3.5 w-3.5" />
                Log In
              </Link>
            </div>

            {/* HEADER */}
            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="text-lg font-bold text-white lg:hidden"
                >
                  SUBSELL
                </Link>

                <span className="ml-auto text-xs font-semibold text-slate-400">
                  Step {step} of 2
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
                Create an account
              </h1>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Welcome! Please fill in your details to get started.
              </p>
            </div>

            {/* PROGRESS */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/80">
              <div
                className="h-full rounded-full bg-[#0b5ed7] transition-all duration-300"
                style={{
                  width: step === 1 ? "50%" : "100%",
                }}
              />
            </div>

            {/* ERROR */}
            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm leading-5 text-red-400 backdrop-blur-md">
                {error}
              </div>
            )}

            {/* SUCCESS */}
            {success && (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm leading-5 text-emerald-400 backdrop-blur-md">
                {success}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1 */}
              {step === 1 && (
                <>
                  {/* ACCOUNT TYPE */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAccountType("individual")}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition ${
                        accountType === "individual"
                          ? "border-[#0b5ed7] bg-blue-950/60 text-white shadow-lg shadow-blue-900/20"
                          : "border-white/10 bg-slate-950/50 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <User
                        className={`h-5 w-5 ${
                          accountType === "individual"
                            ? "text-blue-400"
                            : ""
                        }`}
                      />

                      <div>
                        <p className="text-xs font-bold">Individual</p>

                        <p className="text-[10px] text-slate-500">
                          Personal use
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setAccountType("investor")}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition ${
                        accountType === "investor"
                          ? "border-[#0b5ed7] bg-blue-950/60 text-white shadow-lg shadow-blue-900/20"
                          : "border-white/10 bg-slate-950/50 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <Briefcase
                        className={`h-5 w-5 ${
                          accountType === "investor" ? "text-blue-400" : ""
                        }`}
                      />

                      <div>
                        <p className="text-xs font-bold">Corporate</p>

                        <p className="text-[10px] text-slate-500">
                          Investor / Business
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* FULL NAME */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">
                      Full Name
                    </label>

                    <div className="relative mt-2">
                      <User className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Favour Daniel"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-md transition focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7]"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">
                      Email Address
                    </label>

                    <div className="relative mt-2">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-md transition focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7]"
                      />
                    </div>
                  </div>

                  {/* COMPANY */}
                  {accountType === "investor" && (
                    <div>
                      <label className="block text-xs font-semibold text-slate-300">
                        Company Name
                      </label>

                      <div className="relative mt-2">
                        <Building2 className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                        <input
                          type="text"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="Acme Capital LTD"
                          className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-md transition focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7]"
                        />
                      </div>
                    </div>
                  )}

                  {/* CONTINUE */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5ed7] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <>
                  {/* PHONE */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">
                      Phone Number
                    </label>

                    <div className="relative mt-2">
                      <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-md transition focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7]"
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300">
                      Password
                    </label>

                    <div className="relative mt-2">
                      <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••••••"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/60 py-3.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 outline-none backdrop-blur-md transition focus:border-[#0b5ed7] focus:ring-1 focus:ring-[#0b5ed7]"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-slate-500 transition hover:text-slate-300"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>

                    {/* PASSWORD STRENGTH */}
                    {formData.password && (
                      <div className="mt-3 space-y-1.5">
                        <div className="flex h-1 gap-1">
                          {[1, 2, 3, 4].map((level) => (
                            <div
                              key={level}
                              className={`h-full flex-1 rounded-full transition-colors ${
                                strength >= level
                                  ? strength <= 2
                                    ? "bg-amber-500"
                                    : "bg-emerald-500"
                                  : "bg-slate-800"
                              }`}
                            />
                          ))}
                        </div>

                        <p className="text-[11px] text-slate-400">
                          {strength <= 2
                            ? "Weak password"
                            : "Strong password"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* TERMS */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      name="agreedToTerms"
                      required
                      checked={formData.agreedToTerms}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 rounded border-slate-700 bg-slate-900 text-[#0b5ed7] focus:ring-[#0b5ed7]"
                    />

                    <label
                      htmlFor="terms"
                      className="text-xs leading-5 text-slate-400"
                    >
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-blue-400 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-blue-400 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </label>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      disabled={loading}
                      className="w-1/3 rounded-xl border border-white/10 bg-slate-950/60 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 disabled:opacity-60"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 rounded-xl bg-[#0b5ed7] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading
                        ? "Creating Account..."
                        : "Complete Sign Up"}
                    </button>
                  </div>
                </>
              )}
            </form>

            {/* DIVIDER */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-slate-950/80 px-2 text-slate-500">
                  Or register with
                </span>
              </div>
            </div>

            {/* SOCIAL AUTH */}
            <div className="grid grid-cols-2 gap-3">
              {/* GOOGLE */}
              <button
                type="button"
                onClick={handleGoogleSignup}
                disabled={loading}
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-slate-950/60 py-3 text-xs font-semibold text-slate-300 backdrop-blur-md transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.1 0-5.74-2.09-6.68-4.91H1.21v3.15C3.2 21.3 7.29 24 12 24z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M5.32 14.29c-.24-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.56H1.21C.44 8.1.0 9.99.0 12s.44 3.9 1.21 5.44l4.11-3.15z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.29 0 3.2 2.7 1.21 6.56l4.11 3.15c.94-2.82 3.58-4.96 6.68-4.96z"
                  />
                </svg>

                Google
              </button>

              {/* GITHUB */}
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-slate-950/60 py-3 text-xs font-semibold text-slate-300 backdrop-blur-md transition hover:bg-slate-800 hover:text-white"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>

                GitHub
              </button>
            </div>

            {/* LOGIN LINK */}
            <p className="text-center text-xs text-slate-500">
              Have an existing account?{" "}
              <Link
                href="/login"
                className="font-semibold text-blue-400 hover:text-blue-300 hover:underline"
              >
                Log In here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}