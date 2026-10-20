// All portfolio content lives here, so text changes never touch the components.

export const profile = {
  name: "Muhammed Irfan UV",
  shortName: "Irfan",
  role: "Full Stack Developer",
  location: "Abu Dhabi, UAE",
  email: "irfan188iqbal@gmail.com",
  phone: "+971 55 134 5244",
  phoneHref: "tel:+971551345244",
  linkedin: "https://www.linkedin.com/in/muhammedirfaniqbal/",
  github: "https://github.com/irfan0374",
  cv: "/Muhammed_Irfan_UV_CV.docx",
  photo: "/images/irfan.webp",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const hero = {
  status: "Available for new roles · Abu Dhabi, UAE",
  heading: "Hi, I'm Irfan. I build fast, reliable web and desktop apps.",
  intro:
    "Full Stack Developer with nearly 4 years of experience in React, Next.js, Node.js and Python. I've built ERP, fintech, e-commerce and POS products for clients in the UAE, GCC and India.",
  stack: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS"],
};

export const about = {
  heading: "Turning messy business workflows into simple software.",
  paragraphs: [
    "I work end to end: React and Next.js front ends in TypeScript, REST APIs in Node.js, Django and FastAPI, and deployment on AWS and Vercel.",
    "My accounting background (BCom) helps me build finance, VAT and inventory features correctly, and lately I've been building AI features with LLMs and RAG.",
  ],
  tags: ["Offline-first desktop", "ERP & VAT / GST", "AI & RAG"],
  stats: [
    { value: "4", label: "Years experience", note: "Building web, backend and desktop apps since 2023." },
    { value: "4+", label: "Restaurants use my POS", note: "Offline desktop POS with thermal receipt printing." },
    { value: "3", label: "Regions", note: "Clients in the UAE, GCC and India." },
  ],
};

export type Project = {
  name: string;
  label: string;
  kind: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  link?: { href: string; label: string };
  featured?: boolean;
  terminal?: string;
};

export const projects: Project[] = [
  {
    name: "POS Suite",
    label: "Client product",
    kind: "Desktop app",
    description:
      "Offline desktop POS for restaurants and retail shops, used by 4+ restaurants. Touch ordering, ESC/POS thermal receipt printing and cash-drawer control; the retail edition adds barcode checkout and VAT.",
    tags: ["Electron", "React", "TypeScript", "SQLite", "ESC/POS"],
    image: "/images/pos.jpg",
    imageAlt: "POS app running on a tablet in a restaurant",
    featured: true,
  },
  {
    name: "Make Marriage",
    label: "SaaS",
    kind: "Web app",
    description:
      "Wedding planning platform for guest lists and RSVP, expense tracking, vendors, tasks and a public wedding website.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Resend", "Cloudflare R2"],
    image: "/images/make-marriage.jpg",
    imageAlt: "Make Marriage dashboard with RSVP charts",
    link: { href: "https://make-marriage.vercel.app", label: "Live" },
  },
  {
    name: "Clipwise",
    label: "AI",
    kind: "Video engine",
    description:
      "Turns a topic into a 30–60 second explainer video with an LLM-written script, AI voice-over and word-synced captions, plus a dashboard to track each video.",
    tags: ["TypeScript", "Gemini", "ElevenLabs", "Remotion"],
    terminal: "render_video()",
  },
  {
    name: "Casa Lilly",
    label: "Freelance",
    kind: "E-commerce",
    description:
      "Storefront and mobile-first admin panel for an online retail brand: catalogue, collections, banners and product videos.",
    tags: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    link: { href: "https://frontend-irfaans-projects.vercel.app", label: "Live" },
  },
  {
    name: "School Timetable Generator",
    label: "Freelance",
    kind: "Scheduler",
    description:
      "Generates conflict-free school timetables from teacher availability and room capacity, with a drag-and-drop editor that cut planning time by 70%.",
    tags: ["React", "Django", "DRF"],
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Finior Capital Limited",
    dates: "Apr 2026 – Present",
    location: "Abu Dhabi, UAE",
    points: [
      "Developed the company website with React, Next.js and Node.js as the in-house developer.",
      "Built a client onboarding portal where new investors register and submit KYC documents online, replacing a paper-based process.",
    ],
    current: true,
  },
  {
    role: "Front-End Team Lead",
    company: "iBadvisory",
    dates: "Nov 2025 – Mar 2026",
    location: "Remote",
    points: [
      "Architected a live video streaming platform with Agora SDK supporting 500+ concurrent users.",
      "Integrated Razorpay payments, reducing manual billing work by 85%, and Msg91 OTP authentication.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Finisso Technologies",
    dates: "Sep 2024 – Nov 2025",
    location: "Kochi, India",
    points: [
      "Built ERP modules (Accounts, Inventory, Sales) with Angular, Django and PostgreSQL for UAE, Oman and Bahrain clients.",
      "Automated GST compliance and implemented role-based access control.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Lue IT Solution",
    dates: "Jan 2023 – Aug 2024",
    location: "Kozhikode, India",
    points: [
      "Launched production applications with React, Redux, Node.js and AWS.",
      "Added Socket.IO real-time notifications, increasing user engagement by 45%.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Angular", "Redux", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "Django / DRF", "FastAPI", "REST APIs", "GraphQL"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { group: "AI", items: ["LLM integration", "RAG", "Prompt engineering", "Gemini API"] },
  {
    group: "Cloud & DevOps",
    items: ["AWS (EC2, Route 53)", "Docker", "NGINX", "CI/CD (GitHub Actions)", "Vercel", "Cloudflare R2"],
  },
  { group: "Desktop & Tools", items: ["Electron", "Thermal printing", "Git", "Vitest", "Postman", "Figma"] },
];
