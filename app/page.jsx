"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import { MessageSquare } from "lucide-react";

export default function Home() {
  const whatsappNumber = "2348146182945";

  const defaultMessage = encodeURIComponent(
    "Hello SUBSELL Support, I have an inquiry regarding your platform."
  );

  return (
    <main className="relative min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/IMAGE1.jpg"
            alt="SUBSELL Platform Background"
            className="h-full w-full object-cover object-center opacity-30"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* LEFT CONTENT */}
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-950/80 px-3.5 py-2 text-xs font-semibold text-blue-300 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

                Welcome to SUBSELL
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                A smarter way to{" "}
                <span className="text-[#3b82f6]">
                  connect and grow.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Discover a professional platform built to help you connect,
                explore opportunities, and take the next step with confidence.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="flex min-h-12 items-center justify-center rounded-lg bg-[#0b5ed7] px-6 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#083b8a]"
                >
                  Get Started
                </Link>

                <Link
                  href="/about"
                  className="flex min-h-12 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/60 px-6 text-sm font-bold text-white backdrop-blur-sm transition hover:border-blue-400 hover:bg-slate-800"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/image.jpg"
                  alt="SUBSELL platform preview"
                  className="h-auto w-full rounded-xl object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TRUST & STATS SECTION
      ========================== */}
      <section className="border-y border-slate-200 bg-slate-50/70 py-9 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* TEXT */}
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
                Built around trust & transparency
              </p>

              <h2 className="mt-3 text-xl font-extrabold tracking-tight text-slate-950 sm:leading-tight">
                A secure, verified platform designed with your protection and
                success in mind.
              </h2>

              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                We're building SUBSELL around absolute clarity, robust
                anti-scam safeguards, fast automated payouts, and a
                straightforward experience that puts every user first.
              </p>

              {/* Trust Points */}
              <ul className="mt-6 space-y-3">
                {[
                  "Bank-level 256-bit encryption for all user accounts and data",
                  "Verified user badges and real-time activity monitoring",
                  "Guaranteed payouts with zero hidden fees or delays",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm font-medium text-slate-700 sm:text-base"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[#0b5ed7]">
                      ✓
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Trust Link */}
              <Link
                href="/trust"
                className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#0b5ed7] transition hover:text-[#083b8a]"
              >
                Learn about our trust standards
                <span className="text-base">→</span>
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  metric: "99.9%",
                  label: "Uptime & System Reliability",
                },
                {
                  metric: "24/7",
                  label: "Active Scam & Safety Monitoring",
                },
                {
                  metric: "100%",
                  label: "Transparent & Verified Rates",
                },
                {
                  metric: "Instant",
                  label: "Automated System Processing",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                >
                  <p className="text-2xl font-black text-[#0b5ed7] sm:text-3xl">
                    {stat.metric}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-slate-600 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
              Simple process
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              How SUBSELL works for you
            </h2>

            <p className="mt-3 text-base text-slate-600">
              Get started in minutes with our transparent 3-step onboarding
              system.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Create a verified account",
                text: "Sign up and secure your SUBSELL account in under two minutes with multi-factor authentication.",
              },
              {
                number: "02",
                title: "Explore real opportunities",
                text: "Access our live marketplace, explore transparent user metrics, and pick verified deals.",
              },
              {
                number: "03",
                title: "Earn and grow safely",
                text: "Take immediate action, track your performance, and receive guaranteed, fast payouts.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50"
              >
                <span className="text-sm font-black text-[#0b5ed7]">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          TESTIMONIALS
      ========================== */}
      <Testimonials />

      {/* =========================
          CTA SECTION
      ========================== */}
      <section className="bg-[#083b8a] py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
            Ready to experience a modern, trusted platform?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-blue-100">
            Join thousands of active users today. Create your free SUBSELL
            account and take full control with total peace of mind.
          </p>

          <Link
            href="/signup"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-[#083b8a] shadow-lg transition hover:bg-blue-50 active:scale-95"
          >
            Create Your Account Now
          </Link>
        </div>
      </section>

      {/* =========================
          WHATSAPP SUPPORT
      ========================== */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <span className="hidden rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm sm:inline-block">
          Need help? Chat on WhatsApp
        </span>

        <a
          href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition-transform duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        >
          {/* Notification Dot */}
          <span className="absolute right-0 top-0 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500" />
          </span>

          <MessageSquare className="h-7 w-7 transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>
    </main>
  );
}