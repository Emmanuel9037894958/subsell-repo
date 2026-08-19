"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  ShieldCheck,
  Sparkles,
  UserPlus,
  CreditCard,
  Unlock,
  MessageSquare,
  Zap,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappNumber = "2348146182945";
  const defaultMessage = encodeURIComponent(
    "Hello SUBSEL Support, I have an inquiry regarding your platform.",
  );

  const faqs = [
    {
      question: "What is SUBSEL?",
      answer:
        "SUBSEL is a platform designed around a simple and transparent onboarding experience. You create your account, complete the one-time payment, and unlock access to the platform's premium suite.",
    },
    {
      question: "How much does SUBSEL cost?",
      answer:
        "The current one-time access fee is ₦5,000. This is a one-time payment to permanently unlock the platform's premium suite.",
    },
    {
      question: "Is the ₦5,000 payment recurring?",
      answer:
        "No. The current SUBSEL model is based on a one-time ₦5,000 payment rather than a recurring monthly subscription.",
    },
    {
      question: "What happens after I register?",
      answer:
        "After registration, you can proceed through the payment step. Once your payment is confirmed, your premium access can be unlocked.",
    },
    {
      question: "What if I need help?",
      answer:
        "You can contact SUBSEL Support through WhatsApp for assistance with your account or onboarding process.",
    },
  ];

  const quickValues = [
    {
      icon: UserPlus,
      title: "Simple registration",
      text: "Create your account through a straightforward signup process.",
    },
    {
      icon: CreditCard,
      title: "₦5,000 once",
      text: "Pay the current one-time fee to unlock premium access.",
    },
    {
      icon: Unlock,
      title: "Premium access",
      text: "Unlock the platform's premium suite after payment.",
    },
  ];

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Register",
      text: 'Click any "Get Started" button to fill out the simple registration form.',
    },
    {
      number: "02",
      icon: CreditCard,
      title: "Pay one-time fee",
      text: "Make a secure one-time payment of ₦5,000 to permanently unlock the platform's premium suite.",
    },
    {
      number: "03",
      icon: Unlock,
      title: "Unlock premium access",
      text: "Once your payment is confirmed, continue into the premium experience available through SUBSEL.",
    },
  ];

  const benefits = [
    "One-time ₦5,000 access fee",
    "Simple registration process",
    "Clear onboarding steps",
    "Premium suite access after confirmation",
  ];

  const transparencyItems = [
    {
      icon: ShieldCheck,
      title: "Security",
      text: "Your account and onboarding experience should be protected.",
    },
    {
      icon: Lock,
      title: "Transparency",
      text: "The one-time access fee is clearly stated before payment.",
    },
    {
      icon: Zap,
      title: "Simplicity",
      text: "A straightforward process from registration to access.",
    },
    {
      icon: CheckCircle2,
      title: "Clear steps",
      text: "Know what happens at every stage of the process.",
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-white">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-72 w-72 rounded-full bg-blue-50 blur-3xl sm:h-96 sm:w-96" />

        <div className="pointer-events-none absolute -right-40 top-20 h-72 w-72 rounded-full bg-blue-50/70 blur-3xl sm:h-96 sm:w-96" />

        <div className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Hero text */}
            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1456d8] shadow-sm sm:text-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <span>Welcome to SUBSEL</span>
              </div>

              <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl py-7">
                Getting value should be
                <span className="block text-[#1456d8]">straightforward.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:mt-7 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                SUBSEL gives you a simple and transparent way to get started.
                Register, make a secure one-time payment of ₦5,000, and unlock
                the platform&apos;s premium suite.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/signup"
                  className="group inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#1456d8] px-7 text-sm font-bold text-white shadow-xl shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:bg-[#0d46b5] sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/howitworks"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-7 text-sm font-bold text-slate-800 shadow-sm transition duration-300 hover:border-blue-200 hover:bg-blue-50 sm:w-auto"
                >
                  See How It Works
                </Link>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-500 sm:mt-8 lg:justify-start">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  Secure onboarding
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  One-time payment
                </span>

                <span className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-green-600" />
                  Transparent process
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-4 rounded-[32px] bg-blue-100/60 blur-2xl sm:-inset-5 sm:rounded-[38px]" />

              <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-200/70 sm:rounded-[32px] sm:p-5">
                {/* Browser top */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 sm:pb-4">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                  </div>

                  <div className="max-w-[150px] truncate rounded-full bg-slate-50 px-3 py-1.5 text-[9px] font-semibold text-slate-400 sm:px-4 sm:text-[10px]">
                    subsel.co
                  </div>
                </div>

                {/* Mock platform */}
                <div className="mt-4 rounded-2xl bg-slate-950 p-4 sm:mt-5 sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold text-blue-300 sm:text-xs">
                        SUBSEL
                      </p>

                      <p className="mt-1 text-base font-bold text-white sm:text-lg">
                        Premium access
                      </p>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 sm:h-11 sm:w-11">
                      <Unlock className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-3 sm:mt-6 sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[10px] text-slate-400 sm:text-xs">
                          One-time access
                        </p>

                        <p className="mt-1 text-xl font-black text-white sm:text-2xl">
                          ₦5,000
                        </p>
                      </div>

                      <span className="rounded-full bg-green-500/10 px-2.5 py-1.5 text-[8px] font-bold text-green-300 sm:px-3 sm:text-[10px]">
                        ONE-TIME
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 space-y-2 sm:mt-4 sm:space-y-3">
                    {[
                      "Create your account",
                      "Complete secure payment",
                      "Unlock premium suite",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3"
                      >
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-[9px] font-black text-white sm:h-7 sm:w-7 sm:text-[10px]">
                          {index + 1}
                        </div>

                        <span className="text-[10px] font-semibold text-slate-200 sm:text-xs">
                          {item}
                        </span>

                        <Check className="ml-auto h-4 w-4 shrink-0 text-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK VALUE STRIP
      ========================================================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {quickValues.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-start gap-4 px-2 py-5 sm:px-4 sm:py-7 md:px-6 lg:px-7 lg:py-9"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#1456d8]">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================== */}
      <section className="bg-white py-6 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1456d8] sm:text-sm">
              How it works
            </p>

            <h2 className="mt-3 text-xl font-black tracking-tight text-slate-950 sm:mt-4 sm:text-xl lg:text-5xl">
              Getting value is straightforward and transparent
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base lg:text-lg">
              We keep the onboarding process simple so you know exactly what
              happens at every stage.
            </p>
          </div>

          <div className="relative mt-6 sm:mt-16">
            <div className="absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-blue-100 md:block" />

            <div className="grid gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative z-10 text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-blue-100 bg-blue-50 text-[#1456d8] shadow-sm sm:h-24 sm:w-24 sm:rounded-[28px]">
                      <Icon
                        className="h-8 w-8 sm:h-9 sm:w-9"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="mt-4 text-xs font-black tracking-widest text-slate-300 sm:mt-5 sm:text-sm">
                      {step.number}
                    </div>

                    <h3 className="mt-2 text-xl font-black text-slate-950 sm:mt-3 sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-slate-500 sm:mt-4">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PREMIUM SUITE
      ========================================================== */}
      <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1456d8] sm:text-sm">
                Premium suite
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl">
                One simple payment.
                <span className="block text-[#1456d8]">Premium access.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                SUBSEL keeps access simple. Instead of making the process
                confusing, the current model uses a one-time ₦5,000 payment to
                unlock the platform&apos;s premium suite.
              </p>

              <div className="mt-7 space-y-4 sm:mt-8">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#1456d8]">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/signup"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#1456d8] px-6 text-sm font-bold text-white transition hover:bg-[#0d46b5] sm:mt-9 sm:w-auto"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Pricing card */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[36px] bg-blue-100 blur-2xl" />

              <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-2xl shadow-slate-200 sm:rounded-[30px]">
                <div className="bg-[#1456d8] p-6 text-white sm:p-9">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-xs">
                        SUBSEL
                      </p>

                      <h3 className="mt-2 text-xl font-black sm:text-2xl">
                        Premium Access
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 sm:h-12 sm:w-12">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>

                  <div className="mt-7 sm:mt-8">
                    <span className="text-4xl font-black sm:text-5xl">
                      ₦5,000
                    </span>

                    <span className="ml-2 text-xs font-semibold text-blue-100 sm:text-sm">
                      one-time
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-9">
                  <p className="text-sm leading-6 text-slate-500">
                    Make the one-time payment to permanently unlock the
                    platform&apos;s premium suite.
                  </p>

                  <div className="mt-5 space-y-3 sm:mt-6">
                    {[
                      "Simple onboarding",
                      "Transparent payment",
                      "Premium suite access",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                        <span className="text-sm font-semibold text-slate-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/signup"
                    className="mt-6 flex min-h-12 w-full items-center justify-center rounded-xl bg-slate-950 text-sm font-bold text-white transition hover:bg-[#1456d8] sm:mt-7"
                  >
                    Create Your Account
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRANSPARENCY
      ========================================================== */}
      <section className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1456d8] sm:text-sm">
                Built for clarity
              </p>

              <h2 className="mt-3 text-xl font-black tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl">
                No complicated process.
                <span className="block text-[#1456d8]">Just clear steps.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
                From registration to premium access, SUBSEL is designed so users
                can understand what they are doing and why they are doing it.
              </p>

              <Link
                href="/trust"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#1456d8] hover:text-[#0d46b5] sm:mt-8"
              >
                Learn more about SUBSEL
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {transparencyItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 sm:p-6"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#1456d8]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-slate-950 sm:mt-5">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <section className="bg-slate-50 py-2 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1456d8] sm:text-sm">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:mt-4 sm:text-4xl lg:text-5xl">
              Questions, answered.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base">
              Here are some of the common questions about getting started with
              SUBSEL.
            </p>
          </div>

          <div className="mt-10 space-y-3 sm:mt-12">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex min-h-16 w-full items-center justify-between gap-5 px-4 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-slate-400 transition-transform ${
                        isOpen ? "rotate-180 text-[#1456d8]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
                      <p className="text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0b2d68] py-16 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 -top-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:mt-7 sm:text-4xl lg:text-5xl">
            Ready to get started with SUBSEL?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:mt-5 sm:text-base sm:text-lg">
            Create your account, complete the one-time ₦5,000 payment, and
            unlock the platform&apos;s premium suite.
          </p>

          <Link
            href="/signup"
            className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 text-sm font-black text-[#0b2d68] shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 sm:mt-9 sm:w-auto"
          >
            Create Your SUBSEL Account
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          WHATSAPP SUPPORT
      ========================================================== */}
      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 sm:bottom-6 sm:right-6 lg:bottom-7 lg:right-7">
        <span className="hidden rounded-xl bg-slate-950/95 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:block">
          Need help? Chat with SUBSEL
        </span>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact SUBSEL on WhatsApp"
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95 sm:h-14 sm:w-14"
        >
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
          </span>

          <MessageSquare className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </main>
  );
}
