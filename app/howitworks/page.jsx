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
  ShoppingBag,
  UserRound,
  LayoutDashboard,
  Bell,
  Download,
  Search,
  Settings,
  Users,
  PackageCheck,
  ClipboardList,
  CreditCard,
  UserPlus,
  Unlock,
  Headphones,
} from "lucide-react";

const vendorFeatures = [
  {
    icon: CloudUpload,
    title: "Upload digital products",
    text: "Add eligible digital products such as courses, templates, e-books, graphics, documents and software with the information customers need.",
  },
  {
    icon: FileCheck2,
    title: "Submit products for review",
    text: "Products can be submitted through the platform's review workflow before they are made available in the marketplace.",
  },
  {
    icon: BadgeCheck,
    title: "Manage approved products",
    text: "Keep your product information organized and manage products that have been approved for marketplace publication.",
  },
  {
    icon: BarChart3,
    title: "Understand product activity",
    text: "Use available account and product activity information to understand how your marketplace products are performing.",
  },
];

const affiliateFeatures = [
  {
    icon: Share2,
    title: "Promote eligible products",
    text: "Eligible users can generate affiliate links for supported marketplace products and share them with their audience.",
  },
  {
    icon: BarChart3,
    title: "Track affiliate activity",
    text: "Monitor available clicks, attributed activity and other affiliate information from your SUBSEL account.",
  },
  {
    icon: Wallet,
    title: "View commission information",
    text: "Applicable commissions can be recorded when eligible purchases are correctly attributed to an affiliate link.",
  },
  {
    icon: RefreshCw,
    title: "Manage your promotions",
    text: "Keep your affiliate activity organized from one account instead of managing promotional information across different platforms.",
  },
];

const buyerFeatures = [
  {
    icon: Search,
    title: "Discover digital products",
    text: "Browse available digital products in the SUBSEL marketplace and discover resources that may be useful to you.",
  },
  {
    icon: Eye,
    title: "Review product information",
    text: "View available descriptions, pricing and other product information before deciding whether a product meets your needs.",
  },
  {
    icon: ShoppingBag,
    title: "Keep purchases organized",
    text: "Your marketplace activity can be connected to your SUBSEL account so your experience remains easier to manage.",
  },
  {
    icon: Download,
    title: "Access eligible purchases",
    text: "Where digital delivery is supported, purchased digital products can be made available through the appropriate account experience.",
  },
];

const accountBenefits = [
  {
    icon: LockKeyhole,
    title: "Protected account access",
    text: "SUBSEL uses authenticated account access to help protect your personal account and platform activity.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal dashboard",
    text: "Manage relevant marketplace, product, affiliate and account activities from a centralized dashboard.",
  },
  {
    icon: Bell,
    title: "Important notifications",
    text: "Relevant account and platform updates can be communicated through the available notification experience.",
  },
  {
    icon: Settings,
    title: "Account management",
    text: "Manage your profile and available account settings from your SUBSEL account.",
  },
];

const steps = [
  {
    number: "01",
    icon: UserRound,
    title: "Create your account",
    text: "Register for a SUBSEL account and provide the information required to use the platform.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "One-time access payment",
    text: "Complete the current one-time SUBSEL access payment of ₦5,000. There are no recurring monthly charges for this access payment.",
  },
  {
    number: "03",
    icon: Unlock,
    title: "Access your account",
    text: "After your payment is successfully confirmed, your account can access the SUBSEL features available to your user role.",
  },
  {
    number: "04",
    icon: Share2,
    title: "Sell, promote or discover",
    text: "Depending on your account capabilities, you can upload digital products, promote eligible products or discover products available on the marketplace.",
  },
];

