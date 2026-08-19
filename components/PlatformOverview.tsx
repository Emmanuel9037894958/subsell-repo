// "use client";

// import Link from "next/link";
// import {
//   CloudUpload,
//   Share2,
//   Wifi,
//   ArrowRight,
//   ShieldCheck,
//   Zap,
//   CreditCard,
//   Store,
//   BadgeCheck,
//   Users,
//   Layers,
//   BarChart3,
//   LockKeyhole,
//   Wallet,
//   Headphones,
//   CheckCircle2,
//   Smartphone,
//   Megaphone,
//   ShoppingBag,
//   Globe2,
// } from "lucide-react";

// const features = [
//   {
//     icon: ShieldCheck,
//     title: "Verified Marketplace",
//     text: "Eligible products can be reviewed before they are published to the SUBSEL marketplace.",
//   },
//   {
//     icon: LockKeyhole,
//     title: "Protected Accounts",
//     text: "SUBSEL uses authentication and security controls to help protect your account and platform activity.",
//   },
//   {
//     icon: BarChart3,
//     title: "Sales Analytics",
//     text: "Track products, orders, referrals, commissions and other important activity from your dashboard.",
//   },
//   {
//     icon: Wallet,
//     title: "Wallet & Earnings",
//     text: "View supported wallet balances, transactions, commissions and account activity in one place.",
//   },
//   {
//     icon: Users,
//     title: "Affiliate Network",
//     text: "Share eligible products through referral links and monitor qualifying affiliate activity.",
//   },
//   {
//     icon: Headphones,
//     title: "Dedicated Support",
//     text: "Get assistance with your account, marketplace activity, payments and supported SUBSEL services.",
//   },
// ];

// const utilities = [
//   {
//     icon: Wifi,
//     title: "Data Bundles",
//     label: "VTU",
//     description:
//       "Purchase supported mobile data plans through the SUBSEL utility system.",
//   },
//   {
//     icon: Smartphone,
//     title: "Airtime",
//     label: "RECHARGE",
//     description:
//       "Recharge supported networks quickly from your SUBSEL account.",
//   },
//   {
//     icon: Zap,
//     title: "Electricity",
//     label: "BILLS",
//     description:
//       "Access supported electricity payment services from one account.",
//   },
//   {
//     icon: Layers,
//     title: "Cable TV",
//     label: "TV",
//     description:
//       "Manage supported television subscriptions through SUBSEL.",
//   },
// ];

// const ecosystem = [
//   "Marketplace",
//   "VTU Services",
//   "Sponsored Ads",
//   "Sales Commissions",
//   "Trusted Vendors",
//   "Digital Products",
//   "Affiliate Marketing",
//   "Online Services",
//   "Business Promotion",
//   "Product Reselling",
//   "Digital Services",
//   "Creator Economy",
// ];

// export default function PlatformOverview() {
//   return (
//     <section className="relative overflow-hidden bg-slate-950 py-20 text-slate-100 lg:py-28">
//       {/* Background effects */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

//       <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />

//       <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

//         {/* INTRO */}
//         <div className="mx-auto max-w-3xl text-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
//             <span className="relative flex h-2 w-2">
//               <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
//               <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
//             </span>

//             SUBSEL Platform
//           </div>

//           <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
//             One platform.
//             <span className="block text-blue-500">
//               Multiple ways to grow.
//             </span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
//             SUBSEL brings digital products, marketplace selling, affiliate
//             marketing, promotional opportunities and everyday digital services
//             together in one connected ecosystem.
//           </p>
//         </div>

//         {/* LIVE ECOSYSTEM BAR */}
//         <div className="relative mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 py-4">
//           <div className="pointer-events-none absolute left-0 top-0 z-10 flex h-full items-center bg-slate-900/95 px-4">
//             <div className="flex items-center gap-2">
//               <span className="relative flex h-2.5 w-2.5">
//                 <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
//                 <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
//               </span>

//               <span className="text-[10px] font-black uppercase tracking-widest text-white">
//                 Live
//               </span>
//             </div>
//           </div>

//           <div className="overflow-hidden">
//             <div className="subsel-marquee flex min-w-max items-center pl-24">
//               {[...ecosystem, ...ecosystem].map((item, index) => (
//                 <div
//                   key={`${item}-${index}`}
//                   className="flex items-center"
//                 >
//                   <span className="px-5 text-xs font-bold text-slate-400 sm:text-sm">
//                     {item}
//                   </span>

//                   <span className="text-blue-500">•</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* TRUST FEATURES */}
//         <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature) => {
//             const Icon = feature.icon;

