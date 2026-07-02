import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Web development, automation & artificial intelligence",
    description:
      "Developer and process-improvement specialist. I build AI agents and integrations that connect an SMB's systems.",
  },
  nav: {
    about: "Profile",
    skills: "Skills",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
    menu: "Menu",
  },
  intro: {
    name: "Fernando Bermúdez",
    role: "Web development | Automation | Artificial intelligence",
    bio: [
      "Developer and process-improvement specialist, trained in Lean and Six Sigma at multinationals. I work to understand the process and the problem, then build the system that solves it.",
      "I'm a technology partner at Solutia (RBImprove, S.L.), where we create all kinds of automations, AI agents, custom developments and integrations between a company's tools to deliver effective solutions.",
      "My purpose is to bring industrial rigor to the digital world, with systems that work — real, measured and without noise.",
    ],
    ctaProjects: "See projects",
    ctaAssistant: "Try an AI agent",
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Automation & AI",
        description:
          "I design and build automations and AI-powered systems using Claude, OpenAI, custom code, n8n and MCP: systems that understand natural language, decide and act over your own information.",
      },
      {
        name: "Messaging & integrations",
        description:
          "I connect the channels where business happens —WhatsApp, Instagram, Telegram— with Chatwoot and other CRMs, and add voice through Vapi and ElevenLabs. Customers write or call and the system responds.",
      },
      {
        name: "Backend & frontend",
        description:
          "Server-side and client-side development to build end-to-end applications, with data access, dashboards, custom views and fully responsive on mobile.",
      },
      {
        name: "Data & security",
        description:
          "Relational, non-relational and vector databases for semantic search, plus knowledge graphs. Encrypted authentication for every application.",
      },
      {
        name: "DevOps & infra",
        description:
          "Deployments on VPS with Docker: every client's project isolated and traceable, in containers, without depending on closed platforms.",
      },
      {
        name: "Methodology",
        description:
          "Phases of analysis, design, development, testing and documentation. From the problem to the specs, and from there to solutions that work.",
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Real cases in production. Problem, solution, impact.",
    cases: [
      {
        id: "descargas-camiones",
        sector: "Waste recovery",
        title: "AI agent to coordinate truck unloading",
        description:
          "Trucks arrived with no order and the weighbridge was a bottleneck. A Telegram agent now coordinates unloading: hauliers announce their arrival, the agent assigns a slot and the plant sees the queue in real time.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        id: "reservas-whatsapp",
        sector: "Hair salon",
        title: "WhatsApp booking agent",
        description:
          "Handles real availability, changes and cancellations. Includes the hard part: time zones, daylight-saving shifts (DST) and weekend edge cases that used to break appointments.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        id: "pedidos-erp",
        sector: "Organic distribution",
        title: "Email orders straight into the ERP",
        description:
          "A pipeline reads orders arriving by email, an LLM parses them (SKUs, quantities, variants) and creates them in Odoo via JSON-RPC. From inbox to registered order, hands-off.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        id: "dispatch-recogidas",
        sector: "Waste management",
        title: "Pickup dispatch system",
        description:
          "Kanban board for the office, a PWA for drivers, a photo inbox over Telegram and WhatsApp alerts. The whole pickup operation coordinated in a single flow.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
      },
    ],
    viewAll: "See more projects",
    caseMore: "See more",
  },
  cases: {
    metaTitle: "Cases — Fernando Bermúdez",
    metaDescription:
      "Twelve real cases of automation, AI agents and integrations in production: conversational agents, data pipelines and custom systems.",
    breadcrumbHome: "Home",
    eyebrow: "Cases",
    title: "Cases in production",
    intro:
      "Custom-built systems running in real businesses today. The first four in more detail with screenshots; the rest in short form.",
    othersTitle: "More cases",
    galleryPrev: "Previous screenshot",
    galleryNext: "Next screenshot",
    capturePending: "Screenshot in preparation",
    lightboxClose: "Close",
    featured: [
      {
        id: "descargas-camiones",
        sector: "Waste recovery",
        title: "AI agent to coordinate truck unloading",
        paragraphs: [
          "Trucks arrived at the plant with no prior order: queues at the weighbridge, crossed phone calls and an operation that depended on the memory of whoever was at reception that day.",
          "A Telegram agent now coordinates the unloading: drivers announce their arrival from the cab, the agent assigns them a slot based on material and available dock, and the plant sees the queue in real time.",
          "The result: less waiting at the weighbridge, zero coordination calls and a complete record of every unloading without anyone writing anything down.",
        ],
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
        captures: [
          { caption: "A driver announces their arrival from the cab" },
          { caption: "The agent assigns a slot and estimated unloading time" },
          { caption: "The truck queue in real time, seen from the plant" },
          { caption: "Slot and dock administration panel" },
          { caption: "Automatic notice to the next truck in the queue" },
          { caption: "Unloading history with material and tonnage" },
        ],
      },
      {
        id: "reservas-whatsapp",
        sector: "Hair salon",
        title: "WhatsApp booking agent",
        paragraphs: [
          "The salon's phone rang while clients were being attended: half-written appointments, unrecorded changes and lost slots.",
          "A WhatsApp agent manages the calendar with real availability: it books, changes and cancels appointments in natural conversation. Including the hard part — time zones, daylight-saving changes and weekend edge cases that used to break appointments.",
          "The salon stopped losing bookings outside opening hours and the calendar stays consistent without manual work.",
        ],
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
        captures: [
          { caption: "A complete booking, from greeting to confirmation" },
          { caption: "Rescheduling an existing appointment in two messages" },
          { caption: "A cancellation with the slot freed instantly" },
          { caption: "The salon's calendar, in sync" },
          { caption: "Edge case solved: a booking across a DST change" },
        ],
      },
      {
        id: "pedidos-erp",
        sector: "Organic distribution",
        title: "Email orders straight into the ERP",
        paragraphs: [
          "Every morning someone transcribed the orders arriving by email by hand: SKUs, quantities, variants. Slow, and with errors that ended up in the delivery round.",
          "A pipeline reads incoming email, an LLM parses each order and validates it against the catalogue, and the order is created in Odoo via JSON-RPC. Doubtful SKUs are flagged for review instead of guessed.",
          "From inbox to registered order, hands-off, with exceptions flagged so a person only decides where it adds value.",
        ],
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
        captures: [
          { caption: "The original order email, as it arrives" },
          { caption: "The LLM's interpretation: lines, SKUs and quantities" },
          { caption: "The order created automatically in Odoo" },
          { caption: "A doubtful SKU flagged for human review" },
          { caption: "The pipeline's activity log" },
        ],
      },
      {
        id: "dispatch-recogidas",
        sector: "Waste management",
        title: "Pickup dispatch system",
        paragraphs: [
          "The pickup operation was coordinated over phone calls and WhatsApp groups: nobody had the full picture and proof-of-service photos arrived late or not at all.",
          "A single flow puts it in order: a Kanban board for the office, a PWA for drivers with their route of the day, a photo inbox over Telegram from the truck and automatic WhatsApp alerts to the client.",
          "Every pickup is documented on the spot, and the office sees the state of the whole fleet at a glance.",
        ],
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
        captures: [
          { caption: "The office's Kanban board" },
          { caption: "The driver's PWA with their route of the day" },
          { caption: "Service photos sent over Telegram from the truck" },
          { caption: "WhatsApp alert to the client confirming the pickup" },
          { caption: "Detail of a completed, documented pickup" },
          { caption: "Overview of the operation in real time" },
        ],
      },
    ],
    groups: [
      {
        name: "Conversational agents",
        items: [
          {
            sector: "Restaurants",
            title: "After-hours WhatsApp attention",
            description:
              "A relay that handles messages when the business is closed: answers frequent questions and notes down bookings to confirm in the morning.",
            stack: ["WhatsApp", "n8n", "Claude API"],
          },
          {
            sector: "Media",
            title: "Conversational agent for a podcast",
            description:
              "Talks with the audience guided by a state machine: recommends episodes, collects suggestions and keeps the thread between visits.",
            stack: ["Telegram", "FSM", "LLM"],
          },
          {
            sector: "Services",
            title: "Voice agent for appointments",
            description:
              "A voice receptionist that takes the call, checks real availability and leaves the appointment confirmed before hanging up.",
            stack: ["Vapi", "ElevenLabs", "n8n"],
          },
        ],
      },
      {
        name: "Integrations & data",
        items: [
          {
            sector: "Food industry",
            title: "Meat product traceability",
            description:
              "From PDF and Excel delivery notes to traceability codes generated and validated automatically, with no manual transcription.",
            stack: ["PDF/Excel", "LLM", "Node.js"],
          },
          {
            sector: "Industrial services",
            title: "Multi-actor incident platform",
            description:
              "Recording and tracking of incidents between client, technicians and office, with states, owners and automatic notifications.",
            stack: ["React", "Node.js", "PostgreSQL"],
          },
          {
            sector: "Real estate",
            title: "Automated market reports",
            description:
              "An agent that crawls listing sites, matches the data against the client's criteria and sends a periodic report with filtered opportunities.",
            stack: ["Scraping", "LLM", "n8n"],
          },
        ],
      },
      {
        name: "Web & back office",
        items: [
          {
            sector: "Consulting",
            title: "Multilingual corporate website",
            description:
              "A corporate site in three languages with technical SEO, careful performance and self-hosted deployment on own infrastructure.",
            stack: ["Next.js", "Tailwind", "Docker"],
          },
          {
            sector: "Industry",
            title: "RAG assistant over internal documentation",
            description:
              "An internal chat that answers citing the company's work instructions and technical sheets as its only source.",
            stack: ["RAG", "Vector DB", "Claude API"],
          },
        ],
      },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        name: "Advanced Diploma in Web Application Development (DAW)",
        org: "ILERNA",
        detail:
          "Higher-level vocational degree in full-stack web development: frontend, backend, databases and app deployment. The formal foundation the rest of my work builds on.",
      },
      {
        name: "Generative AI Specialist",
        org: "Racks Academy",
        detail:
          "Hands-on training in generative AI: from the fundamentals of language models to integrating them into real solutions that reach production.",
      },
      {
        name: "Anthropic Academy",
        org: "Anthropic",
        detail:
          "Introduction to Agent Skills · Building with the Claude API · Introduction to Model Context Protocol · Claude Code in Action · Introduction to Subagents · Model Context Protocol: Advanced Topics · Claude Platform 101",
      },
      {
        name: "Lean Production & Six Sigma",
        org: "Zoetis",
        detail:
          "Trained in Yellow Belt, Green Belt and Kaizen methodology, which I applied as a production supervisor to manage teams and drive continuous-improvement and standardisation projects.",
      },
    ],
  },
  assistant: {
    eyebrow: "Live demo",
    question: "Want to talk to my assistant?",
    note: "It's a real AI agent, like the ones I build, that will answer you on WhatsApp right away. Ask it anything about me!",
    cta: "Open WhatsApp",
  },
  contact: {
    title: "Contact",
    text: "Do you have a project in mind, or are you looking for someone for your team? Email or call me.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    linkedinPrompt: "Want to know more about me?",
    linkedinCta: "Take a look at my LinkedIn",
  },
  footer: {
    legalNotice: "Legal notice",
    privacy: "Privacy",
  },
};
