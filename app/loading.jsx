"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/signup";
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      
      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative flex flex-col items-center text-center">

        {/* Logo / Brand */}
        <div className="relative mb-8">

          {/* Outer animated ring */}
          <div className="absolute -inset-4 animate-pulse rounded-[28px] bg-blue-100/70" />

          {/* Spinning ring */}
          <div className="absolute -inset-2 animate-spin rounded-[24px] border-2 border-transparent border-t-[#0b5ed7] border-r-[#0b5ed7]" />

          {/* Logo container */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#0b5ed7] shadow-xl shadow-blue-200">
            <span className="text-3xl font-black tracking-tight text-white">
              S
            </span>
          </div>

        </div>

        {/* Brand Name */}
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
          SUB<span className="text-[#0b5ed7]">SELL</span>
        </h1>

        {/* Loading Text */}
        <p className="mt-2 text-sm font-medium text-slate-500">
          Preparing your experience...
        </p>

        {/* Loading Indicator */}
        <div className="mt-7 flex items-center gap-2">

          <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7] [animation-delay:-0.3s]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7] [animation-delay:-0.15s]" />

          <span className="h-2 w-2 animate-bounce rounded-full bg-[#0b5ed7]" />

        </div>

        {/* Bottom Status */}
        <div className="mt-8 flex items-center gap-2 text-xs text-slate-400">

          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

          Secure connection

        </div>

      </div>
    </div>
  );
}