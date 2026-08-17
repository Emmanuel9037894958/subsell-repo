"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Phone, 
  MessageSquare, 
  Mail, 
  CheckCircle2, 
  Copy, 
  Check, 
  Send, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight,
  Zap,
  Globe
} from "lucide-react";
import Navbar from "../../components/Navbar";

const faqItems = [
  {
    q: "How fast does SUBSELL support respond?",
    a: "Our WhatsApp and live phone lines offer immediate assistance during business hours. Email inquiries are typically answered within 2 to 4 hours."
  },
  {
    q: "Where can I report fraudulent or scam accounts?",
    a: "If you suspect phishing or identity theft, visit our dedicated Scam Alert page or select 'Report suspicious activity' in the contact form below for priority escalation."
  },
  {
    q: "Can I schedule a 1-on-1 account consultation?",
    a: "Yes! High-volume investors and Guild members can request a callback directly through our phone desk or by contacting their designated account agent."
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+2348146182945");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-slate-50/60 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#083b8a] text-white">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1 text-[11px] font-semibold text-blue-200 backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Live Support Desk Active
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Get in touch with <span className="text-blue-300">SUBSELL</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-blue-100 sm:text-base">
            Have questions, need technical guidance, or want to report an issue? Our dedicated support staff is here to help you around the clock.
          </p>

          {/* Quick Contact Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-blue-200">
            <span className="flex items-center gap-1.5 rounded-lg bg-blue-950/40 px-3 py-1.5 border border-blue-400/20">
              <Globe className="h-3.5 w-3.5 text-emerald-400" /> Global Coverage
            </span>
          </div>
        </div>
      </section>

      {/* Quick Contact Channels */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Phone */}
          <div className="group relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7] group-hover:bg-[#0b5ed7] group-hover:text-white transition">
                <Phone className="h-5 w-5" />
              </div>
              <button 
                onClick={handleCopyPhone}
                className="flex items-center gap-1 rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600 hover:bg-slate-200 transition"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <h2 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">Phone Support</h2>
            <p className="mt-1 text-xs text-slate-600">Speak directly with our technical support team.</p>
            
            <a href="tel:+2348146182945" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0b5ed7] hover:underline sm:text-sm">
              +234 814 618 2945 →
            </a>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348146182945"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md sm:p-6"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
              <MessageSquare className="h-5 w-5" />
            </div>

            <h2 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">WhatsApp Instant</h2>
            <p className="mt-1 text-xs text-slate-600">Fastest method for instant account assistance.</p>
            
            <p className="mt-4 text-xs font-bold text-emerald-600 sm:text-sm">
              Start WhatsApp Chat →
            </p>
          </a>

          {/* Email */}
          <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7] group-hover:bg-[#0b5ed7] group-hover:text-white transition">
              <Mail className="h-5 w-5" />
            </div>

            <h2 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">Official Email</h2>
            <p className="mt-1 text-xs text-slate-600">For formal inquiries, legal, or partnerships.</p>
            
            <p className="mt-4 text-xs font-bold text-slate-400">
              support@subsell.com
            </p>
          </div>

        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">Help & Guidance</p>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-950 sm:text-3xl">Let's solve it together.</h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Whether you are experiencing technical difficulties, account verification hurdles, or partnership questions, our specialist desk is ready to assist.
            </p>

            {/* Quick Link Navigation */}
            <div className="mt-6 space-y-2.5">
              <Link
                href="/faq"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-[#0b5ed7] sm:text-sm"
              >
                <span>Read Frequently Asked Questions</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0b5ed7] transition" />
              </Link>

              <Link
                href="/scam-alert"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-[#0b5ed7] sm:text-sm"
              >
                <span>Report Suspicious Account / Scam</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0b5ed7] transition" />
              </Link>

              <Link
                href="/trust"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3.5 text-xs font-bold text-slate-800 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-[#0b5ed7] sm:text-sm"
              >
                <span>SUBSELL Security & Trust Framework</span>
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0b5ed7] transition" />
              </Link>
            </div>

            {/* Accordion FAQ preview */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-950 font-bold text-sm">
                <HelpCircle className="h-4 w-4 text-[#0b5ed7]" />
                Common Quick Answers
              </div>

              <div className="divide-y divide-slate-100">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="py-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex w-full items-center justify-between text-left text-xs font-bold text-slate-800 hover:text-[#0b5ed7]"
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${openFaq === idx ? "rotate-180 text-[#0b5ed7]" : "text-slate-400"}`} />
                    </button>
                    {openFaq === idx && (
                      <p className="mt-2 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                        {item.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-extrabold text-slate-950 sm:text-2xl">Send us a direct ticket</h2>
                <p className="mt-1 text-xs text-slate-500">Fill out the details below and an agent will follow up.</p>
              </div>

              {submitted && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-xs font-semibold text-emerald-800 sm:text-sm">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  Your message has been dispatched successfully. We will contact you shortly!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-800">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:bg-white focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-800">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:bg-white focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-800">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+234..."
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:bg-white focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-slate-800">
                      Inquiry Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-xs text-slate-800 outline-none transition focus:border-[#0b5ed7] focus:bg-white focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
                    >
                      <option value="">Select subject...</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Account Support">Account & Deposit Support</option>
                      <option value="Technical Issue">Technical / Dashboard Bug</option>
                      <option value="Suspicious Activity">Report Fraud / Scam</option>
                      <option value="Partnership">Guild & Partnership</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-slate-800">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe how we can help you in detail..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-xs text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:bg-white focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0b5ed7] px-6 text-xs font-bold text-white shadow-md transition hover:bg-[#083b8a] active:scale-95 disabled:opacity-50 sm:text-sm"
                >
                  {loading ? (
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-[10px] text-slate-400 sm:text-xs">
                  By submitting this ticket, you consent to SUBSELL reviewing your provided information to resolve your inquiry.
                </p>

              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Immediate Bottom CTA */}
      <section className="bg-[#083b8a] py-10 text-white sm:py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Zap className="mx-auto h-8 w-8 text-amber-400 sm:h-10 sm:w-10" />
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">Need urgent real-time help?</h2>
          <p className="mt-2 text-xs text-blue-100 sm:text-sm">
            Skip the email queue and connect with our live agents on WhatsApp right now.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://wa.me/2348146182945"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 text-xs font-bold text-[#083b8a] shadow-lg transition hover:bg-blue-50 active:scale-95 sm:text-sm"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              Open WhatsApp Support
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