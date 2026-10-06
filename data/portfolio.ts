export const profile = {
  name: "Jal Devecais",
  role: "Software Developer",
  location: "Bacolod City, Philippines",
  summary:
    "Software Developer focused on mobile apps, websites, and business systems with practical UI, reliable implementation, and a clear path from design to deployment.",
  email: "jaldevecais2@gmail.com",
  phoneDisplay: "09922472512",
  phoneHref: "tel:+639922472512",
  resumeHref: "/resume.pdf",
  github: { handle: "POORSAKEN2", href: "https://github.com/POORSAKEN2" },
  linkedin: {
    handle: "Jal Devecais",
    href: "https://www.linkedin.com/in/jal-devecais-0709222b6/",
  },
};

export const gmailCompose = (subject = "", body = "") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` +
  (subject ? `&su=${encodeURIComponent(subject)}` : "") +
  (body ? `&body=${encodeURIComponent(body)}` : "");

export type Project = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  techStack: string[];
  company?: string;
};

export const projects: Project[] = [
  {
    slug: "wise-buddy",
    title: "Wise Buddy",
    tag: "Mobile App",
    company: "RazeTech",
    description:
      "A mobile budgeting app with receipt scanning, spending insights, budget limits, and split-bill sharing.",
    image: "/images/wisebuddy.jpg",
    techStack: ["React Native", "NativeWind", "OCR Kit", "Laravel", "MariaDB"],
  },
  {
    slug: "real-estate-management",
    title: "Real Estate Management",
    tag: "Business System",
    company: "RazeTech",
    description:
      "A real estate management platform for tracking properties, tenants, leases, expenses, documents, and analytics.",
    image: "/images/rem.jpeg",
    techStack: ["React Native", "Laravel", "NativeWind", "PostgreSQL", "Next.js", "Tailwind CSS"],
  },
  {
    slug: "ecotagger",
    title: "EcoTagger",
    tag: "Eco Platform",
    company: "GIZ",
    description:
      "A sustainability-focused tagging platform for tracking plastic waste and packages, built in support of the 3RproMar project.",
    image: "/images/ecotagger.png",
    techStack: ["React Native", "Node.js + Express", "CSS"],
  },
  {
    slug: "youlink-earn",
    title: "YouLink Earn",
    tag: "Mobile App",
    company: "YouLink.Store",
    description:
      "YouLink.Store lets part-time or full-time content creators, endorsers, live sellers, and students earn extra income through commissions. Shipped to the App Store and Google Play.",
    image: "/images/youlinkearn.webp",
    techStack: ["Ionic Cordova", "Angular", "CSS", "MongoDB + Express.js"],
  },
  {
    slug: "pulse",
    title: "Pulse",
    tag: "Web Application",
    description: "Pulse is an anonymous, location-based stranger-chat app.",
    image: "/images/pulse.png",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
  },
];

export type Experience = {
  role: string;
  date: string;
  company: string;
  location: string;
  details: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    date: "Feb 2026 – Jul 2026",
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
    date: "May 2025 – Feb 2026",
    company: "YouLink.Store, MediaBox, Almana Group of Companies",
    location: "Bacolod City",
    details: [
      "Developed YouLink.Store Earn, continuously implementing new features and improvements.",
      "Maintained and enhanced the YouLink.Store e-commerce platform through continuous improvement, bug fixing, and new feature development.",
      "Collaborated closely with both the marketing and development teams to align technical output with business goals.",
      "Provided UI/UX design solutions to enhance user experience and interface usability.",
      "Worked proactively with the QA team to ensure high-quality, bug-free releases through regular testing and feedback cycles.",
      "Strictly adhered to project timelines, ensuring on-time delivery of features and updates.",
      "Successfully deployed to the App Store and Google Play Store.",
    ],
  },
  {
    role: "Software Developer",
    date: "Jan 2025 – Jul 2025",
    company: "BioFlyt Agriventures",
    location: "Bacolod City",
    details: [
      "Designed and developed a mobile application for waste pickup for hotels and restaurants.",
      "Created a company software solution for employee attendance tracking and product input management.",
    ],
  },
  {
    role: "Graphic Artist",
    date: "Oct 2024 – Jan 2025",
    company: "JulzSportswear",
    location: "Murcia, Negros Occidental",
    details: [
      "Designed jersey layouts for sublimation printing.",
      "Actively contributed to daily operations in the shop.",
    ],
  },
  {
    role: "Intern",
    date: "Jun 2024 – Oct 2024",
    company: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    location: "Makati City",
    details: [
      "Developed EcoTagger, a web and mobile application providing tools for tracking plastic waste and packages in support of the 3RproMar project.",
      "Performed other duties and tasks at the request of the project leader / coordinator.",
      "Contributed actively to a good working climate and team working within the project.",
      "Provided UX design solutions to enhance user experience and interface usability.",
    ],
  },
];

export type Track = { title: string; artist: string; image: string };

export const tracks: Track[] = [
  { title: "Pag-ibig ay Kanibalismo II", artist: "Fitterkarma", image: "/images/kanibalismo.png" },
  { title: "Kalapastangan", artist: "Fitterkarma", image: "/images/kalapastangan.jpg" },
  { title: "Konsensya", artist: "IV of Spades", image: "/images/konsensya.jpeg" },
  { title: "Golden Brown", artist: "The Stranglers", image: "/images/goldenbrown.jpg" },
];

export const spotifySearch = (track: Track) =>
  `https://open.spotify.com/search/${encodeURIComponent(`${track.title} ${track.artist}`)}`;

// Tools taken from shipped projects and the GitHub profile README. Owner to correct.
export const toolkit: { category: string; tools: string[] }[] = [
  {
    category: "Languages",
    tools: ["TypeScript", "JavaScript", "PHP", "Kotlin", "Dart", "Java", "C#", "C++", "Python", "HTML", "CSS"],
  },
  { category: "Web frameworks", tools: ["React", "Next.js", "Angular", "Tailwind CSS", "Bootstrap"] },
  { category: "Mobile", tools: ["React Native", "NativeWind", "Ionic Cordova", "Flutter", "Android Studio"] },
  { category: "Backend", tools: ["Laravel", "Node.js + Express", "Prisma", ".NET"] },
  { category: "Databases", tools: ["PostgreSQL", "MariaDB", "MySQL", "MongoDB", "Firebase"] },
  { category: "Cloud & deploy", tools: ["Vercel", "Google Cloud", "Apache", "App Store", "Google Play"] },
  { category: "Tools", tools: ["Git", "GitHub", "Bitbucket", "Postman", "VS Code"] },
  { category: "Design", tools: ["Figma", "Photoshop", "Illustrator"] },
];
