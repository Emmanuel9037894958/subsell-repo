import Link from "next/link";

const footerLinks = {
  Platform: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Top Earners", href: "/top-earners" },
    { name: "Guild", href: "/guild" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Scam Alert", href: "/scam-alert" },
    { name: "Trust Center", href: "/trust" },
  ],
  Company: [
    { name: "Contact", href: "/contact" },
    { name: "Login", href: "/login" },
    { name: "Create Account", href: "/signup" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      {/* Soft Blue Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />

      {/* Top Accent Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

      {/* Main Footer Container */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b5ed7] font-extrabold text-white shadow-md shadow-blue-500/20">
                S
              </span>
              <span className="text-2xl font-black tracking-tight text-white">
                SUB<span className="text-blue-400">SELL</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
              A professional platform designed to provide users with a clear,
              simple, and reliable online experience.
            </p>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/90 px-3 py-1.5 text-xs text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Systems Operational
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              {[
                { label: "Facebook", symbol: "f" },
                { label: "Instagram", symbol: "◎" },
                { label: "X", symbol: "𝕏" },
                { label: "WhatsApp", symbol: "◉" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-sm font-bold text-slate-200 transition-all duration-200 hover:border-blue-400 hover:bg-[#0b5ed7] hover:text-white"
                >
                  {social.symbol}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                  {title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors duration-200 hover:text-blue-400"
                      >
                        <span className="h-1 w-1 rounded-full bg-blue-400 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Container */}
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-blue-400/30 bg-slate-800/80 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-white">
                Stay connected with SUBSELL
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Get important updates and information directly from SUBSELL.
              </p>
            </div>

            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 text-sm text-white placeholder-slate-400 outline-none transition focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              />
              <button
                type="button"
                className="h-12 rounded-xl bg-[#0b5ed7] px-6 text-sm font-bold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-slate-800 bg-slate-900/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} SUBSELL. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 text-xs sm:text-sm">
            <Link href="#" className="text-slate-400 transition hover:text-blue-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-slate-400 transition hover:text-blue-400">
              Terms of Service
            </Link>
            <Link href="/scam-alert" className="text-slate-400 transition hover:text-blue-400">
              Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}