//             return (
//               <div
//                 key={feature.title}
//                 className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900"
//               >
//                 <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white">
//                   <Icon className="h-5 w-5" />
//                 </div>

//                 <h3 className="mt-5 text-sm font-bold text-white">
//                   {feature.title}
//                 </h3>

//                 <p className="mt-2 text-xs leading-6 text-slate-400">
//                   {feature.text}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* VENDORS & AFFILIATES */}
//         <div className="mt-20">
//           <div className="mb-10 text-center">
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400">
//               Earn Through The Ecosystem
//             </span>

//             <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
//               Built for vendors and promoters
//             </h2>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
//               Whether you have something to sell or want to promote products,
//               SUBSEL gives you tools to participate in the digital economy.
//             </p>
//           </div>

//           <div className="grid gap-6 lg:grid-cols-2">

//             {/* VENDOR CARD */}
//             <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-7 sm:p-8">
//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
//                     <CloudUpload className="h-6 w-6" />
//                   </div>

//                   <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-300">
//                     Vendor
//                   </span>
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-white">
//                   Sell your digital products
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-400">
//                   Upload courses, ebooks, templates, software, graphics,
//                   educational resources and other eligible digital products
//                   through your vendor dashboard.
//                 </p>

//                 <div className="mt-7 space-y-3">
//                   {[
//                     "Product management",
//                     "Pricing and product information",
//                     "Marketplace publishing workflow",
//                     "Sales and performance tracking",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 text-xs text-slate-300"
//                     >
//                       <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 <Link
//                   href="/vendor/register"
//                   className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white transition hover:bg-blue-500"
//                 >
//                   Become a Vendor
//                   <ArrowRight className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>

//             {/* AFFILIATE CARD */}
//             <div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-indigo-950/50 to-slate-950 p-7 sm:p-8">
//               <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-600/10 blur-3xl" />

//               <div className="relative">
//                 <div className="flex items-center justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
//                     <Share2 className="h-6 w-6" />
//                   </div>

//                   <span className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-300">
//                     Affiliate
//                   </span>
//                 </div>

//                 <h3 className="mt-6 text-xl font-bold text-white">
//                   Promote products and earn commissions
//                 </h3>

//                 <p className="mt-3 text-sm leading-6 text-slate-400">
//                   Find eligible marketplace products, generate your referral
//                   link and share it with your audience. Qualifying sales can be
//                   attributed to your affiliate account according to the
//                   applicable commission rules.
//                 </p>

//                 <div className="mt-7 space-y-3">
//                   {[
//                     "Generate affiliate links",
//                     "Track referral activity",
//                     "Monitor commissions",
//                     "View performance information",
//                   ].map((item) => (
//                     <div
//                       key={item}
//                       className="flex items-center gap-3 text-xs text-slate-300"
//                     >
//                       <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-400" />
//                       {item}
//                     </div>
//                   ))}
//                 </div>

//                 <Link
//                   href="/marketplace"
//                   className="mt-8 inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-3 text-xs font-bold text-indigo-300 transition hover:bg-indigo-500 hover:text-white"
//                 >
//                   Explore Marketplace
//                   <ShoppingBag className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* VTU */}
//         <section className="mt-20 rounded-3xl border border-slate-800 bg-slate-900/40 p-7 sm:p-10 lg:p-12">
//           <div className="flex flex-col justify-between gap-6 border-b border-slate-800 pb-8 lg:flex-row lg:items-end">
//             <div>
//               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-blue-400">
//                 <Zap className="h-4 w-4" />
//                 Digital Utilities
//               </div>

//               <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
//                 Everyday services in one place
//               </h2>

//               <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
//                 Access supported VTU and bill-payment services without leaving
//                 the SUBSEL ecosystem.
//               </p>
//             </div>

//             <Link
//               href="/vtu"
//               className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-xs font-bold text-blue-400 transition hover:bg-blue-600 hover:text-white"
//             >
//               Open VTU
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>

//           <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
//             {utilities.map((utility) => {
//               const Icon = utility.icon;

//               return (
//                 <div
//                   key={utility.title}
//                   className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 transition hover:border-blue-500/30"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
//                       <Icon className="h-5 w-5" />
//                     </div>

//                     <span className="rounded-full bg-slate-800 px-2 py-1 text-[8px] font-bold tracking-wider text-slate-400">
//                       {utility.label}
//                     </span>
//                   </div>

//                   <h3 className="mt-5 text-sm font-bold text-white">
//                     {utility.title}
//                   </h3>

