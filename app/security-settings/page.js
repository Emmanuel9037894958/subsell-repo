"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Smartphone,
  Mail,
  Phone,
  KeyRound,
  Monitor,
  Laptop,
  Globe2,
  Clock3,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  LogOut,
  Eye,
  EyeOff,
  RefreshCw,
  Fingerprint,
  ShieldAlert,
  BellRing,
  Settings2,
  UserRoundCheck,
  BadgeCheck,
  Info,
  ArrowLeft,
  X,
} from "lucide-react";

export default function SecuritySettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [transactionAlerts, setTransactionAlerts] = useState(true);
  const [showLockModal, setShowLockModal] = useState(false);

  const securityScore = twoFactorEnabled ? 92 : 72;

  const sessions = [
    {
      icon: Laptop,
      device: "Windows PC",
      browser: "Chrome",
      location: "Current session",
      time: "Active now",
      current: true,
    },
    {
      icon: Smartphone,
      device: "Android Device",
      browser: "Chrome Mobile",
      location: "Nigeria",
      time: "2 hours ago",
      current: false,
    },
    {
      icon: Monitor,
      device: "Windows Computer",
      browser: "Edge",
      location: "Nigeria",
      time: "Yesterday",
      current: false,
    },
  ];

  const securityEvents = [
    {
      icon: CheckCircle2,
      title: "Successful login",
      description: "Your account was accessed successfully.",
      time: "Today, 10:42 AM",
      safe: true,
    },
    {
      icon: KeyRound,
      title: "Password updated",
      description: "Your account password was recently changed.",
      time: "Yesterday, 6:20 PM",
      safe: true,
    },
    {
      icon: ShieldAlert,
      title: "Security check",
      description: "A routine security check was completed.",
      time: "Aug 20, 2026",
      safe: true,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>

            <div>
              <h1 className="text-lg font-black text-slate-950">
                Security Settings
              </h1>

              <p className="text-xs text-slate-500">
                Protect your SUBSEL account and manage security preferences.
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 sm:flex">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-bold text-emerald-700">
              Security Center
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Security Overview */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="relative overflow-hidden bg-gradient-to-br from-[#0b5ed7] via-blue-700 to-indigo-900 p-6 text-white sm:p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_280px] lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
                    <ShieldCheck className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-100">
                      Account Protection
                    </p>

                    <h2 className="text-2xl font-black">
                      Your account security
                    </h2>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-blue-100">
                  Manage authentication, devices, login activity, recovery
                  options and security alerts from one place.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/10">
                    <CheckCircle2 className="h-4 w-4" />
                    Account protected
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold ring-1 ring-white/10">
                    <Globe2 className="h-4 w-4" />
                    Activity monitoring
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <div className="text-center">
                  <p className="text-xs font-semibold text-blue-100">
                    Security Score
                  </p>

                  <div className="mt-3 text-5xl font-black">
                    {securityScore}
                    <span className="text-xl text-blue-200">/100</span>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                    <div
                      className="h-full rounded-full bg-white transition-all duration-500"
                      style={{ width: `${securityScore}%` }}
                    />
                  </div>

                  <p className="mt-3 text-xs font-medium text-blue-100">
                    {twoFactorEnabled
                      ? "Excellent protection"
                      : "Enable 2FA to improve protection"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="border-t border-slate-100 p-5 sm:p-6">
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

              <div className="flex-1">
                <h3 className="text-sm font-bold text-amber-900">
                  Security recommendation
                </h3>

                <p className="mt-1 text-xs leading-5 text-amber-800">
                  {twoFactorEnabled
                    ? "Your two-factor authentication is enabled. Continue reviewing your active sessions and login activity regularly."
                    : "Enable two-factor authentication to add an additional verification step when signing in."}
                </p>
              </div>

              {!twoFactorEnabled && (
                <button
                  onClick={() => setTwoFactorEnabled(true)}
                  className="hidden rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white transition hover:bg-amber-700 sm:block"
                >
                  Enable 2FA
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            {/* Authentication */}
            <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
                    <LockKeyhole className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-black text-slate-950">
                      Authentication
                    </h2>

                    <p className="text-xs text-slate-500">
                      Manage how you sign in to your SUBSEL account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {/* Password */}
                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                      <KeyRound className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Password
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Last updated recently
                      </p>
                    </div>
                  </div>

                  <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7]">
                    Change Password
                  </button>
                </div>

                {/* 2FA */}
                <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
                      <Smartphone className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-slate-900">
                          Two-factor authentication
                        </h3>

                        <span
                          className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                            twoFactorEnabled
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {twoFactorEnabled ? "ENABLED" : "DISABLED"}
                        </span>
                      </div>

                      <p className="mt-1 max-w-lg text-xs leading-5 text-slate-500">
                        Add an additional verification step to help protect
                        your account during sign-in.
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setTwoFactorEnabled(!twoFactorEnabled)
                    }
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                      twoFactorEnabled
                        ? "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        : "bg-[#0b5ed7] text-white hover:bg-blue-600"
                    }`}
                  >
                    {twoFactorEnabled ? "Manage 2FA" : "Enable 2FA"}
                  </button>
                </div>
              </div>
            </section>

            {/* Verification */}
            <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <UserRoundCheck className="h-5 w-5" />
                  </div>

                  <div>
                    <h2 className="text-base font-black text-slate-950">
                      Account Verification
                    </h2>

                    <p className="text-xs text-slate-500">
                      Keep your recovery and contact information up to date.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                <SecurityRow
                  icon={Mail}
                  title="Email address"
                  description="Your account email is verified."
                  status="Verified"
                  verified
                  action="Manage"
                />

                <SecurityRow
                  icon={Phone}
                  title="Phone number"
                  description="Add and verify a phone number for account recovery."
                  status="Not configured"
                  action="Add phone"
                />

                <SecurityRow
                  icon={Fingerprint}
                  title="Recovery options"
                  description="Manage options that can help you regain account access."
                  status="Available"
                  action="Manage"
                />
              </div>
            </section>

            {/* Active Sessions */}
            <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="flex flex-col gap-4 border-b border-slate-100 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-[#0b5ed7]" />

                    <h2 className="text-base font-black text-slate-950">
                      Active Sessions
                    </h2>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    Review devices currently signed in to your account.
                  </p>
                </div>

                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-bold text-red-600 transition hover:bg-red-100">
                  <LogOut className="h-4 w-4" />
                  Sign Out Others
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {sessions.map((session, index) => {
                  const Icon = session.icon;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-6"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-slate-900">
                            {session.device}
                          </h3>

                          {session.current && (
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-[9px] font-bold text-emerald-700">
                              CURRENT
                            </span>
                          )}
                        </div>

                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-slate-500">
                          <span>{session.browser}</span>
                          <span>•</span>
                          <span>{session.location}</span>
                          <span>•</span>
                          <span>{session.time}</span>
                        </div>
                      </div>

                      {!session.current && (
                        <button className="rounded-xl p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500">
                          <LogOut className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Login Activity */}
            <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-[#0b5ed7]" />

                  <div>
                    <h2 className="text-base font-black text-slate-950">
                      Recent Security Activity
                    </h2>

                    <p className="text-xs text-slate-500">
                      Review important security events on your account.
                    </p>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {securityEvents.map((event, index) => {
                  const Icon = event.icon;

                  return (
                    <div
                      key={index}
                      className="flex gap-4 p-6"
                    >
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                          event.safe
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row">
                          <h3 className="text-sm font-bold text-slate-900">
                            {event.title}
                          </h3>

                          <span className="text-[10px] font-medium text-slate-400">
                            {event.time}
                          </span>
                        </div>

                        <p className="mt-1 text-xs text-slate-500">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-slate-100 p-5">
                <button className="flex w-full items-center justify-center gap-2 text-xs font-bold text-[#0b5ed7] hover:text-blue-700">
                  View Full Security History
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Alerts */}
            <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-6">
                <div className="flex items-center gap-3">
                  <BellRing className="h-5 w-5 text-[#0b5ed7]" />

                  <div>
                    <h2 className="text-sm font-black text-slate-950">
                      Security Alerts
                    </h2>

                    <p className="text-[11px] text-slate-500">
                      Choose which alerts you receive.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 p-6">
                <ToggleSetting
                  title="New login alerts"
                  description="Notify me about new account logins."
                  enabled={loginAlerts}
                  setEnabled={setLoginAlerts}
                />

                <ToggleSetting
                  title="Transaction alerts"
                  description="Notify me about important account transactions."
                  enabled={transactionAlerts}
                  setEnabled={setTransactionAlerts}
                />
              </div>
            </section>

            {/* Trusted Device */}
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0b5ed7]">
                <Fingerprint className="h-5 w-5" />
              </div>

              <h2 className="mt-4 text-sm font-black text-slate-950">
                Trusted Devices
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Review devices you've previously trusted and remove devices
                you no longer recognize.
              </p>

              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7]">
                Manage Devices
                <ChevronRight className="h-4 w-4" />
              </button>
            </section>

            {/* Security Tips */}
            <section className="rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
              <div className="flex items-center gap-2 text-[#0b5ed7]">
                <Info className="h-5 w-5" />

                <h2 className="text-sm font-black">
                  Security Tips
                </h2>
              </div>

              <ul className="mt-5 space-y-4">
                {[
                  "Use a strong and unique password.",
                  "Never share your password or verification codes.",
                  "Enable two-factor authentication.",
                  "Review unfamiliar sessions immediately.",
                  "Only sign in through the official SUBSEL website.",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex gap-2 text-[11px] leading-5 text-blue-900"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    {tip}
                  </li>
                ))}
              </ul>
            </section>

            {/* Emergency Lock */}
            <section className="rounded-3xl border border-red-200 bg-red-50 p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600">
                <ShieldAlert className="h-5 w-5" />
              </div>

              <h2 className="mt-4 text-sm font-black text-red-950">
                Emergency Account Lock
              </h2>

              <p className="mt-2 text-xs leading-5 text-red-800">
                If you believe someone has accessed your account without
                permission, you can temporarily lock your account and contact
                support.
              </p>

              <button
                onClick={() => setShowLockModal(true)}
                className="mt-5 w-full rounded-xl border border-red-200 bg-white px-4 py-3 text-xs font-bold text-red-600 transition hover:bg-red-100"
              >
                Lock Account
              </button>
            </section>
          </aside>
        </div>

        {/* Footer note */}
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />

          <div>
            <p className="text-xs font-bold text-slate-900">
              Security matters at SUBSEL
            </p>

            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              SUBSEL will never ask you to send your password, one-time
              verification code, recovery code, or private authentication
              credentials through chat or social media.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Lock Modal */}
      {showLockModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <ShieldAlert className="h-6 w-6" />
              </div>

              <button
                onClick={() => setShowLockModal(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <h2 className="mt-5 text-xl font-black text-slate-950">
              Lock your account?
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              This should only be used if you believe your account has been
              compromised. Account locking should be connected to your real
              authentication backend before being used in production.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                onClick={() => setShowLockModal(false)}
                className="rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                onClick={() => setShowLockModal(false)}
                className="rounded-xl bg-red-600 px-4 py-3 text-xs font-bold text-white hover:bg-red-700"
              >
                Confirm Lock
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

/* =========================================================
   SECURITY ROW
========================================================= */

function SecurityRow({
  icon: Icon,
  title,
  description,
  status,
  verified = false,
  action,
}) {
  return (
    <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-slate-900">
              {title}
            </h3>

            <span
              className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                verified
                  ? "bg-emerald-50 text-emerald-700"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {status}
            </span>
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <button className="rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7]">
        {action}
      </button>
    </div>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

function ToggleSetting({
  title,
  description,
  enabled,
  setEnabled,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <h3 className="text-xs font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-1 text-[10px] leading-4 text-slate-500">
          {description}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        aria-pressed={enabled}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled ? "bg-[#0b5ed7]" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}