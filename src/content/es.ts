import type { SiteContent } from "./types";

export const es: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Desarrollo web, automatización e inteligencia artificial",
    description:
      "Programador y especialista en mejora de procesos. Construyo agentes de IA e integraciones que conectan los sistemas de una pyme.",
  },
  nav: {
    about: "Perfil",
    skills: "Cómo trabajo",
    projects: "Proyectos",
    education: "Formación",
    contact: "Contacto",
    menu: "Menú",
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
    title: "Cómo trabajo",
    groups: [
      {
        name: "Automatización & IA",
        description:
          "Diseño y construyo automatizaciones y sistemas potenciados con IA, usando código propio, MCPs, API Rest y n8n entre otros para conseguir soluciones que entienden y actúan sobre tu propia información.",
      },
      {
        name: "Mensajería & integraciones",
        description:
          "Conecto los canales por donde pasa el negocio —WhatsApp, Instagram, Telegram, mail— con Chatwoot y otros CRM, además de añadir voz mediante Vapi o ElevenLabs. El cliente pregunta, el sistema responde.",
      },
      {
        name: "Backend & frontend",
        description:
          "Desarrollo de entorno servidor y entorno cliente para construir aplicaciones integrales, con acceso a datos, dashboards, vistas personalizadas y totalmente responsive para móviles.",
      },
      {
        name: "Datos & seguridad",
        description:
          "Bases de datos relacionales, no relacionales, vectoriales para búsqueda semántica y grafos de conocimiento. Autenticación encriptada para todas las aplicaciones.",
      },
      {
        name: "DevOps & infra",
        description:
          "Despliegues en VPS con Docker: cada cliente y su proyecto separado con sus propias instancias, sin compartir contenedores y con trazabilidad absoluta.",
      },
      {
        name: "Metodología",
        description:
          "Análisis, diseño, programación, pruebas y entrega con documentación. Del problema a las especificaciones, y de las especificaciones a la solución que funciona.",
      },
    ],
  },
  projects: {
    title: "Proyectos",
    intro: "Casos reales en producción. Problema, solución e impacto.",
    cases: [
      {
        id: "descargas-camiones",
        sector: "Valorización de residuos",
        title: "Agente IA para coordinar descargas de camiones",
        description:
          "Los camiones llegaban sin orden y la báscula era un cuello de botella. Un agente en Telegram coordina ahora las descargas: los transportistas anuncian su llegada, el agente asigna turno y la planta ve la cola en tiempo real.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        id: "reservas-whatsapp",
        sector: "Peluquería",
        title: "Agente de reservas por WhatsApp",
        description:
          "Gestiona disponibilidad real, cambios y cancelaciones. Incluye la parte difícil: zonas horarias, cambios de hora (DST) y casos límite de fin de semana que rompían las citas.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        id: "pedidos-erp",
        sector: "Distribución ecológica",
        title: "Pedidos por email directos al ERP",
        description:
          "Un pipeline lee los pedidos que llegan por correo, un LLM los interpreta (referencias, cantidades, variantes) y los crea en Odoo vía JSON-RPC. De la bandeja de entrada a pedido registrado, sin manos.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        id: "dispatch-recogidas",
        sector: "Gestión de residuos",
        title: "Sistema de dispatch de recogidas",
        description:
          "Tablero Kanban para la oficina, PWA para conductores, buzón de fotos por Telegram y avisos por WhatsApp. Toda la operación de recogida coordinada en un solo flujo.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
      },
    ],
    viewAll: "Ver más proyectos",
    caseMore: "Ver más",
  },
  cases: {
    metaTitle: "Casos — Fernando Bermúdez",
    metaDescription:
      "Doce casos reales de automatización, agentes de IA e integraciones en producción: agentes conversacionales, pipelines de datos y sistemas a medida.",
    breadcrumbHome: "Inicio",
    eyebrow: "Casos",
    title: "Casos en producción",
    intro:
      "Sistemas construidos a medida que hoy funcionan en empresas reales. Los cuatro primeros, con más detalle y capturas; el resto, en versión breve.",
    othersTitle: "Más casos",
    galleryPrev: "Captura anterior",
    galleryNext: "Captura siguiente",
    capturePending: "Captura en preparación",
    lightboxClose: "Cerrar",
    featured: [
      {
        id: "descargas-camiones",
        sector: "Valorización de residuos",
        title: "Agente IA para coordinar descargas de camiones",
        paragraphs: [
          "Los camiones llegaban a planta sin orden previo: colas en la báscula, llamadas cruzadas y una operativa que dependía de la memoria de quien estuviera en recepción ese día.",
          "Un agente en Telegram coordina ahora las descargas: los transportistas anuncian su llegada desde la cabina, el agente les asigna turno según el material y el muelle disponible, y la planta ve la cola en tiempo real.",
          "El resultado: menos esperas en báscula, cero llamadas de coordinación y un registro completo de cada descarga sin que nadie apunte nada a mano.",
        ],
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
        captures: [
          { caption: "Un transportista anuncia su llegada desde la cabina" },
          { caption: "El agente asigna turno y hora estimada de descarga" },
          { caption: "La cola de camiones en tiempo real, vista desde planta" },
          { caption: "Panel de administración de turnos y muelles" },
          { caption: "Aviso automático al siguiente camión de la cola" },
          { caption: "Histórico de descargas con material y tonelaje" },
        ],
      },
      {
        id: "reservas-whatsapp",
        sector: "Peluquería",
        title: "Agente de reservas por WhatsApp",
        paragraphs: [
          "El teléfono del salón sonaba mientras se atendía a clientes: citas apuntadas a medias, cambios que no se registraban y huecos perdidos.",
          "Un agente de WhatsApp gestiona la agenda con disponibilidad real: reserva, cambia y cancela citas conversando con naturalidad. Incluye la parte difícil — zonas horarias, cambios de hora (DST) y casos límite de fin de semana que rompían las citas.",
          "El salón dejó de perder reservas fuera de horario y la agenda se mantiene coherente sin intervención manual.",
        ],
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
        captures: [
          { caption: "Una reserva completa, de saludo a confirmación" },
          { caption: "Cambio de una cita existente en dos mensajes" },
          { caption: "Cancelación con el hueco liberado al momento" },
          { caption: "La agenda del salón, sincronizada" },
          { caption: "Caso límite resuelto: reserva sobre un cambio de hora (DST)" },
        ],
      },
      {
        id: "pedidos-erp",
        sector: "Distribución ecológica",
        title: "Pedidos por email directos al ERP",
        paragraphs: [
          "Cada mañana, una persona transcribía a mano los pedidos que llegaban por correo: referencias, cantidades, variantes. Lento y con errores que acababan en el reparto.",
          "Un pipeline lee los correos entrantes, un LLM interpreta cada pedido y lo valida contra el catálogo, y el pedido se crea en Odoo vía JSON-RPC. Las referencias dudosas se marcan para revisión en vez de adivinarse.",
          "De la bandeja de entrada al pedido registrado sin manos, con las excepciones señaladas para que una persona decida solo donde aporta.",
        ],
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
        captures: [
          { caption: "El email de pedido original, tal como llega" },
          { caption: "La interpretación del LLM: líneas, referencias y cantidades" },
          { caption: "El pedido creado automáticamente en Odoo" },
          { caption: "Una referencia dudosa marcada para revisión humana" },
          { caption: "Registro de actividad del pipeline" },
        ],
      },
      {
        id: "dispatch-recogidas",
        sector: "Gestión de residuos",
        title: "Sistema de dispatch de recogidas",
        paragraphs: [
          "La operación de recogidas se coordinaba por llamadas y grupos de WhatsApp: nadie tenía la foto completa y los justificantes llegaban tarde o no llegaban.",
          "Un solo flujo lo ordena todo: tablero Kanban para la oficina, PWA para los conductores con su ruta del día, buzón de fotos por Telegram desde el camión y avisos automáticos por WhatsApp al cliente.",
          "Cada recogida queda documentada en el momento, y la oficina ve el estado de toda la flota de un vistazo.",
        ],
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
        captures: [
          { caption: "El tablero Kanban de la oficina" },
          { caption: "La PWA del conductor con su ruta del día" },
          { caption: "Fotos del servicio enviadas por Telegram desde el camión" },
          { caption: "Aviso de WhatsApp al cliente con la recogida confirmada" },
          { caption: "Detalle de una recogida completada y documentada" },
          { caption: "Vista general de la operación en tiempo real" },
        ],
      },
    ],
    groups: [
      {
        name: "Agentes conversacionales",
        items: [
          {
            sector: "Restauración",
            title: "Atención de WhatsApp fuera de horario",
            description:
              "Relay que atiende los mensajes cuando el negocio está cerrado: responde dudas frecuentes y deja las reservas anotadas para confirmar por la mañana.",
            stack: ["WhatsApp", "n8n", "Claude API"],
          },
          {
            sector: "Media",
            title: "Agente conversacional para un podcast",
            description:
              "Conversa con la audiencia guiado por una máquina de estados: recomienda episodios, recoge sugerencias y mantiene el hilo entre visitas.",
            stack: ["Telegram", "FSM", "LLM"],
          },
          {
            sector: "Servicios",
            title: "Agente de voz para citas",
            description:
              "Recepcionista de voz que atiende la llamada, consulta disponibilidad real y deja la cita confirmada antes de colgar.",
            stack: ["Vapi", "ElevenLabs", "n8n"],
          },
        ],
      },
      {
        name: "Integraciones y datos",
        items: [
          {
            sector: "Alimentación",
            title: "Trazabilidad de producto cárnico",
            description:
              "De albaranes en PDF y Excel a códigos de trazabilidad generados y validados automáticamente, sin transcripción manual.",
            stack: ["PDF/Excel", "LLM", "Node.js"],
          },
          {
            sector: "Servicios industriales",
            title: "Plataforma de incidencias multi-actor",
            description:
              "Registro y seguimiento de incidencias entre cliente, técnicos y oficina, con estados, responsables y avisos automáticos.",
            stack: ["React", "Node.js", "PostgreSQL"],
          },
          {
            sector: "Inmobiliario",
            title: "Informes automáticos de mercado",
            description:
              "Agente que rastrea portales, cruza los datos con los criterios del cliente y envía un informe periódico con oportunidades filtradas.",
            stack: ["Scraping", "LLM", "n8n"],
          },
        ],
      },
      {
        name: "Web y backoffice",
        items: [
          {
            sector: "Consultoría",
            title: "Web corporativa multiidioma",
            description:
              "Sitio corporativo en tres idiomas con SEO técnico, rendimiento cuidado y despliegue autoalojado en infraestructura propia.",
            stack: ["Next.js", "Tailwind", "Docker"],
          },
          {
            sector: "Industria",
            title: "Asistente RAG sobre documentación interna",
            description:
              "Chat interno que responde citando las instrucciones de trabajo y fichas técnicas de la empresa como única fuente.",
            stack: ["RAG", "Base vectorial", "Claude API"],
          },
        ],
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
    note: "Un agente IA conversacional que te atenderá por WhatsApp al momento. ¡Pregúntale lo que quieras sobre mí!",
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
