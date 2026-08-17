"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShieldCheck,
  CreditCard,
  UserCheck,
  Zap,
  Lock,
  MessageSquare,
  Phone,
  ArrowRight,
  ChevronDown,
  FileText,
  LifeBuoy,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react";
import Navbar from "../../components/Navbar";

const channels = [
  {
    name: "Automated Bank Transfer (Naira / NGN)",
    speed: "Instant – 5 Minutes",
    status: "100% Operational",
    badge: "Fastest",
    type: "bank"
  },
  {
    name: "USDT / Crypto Payouts",
    speed: "3 – 10 Minutes",
    status: "Operational",
    badge: "24/7 Automated",
    type: "crypto"
  },
  {
    name: "Card & Wallet Funding",
    speed: "Instant",
    status: "Operational",
    badge: "Zero Fee",
    type: "card"
  },
  {
    name: "Manual Guild / Large Volume (> ₦5,000,000)",
    speed: "15 – 45 Minutes",
    status: "Desk Active",
    badge: "Multi-Sig Verification",
    type: "manual"
  }
];

const categories = [
  {
    id: "deposits",
    icon: CreditCard,
    title: "Instant Payouts & Transfers",
    desc: "Settlement guarantees, payment gateway operational status, and zero-delay rules.",
    articles: "Automated Desk"
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Financial Protection",
    desc: "Escrow mechanisms, fraud shields, and safe transaction procedures.",
    articles: "100% Protected"
  },
  {
    id: "account",
    icon: UserCheck,
    title: "Account & Verification",
    desc: "KYC processing speeds, tier limits, and profile security.",
    articles: "Instant Tier 1"
  },
  {
    id: "troubleshooting",
    icon: Zap,
    title: "Delayed Transaction Escalation",
    desc: "Trace missing transfers, banking network logs, and auto-refunds.",
    articles: "24/7 Resolution"
  }
];

