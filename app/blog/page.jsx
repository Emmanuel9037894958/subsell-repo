"use client"; 
 
import Link from "next/link"; 
import { useState } from "react"; 
 
const categories = ["All", "Business", "Guides", "Safety", "Community", "Tips"]; 
 
const articles = [ 
  { 
    id: 1, 
    category: "Guides", 
    title: "How to Get Started With SUBSEL", 
    excerpt: 
      "A practical introduction to SUBSELL and the steps you can take to make the most of the platform.", 
    author: "SUBSEL Team", 
    date: "August 18, 2026", 
    readTime: "5 min read", 
    featured: true, 
    image: "/crop1.png",
  }, 
  { 
    id: 2, 
    category: "Safety", 
    title: "How to Protect Yourself From Online Scams", 
    excerpt: 
      "Learn how to identify suspicious requests, fake offers, impersonation attempts and other common online scams.", 
    author: "SUBSEL Safety Team", 
    date: "August 16, 2026", 
    readTime: "6 min read", 
    image: "/crop2.png",
  }, 
  { 
    id: 3, 
    category: "Business", 
    title: "Building Trust in the Digital Economy", 
    excerpt: 
      "Why transparency, communication and responsible digital practices matter when building an online business.", 
    author: "SUBSEL Team", 
    date: "August 14, 2026", 
    readTime: "7 min read", 
    image: "/crop3.png",
  }, 
  { 
    id: 4, 
    category: "Tips", 
    title: "5 Ways to Build a Strong Online Presence", 
    excerpt: 
      "Simple strategies that can help individuals and businesses present themselves professionally online.", 
    author: "SUBSEL Team", 
    date: "August 12, 2026", 
    readTime: "4 min read", 
    image: "/crop4.png",
  }, 
  { 
    id: 5, 
    category: "Community", 
    title: "Why Community Matters Online", 
    excerpt: 
      "Discover how meaningful communities can create better opportunities for people to connect and grow.", 
    author: "SUBSEL Team", 
    date: "August 10, 2026", 
    readTime: "5 min read", 
    image: "/crop5.png",
  }, 
  { 
    id: 6, 
    category: "Guides", 
    title: "Creating a Better Digital Experience", 
    excerpt: 
      "A look at some of the principles behind creating digital platforms that are simple, accessible and trustworthy.", 
    author: "SUBSEL Team", 
    date: "August 8, 2026", 
    readTime: "6 min read", 
    image: "/crop6.png",
  }, 
]; 
 
function ArticleCard({ article }) { 
  return ( 
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50"> 
      {/* Image */} 
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#eef6ff] to-blue-100"> 
        <img 
          src={article.image} 
          alt={article.title} 
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
        /> 
 
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b5ed7] shadow-sm"> 
          {article.category}     
        </span> 
      </div> 
 
      {/* Content */} 
      <div className="p-5"> 
        <div className="flex items-center gap-2 text-xs text-slate-400"> 
          <span>{article.date}</span> 
          <span>•</span> 
          <span>{article.readTime}</span> 
        </div> 
 
        <h3 className="mt-3 text-lg font-bold leading-6 text-slate-950 transition group-hover:text-[#0b5ed7]"> 
          {article.title} 
        </h3> 
 
        <p className="mt-3 text-sm leading-6 text-slate-600"> 
          {article.excerpt} 
        </p> 
 
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"> 
          <span className="text-xs font-semibold text-slate-500"> 
            {article.author} 
          </span> 
 
          <Link 
            href={`/blog/${article.id}`} 
            className="text-sm font-bold text-[#0b5ed7] hover:underline" 
          > 
            Read article → 
          </Link> 
        </div> 
      </div> 
    </article> 
  ); 
} 
 
