// ============================================================
//  data.js – Edit this file to update all portfolio content
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
  profileImage: "/assets/images/main-portrait.webp",

  // ── Timeline ───────────────────────────────────────────────
  timeline: [
    { year: "2024", title: "Spark of Curiosity",         description: "Discovered the world of programming and fell in love with building things from scratch.", icon: "✦" },
    { year: "2025", title: "Full Stack Java Journey Begins",   description: "Dived deep into Java, Spring Boot, and modern web development principles.",             icon: "⬡" },
    { year: "2028", title: "AI & Exploration",          description: "Exploring AI integrations, and scalable system design patterns.",       icon: "◈" },
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
      slug: "sharenstore",
      projectNumber: "01",
      category: "Self-Initiated Projects",
      shortDescription: "Secure virtual rooms for file sharing, collaboration, and permission-based access.",
      tagline: "Secure virtual file-sharing and storage platform.",
      description: "A collaborative cloud storage platform enabling seamless file sharing with granular permission controls and real-time sync.",
      image: "",
      github: "https://github.com/bobby720/sharenstore",
      live: "https://virtual-storage-rooms-527.created.app/",
      status: "Prototype",
      overview: "ShareNStore was designed for teams and individuals who need a secure, structured way to share files without losing control over access. Instead of scattering files across public links and fragmented tools, the platform centralizes storage into virtual rooms where access is intentional, traceable, and easy to manage.",
      problem: "File sharing often fails when access becomes too broad, too manual, or too hard to audit. Teams struggle with sharing sensitive documents across multiple channels, and users lose visibility into who can view, download, or edit content.",
      solution: "The platform organizes files into room-based workspaces with permission-driven collaboration. Users can create controlled sharing contexts, manage access at a granular level, and keep file flows predictable across projects, client work, or internal coordination.",
      features: ["Room-based sharing", "Granular permissions", "Secure file uploads", "Team collaboration", "Access control dashboard", "Live sync workflow"],
      techStack: {
        Frontend: ["React", "JavaScript", "TypeScript", "CSS"],
        Backend: ["Node.js", "Express.js"],
        Database: ["MySQL"],
        "Tools & Services": ["GitHub", "Vercel", "ChatGPT", "Gemini"]
      },
      architecture: [
        "Frontend application with a clean collaborative interface",
        "API layer for authentication, uploads, and permission checks",
        "Backend services for storage orchestration and access rules",
        "MySQL and cloud-backed storage for structured data and files"
      ],
      languages: [
        { name: "JavaScript", pct: 55.6, color: "#F7DF1E" },
        { name: "TypeScript", pct: 44.2, color: "#3178C6" },
        { name: "CSS", pct: 0.2, color: "#563D7C" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5", pct: 40, color: "#74AA9C" },
        { name: "Gemini 3.1 Flash", pct: 40, color: "#4285F4" }
      ]
    },
    {
      title: "Nano Gallery",
      slug: "nano-gallery",
      projectNumber: "02",
      category: "Self-Initiated Projects",
      shortDescription: "A discovery-first prompt library for creators and researchers working with generative AI.",
      tagline: "AI prompt discovery platform for reusable creative workflows.",
      description: "Nano Gallery is a web-based AI prompt discovery platform that provides users with a curated collection of reusable prompts for generative AI tools such as Gemini.",
      image: "",
      github: "https://github.com/bobby720/nano-gallery",
      live: "https://nano-gallery.netlify.app/",
      status: "Live",
      overview: "Nano Gallery turns prompt experimentation into a structured library. It helps users collect strong prompt patterns for recurring use cases, making generative AI workflows easier to reuse and refine over time.",
      problem: "Prompt engineering is unpredictable: users often discover useful ideas in fragments, lose context, and rework the same patterns repeatedly. There was no polished space to organize prompts in a way that feels searchable, practical, and reusable.",
      solution: "The project creates a prompt repository with a simple discovery UX. Users can browse, save, and revisit effective ideas, reducing repeated trial-and-error and making AI experimentation more productive.",
      features: ["Prompt discovery", "Reusable collections", "Search-focused browsing", "AI workflow inspiration", "Quick experimental access"],
      techStack: {
        Frontend: ["HTML", "CSS", "JavaScript"],
        Backend: ["Static web app"],
        Database: ["Local content storage"],
        "Tools & Services": ["GitHub", "Netlify", "ChatGPT", "Gemini"]
      },
      architecture: [
        "Static frontend for high-speed browsing and lightweight experience",
        "Prompt collection logic embedded in the UI layer",
        "Content organization established around categories and reusable themes",
        "Deployment through Netlify for quick iteration and access"
      ],
      languages: [
        { name: "JavaScript", pct: 62, color: "#F7DF1E" },
        { name: "HTML", pct: 28, color: "#E34F26" },
        { name: "CSS", pct: 10, color: "#563D7C" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5", pct: 40, color: "#74AA9C" },
        { name: "Gemini NanoBanana", pct: 10, color: "#4285F4" }
      ]
    },
    {
      title: "Digi Library",
      slug: "digi-library",
      projectNumber: "03",
      category: "Hackathon Innovations",
      shortDescription: "A digital library system with smart search, borrowing workflows, and admin analytics.",
      tagline: "Smart library management for modern academic and community spaces.",
      description: "A digital library management system featuring smart search, cataloguing, borrowing workflows, and admin dashboards.",
      image: "",
      github: "https://github.com/bobby720/Digi_Library",
      live: "https://digi-library-chi.vercel.app",
      status: "Hackathon build",
      overview: "Digi Library was created to modernize how users discover, borrow, and manage books in educational or community environments. It is designed to reduce friction in library operations while improving the student or member experience.",
      problem: "Traditional library systems often rely on manual processes, slow cataloging, and limited visibility into borrowing patterns. This makes it harder for staff to manage availability, track usage, and keep readers engaged.",
      solution: "The system combines a user-friendly discovery experience with a management layer for cataloging, issue records, and library analytics. By simplifying workflows, it makes library operations more scalable and more useful for both users and administrators.",
      features: ["Smart search", "Borrowing workflow", "Catalog management", "Admin dashboard", "Usage insights", "Book availability tracking"],
      techStack: {
        Frontend: ["React", "Tailwind CSS", "HTML", "JavaScript"],
        Backend: ["Node.js", "Express.js"],
        Database: ["MySQL"],
        "Tools & Services": ["GitHub", "Vercel", "ChatGPT", "Gemini", "AntigravityAI"]
      },
      architecture: [
        "React experience for browsing and managing library interactions",
        "API services for catalog, checkout, and user management",
        "Database layer for book metadata and borrowing records",
        "Admin dashboard for operational oversight and trend monitoring"
      ],
      languages: [
        { name: "JavaScript", pct: 48, color: "#F7DF1E" },
        { name: "TypeScript", pct: 32, color: "#3178C6" },
        { name: "CSS", pct: 14, color: "#563D7C" },
        { name: "HTML", pct: 6, color: "#E34F26" }
      ],
      LLM: [
        { name: "ChatGPT GPT-5.5", pct: 40, color: "#74AA9C" },
        { name: "Gemini 3.1 Flash", pct: 10, color: "#4285F4" },
        { name: "AntigravityAI", pct: 25, color: "#D4AF37" }
      ]
    },
    {
      title: "Portfolio Website",
      slug: "portfolio-website",
      projectNumber: "04",
      category: "Self-Initiated Projects",
      shortDescription: "A handcrafted portfolio experience that showcases projects, learning, and product thinking.",
      tagline: "Personal portfolio designed to tell the story of my work and craft.",
      description: "A responsive portfolio website showcasing my work and skills as a developer.",
      image: "",
      github: "https://github.com/bobby720/portfolio",
      live: "https://eswarasaimarre.netlify.app/",
      status: "Live",
      overview: "This portfolio acts as my digital identity and project narrative. It consolidates my work, achievements, and product thinking into a single polished space that feels personal and memorable.",
      problem: "A developer portfolio needs to communicate technical depth without overwhelming the viewer. Static profiles usually become either too sparse or too information-dense, which reduces clarity and impact.",
      solution: "The site uses a notebook-inspired aesthetic and structured storytelling to present projects, milestones, and skill areas in a way that feels premium and easy to navigate. The result is a more human and memorable portfolio experience.",
      features: ["Story-driven layout", "Project highlights", "Certificate showcase", "Skill presentation", "Responsive design", "Visual storytelling"],
      techStack: {
        Frontend: ["HTML", "CSS", "JavaScript"],
        Backend: ["Static site"],
        Database: ["No database"],
        "Tools & Services": ["GitHub", "Netlify", "Claude" ]
      },
      architecture: [
        "Single-page portfolio architecture for smooth browsing",
        "Content-driven structure powered by a reusable data model",
        "Static deployment for performance and reliability",
        "Visual system that maintains notebook-inspired identity across sections"
      ],
      languages: [
        { name: "HTML", pct: 45, color: "#E34F26" },
        { name: "CSS", pct: 30, color: "#563D7C" },
        { name: "JavaScript", pct: 25, color: "#F7DF1E" }
      ],
      LLM: [
        { name: "Claude Haiku 4.5", pct: 30, color: "#CC785C" },
        { name: "Claude Sonnet 4.6", pct: 30, color: "#D4AF37" }
      ]
    },
    {
      title: "CleanWard-AI",
      slug: "cleanward-ai",
      projectNumber: "05",
      category: "Hackathon Innovations",
      shortDescription: "An AI waste-classification system that helps users sort and act on waste in real time.",
      tagline: "AI-powered waste intelligence for cleaner cities and smarter action.",
      description: "An AI-powered rural and urban waste management system that uses computer vision to identify and sort waste materials, providing real-time feedback to users.",
      image: "",
      github: "https://github.com/bobby720/Cleanward-ai-DCODEP",
      live: "https://cleanward.ai.studio/",
      status: "Hackathon demo",
      overview: "CleanWard-AI addresses poor waste segregation by combining visual classification with actionable guidance. It helps users identify material types quickly and understands how better sorting can lead to cleaner communities and stronger resource recovery.",
      problem: "Waste misclassification is a common issue in both urban and rural settings. Without clear guidance, recyclable, compostable, and hazardous waste are often mixed together, leading to inefficiency and environmental harm.",
      solution: "The system uses AI-based image recognition to classify waste and guides the user with immediate feedback. This makes waste handling more intuitive, reduces contamination, and encourages better individual and community behavior.",
      features: ["AI waste detection", "Real-time classification", "User guidance", "Rural and urban support", "Feedback loop", "Smart sorting experience"],
      techStack: {
        Frontend: ["JavaScript", "HTML", "CSS"],
        Backend: ["Flask", "Python"],
        Database: ["NoSQL-ready data layer"],
        "Tools & Services": ["Google AI Studio", "Gemini", "ChatGPT", "Computer vision pipeline"]
      },
      architecture: [
        "Camera and input layer for capturing waste items",
        "AI model layer for classification and decision-making",
        "Feedback interface to guide the user on the next step",
        "Operational flow tuned for both individual and community use"
      ],
      languages: [
        { name: "TypeScript", pct: 70, color: "#3178C6" },
        { name: "Node.js", pct: 20, color: "#339933" },
        { name: "Vite", pct: 10, color: "#646CFF" }
      ],
      LLM: [
        { name: "Gemini 3.1 Flash", pct: 80, color: "#4285F4" },
        { name: "Google-AI studio", pct: 20, color: "#74AA9C" }
      ]
    },
    {
      title: "CineMatch — Smart Movie Recommendation System",
      slug: "cinematch-smart-movie-recommendation-system",
      projectNumber: "06",
      category: "Hackathon Innovations",
      shortDescription: "A recommendation engine that matches movies to mood, interest, and metadata filters.",
      tagline: "Personalized movie discovery based on mood and preference signals.",
      description: "A smart movie recommendation platform that suggests movies by combining mood-based NLP, user interests, rating-based scoring, and metadata filters with an interactive glassmorphism UI.",
      image: "",
      github: "https://github.com/bobby720/CineMatch---Smart-Movie-recommendation-system",
      live: "",
      status: "Concept prototype",
      overview: "CineMatch explores how recommendation systems can move beyond generic popularity lists. It considers mood, user interest, and contextual metadata to suggest films that feel more aligned with how people actually choose what they want to watch.",
      problem: "Streaming users are often overwhelmed by choices and are rarely served films that fit their mood or intent. Generic recommendation systems can miss the emotional and contextual factors that make a movie a good match.",
      solution: "The project combines NLP-driven mood analysis, user preference modelling, and metadata filtering to generate recommendations that feel more personal and deliberate. The interface is designed to make that decision-making flow feel lightweight and engaging.",
      features: ["Mood-based recommendations", "User interest analysis", "Metadata filters", "Recommendation scoring", "Interactive UI", "Smart search"],
      techStack: {
        Frontend: ["Streamlit", "Python", "Custom CSS"],
        Backend: ["Python recommendation logic"],
        Database: ["Microsoft SQL Server"],
        "Tools & Services": ["PyODBC", "NLP workflows", "Gemini", "ChatGPT"]
      },
      architecture: [
        "Input layer for user mood and preferences",
        "Recommendation logic combining NLP and structured scoring",
        "Metadata filtering for genre, cast, and style matching",
        "Front-end dashboard for easy movie discovery and comparison"
      ],
      languages: [
        { name: "Python", pct: 60, color: "#3776AB" },
        { name: "Streamlit", pct: 20, color: "#FF4B4B" },
        { name: "SQL", pct: 20, color: "#F29111" }
      ],
      LLM: [
        { name: "NLP Models", pct: 50, color: "#74AA9C" },
        { name: "Custom Algorithms", pct: 50, color: "#D4AF37" },
        { name: "Gemini 3.1 Flash", pct: 30, color: "#4285F4" },
        { name: "ChatGPT GPT-5.5", pct: 30, color: "#74AA9C" }
      ]
    }
  ],
  // ── Certificates ───────────────────────────────────────────
  certificates: [
    { title: "Fundamentals of Java Programming", issuer: "Board Infinity",   date: "2025", image: "assets/images/java-programming-certificate.png" },
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle", date: "2025", image: "assets/images/oracle-certificate.jpg" },
    { title: "Build website with AI",   issuer: "Simplilearn",     date: "2025", image: "assets/images/simplilearn-certificate.jpg" },
    { title: "AWS Prompt Engineering Fundamentals", issuer: "AWS Training", date: "2026", image: "assets/images/aws-prompt-fundamentals.jpg" },
    { title: "Be10x Workshop", issuer: "Be10x", date: "2026", image: "assets/images/Be10x workshop.jpg" },
    { title: "DevDays participation", issuer: "Github-copilot", date: "2026", image: "assets/images/60.png" }
  ],

  // ── Achievements ───────────────────────────────────────────
  achievements: [
    { title: "ATF 2025: Stage 2 Candidate",  issuer: "AlgoUniversity",  date: "2025", image: "assets/images/algouniversity-certificate.jpg" },
    { title: "Quizoff 2026 by CampusCrew",   issuer: "CampusCrew",        date: "2026", image: "assets/images/quizoff-2026.jpg" },
    { title: "Gemini Music Night Edition", issuer: "Google", date: "2026", image: "assets/images/gemini-music-night.png" },
    { title: "Nexus Quiz Championship 2026", issuer: "Nexus", date: "2026", image: "assets/images/nexus-quiz.jpg" },
    { title: "ICAT", issuer: "ICat", date: "2026", image: "assets/images/ICAT.jpg"},
    { title: "Dvenegers Online round", issuer: "Devengers", date: "2026", image: "assets/images/Devengers Online round.png" },
    { title: "Devengers Promptwars", issuer: "Devengers", date: "2026", image: "assets/images/Devengers Promptwars.png" },
    { title: "Galaxy aptitude and reasoning Quiz", issuer: "Quiz Galaxy", date: "2026", image: "assets/images/Galaxy aptitude and reasoning quiz.png" },
    { title: "Project Vikasit Bharat Innovation Hackathon", issuer: "Vikasit Bharat", date: "2026", image: "assets/images/Project vikasit bharat.png" },
    { title: "HackDay-1.0", issuer: "Unstop", date: "2026", image: "assets/images/Hackday 1.0.jpg" },
  ],

  // ── Gallery ────────────────────────────────────────────────
  gallery: [
    { src: "assets/images/research-conclave.jpg", caption: "SAHE Hackathon" },
    { src: "assets/images/event-workshop.jpg", caption: "SAHE Hackathon: Team Edition" },
    { src: "assets/images/ai startup challenge-1.jpg", caption: "AI Startup Challenge" },
    { src: "assets/images/ai startup challenge-2.jpg", caption: "AI Startup Challenge: Team Edition" },
    { src: "assets/images/Microsoft quiz champ.JPG", caption: "Microsoft-github event Devdays Quiz top prize" },
     { src: "assets/images/Ms B4.jpeg", caption: "Microsoft Event Day" },
    { src: "assets/images/Ms id.jpeg", caption: "Microsoft Visitor ID" }
  ]
};
