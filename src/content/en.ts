import type { SiteContent } from "./types";

export const en: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Web development, automation & artificial intelligence",
    description:
      "Developer and process-improvement specialist. I build AI agents and integrations that connect an SMB's systems.",
  },
  nav: {
    about: "Profile",
    skills: "How I work",
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
    title: "How I work",
    groups: [
      {
        name: "Automation & AI",
        description:
          "I design and build automations and AI-powered systems, using custom code, MCPs, REST APIs and n8n among others, to deliver solutions that understand and act on your own information.",
      },
      {
        name: "Messaging & integrations",
        description:
          "I connect the channels where business happens —WhatsApp, Instagram, Telegram, email— with Chatwoot and other CRMs, and add voice through Vapi or ElevenLabs. The customer asks, the system answers.",
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
          "Deployments on VPS with Docker: each client and their project kept separate with their own instances, no shared containers and full traceability.",
      },
      {
        name: "Methodology",
        description:
          "Analysis, design, programming, testing and delivery with documentation. From the problem to the specifications, and from the specifications to a solution that works.",
      },
    ],
  },
  projects: {
    title: "Projects",
    intro: "Real cases in production. Problem, solution, impact.",
    cases: [
      {
        id: "fincas",
        sector: "Property management",
        title: "Community and property management",
        description:
          "Software for property managers with an AI agent on WhatsApp. Residents identify themselves by their unit, get answers to frequent questions about their community and report incidents; the system notifies the right people and coordinates providers until each one is closed.",
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
      },
      {
        id: "logistica",
        sector: "Agri-food industry",
        title: "Silo unloading planner",
        description:
          "A web app that plans a plant's truck intake in real time: it simulates the silo level, sequences unloadings and anticipates delays and stoppages. Drivers and staff talk to the system over Telegram and the plan recalculates itself.",
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
      },
    ],
    viewAll: "See more projects",
    caseMore: "See more",
  },
  cases: {
    metaTitle: "Cases — Fernando Bermúdez",
    metaDescription:
      "Real cases of automation, AI agents and integrations in production: conversational agents, data pipelines and custom systems.",
    breadcrumbHome: "Home",
    eyebrow: "Cases",
    title: "Cases in production",
    intro:
      "Custom-built systems up and running today in companies across different sectors.",
    othersTitle: "More cases",
    galleryPrev: "Previous screenshot",
    galleryNext: "Next screenshot",
    capturePending: "Screenshot in preparation",
    lightboxClose: "Close",
    backHome: "Back to home",
    downloadsTitle: "Download",
    featured: [
      {
        id: "fincas",
        sector: "Property management",
        title: "Community and property management",
        paragraphs: [
          "Managing communities means answering the same questions over and over and fielding reports over phone, email and scattered WhatsApp groups: a breakdown gets reported however it can, finding the right provider takes time, and once it's fixed it's hard to know what happened and who was told.",
          "A community-management platform with an AI agent on WhatsApp as the entry point. Each resident identifies themselves with their unit's code, so the system knows who they are and they can only query and report about their own community. The manager uploads everything relevant to each community to a documents section, and the agent uses it to answer residents' frequent questions —rules, fees, contacts— citing the source.",
          "When the report is an incident, the agent logs it in a structured form and alert rules, by urgency or keywords, decide who gets notified (residents, manager or providers) and through which channel. With provider management built in, the system opens a conversation with the providers for the required service tied to that community; when one confirms, everyone is told it's covered. Each incident can be edited and annotated, leaving a full trace of what happened until it's closed.",
          "The manager stops chasing reports across scattered channels and repeating the same answers: residents write where they already write, get their questions resolved on the spot and every incident is documented and coordinated with the provider on its own. It works the same for residential communities, housing estates, industrial parks and commercial areas, whether they have a specific address or a scattered location.",
        ],
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
        captures: [
          {
            src: "/fincas/whatsapp.png",
            caption:
              "A resident reports a breakdown over WhatsApp; the agent structures it, confirms the details and tells them a provider is already handling it.",
          },
          {
            src: "/fincas/incidencias.png",
            caption:
              "The manager's incident panel: every report with its community, priority and status.",
          },
          {
            src: "/fincas/reglas-alerta.png",
            caption:
              "Alert rules: by urgency or keywords, they define who gets notified and through which channel.",
          },
          {
            src: "/fincas/proveedores.png",
            caption:
              "Providers tied to each community by activity, ready to receive the notice for the required service.",
          },
          {
            src: "/fincas/complejos.png",
            caption:
              "Communities, housing estates, industrial parks and commercial areas, with a specific address or a scattered location.",
          },
          {
            src: "/fincas/propiedades.png",
            caption:
              "Each property with its verification code: the resident identifies themselves and only accesses their own community.",
          },
        ],
      },
      {
        id: "logistica",
        sector: "Agri-food industry",
        title: "Silo unloading planner",
        paragraphs: [
          "An agri-food plant coordinated its truck intake —around 77 trips a week— with an Excel file and a macro: one person noted every change from the hauliers over the phone (a different weight, another time, cancellations, extra trips) and hit «update». Fragile and dependent on that person: if they weren't around, the plan didn't move, and with the silo full or empty that means trucks waiting or production stopped.",
          "The system replaces that Excel with a web app that replicates its simulation engine and brings it to real time: it models the silo level across the whole week, decides when each truck unloads based on free space, prioritises critical trips and anticipates delays and stoppages before they happen.",
          "The key is that drivers, plant staff, mechanics and supervisors talk to the system over Telegram. The system orchestrates everything: on any change —a delay, a different weight, an incident— it recalculates the sequencing, updates the dashboard chart with the new consumption and intakes, and notifies everyone affected. The manager goes from typing into an Excel to supervising a panel that keeps itself up to date.",
          "It turns a manual, fragile flow into a centralised system, accessible from any browser and auditable, and gives early visibility of a plant's two costly problems: a full silo (trucks waiting) and an empty silo (production stopped). The next phase, already planned, is to connect it to the plant's SCADA to read the real level directly.",
        ],
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
        captures: [
          {
            src: "/logistica/1dashboard.png",
            caption:
              "Dashboard: the silo level as a «sawtooth» across the week, with truck intakes and consumption, plus the KPIs for stoppage hours and delayed trips.",
          },
          {
            src: "/logistica/2secuenciacion.png",
            caption:
              "Automatic sequencing: each trip with its real unloading time, the delay accrued when there's no space and critical trips prioritised. Editable inline.",
          },
          {
            src: "/logistica/3productivididad.png",
            caption:
              "Configurable consumption by time bands: the flow rate of each hopper is set per day and hour —weekends included— to model peaks or extend consumption.",
          },
          {
            src: "/logistica/telegram.png",
            caption:
              "Drivers, plant, mechanics and supervisors talk to the system over Telegram: they confirm or report changes and the system recalculates the sequence and notifies everyone affected.",
          },
        ],
      },
    ],
    others: [
      {
        category: "Conversational agents",
        title: "WhatsApp bookings with CRM",
        description:
          "Integrated with dental clinics' CRM to book, cancel, modify and remind appointments, working on the CRM's own data and calendar.",
        stack: ["WhatsApp", "Nubimed CRM", "n8n", "LLM", "PostgreSQL"],
      },
      {
        category: "Conversational agents",
        title: "WhatsApp bookings with Google Calendar",
        description:
          "Appointment booking for small traditional businesses with no CRM, managing the schedule directly on Google Calendar.",
        stack: ["WhatsApp", "n8n", "LLM", "React / Node.js", "PostgreSQL"],
      },
      {
        category: "Conversational agents",
        title: "Assistant for WooCommerce and Shopify",
        description:
          "Post-sale support and guidance during purchase or product search, on WhatsApp and as a web widget.",
        stack: ["WhatsApp", "Chatwoot", "n8n", "Qdrant", "PostgreSQL"],
      },
      {
        category: "Conversational agents",
        title: "RAG assistant over internal documentation",
        description:
          "An internal chat that answers citing the company's work instructions and technical sheets as its only source.",
        stack: ["React / Node.js", "n8n", "Qdrant", "PostgreSQL", "OpenAI API"],
      },
      {
        category: "Sales & lead-gen",
        title: "Automated sales funnel on social media",
        description:
          "Automates conversations like a setter and guides the lead until they ask for a call or a sign-up link.",
        stack: ["Instagram", "n8n", "LLM", "Chatwoot", "PostgreSQL"],
      },
      {
        category: "Sales & lead-gen",
        title: "CRM for real-estate agencies",
        description:
          "Classifies opportunities, follows up on leads and cross-checks data against the agency's criteria; hands off to a person when needed.",
        stack: ["React / Node.js", "LLM", "WhatsApp", "PostgreSQL", "n8n"],
      },
      {
        category: "Integrations & data",
        title: "Email orders straight into the ERP",
        description:
          "A pipeline reads orders arriving by email, an LLM parses them —references, quantities, variants— and creates them in the ERP. From inbox to registered order, hands-off.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        category: "Integrations & data",
        title: "Traceability in the meat industry",
        description:
          "Reads paper delivery notes —hundreds of lines once typed in one by one— from a photo or scan, and pushes every item into the ERP automatically.",
        stack: ["OCR", "LLM", "Client ERP", "n8n", "Google Drive"],
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
    note: "A conversational AI agent that will answer you on WhatsApp right away. Ask it anything about me!",
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
    downloads: {
      title: "Documents",
      cv: "Résumé",
      portfolio: "Technical portfolio",
      downloadAction: "Download",
    },
  },
  footer: {
    legalNotice: "Legal notice",
    privacy: "Privacy",
  },
};