export default function BlogPage() { 
  const [activeCategory, setActiveCategory] = useState("All"); 
  const [search, setSearch] = useState(""); 
 
  const filteredArticles = articles.filter((article) => { 
    const matchesCategory = 
      activeCategory === "All" || article.category === activeCategory; 
 
    const matchesSearch = 
      article.title.toLowerCase().includes(search.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(search.toLowerCase()); 
 
    return matchesCategory && matchesSearch; 
  }); 
 
  const featuredArticle = articles.find((article) => article.featured); 
 
  return ( 
    <main className="min-h-screen bg-white"> 
      {/* ================= HERO ================= */} 
      <section className="relative overflow-hidden border-b border-slate-100 bg-white"> 
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#eef6ff] blur-3xl" /> 
 
        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-24"> 
          <div className="max-w-3xl"> 
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-[#eef6ff] px-4 py-2 text-xs font-bold text-[#0b5ed7]"> 
              <span className="h-2 w-2 rounded-full bg-[#0b5ed7]" /> 
              SUBSEL Insights 
            </div> 
 
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"> 
              Ideas, insights & 
              <span className="text-[#0b5ed7]"> useful knowledge.</span> 
            </h1> 
 
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"> 
              Explore guides, safety tips, business insights and stories 
              designed to help you navigate the digital world with confidence. 
            </p> 
          </div> 
        </div> 
      </section> 
 
      {/* ================= SEARCH ================= */} 
      <section className="border-b border-slate-100 bg-slate-50"> 
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"> 
            {/* Search */} 
            <div className="relative w-full lg:max-w-md"> 
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"> 
                ⌕ 
              </span> 
 
              <input 
                type="search" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Search articles..." 
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-50" 
              /> 
            </div> 
 
            {/* Categories */} 
            <div className="mt-2 flex w-full gap-2 overflow-x-auto pb-2"> 
              {categories.map((category) => ( 
                <button 
                  key={category} 
                  type="button" 
                  onClick={() => setActiveCategory(category)} 
                  className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${ 
                    activeCategory === category 
                      ? "bg-[#0b5ed7] text-white shadow-md shadow-blue-100" 
                      : "border border-slate-200 bg-white text-slate-600 hover:border-[#0b5ed7] hover:bg-[#eef6ff] hover:text-[#0b5ed7]" 
                  }`} 
                > 
                  {category} 
                </button> 
              ))} 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ================= FEATURED ARTICLE ================= */} 
      <section className="bg-white"> 
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"> 
          <div className="mb-8"> 
            <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]"> 
              Featured 
            </p> 
 
            <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl"> 
              Start here 
            </h2> 
          </div> 
 
          <div className="overflow-hidden rounded-3xl border border-blue-100 bg-[#eef6ff]"> 
            <div className="grid lg:grid-cols-2"> 
              {/* Visual */} 
              <div className="relative min-h-[280px] overflow-hidden bg-[#083b8a] sm:min-h-[350px]"> 
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover"
                />
              </div> 
 
              {/* Content */} 
              <div className="p-7 sm:p-10"> 
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#0b5ed7]"> 
                  {featuredArticle.category} 
                </span> 
 
                <h2 className="mt-5 text-2xl font-extrabold leading-tight text-slate-950 sm:text-3l"> 
                  {featuredArticle.title} 
                </h2> 
 
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base"> 
                  {featuredArticle.excerpt} 
                </p> 
 
                <div className="mt-6 flex items-center gap-3 text-xs text-slate-500"> 
                  <span>{featuredArticle.author}</span> 
                  <span>•</span> 
                  <span>{featuredArticle.readTime}</span> 
                </div> 
 
                <Link 
                  href={`/blog/${featuredArticle.id}`} 
                  className="mt-7 inline-flex min-h-11 items-center justify-center rounded-xl bg-[#0b5ed7] px-6 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-[#083b8a]" 
                > 
                  Read featured article 
                </Link> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ================= ARTICLES ================= */} 
      <section className="bg-slate-50"> 
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"> 
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"> 
            <div> 
              <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]"> 
                Latest articles 
              </p> 
 
              <h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl"> 
                Explore our latest insights 
              </h2> 
            </div> 
 
            <p className="text-sm text-slate-500"> 
              {filteredArticles.length} articles 
            </p> 
          </div> 
 
          {filteredArticles.length > 0 ? ( 
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"> 
              {filteredArticles.map((article) => ( 
                <ArticleCard key={article.id} article={article} /> 
              ))} 
            </div> 
          ) : ( 
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-10 text-center"> 
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef6ff] text-xl text-[#0b5ed7]"> 
                ? 
              </div> 
 
              <h3 className="mt-4 font-bold text-slate-950"> 
                No articles found 
              </h3> 
 
              <p className="mt-2 text-sm text-slate-500"> 
                Try another search term or category. 
              </p> 
            </div> 
          )} 
        </div> 
      </section> 
 
      {/* ================= SAFETY FEATURE ================= */} 
      <section className="bg-white"> 
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-20"> 
          <div className="rounded-3xl bg-[#083b8a] p-7 sm:p-10 lg:p-14"> 
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"> 
              <div> 
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-[#083b8a]"> 
                  ! 
                </div> 
 
                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl"> 
                  Stay informed. Stay protected. 
                </h2> 
 
                <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base"> 
                  Online scams can take many forms. Learn how to recognize 
                  suspicious activity and protect your account and personal 
                  information. 
                </p> 
              </div> 
 
              <Link 
                href="/scam-alert" 
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-bold text-[#083b8a] transition hover:bg-blue-50" 
              > 
                Visit Scam Alert 
              </Link> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ================= NEWSLETTER ================= */} 
      <section className="border-t border-slate-100 bg-slate-50"> 
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 lg:py-20"> 
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-xl font-bold text-[#0b5ed7]"> 
            ✉ 
          </div> 
 
          <h2 className="mt-5 text-2xl font-bold text-slate-950 sm:text-3xl"> 
            Stay ahead with SUBSEL 
          </h2> 
 
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600"> 
            Get useful insights, platform updates and important safety 
            information delivered to you. 
          </p> 
 
          <form className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row"> 
            <input 
              type="email" 
              required 
              placeholder="Enter your email address" 
              className="h-12 flex-1 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#0b5ed7] focus:ring-4 focus:ring-blue-50" 
            /> 
 
            <button 
              type="submit" 
              className="h-12 rounded-xl bg-[#0b5ed7] px-6 text-sm font-bold text-white transition hover:bg-[#083b8a]" 
            > 
              Subscribe 
            </button> 
          </form> 
 
          <p className="mt-4 text-xs text-slate-400"> 
            No spam. You can unsubscribe at any time. 
          </p> 
        </div> 
      </section> 
    </main> 
  ); 
}