"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  AlertTriangle, 
  ShieldAlert, 
  Lock, 
  Key, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Send, 
  Search, 
  ArrowRight,
  ShieldCheck 
} from "lucide-react";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

const scamTactics = [
  {
    title: "Fake Support Impersonators",
    description: "Scammers create Telegram or WhatsApp profiles posing as SUBSELL admins, asking for your private keys, seed phrases, or OTPs.",
    badge: "High Risk",
    badgeColor: "bg-red-100 text-red-700 border-red-200",
  },
  {
    title: "Phishing Domains & Fake Websites",
    description: "Cloned login pages designed to look identical to SUBSELL to capture your login credentials and passwords.",
    badge: "Phishing",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    title: "Off-Platform Payment Demands",
    description: "Anyone requesting you to transfer funds outside the official SUBSELL platform escrow or wallet system.",
    badge: "Financial Scam",
    badgeColor: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    title: "Guaranteed ROI Promises",
    description: "Third-party agents promising unrealistic, fixed daily yields if you send money to their personal wallets.",
    badge: "Fraud Alert",
    badgeColor: "bg-red-100 text-red-700 border-red-200",
  },
];

const goldenRules = [
  "Never share your password or 2FA one-time verification codes with anyone.",
  "SUBSELL staff will NEVER send you a direct message (DM) first asking for money.",
  "Always verify the exact URL in your browser address bar before entering login details.",
  "Only complete transactions inside the official dashboard—never via external bank apps or Telegram.",
  "Immediately report suspicious accounts to our official 24/7 anti-fraud desk.",
];

export default function ScamAlertPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [verifyResult, setVerifyResult] = useState(null);

  const handleVerify = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) return;

    // Simple domain/channel check logic
    if (query.includes("subsell.com") || query.includes("@subsell_official")) {
      setVerifyResult({
        status: "safe",
        message: "Official & Verified SUBSELL Asset",
      });
    } else {
      setVerifyResult({
        status: "unsafe",
        message: "Unverified Entity. Do not interact or share information.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50/60">
      <Navbar />

      {/* Hero Banner with Alert Warning Theme */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-slate-50 border-b border-amber-200/60">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100/80 px-4 py-1.5 text-xs font-bold text-amber-900 shadow-sm">
              <ShieldAlert className="h-4 w-4 text-amber-600" />
              Official Security & Fraud Awareness
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Stay safe. <br />
              <span className="text-amber-600">Protect your assets.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              Your security is our top priority. Learn how to spot phishing attempts, verify official channels, and keep your SUBSELL account protected against bad actors.
            </p>

            {/* Quick Warning Pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-left shadow-sm">
              <AlertTriangle className="h-6 w-6 shrink-0 text-red-600" />
              <p className="text-xs sm:text-sm font-semibold text-red-900">
                <span className="font-bold uppercase tracking-wider">Warning:</span> SUBSELL staff will <span className="underline">NEVER</span> ask for your password, 2FA code, or direct payments via Telegram/WhatsApp DMs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Domain & Handle Verifier Widget */}
      <section className="mx-auto max-w-4xl px-4 -mt-8 relative z-10 sm:px-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#0b5ed7]" />
            <div>
              <h2 className="text-lg font-bold text-slate-950">Official Link & Handle Verifier</h2>
              <p className="text-xs text-slate-500">Check if a website link, Telegram username, or email belongs to SUBSELL.</p>
            </div>
          </div>

          <form onSubmit={handleVerify} className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter URL, email, or @username (e.g. subsell.com)"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVerifyResult(null);
                }}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-11 pr-4 text-sm font-medium text-slate-900 focus:border-[#0b5ed7] focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0b5ed7] px-6 text-sm font-bold text-white shadow-md transition hover:bg-[#083b8a] active:scale-95"
            >
              Verify Asset
            </button>
          </form>

          {/* Verification Results */}
          {verifyResult && (
            <div className={`mt-4 flex items-center gap-3 rounded-xl border p-4 text-sm font-semibold ${
              verifyResult.status === "safe"
                ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                : "border-red-200 bg-red-50 text-red-900"
            }`}>
              {verifyResult.status === "safe" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600 shrink-0" />
              )}
              <span>{verifyResult.message}</span>
            </div>
          )}
        </div>
      </section>

      {/* The 5 Golden Rules of Security */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">Core Protocol</p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
            The 5 Golden Safety Rules
          </h2>
        </div>

        <div className="space-y-4">
          {goldenRules.map((rule, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-200"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#eef6ff] text-sm font-extrabold text-[#0b5ed7]">
                0{index + 1}
              </span>
              <p className="mt-1 text-sm font-semibold leading-relaxed text-slate-800">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Scam Tactics Breakdown */}
      <section className="border-t border-slate-200/60 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-amber-600">Threat Awareness</p>
            <h2 className="mt-1 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Recognize Common Scam Tactics
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Bad actors use sophisticated social engineering. Watch out for these red flags.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {scamTactics.map((tactic, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-extrabold text-slate-950">{tactic.title}</h3>
                  <span className={`rounded-md border px-2.5 py-1 text-xs font-bold ${tactic.badgeColor}`}>
                    {tactic.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {tactic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immediate Report CTA Section */}
      <section className="bg-slate-900 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldAlert className="mx-auto h-12 w-12 text-amber-400" />
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Suspect Impersonation or Fraud?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            If you have been contacted by a suspicious user or clicked an unverified link, report it to our security task force immediately to protect your account.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/support"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-amber-400 active:scale-95"
            >
              Report a Scam
              <Send className="h-4 w-4" />
            </Link>

            <Link
              href="/security-settings"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-slate-700"
            >
              Enable 2FA Protection
              <Lock className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}