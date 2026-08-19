"use client";

import Link from "next/link";
import {
  ArrowDownLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Download,
  Eye,
  Gift,
  Headphones,
  LockKeyhole,
  MoreHorizontal,
  Package,
  Plus,
  RefreshCw,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  TrendingUp,
  UserRound,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react";

const stats = [
  {
    title: "Available Balance",
    value: "₦0.00",
    change: "Wallet balance",
    icon: Wallet,
    href: "/wallet",
  },
  {
    title: "Total Earnings",
    value: "₦0.00",
    change: "All-time earnings",
    icon: TrendingUp,
    href: "/earnings",
  },
  {
    title: "Total Sales",
    value: "0",
    change: "Completed orders",
    icon: ShoppingBag,
    href: "/orders",
  },
  {
    title: "Affiliate Earnings",
    value: "₦0.00",
    change: "From referrals",
    icon: Gift,
    href: "/affiliate",
  },
];

const quickActions = [
  {
    title: "Add Money",
    description: "Fund your SUBSEL wallet",
    icon: Plus,
    href: "/wallet/deposit",
  },
  {
    title: "Browse Products",
    description: "Discover digital products",
    icon: ShoppingBag,
    href: "/marketplace",
  },
  {
    title: "Become a Vendor",
    description: "Start selling your products",
    icon: Store,
    href: "/vendor/register",
  },
  {
    title: "Promote Products",
    description: "Start earning commissions",
    icon: Gift,
    href: "/affiliate",
  },
];

const transactions = [
  {
    title: "Wallet Funding",
    type: "Credit",
    amount: "+₦0.00",
    status: "Pending",
    date: "No recent transactions",
    icon: ArrowDownLeft,
  },
];

const activities = [
  {
    title: "Account created",
    description: "Your SUBSEL account was successfully created.",
    time: "Recently",
    icon: CheckCircle2,
  },
  {
    title: "Security protection active",
    description: "Your account is protected by authentication controls.",
    time: "Active",
    icon: ShieldCheck,
  },
  {
    title: "Marketplace access",
    description: "You can browse eligible products on SUBSEL.",
    time: "Available",
    icon: ShoppingBag,
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f5f8fc] text-slate-900">
      {/* =========================================================
          TOP HEADER
      ========================================================== */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b5ed7] font-black text-white shadow-lg shadow-blue-600/20">
              S
            </div>

            <div className="hidden sm:block">
              <p className="text-lg font-black tracking-tight text-slate-950">
                SUBSEL
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                User Dashboard
              </p>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/support"
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 sm:flex"
            >
              <Headphones className="h-4 w-4" />
              Support
            </Link>

            <button
              type="button"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-[#0b5ed7]"
            >
              <Bell className="h-5 w-5" />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
            </button>

            <Link
              href="/settings"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-[#0b5ed7]"
            >
              <Settings className="h-5 w-5" />
            </Link>

            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-2 py-2 transition hover:border-blue-200"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-[#0b5ed7]">
                <UserRound className="h-4 w-4" />
              </div>

              <div className="hidden text-left md:block">
                <p className="text-xs font-bold text-slate-900">
                  Welcome back
                </p>
                <p className="text-[10px] text-slate-400">
                  My Account
                </p>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        {/* Welcome */}
        <section className="mb-8">
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#0b5ed7]">
                <Sparkles className="h-3.5 w-3.5" />
                SUBSEL Dashboard
              </div>

              <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Welcome back 👋
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Manage your wallet, marketplace activity, affiliate
                performance, products and account from one place.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-[#0b5ed7]"
              >
                <ShoppingBag className="h-4 w-4" />
                Marketplace
              </Link>

              <Link
                href="/wallet"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0b5ed7] px-4 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-[#084cae]"
              >
                <Wallet className="h-4 w-4" />
                My Wallet
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================
            ACCOUNT STATUS
        ========================================================== */}
        <section className="mb-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                  Account Status
                </p>

                <h3 className="mt-2 text-lg font-black text-emerald-950">
                  Active
                </h3>

                <p className="mt-1 text-xs text-emerald-700">
                  Your account is currently available.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  Security
                </p>

                <h3 className="mt-2 text-lg font-black text-blue-950">
                  Protected
                </h3>

                <p className="mt-1 text-xs text-blue-700">
                  Review your security settings regularly.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-violet-600">
                  Marketplace
                </p>

                <h3 className="mt-2 text-lg font-black text-violet-950">
                  Ready
                </h3>

                <p className="mt-1 text-xs text-violet-700">
                  Explore products or start selling.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-violet-600 shadow-sm">
                <ShoppingBag className="h-5 w-5" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            STATISTICS
        ========================================================== */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Link
                key={stat.title}
                href={stat.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7] transition group-hover:bg-[#0b5ed7] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-[#0b5ed7]" />
                </div>

                <p className="mt-5 text-xs font-semibold text-slate-500">
                  {stat.title}
                </p>

                <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-950">
                  {stat.value}
                </h3>

                <p className="mt-1 text-[10px] font-semibold text-slate-400">
                  {stat.change}
                </p>
              </Link>
            );
          })}
        </section>

        {/* =========================================================
            QUICK ACTIONS
        ========================================================== */}
        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-950">
                Quick Actions
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Access commonly used SUBSEL features.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  href={action.href}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-blue-50 group-hover:text-[#0b5ed7]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-bold text-slate-900">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {action.description}
                    </p>
                  </div>

                  <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:text-[#0b5ed7]" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            MAIN GRID
        ========================================================== */}
        <section className="mt-8 grid gap-6 xl:grid-cols-12">
          {/* Wallet */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b5ed7] to-[#083b8a] p-7 text-white shadow-xl shadow-blue-900/10 xl:col-span-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-100">
                  <Wallet className="h-4 w-4" />
                  SUBSEL WALLET
                </div>

                <p className="mt-6 text-xs font-medium text-blue-100">
                  Available Balance
                </p>

                <h2 className="mt-1 text-4xl font-black tracking-tight">
                  ₦0.00
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <CreditCard className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <Link
                href="/wallet/deposit"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-xs font-bold text-[#0b5ed7] transition hover:bg-blue-50"
              >
                <Plus className="h-4 w-4" />
                Add Money
              </Link>

              <Link
                href="/wallet/withdraw"
                className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-xs font-bold text-white ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <ArrowUpRight className="h-4 w-4" />
                Withdraw
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[10px] text-blue-100">
                Wallet transactions
              </span>

              <Link
                href="/wallet"
                className="text-[10px] font-bold text-white hover:underline"
              >
                View wallet
              </Link>
            </div>
          </div>

          {/* Performance */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm xl:col-span-7">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0b5ed7]">
                  <BarChart3 className="h-4 w-4" />
                  PERFORMANCE
                </div>

                <h2 className="mt-2 text-xl font-black text-slate-950">
                  Your activity overview
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Track your activity as you use SUBSEL.
                </p>
              </div>

              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:text-[#0b5ed7]"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </div>

            {/* Fake chart area ready for real data */}
            <div className="mt-8 flex h-44 items-end gap-2 border-b border-slate-100 px-2">
              {[20, 35, 25, 48, 38, 60, 42, 72, 55, 65, 48, 80].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex h-full flex-1 items-end"
                  >
                    <div
                      className="w-full rounded-t-lg bg-blue-100 transition group-hover:bg-[#0b5ed7]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}
            </div>

            <div className="mt-4 flex justify-between text-[9px] font-semibold uppercase tracking-wider text-slate-400">
              <span>12 weeks ago</span>
              <span>Current</span>
            </div>
          </div>
        </section>

        {/* =========================================================
            TRANSACTIONS + ACTIVITY
        ========================================================== */}
        <section className="mt-8 grid gap-6 xl:grid-cols-12">
          {/* Transactions */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm xl:col-span-7">
            <div className="flex items-center justify-between border-b border-slate-100 p-6">
              <div>
                <h2 className="text-lg font-black text-slate-950">
                  Recent Transactions
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Your latest wallet activity.
                </p>
              </div>

              <Link
                href="/transactions"
                className="text-xs font-bold text-[#0b5ed7] hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {transactions.map((transaction, index) => {
                const Icon = transaction.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xs font-bold text-slate-900">
                        {transaction.title}
                      </h3>

                      <p className="mt-1 text-[10px] text-slate-400">
                        {transaction.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-black text-slate-900">
                        {transaction.amount}
                      </p>

                      <span className="mt-1 inline-flex rounded-full bg-amber-50 px-2 py-1 text-[9px] font-bold text-amber-600">
                        {transaction.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm xl:col-span-5">
            <div className="border-b border-slate-100 p-6">
              <h2 className="text-lg font-black text-slate-950">
                Account Activity
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Recent account events.
              </p>
            </div>

            <div className="space-y-6 p-6">
              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="flex gap-4"
                  >
                    <div className="relative">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
                        <Icon className="h-4 w-4" />
                      </div>

                      {index !== activities.length - 1 && (
                        <span className="absolute left-1/2 top-10 h-8 w-px -translate-x-1/2 bg-slate-200" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-slate-900">
                        {activity.title}
                      </h3>

                      <p className="mt-1 text-[10px] leading-5 text-slate-400">
                        {activity.description}
                      </p>

                      <span className="mt-1 block text-[9px] font-semibold text-slate-300">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            SERVICES
        ========================================================== */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0b5ed7]">
                <Zap className="h-4 w-4" />
                Digital Services
              </div>

              <h2 className="mt-2 text-xl font-black text-slate-950">
                Everyday services
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Access supported services directly from your account.
              </p>
            </div>

            <Link
              href="/vtu"
              className="text-xs font-bold text-[#0b5ed7] hover:underline"
            >
              View all services
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Link
              href="/vtu/data"
              className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
            >
              <Wifi className="h-5 w-5 text-[#0b5ed7]" />

              <h3 className="mt-4 text-sm font-bold text-slate-900">
                Data Bundles
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Purchase supported mobile data plans.
              </p>

              <ArrowRight className="mt-4 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0b5ed7]" />
            </Link>

            <Link
              href="/vtu/airtime"
              className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
            >
              <CreditCard className="h-5 w-5 text-[#0b5ed7]" />

              <h3 className="mt-4 text-sm font-bold text-slate-900">
                Airtime
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Recharge supported networks.
              </p>

              <ArrowRight className="mt-4 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0b5ed7]" />
            </Link>

            <Link
              href="/vtu/electricity"
              className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:bg-blue-50/40"
            >
              <Zap className="h-5 w-5 text-[#0b5ed7]" />

              <h3 className="mt-4 text-sm font-bold text-slate-900">
                Electricity
              </h3>

              <p className="mt-1 text-[10px] text-slate-400">
                Access supported bill payment services.
              </p>

              <ArrowRight className="mt-4 h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-[#0b5ed7]" />
            </Link>
          </div>
        </section>

        {/* =========================================================
            SECURITY PANEL
        ========================================================== */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <LockKeyhole className="h-6 w-6" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-lg font-black text-slate-950">
                    Account Security
                  </h2>

                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-emerald-600">
                    Protected
                  </span>
                </div>

                <p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">
                  Manage authentication, password and other security controls
                  for your SUBSEL account.
                </p>
              </div>
            </div>

            <Link
              href="/settings/security"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:text-[#0b5ed7]"
            >
              Security Settings
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* =========================================================
            FOOTER
        ========================================================== */}
        <footer className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col justify-between gap-4 text-[10px] text-slate-400 sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} SUBSEL. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                href="/terms"
                className="transition hover:text-[#0b5ed7]"
              >
                Terms
              </Link>

              <Link
                href="/privacy"
                className="transition hover:text-[#0b5ed7]"
              >
                Privacy
              </Link>

              <Link
                href="/security"
                className="transition hover:text-[#0b5ed7]"
              >
                Security
              </Link>

              <Link
                href="/support"
                className="transition hover:text-[#0b5ed7]"
              >
                Support
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}