//                   <p className="mt-2 text-[11px] leading-5 text-slate-500">
//                     {utility.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* DASHBOARD */}
//         <section className="mt-20 grid gap-6 lg:grid-cols-12">
//           <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7 lg:col-span-7 lg:p-9">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
//               <BarChart3 className="h-5 w-5" />
//             </div>

//             <h2 className="mt-5 text-2xl font-black text-white">
//               Everything in your dashboard
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-slate-400">
//               Keep your important platform activity organized from one account.
//               Depending on your account role, SUBSEL can bring products,
//               orders, referrals, commissions, wallet activity and account
//               information together.
//             </p>

//             <div className="mt-7 grid gap-3 sm:grid-cols-2">
//               {[
//                 "Product management",
//                 "Order activity",
//                 "Affiliate tracking",
//                 "Commission records",
//                 "Wallet activity",
//                 "Account settings",
//               ].map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-300"
//                 >
//                   <CheckCircle2 className="h-4 w-4 text-blue-500" />
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* SUPPORT */}
//           <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-950/70 to-slate-950 p-7 lg:col-span-5 lg:p-9">
//             <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white">
//               <Headphones className="h-5 w-5" />
//             </div>

//             <h2 className="mt-5 text-xl font-black text-white">
//               Need help?
//             </h2>

//             <p className="mt-3 text-sm leading-6 text-slate-300">
//               Get assistance with your account, marketplace activity, products,
//               payments and other supported SUBSEL services.
//             </p>

//             <Link
//               href="/support"
//               className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-900 transition hover:bg-blue-50"
//             >
//               Visit Support
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </section>

//         {/* TECH ACADEMY */}
//         <section className="mt-20 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-7 sm:p-9">
//           <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
//             <div className="flex items-start gap-4">
//               <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
//                 TA
//               </div>

//               <div>
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h2 className="text-xl font-black text-white">
//                     SUBSEL Tech Academy
//                   </h2>

//                   <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wider text-emerald-400">
//                     Learning Hub
//                   </span>
//                 </div>

//                 <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
//                   Learn technology, digital business, marketing, web
//                   development, design and other practical digital skills.
//                 </p>
//               </div>
//             </div>

//             <Link
//               href="/academy"
//               className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 transition hover:text-blue-300"
//             >
//               Explore Academy
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         </section>

//         {/* VENDOR CTA */}
//         <section className="relative mt-20 overflow-hidden rounded-[2rem] border border-blue-500/30 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-8 text-center sm:p-12 lg:p-16">
//           <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

//           <div className="relative mx-auto max-w-3xl">
//             <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
//               <Store className="h-7 w-7" />
//             </div>

//             <h2 className="mt-6 text-3xl font-black text-white sm:text-4xl">
//               Turn your digital skills into products.
//             </h2>

//             <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
//               Have something valuable to sell? Publish eligible digital
//               products through SUBSEL and reach customers through the
//               marketplace and promotional ecosystem.
//             </p>

//             <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
//               <Link
//                 href="/vendor/register"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-black text-blue-700 transition hover:bg-blue-50"
//               >
//                 Start Selling
//                 <ArrowRight className="h-4 w-4" />
//               </Link>

//               <Link
//                 href="/marketplace"
//                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-black text-white transition hover:bg-white/20"
//               >
//                 Browse Marketplace
//                 <ShoppingBag className="h-4 w-4" />
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* TRUST FOOTER */}
//         <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
//           <span className="flex items-center gap-2">
//             <ShieldCheck className="h-4 w-4 text-emerald-500" />
//             Security-focused
//           </span>

//           <span className="flex items-center gap-2">
//             <BadgeCheck className="h-4 w-4 text-blue-500" />
//             Verified workflows
//           </span>

//           <span className="flex items-center gap-2">
//             <Globe2 className="h-4 w-4 text-indigo-400" />
//             Digital ecosystem
//           </span>

//           <span className="flex items-center gap-2">
//             <Megaphone className="h-4 w-4 text-blue-400" />
//             Promotion tools
//           </span>
//         </div>
//       </div>

//       MARQUEE CSS
//       <style jsx>{`
//         .subsel-marquee {
//           animation: subsel-marquee 35s linear infinite;
//           will-change: transform;
//         }

//         .subsel-marquee:hover {
//           animation-play-state: paused;
//         }

//         @keyframes subsel-marquee {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         @media (max-width: 640px) {
//           .subsel-marquee {
//             animation-duration: 25s;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .subsel-marquee {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }