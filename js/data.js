// ============================================================
//  data.js  –  Edit this file to update all portfolio content
// ============================================================

const DATA = {

  // ── Personal Info ──────────────────────────────────────────
  name: "Eswara Sai",
  title: "AI Application Architect",
  tagline: "Building intelligent products that solve real-world problems using software and artificial intelligence.",
  githubUsername: "bobby720",
  email: "eswarsaimarre@gmail.com",
  linkedin: "https://www.linkedin.com/in/eswara-sai-marre-7b7047352/",
  instagram: "https://www.instagram.com/btw_bobby07/",
  github: "https://github.com/bobby720",
  profileImage: "Gemini_Generated_Image_z4y12oz4y12oz4y1.png",

  // ── Timeline ───────────────────────────────────────────────
  timeline: [
    { year: "2024", title: "Spark of Curiosity",         description: "Discovered the world of programming and fell in love with building things from scratch.", icon: "✦" },
    { year: "2025", title: "Full Stack Java Journey Begins",   description: "Dived deep into Java, Spring Boot, and modern web development principles.",             icon: "⬡" },
    { year: "2026", title: "AI & React Mastery",          description: "Exploring React ecosystems, AI integrations, and scalable system design patterns.",       icon: "◈" },
    { year: "Future", title: "AI Application Architect", description: "Leading the design and deployment of enterprise-grade intelligent applications.",           icon: "◇" }
  ],

  // ── Skills ─────────────────────────────────────────────────
  skills: {
    Frontend:  ["HTML", "CSS", "JavaScript"],
    Backend:   ["Java", "Python"],
    Database:  ["MySQL"],
    Tools:     ["Git", "GitHub", "VS Code", "IntelliJ IDEA"],
    LLM:       ["ChatGPT (Model GPT-5.5)", "Gemini (Model 3.1 Flash)", "Claude (Model Haiku 4.5, Sonnet 4.6)", "AntigravityAI"]

  },

  // ── Projects ───────────────────────────────────────────────
  // languages[] → { name, pct, color }
  //   pct  = percentage 0–100  (you control this)
  //   color = any CSS color     (optional – defaults to gold)
  // LLM models listed under LLM[] are shown as a separate "LLM" row
  projects: [
    {
      title: "ShareNStore",
      category: "Self-Initiated Projects",
      description: "A collaborative cloud storage platform enabling seamless file sharing with granular permission controls and real-time sync.",
      image: "Gemini_Generated_Image_z4y12oz4y12oz4y1.png",
      tech: ["JavaScript", "TypeScript", "MySQL", "React","ChatGPT (Model GPT-5.5)", "Gemini (Model 3.1 Flash)"],
      github: "https://github.com/bobby720/sharenstore",
      live: "#",
      // ── EDIT THESE PERCENTAGES ──────────────────────────────
      languages: [
        { name: "JavaScript", pct: 55.6, color: "#F7DF1E" },
        { name: "TypeScript", pct: 44.2, color: "#3178C6" },
        { name: "CSS",        pct:  0.2, color: "#563D7C" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5",    pct: 40, color: "#74AA9C" },
        { name: "Gemini 3.1 Flash",   pct: 40, color: "#4285F4" }
      ]
    },
    {
      title: "Nano Gallery",
      category: "Self-Initiated Projects",
      description: "A lightweight, blazing-fast image gallery with masonry layout, lazy loading, and touch-optimised lightbox preview.",
      image: "Gemini_Generated_Image_.png",
      tech: ["HTML", "CSS", "JavaScript", "ChatGPT (Model GPT-5.5)", "Gemini (Model NanoBanana)"],
      github: "https://github.com/bobby720/nano-gallery",
      live: "#",
      languages: [
        { name: "JavaScript", pct: 62, color: "#F7DF1E" },
        { name: "HTML",       pct: 28, color: "#E34F26" },
        { name: "CSS",        pct: 10, color: "#563D7C" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5",  pct: 40, color: "#74AA9C" },
        { name: "Gemini NanoBanana",pct: 10, color: "#4285F4" }
      ]
    },
    {
      title: "Digi Library",
      category: "Hackathon Innovations",
      description: "A digital library management system featuring smart search, cataloguing, borrowing workflows, and admin dashboards.",
      image: "Gemini_Generated_Image_z4y12oz4y12oz4y1.png",
      tech: ["React", "Tailwind CSS", "Node.js", "MySQL", "ChatGPT (Model GPT-5.5)", "Gemini (Model 3.1 Flash)", "AntigravityAI"],
      github: "https://github.com/bobby720/Digi_Library",
      live: "#",
      languages: [
        { name: "JavaScript", pct: 48, color: "#F7DF1E" },
        { name: "TypeScript", pct: 32, color: "#3178C6" },
        { name: "CSS",        pct: 14, color: "#563D7C" },
        { name: "HTML",       pct:  6, color: "#E34F26" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5",      pct: 40, color: "#74AA9C" },
        { name: "Gemini 3.1 Flash",     pct: 10, color: "#4285F4" },
        { name: "AntigravityAI",        pct: 25, color: "#D4AF37" }
      ]
    },
    {
      title: "Portfolio Website",
      category: "Self-Initiated Projects",
      description: "A responsive portfolio website showcasing my work and skills as a developer.",
      image: "#",
      tech: ["HTML", "CSS", "JavaScript","Claude (Model Opus 4.6, Sonnet 4.6)"],
      github: "https://github.com/bobby720/portfolio",
      live: "#",
      languages: [
        { name: "HTML",       pct: 45, color: "#E34F26" },
        { name: "CSS",        pct: 30, color: "#563D7C" },
        { name: "JavaScript", pct: 25, color: "#F7DF1E" }
      ],
      LLM: [
        { name: "Claude Haiku 4.5",   pct: 30, color: "#CC785C" },
        { name: "Claude Sonnet 4.6", pct: 30, color: "#D4AF37" }
      ]
    }
  ],

  // ── Certificates ───────────────────────────────────────────
  certificates: [
    { title: "Fundamentals of Java Programming", issuer: "Board Infinity",   date: "2025", image: "components/Screenshot 2025-10-24 210219.png" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "2025", image: "components/oracle.jpg" },
    { title: "Build website with AI",   issuer: "Simplilearn",     date: "2025", image: "components/simplilearn.jpg" }
  ],

  // ── Achievements ───────────────────────────────────────────
  achievements: [
    { title: "ATF 2025: Stage 2 Candidate",  issuer: "AlgoUniversity",  date: "2025", image: "components/ALGO university certificate.jpg" },
    { title: "Quizoff 2026 by CampusCrew",   issuer: "CampusCrew",        date: "2026", image: "components/Quizoff 2026 by CampusCrew.jpg" },
    { title: "Gemini Music Night Edition", issuer: "Google", date: "2026", image: "components/Gemini Music night.png" },
    { title: "Nexus Quiz Championship 2026", issuer: "Nexus", date: "2026", image: "components/Nexus Quiz.jpg" } 
  ],

  // ── Gallery ────────────────────────────────────────────────
  gallery: []
};