const trustFeatures = [
  {
    icon: ShieldCheck,
    title: "Structured workflows",
    text: "Important marketplace activities can follow defined platform workflows rather than being handled informally.",
  },
  {
    icon: LockKeyhole,
    title: "Authenticated access",
    text: "Users access protected account features through authenticated sessions.",
  },
  {
    icon: Eye,
    title: "Clear information",
    text: "Product information is presented so users can review available details before making decisions.",
  },
  {
    icon: ClipboardList,
    title: "Activity records",
    text: "Relevant marketplace activity can be recorded within the platform to make account management easier.",
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="pointer-events-none absolute right-[-180px] top-[10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              The SUBSEL Platform
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-7xl">
              One platform for
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                digital commerce.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 lg:text-lg">
              SUBSEL brings digital product selling, affiliate promotion and
              product discovery together in one structured marketplace. Whether
              you are a vendor, affiliate or buyer, your activity can be managed
              through your SUBSEL account.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/signup"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#0b5ed7] px-7 py-4 text-sm font-black text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                Create Your Account
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/marketplace"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-500/40 hover:bg-slate-800"
              >
                Explore Marketplace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW SUBSEL WORKS
      ========================================================== */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
        {steps.map((step) => {
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
          VENDOR BENEFITS
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-300">
                <CloudUpload className="h-4 w-4" />
                FOR VENDORS
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                A simpler way to manage your digital products.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                If you create digital products, SUBSEL gives you tools to
                organize your products and present eligible products through the
                marketplace.
              </p>

              <div className="mt-8 space-y-6">
                {vendorFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Vendor dashboard */}
            <div className="relative">
              <div className="absolute -inset-5 rounded-[40px] bg-blue-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                <div className="border-b border-slate-800 px-5 py-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                        Vendor workspace
                      </p>

                      <p className="mt-1 text-lg font-black">
                        Product management
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                      <PackageCheck className="h-5 w-5 text-blue-400" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 p-5">
                  {[
                    ["Product information", "Organized"],
                    ["Product files", "Managed"],
                    ["Review status", "Trackable"],
                    ["Marketplace listing", "Controlled"],
                  ].map(([name, status]) => (
                    <div
                      key={name}
                      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                    >
                      <span className="text-sm font-semibold text-white">
                        {name}
                      </span>

                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] font-bold text-green-400">
                        {status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AFFILIATE BENEFITS
      ========================================================== */}
      <section className="border-y border-slate-800 bg-slate-950/70 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Affiliate dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-5 rounded-[40px] bg-cyan-500/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
                <div className="border-b border-slate-800 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                    Affiliate workspace
                  </p>

                  <h3 className="mt-1 text-lg font-black">
                    Promotion overview
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 p-5">
                  {[
                    ["Affiliate links", "Manage"],
                    ["Clicks", "Track"],
                    ["Attributed sales", "Monitor"],
                    ["Commissions", "Review"],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <p className="text-xs text-slate-500">{title}</p>

                      <p className="mt-2 text-sm font-black text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mx-5 mb-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                  <div className="flex items-center gap-3">
                    <Share2 className="h-5 w-5 text-cyan-400" />

                    <div>
                      <p className="text-sm font-bold text-white">
                        Promotion tools
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Manage eligible product promotions from your account.
                      </p>
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

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Promote products with better visibility into your activity.
              </h2>

              <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                SUBSEL can give eligible affiliates a structured way to promote
                supported products and understand activity attributed to their
                promotional links.
              </p>

              <div className="mt-8 space-y-6">
                {affiliateFeatures.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {feature.title}
                        </h3>

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
        </div>
      </section>

      {/* =========================================================
          BUYER BENEFITS
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1.5 text-xs font-bold text-purple-300">
              <ShoppingBag className="h-4 w-4" />
              FOR BUYERS
            </div>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Find useful digital products in one place.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              Buyers can use SUBSEL to discover available digital products,
              review product information and manage their marketplace experience
              through their account.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {buyerFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-6 text-lg font-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACCOUNT BENEFITS
      ========================================================== */}
      <section className="bg-slate-950 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
                Your SUBSEL account
              </p>

              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Everything organized around your account.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Your account is the central place for accessing the features
                available to you. Instead of managing different activities
                separately, SUBSEL brings supported marketplace functions
                together.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Personal dashboard",
                  "Account management",
                  "Marketplace activity",
                  "Product management",
                  "Affiliate activity",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {accountBenefits.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-5 font-black">{feature.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          TRUST & SAFETY
      ========================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-slate-900 to-slate-950 p-7 sm:p-10 lg:p-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-400">
                  <ShieldCheck className="h-4 w-4" />
                  BUILT AROUND TRUST
                </div>

                <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                  A structured experience for every type of user.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
                  SUBSEL is designed to keep marketplace activity organized,
                  provide clear product information and give users controlled
                  access to the features available through their account.
                </p>
              </div>

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-[28px] border border-green-500/20 bg-green-500/10">
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

                    <h3 className="mt-4 text-sm font-bold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          REAL BENEFITS SUMMARY
      ========================================================== */}
      <section className="border-y border-slate-800 bg-slate-950/70 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
              Why use SUBSEL?
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl lg:text-5xl">
              The value is in having everything organized.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              SUBSEL is designed to reduce the need to manage digital
              marketplace activities across multiple disconnected tools.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "One account for supported marketplace activities",
              "A centralized dashboard",
              "Digital product management",
              "Affiliate promotion tools",
              "Product discovery",
              "Clear product information",
              "Structured product review workflows",
              "Activity tracking",
              "Account management tools",
              "Authenticated access",
              "Organized marketplace experience",
              "Support when assistance is needed",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />

                <span className="text-sm font-semibold leading-6 text-slate-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SUPPORT
      ========================================================== */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Headphones className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Need help using SUBSEL?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            If you have questions about your account, products, marketplace
            activity or available features, use the available SUBSEL support
            channels for assistance.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-7 py-4 text-sm font-black text-white transition hover:border-blue-500/40 hover:bg-slate-800"
          >
            Contact SUBSEL Support
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#0b2d68] py-20 sm:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
            <Sparkles className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            Ready to explore SUBSEL?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Create your account and discover the tools available for selling,
            promoting and discovering digital products.
          </p>

          <a
            href="/signup"
            className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#0b2d68] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            Get Started With SUBSEL
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* =========================================================
          ONE-TIME ACCESS — LAST THING ON THE PAGE
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#050b18] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] border border-blue-500/20 bg-gradient-to-br from-blue-600/10 via-slate-900 to-slate-950 p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-300">
                  <LockKeyhole className="h-4 w-4" />
                  One-time access
                </div>

                <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  One payment.
                  <span className="block text-blue-400">
                    No recurring access charge.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                  SUBSEL currently uses a one-time access payment of ₦5,000.
                  This payment is made once during onboarding rather than as a
                  recurring monthly subscription.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "One-time ₦5,000 access payment",
                    "No monthly subscription for this access",
                    "Payment confirmation before access",
                    "Access based on your account capabilities",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-400" />

                      <span className="text-sm font-semibold text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* PAYMENT CARD */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-blue-500/20 bg-slate-950/80 p-7 text-center shadow-2xl shadow-blue-950/20 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Current access fee
                </p>

                <div className="mt-3 text-4xl font-black text-white sm:text-5xl">
                  ₦5,000
                </div>

                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-bold text-green-400">
                  <CheckCircle2 className="h-4 w-4" />
                  One-time payment
                </div>

                <a
                  href="/signup"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b5ed7] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600"
                >
                  Create Your Account
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}