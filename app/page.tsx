"use client";

import { useState } from "react";

const workstreams = [
  {
    title: "Discovery",
    copy: "Clarify the offer, audience, and page architecture before the interface gets dressed."
  },
  {
    title: "Build",
    copy: "Ship responsive Next.js and Tailwind interfaces with clean components and practical motion."
  },
  {
    title: "Refine",
    copy: "Tighten spacing, hierarchy, accessibility, and conversion details until the page feels ready."
  }
];

const selectedWorks = [
  {
    title: "Wise Buddy",
    description:
      "A mobile budgeting app with receipt scanning, spending insights, budget limits, and split-bill sharing.",
    tag: "Mobile App",
  },
  {
    title: "R.E.M.",
    description:
      "A real estate management platform for tracking properties, tenants, leases, expenses, documents, and analytics.",
    tag: "Business System",
  },
  {
    title: "Raze Tech Website",
    description:
      "A modern company website built with strong visual direction, responsive layouts, and polished interactions.",
    tag: "Website",
  },
  {
    title: "Atlas Legal Platform",
    description:
      "A legal marketplace concept with role-based onboarding, secure case vaults, chat, billing, and firm discovery.",
    tag: "Web Platform",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal developer portfolio designed to present services, experience, stack, and selected projects.",
    tag: "Portfolio",
  },
];


export default function Home() {
    const [showMore, setShowMore] = useState(false);

  const visibleWorks = showMore ? selectedWorks : selectedWorks.slice(0, 3);

  
  
  return (
    <main className="min-h-screen bg-[#fff8f0] text-ink">
      <div className="grain" />

      <header className="section-pad fixed left-0 right-0 top-4 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-orange-200/70 bg-white/82 px-4 py-3 shadow-[0_18px_60px_rgba(234,88,12,0.16)] backdrop-blur md:px-5">
          <a className="font-semibold tracking-tight" href="#home" aria-label="Go to top">
            Jal Devecais
          </a>
          <nav className="hidden items-center gap-6 text-sm text-orange-950/68 md:flex">
            <a className="transition-colors hover:text-orange-600" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-orange-600" href="#process">
              Process
            </a>
            <a className="transition-colors hover:text-orange-600" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="inline-flex min-h-10 cursor-pointer items-center justify-center bg-gradient-to-r from-orange-600 to-amber-500 px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
            href="mailto:hello@example.com"
          >
            Start a project
          </a>
        </div>
      </header>
<section
  id="home"
  className="section-pad relative overflow-hidden bg-[radial-gradient(circle_at_20%_18%,rgba(251,146,60,0.42),transparent_32%),linear-gradient(135deg,#fff7ed_0%,#ffedd5_42%,#ffffff_100%)] pb-14 pt-32 md:pb-20 md:pt-40"
>
  <div className="absolute right-0 top-20 h-72 w-72 bg-gradient-to-br from-orange-500/24 to-amber-300/14 blur-3xl" />
  <div className="absolute bottom-0 left-1/2 h-56 w-[42rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange-300/28 to-transparent blur-3xl" />

  <div className="mx-auto flex max-w-7xl items-center justify-center">
    <div className="relative z-10 mx-auto max-w-4xl text-center">
      <p className="mx-auto mb-5 w-fit border border-orange-300/70 bg-white/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 shadow-[0_10px_28px_rgba(234,88,12,0.12)]">
        Software Developer
      </p>

      <h1 className="mx-auto max-w-9xl text-5xl font-semibold leading-[1.02] tracking-tight text-orange-950 md:text-7xl">
        Hi. I&apos;m Jal Devecais Software Developer based in Philippines
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-orange-950/68">
        Software Developer focused on mobile apps, websites, and business systems
        with practical UI, reliable implementation, and a clear path from design
        to deployment.
      </p>

      <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          className="inline-flex min-h-12 cursor-pointer items-center justify-center bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.28)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-50"
          href="#contact"
        >
          Work with me
        </a>

        <a
          className="inline-flex min-h-12 cursor-pointer items-center justify-center border border-orange-300/80 bg-white/60 px-6 text-sm font-semibold text-orange-950 transition-colors hover:border-orange-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-orange-50"
          href="#services"
        >
          View services
        </a>
      </div>
    </div>
  </div>
</section>

     <section id="grid-section" className="section-pad bg-[#f5f5f7] py-20">
  <div className="mx-auto max-w-7xl px-4">
    <div className="space-y-6">
      {/* Top row: 3 square cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="relative aspect-square rounded-[28px] bg-[#F3F3F3] p-5 text-orange-950 shadow-[inset_0_0_0_6px_#FFFFFF]">
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
            Favorite Music
          </span>
        </div>

        <div className="relative aspect-square rounded-[28px] bg-[#F3F3F3] p-5 text-orange-950 shadow-[inset_0_0_0_6px_#FFFFFF]">
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
            Socials
          </span>
        </div>

        <div className="relative aspect-square rounded-[28px] bg-[#F3F3F3] p-5 text-orange-950 shadow-[inset_0_0_0_6px_#FFFFFF]">
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
            Contact
          </span>
        </div>
      </div>

      {/* Bottom row: 4 normal size, 5 wider */}
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="relative aspect-square w-full rounded-[28px] bg-[#F3F3F3] p-5 text-orange-950 shadow-[inset_0_0_0_6px_#FFFFFF] md:w-[calc((100%-48px)/3)]">
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
            Stack
          </span>
        </div>

        <div className="relative min-h-full flex-1 rounded-[28px] bg-[#F3F3F3] p-5 text-orange-950 shadow-[inset_0_0_0_6px_#FFFFFF]">
          <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
            My Experience
          </span>
        </div>
      </div>
    </div>
  </div>
</section>



   <section id="selected-work" className="section-pad bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mx-auto mb-5 w-fit rounded-full bg-[#F3F3F3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-950 shadow-[inset_0_0_0_2px_#FFFFFF]">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-orange-950 md:text-6xl">
            Projects built with purpose, clarity, and real-world usability.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-950/65 md:text-lg">
            A collection of mobile apps, websites, and business systems focused
            on clean design, practical features, and reliable implementation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleWorks.map((work) => (
            <div
              key={work.title}
              className="relative min-h-[320px] rounded-[28px] bg-[#F3F3F3] p-6 shadow-[inset_0_0_0_6px_#FFFFFF]"
            >
              <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-orange-950 shadow-sm">
                {work.tag}
              </span>

              <div className="flex h-full flex-col justify-end pt-20">
                <h3 className="text-2xl font-semibold text-orange-950">
                  {work.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-orange-950/65">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-400 px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(234,88,12,0.24)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-white"
          >
            {showMore ? "Show less" : "View more"}
          </button>
        </div>
      </div>
    </section>



      <section id="process" className="section-pad bg-gradient-to-br from-orange-950 via-orange-800 to-orange-600 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-100/70">Process</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Simple, structured, and built for momentum.</h2>
          </div>
          <div className="grid gap-4">
            {workstreams.map((item, index) => (
              <article key={item.title} className="grid gap-4 border border-white/14 bg-white/8 p-5 backdrop-blur sm:grid-cols-[4rem_1fr]">
                <span className="text-2xl font-semibold text-amber-200">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 leading-7 text-orange-50/72">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-[linear-gradient(135deg,#ffedd5_0%,#fb923c_48%,#c2410c_100%)] py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s turn your portfolio into a clear product story.</h2>
          </div>
          <a
            className="inline-flex min-h-12 w-fit cursor-pointer items-center justify-center bg-white px-6 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-600"
            href="mailto:hello@example.com"
          >
            hello@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
