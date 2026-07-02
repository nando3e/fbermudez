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
    note: "Client names withheld for confidentiality — references available on request.",
    cases: [
      {
        sector: "Waste recovery",
        title: "AI agent to coordinate truck unloading",
        description:
          "Trucks arrived with no order and the weighbridge was a bottleneck. A Telegram agent now coordinates unloading: hauliers announce their arrival, the agent assigns a slot and the plant sees the queue in real time.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        sector: "Hair salon",
        title: "WhatsApp booking agent",
        description:
          "Handles real availability, changes and cancellations. Includes the hard part: time zones, daylight-saving shifts (DST) and weekend edge cases that used to break appointments.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        sector: "Organic distribution",
        title: "Email orders straight into the ERP",
        description:
          "A pipeline reads orders arriving by email, an LLM parses them (SKUs, quantities, variants) and creates them in Odoo via JSON-RPC. From inbox to registered order, hands-off.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        sector: "Waste management",
        title: "Pickup dispatch system",
        description:
          "Kanban board for the office, a PWA for drivers, a photo inbox over Telegram and WhatsApp alerts. The whole pickup operation coordinated in a single flow.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
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
