import Link from "next/link";

import {
  ShieldCheck,
  Zap,
  BarChart3,
  Handshake,
  SearchCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-[#f8fafc] to-white">
        {/* Background ambient glow */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — Text */}
            <div className="max-w-2xl py-18">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[#0b5ed7] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#0b5ed7]" />
                Empowering Digital Growth
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Engineered for efficiency.
                <br />
                <span className="text-[#0b5ed7]">
                  Built on trust.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
                SUBSEL is built to bring digital commerce, marketplace
                opportunities, affiliate promotion, digital services, and
                everyday online tools together in one simple ecosystem.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="flex min-h-12 items-center justify-center rounded-xl bg-[#0b5ed7] px-7 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#083b8a] active:scale-95"
                >
                  Get Started
                </Link>

                <Link
                  href="/trust"
                  className="flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-[#0b5ed7]"
                >
                  Trust Center
                </Link>
              </div>
            </div>

            {/* Right — Hero Image */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-blue-300/20 blur-3xl sm:h-96 sm:w-96" />

              <div className="relative w-full max-w-xl">
                <img
                  src="/image2.jpg"
                  alt="SUBSEL platform"
                  className="h-auto w-full rounded-2xl border border-slate-100/80 bg-white object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST & FEATURES
      ====================================================== */}
      <section className="border-t border-slate-100 bg-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
              Why Choose SUBSEL
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Platform Features You Can Depend On
            </h2>

            <p className="mt-3 text-slate-600">
              SUBSEL is designed to make digital commerce, promotion, and
              online services easier to manage from one platform.
            </p>
          </div>

          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Platform",
                desc: "SUBSEL is designed with authentication, account protection, and security-focused controls to help protect users and their platform activity.",
              },
              {
                icon: Zap,
                title: "Fast Digital Services",
                desc: "Access supported digital services through an experience designed to make everyday transactions simple and convenient.",
              },
              {
                icon: BarChart3,
                title: "Live Account Metrics",
                desc: "Monitor relevant account activity, sales, performance, transactions, and other supported information from your dashboard.",
              },
              {
                icon: Handshake,
                title: "Transparent Processes",
                desc: "SUBSEL is built around clear workflows so users can understand products, commissions, transactions, and supported platform activities.",
              },
              {
                icon: SearchCheck,
                title: "Fraud Prevention",
                desc: "Security-focused monitoring and platform controls help identify suspicious activity and protect the SUBSEL ecosystem.",
              },
              {
                icon: Headphones,
                title: "Customer Support",
                desc: "Get assistance with supported account, marketplace, payment, product, and platform-related questions.",
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;

              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-8 transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100/60 text-[#0b5ed7] transition-colors duration-300 group-hover:bg-[#0b5ed7] group-hover:text-white">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          GUIDING PRINCIPLES
      ====================================================== */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
                Our Guiding Principles
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Redefining How You Earn & Connect
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600">
                At SUBSEL, we believe digital platforms should be simple,
                transparent, useful, and accessible. Whether you are selling
                products, promoting offers, using digital services, or
                managing your account, SUBSEL is designed to bring everything
                together in one connected experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
                  <p className="text-2xl font-black text-[#0b5ed7]">
                    24/7
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Platform Access
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
                  <p className="text-2xl font-black text-[#0b5ed7]">
                    Secure
                  </p>

                  <p className="text-xs font-semibold text-slate-500">
                    Security-Focused
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="space-y-6">
                {[
                  [
                    "01",
                    "Clarity First",
                    "Clear instructions, intuitive dashboards, and simple workflows designed for everyday users.",
                  ],
                  [
                    "02",
                    "Mobile Accessibility",
                    "SUBSEL is designed to provide a responsive experience across phones, tablets, and desktop devices.",
                  ],
                  [
                    "03",
                    "User Protection",
                    "A security-focused approach to authentication, fraud prevention, account activity, and user safety.",
                  ],
                ].map(([number, title, text]) => (
                  <div key={number} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#eef6ff] text-sm font-extrabold text-[#0b5ed7]">
                      {number}
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-950">
                        {title}
                      </h3>

                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#083b8a] py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to experience SUBSEL?
          </h2>

          <p className="mt-4 text-blue-100">
            Create your account and start exploring the SUBSEL digital
            ecosystem.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#083b8a] shadow-lg transition hover:bg-blue-50 active:scale-95"
            >
              Create Free Account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}