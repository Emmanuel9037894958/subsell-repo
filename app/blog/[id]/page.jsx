"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const articles = {
  1: {
    category: "Guides",
    title: "How to Get Started With SUBSELL",
    excerpt:
      "A practical introduction to SUBSELL and the steps you can take to make the most of the platform.",
    author: "SUBSELL Team",
    date: "August 18, 2026",
    readTime: "5 min read",

    content: [
      {
        heading: "Welcome to SUBSELL",
        paragraphs: [
          "SUBSELL is designed to provide a simple and professional digital environment where people can discover opportunities, connect with others and take meaningful steps forward.",
          "Whether you are completely new to the platform or simply exploring what SUBSELL offers, getting started should be straightforward.",
        ],
      },
      {
        heading: "Create your account",
        paragraphs: [
          "The first step is creating your SUBSELL account. Registration is designed to be simple, allowing you to provide the basic information needed to create your profile.",
          "Always make sure that the information you provide is accurate and that you protect your account credentials.",
        ],
      },
      {
        heading: "Explore the platform",
        paragraphs: [
          "Once your account has been created, take some time to explore the different sections of SUBSELL.",
          "The platform includes areas dedicated to discovering information, learning about the community, viewing opportunities and accessing helpful resources.",
        ],
      },
      {
        heading: "Protect your account",
        paragraphs: [
          "Your account security should always be a priority. Never share your password, authentication codes or other sensitive information with another person.",
          "If someone contacts you claiming to represent SUBSELL and asks for sensitive information, verify the request before taking any action.",
        ],
      },
      {
        heading: "Make the most of SUBSELL",
        paragraphs: [
          "The best way to use SUBSELL is to explore the platform, stay informed and make decisions carefully.",
          "As the platform grows, more features and resources will become available to members.",
        ],
      },
    ],
  },

  2: {
    category: "Safety",
    title: "How to Protect Yourself From Online Scams",
    excerpt:
      "Learn how to identify suspicious requests, fake offers, impersonation attempts and other common online scams.",
    author: "SUBSELL Safety Team",
    date: "August 16, 2026",
    readTime: "6 min read",

    content: [
      {
        heading: "Why online safety matters",
        paragraphs: [
          "The internet provides incredible opportunities, but it also creates opportunities for dishonest people to target unsuspecting users.",
          "Understanding common warning signs can help you make safer decisions online.",
        ],
      },
      {
        heading: "Be careful with unexpected messages",
        paragraphs: [
          "Be cautious when someone unexpectedly contacts you with an offer that sounds unusually good or creates pressure for you to act immediately.",
          "Take time to verify who you are communicating with before providing information or sending money.",
        ],
      },
      {
        heading: "Never share sensitive information",
        paragraphs: [
          "Your passwords, verification codes, PINs and other private credentials should remain private.",
          "A legitimate support representative should not require you to publicly disclose sensitive account credentials.",
        ],
      },
      {
        heading: "Watch for impersonation",
        paragraphs: [
          "Scammers may pretend to be employees, businesses or other trusted individuals.",
          "Check official communication channels and verify information independently whenever something seems suspicious.",
        ],
      },
      {
        heading: "Report suspicious activity",
        paragraphs: [
          "If you encounter suspicious activity connected to SUBSELL, use the appropriate reporting channel so that the situation can be reviewed.",
        ],
      },
    ],
  },

  3: {
    category: "Business",
    title: "Building Trust in the Digital Economy",
    excerpt:
      "Why transparency, communication and responsible digital practices matter when building an online business.",
    author: "SUBSELL Team",
    date: "August 14, 2026",
    readTime: "7 min read",

    content: [
      {
        heading: "Trust is a foundation",
        paragraphs: [
          "Digital businesses depend heavily on trust. Customers want to know who they are dealing with and what they can expect.",
          "Businesses that communicate clearly and operate responsibly are more likely to build lasting relationships.",
        ],
      },
      {
        heading: "Transparency matters",
        paragraphs: [
          "Clear information helps users understand products, services, expectations and responsibilities.",
          "Avoiding misleading information is one of the simplest ways to create a healthier digital environment.",
        ],
      },
      {
        heading: "Communication creates confidence",
        paragraphs: [
          "Good communication helps customers understand what is happening and gives them confidence when making decisions.",
        ],
      },
      {
        heading: "Build for the long term",
        paragraphs: [
          "A strong digital business should focus on creating genuine value rather than chasing short-term results.",
        ],
      },
    ],
  },

  4: {
    category: "Tips",
    title: "5 Ways to Build a Strong Online Presence",
    excerpt:
      "Simple strategies that can help individuals and businesses present themselves professionally online.",
    author: "SUBSELL Team",
    date: "August 12, 2026",
    readTime: "4 min read",

    content: [
      {
        heading: "1. Keep your information clear",
        paragraphs: [
          "Visitors should quickly understand who you are, what you do and what you offer.",
        ],
      },
      {
        heading: "2. Use professional branding",
        paragraphs: [
          "Consistent colors, typography, imagery and messaging can make your online presence feel more trustworthy.",
        ],
      },
      {
        heading: "3. Share useful content",
        paragraphs: [
          "Publishing useful information can help demonstrate your knowledge and provide genuine value to your audience.",
        ],
      },
      {
        heading: "4. Communicate professionally",
        paragraphs: [
          "Respond to questions respectfully and provide clear information whenever people interact with your business.",
        ],
      },
      {
        heading: "5. Keep improving",
        paragraphs: [
          "An online presence should evolve as your audience, business and goals change.",
        ],
      },
    ],
  },

  5: {
    category: "Community",
    title: "Why Community Matters Online",
    excerpt:
      "Discover how meaningful communities can create better opportunities for people to connect and grow.",
    author: "SUBSELL Team",
    date: "August 10, 2026",
    readTime: "5 min read",

    content: [
      {
        heading: "People are at the center",
        paragraphs: [
          "Technology becomes more useful when it helps people communicate, collaborate and discover opportunities.",
        ],
      },
      {
        heading: "Creating meaningful connections",
        paragraphs: [
          "A strong community is built through respectful communication and shared value.",
        ],
      },
      {
        heading: "Responsible participation",
        paragraphs: [
          "Every member contributes to the quality of an online community. Treating others respectfully helps create a healthier environment.",
        ],
      },
    ],
  },

  6: {
    category: "Guides",
    title: "Creating a Better Digital Experience",
    excerpt:
      "A look at some of the principles behind creating digital platforms that are simple, accessible and trustworthy.",
    author: "SUBSELL Team",
    date: "August 8, 2026",
    readTime: "6 min read",

    content: [
      {
        heading: "Simplicity matters",
        paragraphs: [
          "A good digital experience should not force users to struggle to understand how a platform works.",
        ],
      },
      {
        heading: "Design around real people",
        paragraphs: [
          "Interfaces should be designed around the needs and expectations of the people using them.",
        ],
      },
      {
        heading: "Make information accessible",
        paragraphs: [
          "Important information should be easy to find, understand and use.",
        ],
      },
      {
        heading: "Build trust into the experience",
        paragraphs: [
          "Clear communication, security and transparency can make users feel more confident when interacting with a platform.",
        ],
      },
    ],
  },
};