const trustFaqs = [
  {
    q: "How fast will money arrive in my bank account when I request a payout?",
    a: "98% of settlements hit recipient bank accounts in under 5 minutes through our automated payout API. During peak banking network congestion, transfers take a maximum of 15 minutes."
  },
  {
    q: "What guarantees that my funds are safe on SUBSELL?",
    a: "SUBSELL operates with direct API bank integration and multi-signature security vaults. Every deposit and withdrawal generates an immutable transaction hash and immediate bank reference code for 100% traceability."
  },
  {
    q: "What happens if a bank delay stalls my payment?",
    a: "If your bank network delays credit past 15 minutes, our automated reconciliation protocol flags the transaction. Our live support team instantly provides you with the Central Bank RRN (Retrieval Reference Number) to track or resolve the deposit directly with your bank."
  },
  {
    q: "Are there any minimum limits or delayed holds on new accounts?",
    a: "No artificial holding periods exist for valid trades. Once your transaction confirms, payouts trigger automatically regardless of account age."
  }
];

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(channels[0]);

  const filteredFaqs = trustFaqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50/60 font-sans">
      <Navbar />

      {/* Hero & Search Header */}
      <section className="relative overflow-hidden bg-[#083b8a] text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1 text-[11px] font-semibold text-blue-200 backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Automated Settlement Engine: 100% Operational
          </div>

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Instant Payouts & Transparent Processing
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs text-blue-100 sm:text-base">
            Check real-time processing speeds, payout times, and payment channel status below.
          </p>

          {/* Search Box */}
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search payout speeds, bank delays, processing guarantees..."
                className="h-12 w-full rounded-2xl border-0 bg-white pl-12 pr-4 text-xs text-slate-900 shadow-xl outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 sm:h-14 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Payout Speed & Processing Status Tracker */}
      <section className="mx-auto max-w-7xl px-4 -mt-8 relative z-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-lg sm:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-100 pb-4 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">Live Trust Metric</span>
              <h2 className="text-lg font-extrabold text-slate-950 sm:text-xl">Payment Channel Processing Speed</h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-1.5 self-start md:self-auto">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              Auto-Settlement Engine Active
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-12">
            {/* Channel Selection Buttons */}
            <div className="lg:col-span-5 space-y-2">
              {channels.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedChannel(ch)}
                  className={`w-full flex items-center justify-between rounded-xl p-3 text-left transition border ${
                    selectedChannel.name === ch.name
                      ? "border-[#0b5ed7] bg-blue-50/50 shadow-sm"
                      : "border-slate-200/80 bg-slate-50/50 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <p className="text-xs font-bold text-slate-900 sm:text-sm">{ch.name}</p>
                    <p className="text-[11px] text-slate-500 font-medium">Avg Speed: <span className="text-emerald-700 font-bold">{ch.speed}</span></p>
                  </div>
                  <span className="rounded-md bg-white border border-slate-200 px-2 py-1 text-[10px] font-bold text-slate-700">
                    {ch.badge}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Channel Trust Card */}
            <div className="lg:col-span-7 rounded-xl border border-blue-100 bg-blue-50/30 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wide">Selected Channel Overview</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    {selectedChannel.status}
                  </span>
                </div>

                <h3 className="mt-3 text-base font-extrabold text-slate-950 sm:text-lg">
                  {selectedChannel.name}
                </h3>

                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-white p-3 border border-slate-200/80">
                    <span className="text-slate-500 block text-[11px]">Guaranteed Speed</span>
                    <span className="text-sm font-extrabold text-emerald-600 flex items-center gap-1 mt-0.5">
                      <Clock className="h-4 w-4" />
                      {selectedChannel.speed}
                    </span>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-slate-200/80">
                    <span className="text-slate-500 block text-[11px]">Settlement Routing</span>
                    <span className="text-xs font-extrabold text-slate-900 mt-0.5 block">
                      Direct Bank API (Instant)
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                  Transactions processed through this route generate immediate Central Bank session IDs for reference. Funds credit automatically without manual support approval.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-blue-200/60 flex items-center justify-between text-xs">
                <span className="text-slate-500 flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 text-blue-600" /> Delayed over 15 mins?
                </span>
                <Link href="/contact" className="font-bold text-[#0b5ed7] hover:underline">
                  Trace Transaction Reference →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">Help Hub</p>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">Payout & Platform Guidance</h2>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7] transition group-hover:bg-[#0b5ed7] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{cat.articles}</span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{cat.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#0b5ed7] group-hover:underline">
                  Read Verification Guide <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust & Speed FAQ */}
      <section className="bg-white py-12 sm:py-16 border-y border-slate-200/60">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Payout Transparency & Speed Questions"}
            </h2>
            <p className="mt-1 text-xs text-slate-500">Everything you need to know about processing timelines and fund guarantees.</p>
          </div>

          <div className="mt-8 divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 sm:p-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="flex w-full items-center justify-between text-left text-xs font-bold text-slate-900 hover:text-[#0b5ed7] sm:text-sm"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${
                        openFaq === idx ? "rotate-180 text-[#0b5ed7]" : "text-slate-400"
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{faq.a}</p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-center py-6 text-xs text-slate-500">No matching articles found. Try searching another query.</p>
            )}
          </div>
        </div>
      </section>

      {/* Immediate Support & Dispute Resolution Links */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          <Link
            href="/contact"
            className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-950">Trace Delayed Transaction</h3>
            <p className="mt-1 text-xs text-slate-600">Submit your transaction reference ID for instant manual verification.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#0b5ed7]">
              Open Ticket Form →
            </span>
          </Link>

          <Link
            href="/scam-alert"
            className="group rounded-2xl border border-red-200 bg-red-50/40 p-5 shadow-sm transition hover:border-red-300 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
              <LifeBuoy className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-950">Report Unauthorized Transaction</h3>
            <p className="mt-1 text-xs text-slate-600">Instantly flag suspicious activity or freeze unauthorized transfers.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-red-600">
              Report Incident →
            </span>
          </Link>

          <Link
            href="/trust"
            className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md sm:col-span-2 lg:col-span-1"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
              <Lock className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-950">Security & Escrow Framework</h3>
            <p className="mt-1 text-xs text-slate-600">Review our automated reserve vaults and bank-grade encryption protocols.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#0b5ed7]">
              Security Standards →
            </span>
          </Link>

        </div>
      </section>

      {/* Live Support CTA */}
      <section className="bg-[#083b8a] py-10 text-white sm:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-extrabold sm:text-3xl">Need urgent real-time payment confirmation?</h2>
          <p className="mt-2 text-xs text-blue-100 sm:text-sm">
            Speak directly with a payment desk operator for instant bank RRN generation or manual settlement.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/2348146182945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-xs font-bold text-[#083b8a] shadow-lg transition hover:bg-blue-50 sm:text-sm"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              WhatsApp Priority Line
            </a>

            <a
              href="tel:+2348146182945"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-300 px-6 text-xs font-bold text-white transition hover:bg-white hover:text-[#083b8a] sm:text-sm"
            >
              <Phone className="h-4 w-4" />
              Call +234 814 618 2945
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}