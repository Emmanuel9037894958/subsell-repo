"use client";

import { useState } from "react";
import { Trophy, Medal, Award, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";

// Mock Leaderboard Data
const mockEarners = [
  { rank: 1, name: "Alex Chen", username: "@alexc", amount: "N2,850.00", deals: 142, verified: true, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" },
  { rank: 2, name: "Sarah Jenkins", username: "@sjenkins", amount: "N1,420.50", deals: 118, verified: true, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80" },
  { rank: 3, name: "David Kalu", username: "@dkalu", amount: "N8100.00", deals: 95, verified: true, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80" },
  { rank: 4, name: "Elena Rostova", username: "@elena_r", amount: "N2,350.00", deals: 78, verified: true },
  { rank: 5, name: "Michael Chang", username: "@mchang", amount: "N1,890.00", deals: 64, verified: false },
  { rank: 6, name: "Amara Okeke", username: "@amara_o", amount: "N8,050.00", deals: 52, verified: true },
  { rank: 7, name: "Lucas Silva", username: "@lsilva", amount: "N800 000.00", deals: 47, verified: true },
  { rank: 8, name: "Hannah Abbott", username: "@hannah_a", amount: "N1,650.00", deals: 41, verified: false },
];

export default function TopEarnersPage() {
  const [timeframe, setTimeframe] = useState("monthly");

  const podium = mockEarners.slice(0, 3);
  const runnersUp = mockEarners.slice(3);

  return (
    <main className="min-h-screen bg-slate-50/60">
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden bg-[#083b8a] text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-900/50 px-3.5 py-1.5 text-xs font-semibold text-blue-200 backdrop-blur-md">
            <Trophy className="h-4 w-4 text-amber-400" />
            Verified Performance Leaderboard
          </div>

          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Top Earners Wall
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
            Celebrating our highest-performing partners. All payouts and stats are fully audited and verified in real time.
          </p>

          {/* Timeframe Filter Tabs */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-xl border border-blue-400/20 bg-blue-950/40 p-1.5 backdrop-blur-md">
              {["weekly", "monthly", "all-time"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTimeframe(tab)}
                  className={`rounded-lg px-5 py-2 text-xs font-bold capitalize transition-all duration-200 sm:text-sm ${
                    timeframe === tab
                      ? "bg-white text-[#083b8a] shadow-md"
                      : "text-blue-200 hover:text-white"
                  }`}
                >
                  {tab.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Top 3 Podium Cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Rank 2 (Silver) */}
          <div className="order-2 flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:order-1 md:mt-6">
            <div className="relative">
              <img
                src={podium[1].avatar}
                alt={podium[1].name}
                className="h-20 w-20 rounded-full border-4 border-slate-200 object-cover shadow-md"
              />
              <span className="absolute -bottom-2 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-slate-300 font-extrabold text-slate-800 shadow-sm">
                2
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-center">
              <h3 className="font-bold text-slate-900">{podium[1].name}</h3>
              {podium[1].verified && <CheckCircle2 className="h-4 w-4 text-[#0b5ed7]" />}
            </div>
            <p className="text-xs text-slate-500">{podium[1].username}</p>
            <p className="mt-4 text-2xl font-black text-[#0b5ed7]">{podium[1].amount}</p>
            <p className="text-xs font-semibold text-slate-500">{podium[1].deals} Completed Deals</p>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="order-1 flex flex-col items-center rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50/40 via-white to-white p-8 shadow-xl md:order-2">
            <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
              <Trophy className="h-3.5 w-3.5 text-amber-600" />
              #1 Champion
            </div>
            <div className="relative">
              <img
                src={podium[0].avatar}
                alt={podium[0].name}
                className="h-24 w-24 rounded-full border-4 border-amber-400 object-cover shadow-lg"
              />
              <span className="absolute -bottom-2 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 font-black text-amber-950 shadow-sm">
                1
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-center">
              <h3 className="text-lg font-extrabold text-slate-900">{podium[0].name}</h3>
              {podium[0].verified && <CheckCircle2 className="h-4 w-4 text-[#0b5ed7]" />}
            </div>
            <p className="text-xs text-slate-500">{podium[0].username}</p>
            <p className="mt-4 text-3xl font-black text-[#0b5ed7]">{podium[0].amount}</p>
            <p className="text-xs font-bold text-slate-600">{podium[0].deals} Completed Deals</p>
          </div>

          {/* Rank 3 (Bronze) */}
          <div className="order-3 flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:mt-10">
            <div className="relative">
              <img
                src={podium[2].avatar}
                alt={podium[2].name}
                className="h-20 w-20 rounded-full border-4 border-amber-700/30 object-cover shadow-md"
              />
              <span className="absolute -bottom-2 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-amber-700 font-extrabold text-white shadow-sm">
                3
              </span>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-center">
              <h3 className="font-bold text-slate-900">{podium[2].name}</h3>
              {podium[2].verified && <CheckCircle2 className="h-4 w-4 text-[#0b5ed7]" />}
            </div>
            <p className="text-xs text-slate-500">{podium[2].username}</p>
            <p className="mt-4 text-2xl font-black text-[#0b5ed7]">{podium[2].amount}</p>
            <p className="text-xs font-semibold text-slate-500">{podium[2].deals} Completed Deals</p>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4">
            <h2 className="font-bold text-slate-900">Leaderboard Rankings</h2>
          </div>

          <div className="divide-y divide-slate-100">
            {runnersUp.map((person) => (
              <div
                key={person.rank}
                className="flex items-center justify-between gap-4 p-5 transition-colors duration-150 hover:bg-slate-50/80"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 font-bold text-slate-600">
                    #{person.rank}
                  </span>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-slate-900">{person.name}</p>
                      {person.verified && <CheckCircle2 className="h-3.5 w-3.5 text-[#0b5ed7]" />}
                    </div>
                    <p className="text-xs text-slate-500">{person.username} • {person.deals} Deals</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-black text-[#0b5ed7]">{person.amount}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-semibold">
                    <TrendingUp className="h-3 w-3" /> Verified Payout
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Guarantee Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-[#eef6ff] p-6 sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0b5ed7] text-white">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Audited & Fair Rankings</h3>
              <p className="text-sm text-slate-600">All metrics are automatically verified against real platform activity.</p>
            </div>
          </div>
        </div>

      </section>

      {/* <Footer /> */}
    </main>
  );
}