export default function BlogArticle() {
  const params = useParams();
  const article = articles[params.id];

  if (!article) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eef6ff] text-2xl font-bold text-[#0b5ed7]">
            !
          </div>

          <h1 className="mt-6 text-3xl font-extrabold text-slate-950">
            Article not found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            The article you're looking for doesn't exist or may have been
            removed.
          </p>

          <Link
            href="/blog"
            className="mt-7 inline-flex rounded-xl bg-[#0b5ed7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#083b8a]"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#083b8a]">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-blue-200 transition hover:text-white"
          >
            ← Back to Blog
          </Link>

          <div className="mt-8">
            <span className="inline-flex rounded-full bg-white px-3.5 py-2 text-xs font-bold text-[#0b5ed7]">
              {article.category}
            </span>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-xl lg:text-4xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              {article.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-blue-200">
              <span className="font-semibold text-white">{article.author}</span>

              <span>•</span>

              <span>{article.date}</span>

              <span>•</span>

              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE LAYOUT */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8 lg:py-20">
          {/* ARTICLE */}
          <article className="max-w-3xl">
            {/* Intro */}
            <div className="rounded-2xl border border-blue-100 bg-[#eef6ff] p-6 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
                In this article
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                {article.excerpt}
              </p>
            </div>

            {/* Content */}
            <div className="mt-10 space-y-10">
              {article.content.map((section, index) => (
                <section key={index}>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    {section.heading}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* ARTICLE END */}
            <div className="mt-14 border-t border-slate-200 pt-8">
              <p className="text-sm font-semibold text-slate-500">
                Thanks for reading this SUBSELL article.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0b5ed7] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#083b8a]"
                >
                  Explore more articles
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-[#eef6ff] hover:text-[#0b5ed7]"
                >
                  Contact SUBSELL
                </Link>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {/* About */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef6ff] text-xl font-black text-[#0b5ed7]">
                S
              </div>

              <h3 className="mt-5 font-bold text-slate-950">About SUBSELL</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                SUBSELL is building a professional platform focused on helping
                people connect, discover opportunities and grow.
              </p>

              <Link
                href="/about"
                className="mt-4 inline-block text-sm font-bold text-[#0b5ed7] hover:underline"
              >
                Learn more →
              </Link>
            </div>

            {/* Safety */}
            <div className="mt-4 rounded-2xl bg-[#083b8a] p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-bold text-[#083b8a]">
                !
              </div>

              <h3 className="mt-5 font-bold text-white">Stay safe online</h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Learn how to recognize suspicious activity and protect your
                personal information.
              </p>

              <Link
                href="/scam-alert"
                className="mt-4 inline-block text-sm font-bold text-white hover:underline"
              >
                Scam Alert →
              </Link>
            </div>

            {/* Quick links */}
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-bold text-slate-950">Quick links</h3>

              <div className="mt-4 space-y-3">
                <Link
                  href="/trust"
                  className="block text-sm font-medium text-slate-600 hover:text-[#0b5ed7]"
                >
                  Trust & Safety →
                </Link>

                <Link
                  href="/faq"
                  className="block text-sm font-medium text-slate-600 hover:text-[#0b5ed7]"
                >
                  Frequently Asked Questions →
                </Link>

                <Link
                  href="/contact"
                  className="block text-sm font-medium text-slate-600 hover:text-[#0b5ed7]"
                >
                  Contact us →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
            Continue exploring
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Discover more from SUBSELL.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
            Explore more guides, insights and resources created for the SUBSELL
            community.
          </p>

          <Link
            href="/blog"
            className="mt-7 inline-flex rounded-xl bg-[#0b5ed7] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-[#083b8a]"
          >
            Browse all articles
          </Link>
        </div>
      </section>
    </main>
  );
}
