"use client";

import {
  CloudUpload,
  Share2,
  ShieldCheck,
  BadgeCheck,
  BarChart3,
  Wallet,
  Eye,
  LockKeyhole,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  FileCheck2,
  RefreshCw,
} from "lucide-react";

const vendorFeatures = [
  {
    icon: CloudUpload,
    title: "Upload your digital products",
    text: "Add courses, templates, e-books, software, graphics, documents and other digital products with your title, description, price, cover image and downloadable files.",
  },
  {
    icon: FileCheck2,
    title: "Admin review before publishing",
    text: "Submitted products can pass through an approval process before becoming publicly available. This helps keep the marketplace organized and improves buyer confidence.",
  },
  {
    icon: BadgeCheck,
    title: "Approved vendor experience",
    text: "Approved products can be displayed inside the marketplace with clear product information, pricing and vendor details.",
  },
];

const affiliateFeatures = [
  {
    icon: Share2,
    title: "Create your affiliate link",
    text: "Generate a unique promotional link for eligible marketplace products and share it with your audience.",
  },
  {
    icon: BarChart3,
    title: "Track your promotion",
    text: "Monitor your promotional activity and sales performance from your SUBSEL account.",
  },
  {
    icon: Wallet,
    title: "Commission tracking",
    text: "When an eligible purchase is attributed to your affiliate link, the applicable commission can be recorded against your affiliate account.",
  },
];

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Platform-controlled process",
    text: "SUBSEL is designed to keep important marketplace activities inside a structured platform workflow.",
  },
  {
    icon: Eye,
    title: "Clear product information",
    text: "Buyers can review available product information before deciding whether a product is right for them.",
  },
  {
    icon: LockKeyhole,
    title: "Account protection",
    text: "Account access and important user actions are handled through authentication and controlled platform access.",
  },
  {
    icon: RefreshCw,
    title: "Activity tracking",
    text: "Important marketplace and affiliate activities can be tracked to make the experience easier to understand and manage.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#050b18] py-20 text-white sm:py-28">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] top-[20%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-200px] left-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =========================================================
            HEADER
        ========================================================== */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            SUBSEL Marketplace
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              sellers, promoters & buyers.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            SUBSEL brings digital products, vendors, affiliate promotion,
            commissions and marketplace activity into one structured
            ecosystem designed to make buying, selling and promoting easier.
          </p>
        </div>

        {/* =========================================================
            HOW IT WORKS
        ========================================================== */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              number: "01",
              icon: CloudUpload,
              title: "Create & Upload",
              text: "Vendors create their products and submit the required information and files through their SUBSEL account.",
            },
            {
              number: "02",
              icon: FileCheck2,
              title: "Review & Approve",
              text: "Products can be reviewed through the platform before they are made available to buyers.",
            },
            {
              number: "03",
              icon: Share2,
              title: "Sell & Promote",
              text: "Approved products can be purchased by customers and promoted by eligible affiliates through unique links.",
            },
          ].map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-500/5 blur-2xl transition group-hover:bg-blue-500/10" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <span className="text-4xl font-black text-slate-800">
                    {step.number}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-black text-white">
                  {step.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-400">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            VENDOR SECTION
        ========================================================== */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-300">
              <CloudUpload className="h-4 w-4" />
              FOR VENDORS
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Turn your knowledge and digital products into opportunities.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              SUBSEL gives vendors a structured environment for presenting
              digital products to potential customers while keeping important
              product information organized.
            </p>

            <div className="mt-8 space-y-5">
              {vendorFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vendor Dashboard Mockup */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[40px] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Vendor Dashboard
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    My Products
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-500/10">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                </div>
              </div>

              <div className="space-y-3 p-5">
                {[
                  ["Digital Marketing Course", "Approved", "₦15,000"],
                  ["Premium Canva Templates", "Approved", "₦5,000"],
                  ["Business E-book", "Under Review", "₦3,500"],
                ].map(([name, status, price]) => (
                  <div
                    key={name}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-white">{name}</p>

                        <span
                          className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            status === "Approved"
                              ? "bg-green-500/10 text-green-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {status}
                        </span>
                      </div>

                      <p className="text-sm font-black text-blue-400">
                        {price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            AFFILIATE SECTION
        ========================================================== */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
          {/* Affiliate Dashboard */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-5 rounded-[40px] bg-cyan-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
              <div className="border-b border-slate-800 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                  Affiliate Center
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-slate-950 p-4">
                    <p className="text-xs text-slate-500">Clicks</p>
                    <p className="mt-2 text-2xl font-black text-white">1,284</p>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-4">
                    <p className="text-xs text-slate-500">Sales</p>
                    <p className="mt-2 text-2xl font-black text-green-400">
                      38
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4">
                  <p className="text-xs text-slate-500">
                    Affiliate commission
                  </p>

                  <p className="mt-1 text-3xl font-black text-white">
                    ₦42,500
                  </p>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[72%] rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
              <Share2 className="h-4 w-4" />
              FOR AFFILIATES
            </div>

            <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              Promote products. Track activity. Build your audience.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Eligible users can promote approved marketplace products using
              affiliate links and track attributed activity through their
              account.
            </p>

            <div className="mt-8 space-y-5">
              {affiliateFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            SUBSEL GUARANTEE
        ========================================================== */}
        <div className="relative mt-28 overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-slate-900 to-slate-950 p-7 sm:p-10 lg:p-14">
          <div className="absolute right-[-100px] top-[-100px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-400">
                  <ShieldCheck className="h-4 w-4" />
                  THE SUBSEL GUARANTEE
                </div>

                <h3 className="mt-5 text-3xl font-black sm:text-4xl">
                  We guarantee a structured and transparent platform
                  experience.
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  SUBSEL is built around clear processes. While earnings,
                  sales and commissions depend on actual marketplace activity,
                  we commit to making the platform process clear, trackable
                  and accountable.
                </p>
              </div>

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-green-500/20 bg-green-500/10 lg:h-28 lg:w-28">
                <ShieldCheck className="h-12 w-12 text-green-400" />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {trustFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <Icon className="h-5 w-5 text-green-400" />

                    <h4 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h4>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================
            TRUST POINTS
        ========================================================== */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Products can be reviewed before publishing",
            "Affiliate activity can be tracked",
            "Product information remains clearly presented",
            "Users can manage activity from their account",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

              <span className="text-sm font-semibold leading-6 text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <div className="mt-24 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Sparkles className="h-7 w-7" />
          </div>

          <h3 className="mt-6 text-3xl font-black sm:text-4xl">
            Ready to become part of SUBSEL?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Whether you want to sell digital products, promote products as an
            affiliate or discover useful digital products, SUBSEL is designed
            to bring everything together.
          </p>

          <a
            href="/signup"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#0b5ed7] px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
          >
            Get Started With SUBSEL
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}