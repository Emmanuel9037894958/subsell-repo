"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  MessageSquare, 
  Award, 
  ArrowRight, 
  Lock, 
  Zap, 
  Globe 
} from "lucide-react";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

const guildTiers = [
  {
    name: "Standard Guild",
    minRequirement: "0 - $500 Volume",
    color: "border-slate-200 bg-white",
    badge: "bg-slate-100 text-slate-700",
    features: [
      "Access to General Community Chat",
      "Standard Investment Insights",
      "Weekly Market Briefings",
    ],
  },
  {
    name: "VIP Guild",
    minRequirement: "$500+ Volume",
    color: "border-blue-300 bg-blue-50/30",
    badge: "bg-[#0b5ed7] text-white",
    features: [
      "Exclusive Mastermind Channels",
      "Early Access to High-Yield Pools",
      "2% Bonus Referral Commissions",
      "Priority 24/7 Support",
    ],
    popular: true,
  },
  {
    name: "Elite Council",
    minRequirement: "$5,000+ Volume",
    color: "border-amber-300 bg-amber-50/20",
    badge: "bg-amber-500 text-white",
    features: [
      "Direct Line to Platform Founders",
      "Custom Revenue Share Strategy",
      "VIP Live Events & Retreats",
      "Zero Transaction Fee Perks",
    ],
  },
];

const activityFeed = [
  { user: "Michael C.", action: "unlocked VIP Guild Tier", time: "5 mins ago", tag: "Level Up" },
  { user: "Sarah J.", action: "shared strategy: Maximizing Daily Yields", time: "22 mins ago", tag: "Strategy" },
  { user: "Alex K.", action: "earned top Guild Contributor badge", time: "1 hour ago", tag: "Award" },
];

export default function GuildPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <main className="min-h-screen bg-slate-50/50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-[#f8fafc] to-slate-50">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-1.5 text-xs font-bold text-[#0b5ed7] shadow-sm">
              <Users className="h-3.5 w-3.5" />
              SUBSELL Community & Ecosystem
            </div>

            <h1 className="text-xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Connect, collaborate, and <br />
              <span className="text-[#0b5ed7]">grow together.</span>
            </h1>

            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
              The SUBSELL Guild is an exclusive collective where smart investors, traders, and high-earners share strategies, unlock platform perks, and scale earnings as a unified force.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/signup"
                className="flex min-h-12 items-center gap-2 rounded-xl bg-[#0b5ed7] px-7 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#083b8a] active:scale-95"
              >
                Join the Guild
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#tiers"
                className="flex min-h-12 items-center rounded-xl border border-slate-200 bg-white px-7 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                Explore Guild Tiers
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillar Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "Collective Intelligence",
              text: "Access crowd-sourced investment strategies, market signals, and proven blueprints shared by top performers.",
            },
            {
              icon: TrendingUp,
              title: "Tiered Reward Pools",
              text: "Unlock higher referral bonuses, profit multipliers, and exclusive platform access as your Guild rank advances.",
            },
            {
              icon: ShieldCheck,
              title: "Verified Networks",
              text: "Interact in a moderated, spam-free environment built around authentic, identity-verified platform members.",
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef6ff] text-[#0b5ed7] transition-colors group-hover:bg-[#0b5ed7] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-6 text-xl font-bold text-slate-950">{pillar.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guild Tiers & Benefits */}
      <section id="tiers" className="border-t border-slate-200/60 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
              Rank System
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Guild Tier Progression
            </h2>
            <p className="mt-3 text-slate-600">
              The more active you are on SUBSELL, the higher your status and rewards.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {guildTiers.map((tier, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col justify-between rounded-2xl border-2 p-8 shadow-sm ${tier.color}`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0b5ed7] px-4 py-1 text-xs font-bold text-white shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-slate-950">{tier.name}</h3>
                    <span className={`rounded-lg px-2.5 py-1 text-xs font-bold ${tier.badge}`}>
                      {tier.minRequirement}
                    </span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                        <Zap className="h-4 w-4 shrink-0 text-[#0b5ed7] mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/signup"
                  className="mt-8 flex w-full justify-center rounded-xl border border-slate-200 bg-white py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50 hover:text-[#0b5ed7]"
                >
                  Unlock Tier
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Guild Feed & Community Channels */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left: Community Channels */}
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
                Always Connected
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Join Official Guild Channels
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Engage in daily discussions, market analysis, and real-time updates through our officially verified chat groups.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500 text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">Telegram Community</h3>
                      <p className="text-xs text-slate-500">Global discussion & announcement channel</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400" />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950">Discord VIP Hub</h3>
                      <p className="text-xs text-slate-500">Live audio stages, voice chat, and strategy rooms</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right: Live Activity Feed */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <h3 className="font-bold text-slate-950">Live Guild Pulse</h3>
                </div>
                <span className="text-xs font-semibold text-slate-500">Real-time</span>
              </div>

              <div className="mt-6 space-y-6">
                {activityFeed.map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-4 border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        <span className="font-bold text-[#0b5ed7]">{item.user}</span> {item.action}
                      </p>
                      <span className="mt-1 inline-block text-xs text-slate-400">{item.time}</span>
                    </div>
                    <span className="rounded-md bg-blue-50 px-2 py-1 text-xs font-bold text-[#0b5ed7]">
                      {item.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="bg-[#083b8a] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <Award className="mx-auto h-12 w-12 text-amber-400" />
          <h2 className="mt-4 text-3xl font-extrabold sm:text-xl">
            Ready to claim your Guild seat?
          </h2>
          <p className="mt-3 text-blue-100">
            Join thousands of active platform members growing together on SUBSELL.
          </p>
          <div className="mt-8">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#083b8a] shadow-lg transition hover:bg-blue-50 active:scale-95"
            >
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}