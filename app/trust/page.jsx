"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Server,
  Zap,
} from "lucide-react";
import Navbar from "../../components/Navbar";

const trustPillars = [
  {
    icon: Eye,
    title: "100% On-Chain & Data Transparency",
    text: "Every payout, transaction fee, and pool yield is calculated via verifiable algorithms without hidden charges.",
    badge: "Audited",
  },
  {
    icon: Lock,
    title: "Bank-Grade Asset Protection",
    text: "User funds and personal data are secured using AES-256 encryption, multi-signature wallets, and strict isolation protocols.",
    badge: "Encrypted",
  },
  {
    icon: UserCheck,
    title: "Identity & Fraud Prevention",
    text: "We use automated KYC/AML verification checks to prevent bad actors, money laundering, and fake bot operations.",
    badge: "Verified",
  },
  {
    icon: Server,
    title: "99.9% Infrastructure Uptime",
    text: "Redundant server clusters across multiple geographical zones ensure uninterrupted access to your account and funds.",
    badge: "Live Status",
  },
];

const verificationSteps = [
  {
    step: "01",
    title: "Account Authentication",
    desc: "Mandatory Two-Factor Authentication (2FA) via Authenticator Apps or hardware keys.",
  },
  {
    step: "02",
    title: "Automated Fraud Monitoring",
    desc: "Real-time AI behavior analytics to detect and flag unusual login attempts or payout anomalies.",
  },
  {
    step: "03",
    title: "Multi-Sig Fund Authorization",
    desc: "Large capital withdrawals require multi-signature approvals to prevent unauthorized drains.",
  },
];

const initialChecklist = [
  { id: 1, label: "Enable Two-Factor Authentication (2FA)", completed: true },
  { id: 2, label: "Verify your email address and phone number", completed: true },
  { id: 3, label: "Verify the official SUBSELL URL domain in your browser", completed: false },
  { id: 4, label: "Set up a unique anti-phishing code for platform emails", completed: false },
];

export default function TrustPage() {
  const [checklist, setChecklist] = useState(initialChecklist);

  const toggleChecklist = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = checklist.filter((item) => item.completed).length;
  const progressPercent = Math.round((completedCount / checklist.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50/60">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#083b8a] text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-4 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur-md">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            Security & Transparency Infrastructure
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Built on Uncompromising <span className="text-blue-300">Trust</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-blue-100 sm:text-base md:text-lg">
            SUBSELL combines financial transparency, bank-grade encryption, and proactive security monitoring to protect your investments and data at every step.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-blue-400/20 bg-blue-950/40 p-4 backdrop-blur-md sm:grid-cols-4 sm:p-6">
            <div>
              <p className="text-xl font-black text-white sm:text-2xl">256-Bit</p>
              <p className="text-xs font-medium text-blue-200">Data Encryption</p>
            </div>
            <div>
              <p className="text-xl font-black text-emerald-400 sm:text-2xl">99.9%</p>
              <p className="text-xs font-medium text-blue-200">System Uptime</p>
            </div>
            <div>
              <p className="text-xl font-black text-amber-400 sm:text-2xl">Real-Time</p>
              <p className="text-xs font-medium text-blue-200">Fraud Auditing</p>
            </div>
            <div>
              <p className="text-xl font-black text-white sm:text-2xl">24/7</p>
              <p className="text-xs font-medium text-blue-200">Security Desk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">
            Core Commitments
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
            Four Pillars of SUBSELL Safety
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7] transition-colors group-hover:bg-[#0b5ed7] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {pillar.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Security Health Score */}
      <section className="border-y border-slate-200/60 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                <Zap className="h-3.5 w-3.5" /> Interactive Security Audit
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Personal Account Shield Check
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Your safety is a shared responsibility. Complete these core security steps to keep your earnings and profile protected from common vulnerabilities.
              </p>

              {/* Progress Bar */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700">Account Safety Level</span>
                  <span className="text-[#0b5ed7]">{progressPercent}% Protected</span>
                </div>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full bg-[#0b5ed7] transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Checklist items */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-950">Recommended Checklist</h3>
              <div className="mt-4 divide-y divide-slate-100">
                {checklist.map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className="flex cursor-pointer items-center justify-between py-3.5 transition hover:bg-slate-50/80"
                  >
                    <span className={`text-xs font-semibold sm:text-sm ${
                      item.completed ? "text-slate-900 line-through opacity-70" : "text-slate-800"
                    }`}>
                      {item.label}
                    </span>
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => {}}
                      className="h-5 w-5 rounded border-slate-300 text-[#0b5ed7] focus:ring-[#0b5ed7]"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Architecture Steps */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">
            Defense in Depth
          </p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">
            How We Protect Your Account
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {verificationSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl font-black text-[#0b5ed7] opacity-40">
                {step.step}
              </span>
              <h3 className="mt-2 text-base font-bold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Policy & Help Quick Action Footer */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold">Have questions regarding platform policies?</h3>
              <p className="text-xs text-slate-400 sm:text-sm">
                Review our comprehensive documentation or speak directly to support.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/scam-alert"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-700"
              >
                Scam Alert Center
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/support"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[#0b5ed7] px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:bg-blue-600"
              >
                Contact Support Desk
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}