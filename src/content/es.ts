import type { SiteContent } from "./types";

export const es: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Desarrollo web, automatización e inteligencia artificial",
    description:
      "Programador y especialista en mejora de procesos. Construyo agentes de IA e integraciones que conectan los sistemas de una pyme.",
  },
  nav: {
    about: "Perfil",
    skills: "Skills",
    projects: "Proyectos",
    education: "Formación",
    contact: "Contacto",
  },
  intro: {
    name: "Fernando Bermúdez",
    role: "Desarrollo web | Automatización | Inteligencia artificial",
    bio: [
      "Programador y especialista en mejora de procesos, formado en Lean y Six Sigma en multinacionales. Trabajo para entender el proceso y el problema, para luego construir el sistema que lo resuelve.",
      "Soy socio tecnológico en Solutia (RBImprove, S.L.), donde creamos todo tipo de automatizaciones, agentes de IA, desarrollos a medida e integraciones entre las diferentes herramientas de las empresas para ofrecer soluciones efectivas.",
      "Mi propósito es aportar rigor industrial al mundo digital, con sistemas que funcionan, de manera real, medida y sin ruido.",

    ],
    ctaProjects: "Ver proyectos",
    ctaAssistant: "Probar un agente IA",
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Automatización & IA",
        description:
          "Diseño y construyo automatizaciones y sistemas potenciados con IA, utilizando Claude, OpenAI, código propio, n8n y MCP: sistemas que entienden lenguaje natural, deciden y actúan sobre tu propia información.",
      },
      {
        name: "Mensajería & integraciones",
        description:
          "Conecto los canales por donde pasa el negocio —WhatsApp, Instagram, Telegram— con Chatwoot y otros CRM, y añado voz mediante Vapi y ElevenLabs. El cliente escribe o llama y el sistema responde.",
      },
      {
        name: "Backend & frontend",
        description:
          "Desarrollo en entorno servidor y entorno cliente para construir aplicaciones integrales, con acceso a datos, dashboards, vistas personalizadas y totalmente responsive para móviles.",
      },
      {
        name: "Datos & seguridad",
        description:
          "Bases de datos relacionales, no relacionales, vectoriales para búsqueda semántica y grafos de conocimiento. Autenticación encriptada para todas las aplicaciones.",
      },
      {
        name: "DevOps & infra",
        description:
          "Despliegues en VPS con Docker: cada proyecto de cada cliente aislado y trazable, en contenedores, sin depender de plataformas cerradas.",
      },
      {
        name: "Metodología",
        description:
          "Fases de análisis, diseño, programación, pruebas y documentación. Del problema a las especificaciones, y de ahí a soluciones que funcionan.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Casos reales en producción. Problema, solución e impacto.",
    note: "Nombres de cliente omitidos por confidencialidad — referencias disponibles si las necesitas.",
    cases: [
      {
        sector: "Valorización de residuos",
        title: "Agente IA para coordinar descargas de camiones",
        description:
          "Los camiones llegaban sin orden y la báscula era un cuello de botella. Un agente en Telegram coordina ahora las descargas: los transportistas anuncian su llegada, el agente asigna turno y la planta ve la cola en tiempo real.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        sector: "Peluquería",
        title: "Agente de reservas por WhatsApp",
        description:
          "Gestiona disponibilidad real, cambios y cancelaciones. Incluye la parte difícil: zonas horarias, cambios de hora (DST) y casos límite de fin de semana que rompían las citas.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        sector: "Distribución ecológica",
        title: "Pedidos por email directos al ERP",
        description:
          "Un pipeline lee los pedidos que llegan por correo, un LLM los interpreta (referencias, cantidades, variantes) y los crea en Odoo vía JSON-RPC. De la bandeja de entrada a pedido registrado, sin manos.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        sector: "Gestión de residuos",
        title: "Sistema de dispatch de recogidas",
        description:
          "Tablero Kanban para la oficina, PWA para conductores, buzón de fotos por Telegram y avisos por WhatsApp. Toda la operación de recogida coordinada en un solo flujo.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
      },
    ],
  },
  education: {
    title: "Formación",
    items: [
      {
        name: "Técnico Superior en Desarrollo de Aplicaciones Web (DAW)",
        org: "ILERNA",
        detail:
          "Ciclo de Grado Superior en desarrollo web full-stack: frontend, backend, bases de datos y despliegue de aplicaciones. La base formal sobre la que apoyo el resto de mi trabajo.",
      },      
      {
        name: "Especialista en Inteligencia Artificial Generativa",
        org: "Racks Academy",
        detail:
          "Formación práctica en IA generativa: de los fundamentos de los modelos de lenguaje a integrarlos en soluciones reales que llegan a producción.",
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
          "Formación en Yellow Belt, Green Belt y metodología Kaizen, que apliqué como supervisor de producción para la gestión de equipos y en el impulso de proyectos de mejora continua y estandarización.",
      },
    ],
  },
  assistant: {
    eyebrow: "Demo en vivo",
    question: "¿Quieres hablar con mi asistente?",
    note: "Es un agente IA real, como los que construyo, que te atenderá por WhatsApp al momento. ¡Pregúntale lo que quieras sobre mí!",
    cta: "Abrir WhatsApp",
  },
  contact: {
    title: "Contacto",
    text: "¿Tienes un proyecto en mente o buscas a alguien para tu equipo? Escríbeme o llámame.",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    callLabel: "Llamar",
    whatsappLabel: "WhatsApp",
    linkedinPrompt: "¿Quieres conocer más acerca de mí?",
    linkedinCta: "Echa un vistazo a mi LinkedIn",
  },
  footer: {
    legalNotice: "Aviso legal",
    privacy: "Privacidad",
  },
};
