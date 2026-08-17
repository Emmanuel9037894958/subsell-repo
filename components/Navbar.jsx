"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Top Earners", href: "/top-earners" },
  { name: "Guild", href: "/guild" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Scam Alert", href: "/scam-alert" },
  { name: "Trust", href: "/trust" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">

        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          {/* S Logo */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0b5ed7] to-blue-500 font-extrabold text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:scale-105">
            S
          </div>

          {/* Brand Name */}
          <span className="text-xl font-black tracking-tight text-slate-900">
            SUB<span className="text-[#0b5ed7]">SELL</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-lg px-3 py-2 text-xs font-semibold text-slate-600 transition-all duration-200 hover:bg-blue-50/80 hover:text-[#0b5ed7] xl:text-sm"
            >
              {link.name}

              <span className="absolute bottom-1 left-3 right-3 h-0.5 scale-x-0 rounded-full bg-[#0b5ed7] transition-transform duration-200 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2.5 text-sm font-bold text-[#0b5ed7] transition-all duration-200 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-[#0b5ed7] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/50 text-slate-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7] lg:hidden"
        >
          <div className="relative flex h-5 w-5 flex-col justify-between">

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />

          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`grid transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] border-t border-slate-200/80 opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-white/95 backdrop-blur-md">

          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">

            {/* Mobile Brand */}
            <div className="mb-4 flex items-center gap-2.5 border-b border-slate-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0b5ed7] to-blue-500 font-extrabold text-white shadow-md shadow-blue-500/20">
                S
              </div>

              <span className="text-xl font-black tracking-tight text-slate-900">
                SUB<span className="text-[#0b5ed7]">SELL</span>
              </span>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl p-3 text-sm font-semibold text-slate-700 transition-all duration-150 hover:bg-blue-50 hover:text-[#0b5ed7]"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400">→</span>
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-5">

              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-[#0b5ed7]"
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-[#0b5ed7] px-4 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-600 active:scale-95"
              >
                Sign Up
              </Link>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
}