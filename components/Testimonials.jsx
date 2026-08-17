"use client";

const testimonials = [
  {
    name: "Chukwuemeka Okafor",
    location: "Nigeria",
    role: "SUBSELL User",
    verified: false,
    image: "CO",
    message:
      "The platform is clean, straightforward and very easy to navigate. I especially like how everything is organized.",
  },
  {
    name: "Amaka Nwosu",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "AN",
    message:
      "The mobile experience is simple and professional. I can find what I need without getting confused.",
  },
  {
    name: "Tunde Adeyemi",
    location: "Nigeria",
    role: "SUBSELL User",
    verified: false,
    image: "TA",
    message:
      "I like the overall structure of the platform. The interface feels modern and easy to understand.",
  },
  {
    name: "Oluwaseun Adebayo",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "OA",
    message:
      "The website has a clean design and the navigation is very straightforward.",
  },
  {
    name: "Ifeoma Eze",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "IE",
    message:
      "The platform feels well organized and I really appreciate the simple user experience.",
  },
  {
    name: "Daniel Williams",
    location: "United Kingdom",
    role: "SUBSELL Member",
    verified: false,
    image: "DW",
    message:
      "The interface is clean and professional. Everything is presented in a very understandable way.",
  },
  {
    name: "Adaobi Anukwu",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "AA",
    message:
      "I like how easy it is to move between different sections of the platform.",
  },
  {
    name: "Yusuf Balogun",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "YB",
    message:
      "The website has a very polished feel. It works nicely on my phone as well.",
  },
  {
    name: "Kelechi Obi",
    location: "Nigeria",
   role: "SUBSELL Member",
    verified: false,
    image: "KO",
    message:
      "The information is presented clearly and the overall experience feels professional.",
  },
  {
    name: "Sarah Thompson",
    location: "United Kingdom",
    role: "SUBSELL Member",
    verified: true,
    image: "ST",
    message:
      "I really like the clean layout. The platform feels simple without looking basic.",
  },
  {
    name: "Nnamdi Eze",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: true,
    image: "NE",
    message:
      "The navigation is simple and the website looks very professional across different screen sizes.",
  },
  {
    name: "Yetunde Ogunleye",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: true,
    image: "YO",
    message:
      "Everything feels well structured and easy to access. I like the attention to detail.",
  },
  {
    name: "Chinonso Okeke",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "CO",
    message:
      "The platform has a modern design and the user experience is very straightforward.",
  },
  {
    name: "Michael Johnson",
    location: "United Kingdom",
    role: "SUBSELL Member",
    verified: true,
    image: "MJ",
    message:
      "The website is easy to navigate and doesn't overwhelm you with unnecessary information.",
  },
  {
    name: "Ngozi Ezeani",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "NE",
    message:
      "I like the professional appearance and how clearly the different sections are presented.",
  },
  {
    name: "Temitope Williams",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: true,
    image: "TW",
    message:
      "The mobile interface is particularly nice. It feels designed for people who use their phones.",
  },
  {
    name: "Obinna Maduka",
    location: "Nigeria",
   role: "SUBSELL Member",
    verified: false,
    image: "OM",
    message:
      "The platform is clean, fast to understand and easy to move around.",
  },
  {
    name: "Emily Carter",
    location: "United Kingdom",
    role: "SUBSELL Member",
    verified: true,
    image: "EC",
    message:
      "The design feels professional and modern while still being very easy to use.",
  },
  {
    name: "Ikenna Umeh",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: false,
    image: "IU",
    message:
      "The structure of the website makes it easy to understand where everything is located.",
  },
  {
    name: "Aisha Oladipo",
    location: "Nigeria",
    role: "SUBSELL Member",
    verified: true,
    image: "AO",
    message:
      "The overall experience is clean and organized. I like how simple the interface is.",
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <article className="w-[280px] min-w-[280px] shrink-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:w-[340px] sm:min-w-[340px] sm:p-6">

      {/* Profile */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 min-w-[44px] items-center justify-center rounded-full bg-[#eef6ff] text-sm font-bold text-[#0b5ed7]">
          {testimonial.image}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-slate-950">
            {testimonial.name}
          </h3>

          <p className="truncate text-xs text-slate-500">
            {testimonial.location} · {testimonial.role}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4">
        <span className="text-sm tracking-wider text-[#0b5ed7]">
          ★★★★★
        </span>
      </div>

      {/* Message */}
      <p className="mt-4 text-sm leading-6 text-slate-600">
        "{testimonial.message}"
      </p>

      {/* Verification */}
      <div className="mt-5 border-t border-slate-100 pt-4">
        {testimonial.verified ? (
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-[10px]">
              ✓
            </span>
            Verified user
          </span>
        ) : (
          <span className="text-xs font-medium text-slate-400">
            Demo testimonial
          </span>
        )}
      </div>
    </article>
  );
}


export default function Testimonials() {
  const firstRow = testimonials.slice(0, 10);
  const secondRow = testimonials.slice(10);

  return (
    <section className="overflow-hidden bg-slate-50 py-5">

      {/* Heading */}
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0b5ed7]">
          User Experiences
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          What people are saying
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Feedback from members of the SUBSELL community.
        </p>
      </div>


      {/* FIRST ROW — RIGHT TO LEFT */}
      <div className="testimonial-window mt-10">
        <div className="testimonial-track testimonial-left">

          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={`first-a-${index}`}
              testimonial={testimonial}
            />
          ))}

          {firstRow.map((testimonial, index) => (
            <TestimonialCard
              key={`first-b-${index}`}
              testimonial={testimonial}
            />
          ))}

        </div>
      </div>


      {/* SECOND ROW — LEFT TO RIGHT */}
      <div className="testimonial-window mt-4">
        <div className="testimonial-track testimonial-right">

          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={`second-a-${index}`}
              testimonial={testimonial}
            />
          ))}

          {secondRow.map((testimonial, index) => (
            <TestimonialCard
              key={`second-b-${index}`}
              testimonial={testimonial}
            />
          ))}

        </div>
      </div>

    </section>
  );
}