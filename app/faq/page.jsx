"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  CreditCard,
  UserCheck,
  Zap,
  MessageSquare,
  ArrowRight,
  LifeBuoy
} from "lucide-react";
import Navbar from "../../components/Navbar";

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "payouts", label: "Deposits & Payouts", icon: CreditCard },
  { id: "security", label: "Security & Trust", icon: ShieldCheck },
  { id: "account", label: "Account & KYC", icon: UserCheck }
];

const faqs = [
  {
    cat: "payouts",
    question: "How fast are payouts processed on SUBSEL?",
    answer:
      "Payouts are processed instantly via our automated settlement engine. 98% of transfers hit recipient bank accounts or crypto wallets within 1 to 5 minutes."
  },
  {
    cat: "payouts",
    question: "What happens if a bank network causes a transfer delay?",
    answer:
      "If a banking network delays credit past 15 minutes, our system automatically generates a Central Bank Retrieval Reference Number (RRN). You can use this RRN on our Support Page or present it to your bank to trace the credit instantly."
  },
  {
    cat: "security",
    question: "How does SUBSEL guarantee the safety of my funds?",
    answer:
      "We operate using multi-signature reserve vaults and bank-grade SSL encryption. All transactions generate immutable reference records, ensuring total asset protection and transparency."
  },
  {
    cat: "security",
    question: "How do I report fraudulent or suspicious activity?",
    answer:
      "If you detect suspicious account activity or unverified links, visit our dedicated Scam Alert page or use the emergency 'Report Incident' button on the Support page for immediate account isolation."
  },
  {
    cat: "account",
    question: "How do I create and verify my SUBSEL account?",
    answer:
      "Click 'Sign Up', enter your details, and verify your email. Basic account features are enabled immediately. To unlock higher transaction limits, complete identity verification in your Profile Settings."
  },
  {
    cat: "account",
    question: "What should I do if I forget my login password?",
    answer:
      "Click 'Forgot Password' on the Login screen. An automated reset link will be sent to your registered email address. For additional security, reset links expire after 15 minutes."
  },
  {
    cat: "payouts",
    question: "Are there hidden fees on transactions?",
    answer:
      "No. All applicable rates, processing charges, and transfer fees are itemized transparently before you authorize any trade or deposit."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.cat === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50/60 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#083b8a] text-white">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8 lg:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 text-[11px] font-semibold text-blue-200 backdrop-blur-md sm:text-xs">
            <LifeBuoy className="h-3.5 w-3.5 text-emerald-400" />
            Knowledge Base & FAQ
          </div>

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs text-blue-100 sm:text-base">
            Find answers regarding settlement speeds, security measures, account verification, and transaction protocols.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions, payouts, limits, security..."
                className="h-12 w-full rounded-2xl border-0 bg-white pl-12 pr-4 text-xs text-slate-900 shadow-xl outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400 sm:h-14 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                  isActive
                    ? "bg-[#0b5ed7] text-white shadow-md shadow-blue-500/20"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50/50"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-[#0b5ed7]"}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Accordion FAQ List */}
        <div className="mt-8 space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-blue-300 bg-white shadow-md"
                      : "border-slate-200/80 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="flex w-full items-center justify-between p-4 text-left sm:p-5"
                  >
                    <span className="text-xs font-bold text-slate-950 sm:text-base">
                      {faq.question}
                    </span>
                    <div
                      className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-transform ${
                        isOpen
                          ? "rotate-180 bg-blue-50 text-[#0b5ed7]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-slate-50/50 p-4 text-xs leading-relaxed text-slate-600 sm:p-5 sm:text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <Zap className="mx-auto h-8 w-8 text-slate-400" />
              <h3 className="mt-2 text-sm font-bold text-slate-900">No matching questions found</h3>
              <p className="mt-1 text-xs text-slate-500">
                Try adjusting your search query or selecting a different category tab above.
              </p>
            </div>
          )}
        </div>

        {/* Direct Contact Banner */}
        <div className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">Still need help?</span>
              <h2 className="mt-1 text-lg font-extrabold text-slate-950 sm:text-xl">
                Couldn't find the answer you were looking for?
              </h2>
              <p className="mt-1 text-xs text-slate-600 sm:text-sm">
                Our support desk is active 24/7 to assist with your inquiries or transactions.
              </p>
            </div>

            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Link
                href="/support"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b5ed7] px-5 py-3 text-xs font-bold text-white transition hover:bg-[#083b8a] sm:text-sm"
              >
                Go to Support Center
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/2348146182945"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3 text-xs font-bold text-emerald-800 transition hover:bg-emerald-100 sm:text-sm"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                WhatsApp Live Chat
              </a>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}