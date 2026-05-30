"use client";

import Image from "next/image";
import { useState } from "react";
const OpenInFullIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-current"
  >
    <path
      d="M7 17L17 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 7h8v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MusicArrowIcon = ({ direction }: { direction: "previous" | "next" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-current"
  >
    {direction === "previous" ? (
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const ExpandIcon = ({ expanded }: { expanded: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="text-current"
  >
    {expanded ? (
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <>
        <path
          d="M8 3H3v5M16 3h5v5M21 16v5h-5M3 16v5h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9L4 4M15 9l5-5M15 15l5 5M9 15l-5 5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    )}
  </svg>
);

const favoriteMusic = [
  
  {
    title: "Pag-ibig ay Kanibalismo II ",
    artist: "Fitterkarma",
    image: "/images/kanibalismo.png",
  },
  {
    title: "Kalapastangan",
    artist: "Fitterkarma",
    image: "/images/kalapastangan.jpg",
  },
  {
    title: "Konsensya",
    artist: "IV of Spades",
    image: "/images/konsensya.jpeg",
  },
  {
    title: "Golden Brown",
    artist: "The Stranglers",
    image: "/images/goldenbrown.jpg",
  },
];

const musicArcSlots = [
  "left-1/2 top-[52%] z-30 w-[45%] -translate-x-1/2 -translate-y-1/2 rotate-0 opacity-100",
  "left-[68%] top-[43%] z-20 w-[37%] -translate-x-1/2 -translate-y-1/2 rotate-[14deg] opacity-95",
  "left-1/2 top-[31%] z-10 w-[31%] -translate-x-1/2 -translate-y-1/2 rotate-0 opacity-80",
  "left-[32%] top-[43%] z-20 w-[37%] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg] opacity-95",
];
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
    image: "/images/work-wise-buddy.svg",
  },
  {
    title: "R.E.M.",
    description:
      "A real estate management platform for tracking properties, tenants, leases, expenses, documents, and analytics.",
    tag: "Business System",
    image: "/images/work-rem.svg",
  },
  {
    title: "EcoTagger",
    description:
      "A sustainability-focused tagging platform for organizing eco data, product details, and environmental insights.",
    tag: "Eco Platform",
    image: "/images/work-ecotagger.svg",
  },
  {
    title: "Bioflyt Mobile App",
    description:
      "A mobile app experience for Bioflyt with clear user flows, responsive screens, and practical product features.",
    tag: "Mobile App",
    image: "/images/work-bioflyt.svg",
  },
];

const stackCards = [
  {
    title: "Interface",
    description: "Web, mobile, and product design.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "React Native",
      "Angular",
      "Ionic",
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
    ],
  },
  {
    title: "Server",
    description: "APIs, databases, and integrations.",
    tools: [
      "Node.js",
      "Express.js",
      "Laravel",
      "RESTful APIs",
      "Axios",
      "HTTP",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Studio 3T",
    ],
  },
  {
    title: "Ship",
    description: "Debugging, version control, and deploys.",
    tools: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Firebase",
      "Vercel",
      "Netlify",
      "Postman",
      "Chrome DevTools",
      "Expo Go",
      "Android Studio",
      "Xcode",
      "Google Play Store",
      "Apple App Store",
    ],
  },
];

const detailedExperiences = [
  {
    role: "Software Developer",
    date: "March 2026 - Present",
    company: "RazeTech",
    location: "Bacolod City",
    details: [
      "Developed and maintained RazeTech's internal products, including Wise Buddy, a budgeting and expense-tracking app, and a Real Estate Management Application for managing properties, tenants, leases, bookings, and expenses.",
      "Built responsive web and mobile interfaces with a strong focus on clean UI, smooth user experience, reusable components, and mobile-first design.",
      "Used AI-assisted development tools to improve code quality, speed up debugging, generate implementation ideas, and deliver features faster across web and mobile projects.",
    ],
  },
  {
    role: "Junior Full Stack Web/Mobile Developer",
    date: "May 2025 - Feb 2026",
    company: "YouLink.Store, MediaBox, Almana Group of Companies",
    location: "Bacolod City",
    details: [
      "Developed the YouLink.store Earn, continuously implementing new features and improvements.",
      "Maintained and enhanced the youlink.store e-commerce platform through continuous improvement, bug fixing, and new feature development.",
      "Collaborated closely with both the marketing and development teams to align technical output with business goals.",
      "Provided UI/UX design solutions to enhance user experience and interface usability.",
      "Worked proactively with the QA team to ensure high-quality, bug-free releases through regular testing and feedback cycles.",
      "Strictly adhered to project timelines, ensuring on-time delivery of features and updates.",
      "Successfully deployed to App Store and Google Play Store.",
    ],
  },
  {
    role: "Freelance Software Developer",
    date: "Jan 2025 - July 2025",
    company: "BioFlyt Agriventures",
    location: "Bacolod City",
    details: [
      "Designed and developed a mobile application for waste pickup for hotels and restaurants.",
      "Created a company software solution for employee attendance tracking and product input management.",
    ],
  },
  {
    role: "Graphic Artist",
    date: "Oct 2024 - Jan 2025",
    company: "JulzSportswear",
    location: "Murcia, Negros Occidental",
    details: [
      "Designed jersey layouts for sublimation printing.",
      "Actively contributed to daily operations in the shop.",
    ],
  },
  {
    role: "Intern",
    date: "June 2024 - Oct 2024",
    company: "Deutsche Gesellschaft fur Internationale Zusammenarbeit (GIZ)",
    location: "Makati City",
    details: [
      "Developed a specific IT application, EcoTagger Web and Mobile Application, to provide tools in tracking plastic waste and packages in support of the 3RproMar project.",
      "Performed other duties and tasks at the request of the project leader / coordinator.",
      "Contributed actively to a good working climate and team working within the project.",
      "Provided UX design solutions to enhance user experience and interface usability.",
    ],
  },
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [isStackModalOpen, setIsStackModalOpen] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [activeMusicIndex, setActiveMusicIndex] = useState(0);
  const visibleWorks = showMore ? selectedWorks : selectedWorks.slice(0, 3);
  const activeMusic = favoriteMusic[activeMusicIndex];

  const showPreviousMusic = () => {
    setActiveMusicIndex((current) =>
      current === 0 ? favoriteMusic.length - 1 : current - 1,
    );
  };

  const showNextMusic = () => {
    setActiveMusicIndex((current) => (current + 1) % favoriteMusic.length);
  };

  return (
    <main className="min-h-screen bg-white text-ink">

      <header className="section-pad fixed left-0 right-0 top-4 z-40">
        <div className="mx-auto flex max-w-7xl items-center justify-between border border-black/10 bg-white/95 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.12)] backdrop-blur md:px-5">
          <a className="font-semibold tracking-tight" href="#home" aria-label="Go to top">
            Jal Devecais
          </a>
          <nav className="hidden items-center gap-6 text-sm text-black/70 md:flex">
            <a className="transition-colors hover:text-black" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-black" href="#process">
              Process
            </a>
            <a className="transition-colors hover:text-black" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="inline-flex min-h-10 cursor-pointer items-center justify-center bg-black px-4 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
            href="mailto:hello@example.com"
          >
            Start a project
          </a>
        </div>
      </header>

      <section
        id="home"
        className="section-pad bg-white pb-14 pt-32 md:pb-20 md:pt-40"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="mx-auto mb-5 w-fit border border-black/10 bg-black/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
              Software Developer
            </p>

            <h1 className="mx-auto max-w-9xl text-5xl font-semibold leading-[1.02] tracking-tight text-black md:text-7xl">
              Hi. I&apos;m Jal Devecais Software Developer based in Philippines
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/70">
              Software Developer focused on mobile apps, websites, and business systems
              with practical UI, reliable implementation, and a clear path from design
              to deployment.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 cursor-pointer items-center justify-center bg-black px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
                href="#contact"
              >
                Work with me
              </a>

              <a
                className="inline-flex min-h-12 cursor-pointer items-center justify-center border border-black/20 bg-white/70 px-6 text-sm font-semibold text-black transition-colors hover:border-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
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
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative aspect-square overflow-hidden rounded-[28px] border-[6px] border-white bg-[#F3F3F3] p-5 text-black">
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm">
                  Favorite Music
                </span>

                <div className="absolute inset-x-5 bottom-5 top-16">
                  <div className="absolute inset-x-3 top-4 h-32 rounded-[999px] border border-black/10 border-b-0" />

                  {favoriteMusic.map((music, index) => {
                    const slotIndex =
                      (index - activeMusicIndex + favoriteMusic.length) %
                      favoriteMusic.length;

                    return (
                      <article
                        key={music.title}
                        className={`absolute aspect-[4/5] overflow-hidden rounded-[18px] bg-white shadow-[0_18px_38px_rgba(0,0,0,0.18)] ring-1 ring-black/5 transition-all duration-300 ease-out ${musicArcSlots[slotIndex]}`}
                        aria-hidden={slotIndex !== 0}
                      >
                        <Image
                          src={music.image}
                          alt={`${music.title} music cover`}
                          width={360}
                          height={450}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                          <h3 className="truncate text-sm font-semibold leading-5">
                            {music.title}
                          </h3>
                          <p className="truncate text-[11px] leading-4 text-white/75">
                            {music.artist}
                          </p>
                        </div>
                      </article>
                    );
                  })}

                  <div className="absolute inset-x-0 bottom-0 z-40 flex items-end justify-between gap-3">
                    <button
                      type="button"
                      onClick={showPreviousMusic}
                      aria-label="Show previous favorite music"
                      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#F3F3F3]"
                    >
                      <MusicArrowIcon direction="previous" />
                    </button>

                    <div className="min-w-0 flex-1 text-center">
                      <p className="truncate text-sm font-semibold leading-5 text-black">
                        {activeMusic.title}
                      </p>
                      <p className="truncate text-xs leading-5 text-black/60">
                        {activeMusic.artist}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={showNextMusic}
                      aria-label="Show next favorite music"
                      className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#F3F3F3]"
                    >
                      <MusicArrowIcon direction="next" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative aspect-square rounded-[28px] border-[6px] border-white bg-[#F3F3F3] p-5 text-black">
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm">
                  Socials
                </span>
              </div>

              <div className="relative aspect-square rounded-[28px] border-[6px] border-white bg-[#F3F3F3] p-5 text-black">
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm">
                  Contact
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative aspect-square w-full overflow-hidden rounded-[28px] border-[6px] border-white bg-[#F3F3F3] p-5 text-black md:w-[calc((100%-48px)/3)]">
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm">
                  Stack
                </span>

                <div className="flex min-h-6 w-full justify-end">
                  <button
                    type="button"
                    onClick={() => setIsStackModalOpen(true)}
                    aria-label="Open full technology stack"
                    className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#F3F3F3]"
                  >
                    <ExpandIcon expanded={false} />
                  </button>
                </div>

                <div className="mt-10 flex h-[calc(100%-64px)] flex-col overflow-hidden">
                  <div className="grid grid-cols-[1fr_auto] items-start gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold leading-none tracking-tight text-black">
                        Full stack toolkit
                      </h3>
                      <p className="mt-2 max-w-[12rem] text-xs leading-5 text-black/60">
                        The core tools I use to design, build, test, and deploy products.
                      </p>
                    </div>
                    <div className="rounded-full bg-white px-3 py-2 text-right text-xs font-semibold text-black shadow-sm">
                      <p>Preview</p>
                    </div>
                  </div>

                  <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
                    <div className="grid h-full gap-2">
                      {stackCards.map((card) => {
                        const visibleTools = card.tools.slice(0, 3);

                        return (
                          <article
                            key={card.title}
                            className="flex min-h-0 flex-col rounded-[18px] border border-black/10 bg-white p-3 shadow-sm"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="min-w-0">
                                <h4 className="text-sm font-semibold leading-5 text-black">
                                  {card.title}
                                </h4>
                                <p className="mt-0.5 text-[11px] leading-4 text-black/55">
                                  {card.description}
                                </p>
                              </div>
                              <span className="shrink-0 rounded-full bg-[#F3F3F3] px-2 py-1 text-[10px] font-semibold leading-none text-black/60">
                                {card.tools.length}
                              </span>
                            </div>

                            {/* <div className="mt-3 flex flex-wrap gap-1.5">
                              {visibleTools.map((tool) => (
                                <span
                                  key={tool}
                                  className="rounded-full bg-[#F3F3F3] px-2 py-1 text-[10px] font-medium leading-none text-black/70"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div> */}
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[320px] flex-1 flex-col rounded-[28px] border-[6px] border-white bg-[#F3F3F3] p-5 text-black md:min-h-full">
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm">
                  My Experience
                </span>

              <div className="mt-16 flex w-full flex-1 flex-col items-stretch justify-center">
                <div className="flex min-h-6 w-full"></div>
                <div className="flex min-h-0 w-full flex-[3] overflow-hidden p-4">
                  <div className="relative min-h-0 w-full overflow-y-auto pr-1">
                    <span className="absolute bottom-4 left-[5px] top-2 w-px bg-black/25" />

                    <div className="relative min-w-0 pb-3 pl-7">
                      <span className="absolute left-0 top-1.5 z-10 size-3 rounded-full bg-black " />
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <p className="min-w-0 text-xs font-semibold leading-4 text-black">
                          Software Developer
                        </p>
                        <p className="shrink-0 text-right text-[10px] leading-4 text-black/70">
                          Mar 2026 - Present
                        </p>
                      </div>
                      <p className="text-[11px] leading-4 text-black/70">
                        RazeTech, Bacolod City
                      </p>
                    </div>

                    <div className="relative min-w-0 pb-3 pl-7">
                      <span className="absolute left-0 top-1.5 z-10 size-3 rounded-full bg-black " />
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <p className="min-w-0 text-xs font-semibold leading-4 text-black">
                          Junior Full Stack Web/Mobile Developer
                        </p>
                        <p className="shrink-0 text-right text-[10px] leading-4 text-black/70">
                          May 2025 - Feb 2026
                        </p>
                      </div>
                      <p className="text-[11px] leading-4 text-black/70">
                        YouLink.Store, MediaBox, Almana Group of Companies,
                        Bacolod City
                      </p>
                    </div>

                    <div className="relative min-w-0 pb-3 pl-7">
                      <span className="absolute left-0 top-1.5 z-10 size-3 rounded-full bg-black " />
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <p className="min-w-0 text-xs font-semibold leading-4 text-black">
                          Freelance Software Developer
                        </p>
                        <p className="shrink-0 text-right text-[10px] leading-4 text-black/70">
                          Jan 2025 - Jul 2025
                        </p>
                      </div>
                      <p className="text-[11px] leading-4 text-black/70">
                        BioFlyt Agriventures, Bacolod City
                      </p>
                    </div>

                    <div className="relative min-w-0 pb-3 pl-7">
                      <span className="absolute left-0 top-1.5 z-10 size-3 rounded-full bg-black " />
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <p className="min-w-0 text-xs font-semibold leading-4 text-black">
                          Graphic Artist
                        </p>
                        <p className="shrink-0 text-right text-[10px] leading-4 text-black/70">
                          Oct 2024 - Jan 2025
                        </p>
                      </div>
                      <p className="text-[11px] leading-4 text-black/70">
                        JulzSportswear, Murcia, Negros Occidental
                      </p>
                    </div>

                    <div className="relative min-w-0 pl-7">
                      <span className="absolute left-0 top-1.5 z-10 size-3 rounded-full bg-black " />
                      <div className="flex min-w-0 items-start justify-between gap-3">
                        <p className="min-w-0 text-xs font-semibold leading-4 text-black">
                          Intern
                        </p>
                        <p className="shrink-0 text-right text-[10px] leading-4 text-black/70">
                          Jun 2024 - Oct 2024
                        </p>
                      </div>
                      <p className="text-[11px] leading-4 text-black/70">
                        Deutsche Gesellschaft fur Internationale Zusammenarbeit
                        (GIZ PH), Makati City
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex min-h-6 w-full justify-end">
                  <button
                    type="button"
                    onClick={() => setIsExperienceModalOpen(true)}
                    aria-label="Open detailed experience information"
                    className="inline-flex size-8 cursor-pointer items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#F3F3F3]"
                  >
                    <OpenInFullIcon />
                  </button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="section-pad bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mx-auto mb-5 w-fit rounded-full bg-[#F3F3F3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-black shadow-[inset_0_0_0_2px_#FFFFFF]">
              Selected Work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
              Projects built with purpose, clarity, and real-world usability.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65 md:text-lg">
              Featured projects from companies I worked with, where I made major
              contributions across product direction, interface design, and development.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-6 md:grid-cols-3">
            {visibleWorks.map((work) => (
              <article
                key={work.title}
                className="flex min-h-[420px] flex-col overflow-hidden rounded-[28px] border-[6px] border-white bg-[#F3F3F3]"
              >
                <div className="relative m-6 mb-0 aspect-[16/10] overflow-hidden rounded-[20px] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]">
                  <Image
                    src={work.image}
                    alt={`${work.title} project preview`}
                    width={960}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-black shadow-sm backdrop-blur">
                    {work.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold text-black">
                    {work.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-black/65">
                    {work.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore((prev) => !prev)}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.24)] transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
            >
              {showMore ? "Show less" : "View more"}
            </button>
          </div>
        </div>
      </section>

      <section id="process" className="section-pad bg-black py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Process</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Simple, structured, and built for momentum.</h2>
          </div>
          <div className="grid gap-4">
            {workstreams.map((item, index) => (
              <article key={item.title} className="grid gap-4 border border-white/14 bg-white/10 p-5 backdrop-blur sm:grid-cols-[4rem_1fr]">
                <span className="text-2xl font-semibold text-white">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/70">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad bg-black py-20 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s turn your portfolio into a clear product story.</h2>
          </div>
          <a
            className="inline-flex min-h-12 w-fit cursor-pointer items-center justify-center bg-white px-6 text-sm font-semibold text-black transition-colors hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            href="mailto:hello@example.com"
          >
            hello@example.com
          </a>
        </div>
      </section>

      {isStackModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="stack-modal-title"
          onClick={() => setIsStackModalOpen(false)}
        >
          <div
            className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] bg-white text-black shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b border-black/10 px-5 py-5 md:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                  Technology Stack
                </p>
                <h2
                  id="stack-modal-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl"
                >
                  Full Stack Toolkit
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsStackModalOpen(false)}
                className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 md:px-7">
              <div className="grid gap-4 md:grid-cols-3">
                {stackCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-[22px] border border-black/10 bg-[#F3F3F3] p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-black">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-black/60">
                          {card.description}
                        </p>
                      </div>
                      <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-semibold text-black/60 shadow-sm">
                        {card.tools.length}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {card.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-white px-3 py-2 text-xs font-medium leading-none text-black/70 shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isExperienceModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-modal-title"
          onClick={() => setIsExperienceModalOpen(false)}
        >
          <div
            className="flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-[28px] bg-white text-black shadow-[0_24px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6 border-b border-black/10 px-5 py-5 md:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
                  Experience History
                </p>
                <h2
                  id="experience-modal-title"
                  className="mt-2 text-2xl font-semibold tracking-tight text-black md:text-3xl"
                >
                  Detailed Work Experience
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsExperienceModalOpen(false)}
                className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-full bg-black px-4 text-sm font-semibold text-white transition-opacity hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
              >
                Close
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 md:px-7">
              <div className="relative">
                <span className="absolute bottom-8 left-[7px] top-3 w-px bg-black/15" />

                <div className="space-y-7">
                  {detailedExperiences.map((experience) => (
                    <article
                      key={`${experience.role}-${experience.date}`}
                      className="relative pl-9"
                    >
                      <span className="absolute left-0 top-2 z-10 size-4 rounded-full bg-black ring-4 ring-white" />
                      <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-start">
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold leading-6 text-black">
                            {experience.role}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-black/65">
                            {experience.company}, {experience.location}
                          </p>
                        </div>

                        <p className="rounded-full bg-black/5 px-3 py-1 text-sm font-medium text-black/70 md:text-right">
                          {experience.date}
                        </p>
                      </div>

                      <ul className="mt-4 space-y-2 text-sm leading-6 text-black/70">
                        {experience.details.map((detail) => (
                          <li key={detail} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-black/35" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
