"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  ArrowRight,
  KeyRound,
} from "lucide-react";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth } from "../../lib/firebase";

export default function Login() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  const getFirebaseError = (error) => {
    switch (error.code) {
      case "auth/invalid-credential":
        return "Incorrect email or password.";

      case "auth/user-not-found":
        return "No account was found with this email.";

      case "auth/wrong-password":
        return "Incorrect email or password.";

      case "auth/invalid-email":
        return "Please enter a valid email address.";

      case "auth/user-disabled":
        return "This account has been disabled.";

      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";

      case "auth/popup-closed-by-user":
        return "Google sign-in was cancelled.";

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

  // EMAIL/PASSWORD LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Remember for 30 days/browser persistence,
      // otherwise use session persistence.
      if (formData.rememberMe) {
        await setPersistence(auth, browserLocalPersistence);
      } else {
        await setPersistence(auth, browserSessionPersistence);
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email.trim(),
        formData.password
      );

      const user = userCredential.user;

      console.log("Logged in user:", user);

      setSuccess("Login successful! Welcome back. Redirecting...");

      // Give the user time to see the success message
      setTimeout(() => {
        router.push("/dashboard");
      }, 1200);
    } catch (error) {
      console.error("Login error:", error);
      setError(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Google provider
      const provider = new GoogleAuthProvider();

      provider.setCustomParameters({
        prompt: "select_account",
      });

      // Keep Google session persistent
      await setPersistence(auth, browserLocalPersistence);

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("Google user:", user);

      setSuccess("Google login successful! Welcome back. Redirecting...");

      // Redirect after success
      setTimeout(() => {
        router.push("/");
      }, 1200);
    } catch (error) {
      console.error("Google login error:", error);
      setError(getFirebaseError(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-950 font-sans text-slate-100">

      {/* Left Branding Column */}
      <div className="relative hidden w-1/2 flex-col justify-between bg-slate-900 p-12 lg:flex">

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-slate-950" />

        <div className="relative z-10">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-2xl font-black text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0b5ed7] text-white">
              S
            </span>

            SUBSELL
          </Link>

        </div>

        <div className="relative z-10 max-w-lg">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">

            <ShieldCheck className="h-4 w-4" />

            Secure Session Enforced

          </div>

          <h2 className="text-4xl font-extrabold leading-tight text-white">
            Welcome back to your portfolio.
          </h2>

          <p className="mt-4 text-base text-slate-400">
            Access real-time investment analytics, manage transactions, and
            track account activity securely.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-400">

                <KeyRound className="h-5 w-5" />

              </div>

              <div>

                <p className="text-xs font-bold text-white">
                  2FA Supported
                </p>

                <p className="text-[10px] text-slate-400">
                  Authenticator & SMS
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-400">

                <ShieldCheck className="h-5 w-5" />

              </div>

              <div>

                <p className="text-xs font-bold text-white">
                  Encrypted Auth
                </p>

                <p className="text-[10px] text-slate-400">
                  Zero-Trust Protocol
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="relative z-10 text-xs text-slate-500">
          © {new Date().getFullYear()} SUBSELL Inc. All rights reserved.
        </div>

      </div>

      {/* Right Form Container */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">

        <div className="w-full max-w-md space-y-8">

          {/* Header */}
          <div>

            <div className="flex items-center justify-between">

              <Link
                href="/"
                className="text-lg font-bold text-white lg:hidden"
              >
                SUBSELL
              </Link>

            </div>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-white lg:text-3xl lg:font-extrabold">
              Sign in to your account
            </h1>

            <p className="mt-2 text-sm text-slate-400">

              Don't have an account yet?{" "}

              <Link
                href="/signup"
                className="font-medium text-blue-400 hover:text-blue-300 lg:font-semibold"
              >
                Create one now
              </Link>

            </p>

          </div>

          {/* ERROR */}
          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* SUCCESS */}
          {success && (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>

              <label className="block text-xs font-medium text-slate-300 lg:font-semibold">
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
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-[#0b5ed7] focus:outline-none focus:ring-1 focus:ring-[#0b5ed7] disabled:cursor-not-allowed disabled:opacity-60"
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <div className="flex items-center justify-between">

                <label className="block text-xs font-medium text-slate-300 lg:font-semibold">
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-normal text-blue-400 hover:text-blue-300 lg:font-medium"
                >
                  Forgot password?
                </Link>

              </div>

              <div className="relative mt-2">

                <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••••"
                  disabled={loading}
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/80 py-3 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:border-[#0b5ed7] focus:outline-none focus:ring-1 focus:ring-[#0b5ed7] disabled:cursor-not-allowed disabled:opacity-60"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3.5 top-3.5 text-slate-500 hover:text-slate-300 disabled:cursor-not-allowed"
                >

                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}

                </button>

              </div>

            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={loading}
                  className="h-4 w-4 rounded border-slate-800 bg-slate-900 text-[#0b5ed7] focus:ring-[#0b5ed7]"
                />

                <label
                  htmlFor="rememberMe"
                  className="text-xs text-slate-400"
                >
                  Remember this device for 30 days
                </label>

              </div>

            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5ed7] py-3.5 text-sm font-semibold text-white transition hover:bg-blue-600 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 lg:font-bold"
            >

              {loading ? "Signing In..." : "Sign In"}

              {!loading && <ArrowRight className="h-4 w-4" />}

            </button>

          </form>

          {/* Divider */}
          <div className="relative">

            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-800" />
            </div>

            <div className="relative flex justify-center text-xs uppercase">

              <span className="bg-slate-950 px-2 text-slate-500">
                Or sign in with
              </span>

            </div>

          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">

            {/* GOOGLE */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/50 py-2.5 text-xs font-normal text-slate-300 transition hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 lg:font-semibold"
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

            {/* GITHUB - LEFT UNTOUCHED */}
            <button
              type="button"
              className="flex items-center justify-center gap-2.5 rounded-xl border border-slate-800 bg-slate-900/50 py-2.5 text-xs font-normal text-slate-300 transition hover:bg-slate-800 hover:text-white lg:font-semibold"
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

        </div>

      </div>

    </div>
  );
}