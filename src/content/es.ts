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
        id: "fincas",
        sector: "Gestión de fincas",
        title: "Gestión de comunidades y fincas",
        description:
          "Software para administradores de fincas con un agente de IA en WhatsApp. Los vecinos se identifican por su vivienda, consultan dudas frecuentes sobre su comunidad y reportan incidencias; el sistema avisa a quien corresponda y coordina a los proveedores hasta cerrarlas.",
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
      },
      {
        id: "logistica",
        sector: "Industria agroalimentaria",
        title: "Planificador de descargas en silo",
        description:
          "App web que planifica en tiempo real la recepción de camiones de una planta: simula el nivel del silo, secuencia las descargas y anticipa retrasos y paradas. Conductores y personal hablan con el sistema por Telegram y el plan se recalcula solo.",
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
      },
    ],
    viewAll: "Ver más proyectos",
    caseMore: "Ver más",
  },
  cases: {
    metaTitle: "Casos — Fernando Bermúdez",
    metaDescription:
      "Casos reales de automatización, agentes de IA e integraciones en producción: agentes conversacionales, pipelines de datos y sistemas a medida.",
    breadcrumbHome: "Inicio",
    eyebrow: "Casos",
    title: "Casos en producción",
    intro:
      "Sistemas construidos a medida que a día de hoy están funcionando en empresas de diferentes sectores.",
    othersTitle: "Más casos",
    galleryPrev: "Captura anterior",
    galleryNext: "Captura siguiente",
    capturePending: "Captura en preparación",
    lightboxClose: "Cerrar",
    backHome: "Volver a inicio",
    featured: [
      {
        id: "fincas",
        sector: "Gestión de fincas",
        title: "Gestión de comunidades y fincas",
        paragraphs: [
          "Administrar comunidades es responder las mismas dudas una y otra vez y recibir avisos por teléfono, correo y grupos de WhatsApp sueltos: una avería se comunica como se puede, coordinar al proveedor lleva tiempo y, al resolverse, cuesta saber qué pasó y a quién se avisó.",
          "Un software de gestión de comunidades con un agente de IA en WhatsApp como puerta de entrada. Cada vecino se identifica con el código de su vivienda, así el sistema lo reconoce y solo consulta y reporta sobre su comunidad. El administrador sube a una sección de documentos todo lo relativo a cada comunidad, y el agente responde con esa documentación las preguntas frecuentes de los vecinos —normas, cuotas, contactos— citando la fuente.",
          "Cuando el aviso es una incidencia, el agente la registra de forma estructurada y unas reglas de alerta, por nivel de urgencia o por palabras clave, deciden a quién se notifica (vecinos, administrador o proveedores) y por qué canal. Con la gestión de proveedores integrada, el sistema abre la conversación con los del servicio requerido asociados a esa comunidad; cuando uno confirma, se avisa a todos de que está cubierta. Cada incidencia se edita y se va anotando, dejando trazabilidad de lo ocurrido hasta el cierre.",
          "El administrador deja de perseguir avisos por canales dispersos y de repetir las mismas respuestas: los vecinos escriben por donde ya escriben, resuelven sus dudas al momento y cada incidencia queda documentada y coordinada sola con el proveedor. Funciona igual para comunidades de vecinos, urbanizaciones, polígonos industriales y zonas comerciales, con dirección concreta o ubicación dispersa.",
        ],
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
        captures: [
          {
            src: "/fincas/whatsapp.png",
            caption:
              "Un vecino reporta una avería por WhatsApp; el agente la estructura, confirma los datos y avisa de que un proveedor ya la gestiona.",
          },
          {
            src: "/fincas/incidencias.png",
            caption:
              "Panel de incidencias del administrador: cada aviso con su comunidad, prioridad y estado.",
          },
          {
            src: "/fincas/reglas-alerta.png",
            caption:
              "Reglas de alerta: por urgencia o palabras clave, definen a quién se notifica y por qué canal.",
          },
          {
            src: "/fincas/proveedores.png",
            caption:
              "Proveedores asociados a cada comunidad por actividad, listos para recibir el aviso del servicio requerido.",
          },
          {
            src: "/fincas/complejos.png",
            caption:
              "Comunidades, urbanizaciones, polígonos industriales y zonas comerciales, con dirección concreta o ubicación dispersa.",
          },
          {
            src: "/fincas/propiedades.png",
            caption:
              "Cada propiedad con su código de verificación: el vecino se identifica y solo accede a lo de su comunidad.",
          },
        ],
      },
      {
        id: "logistica",
        sector: "Industria agroalimentaria",
        title: "Planificador de descargas en silo",
        paragraphs: [
          "Una planta agroalimentaria coordinaba la recepción de camiones —unos 77 viajes por semana— con un Excel y una macro: una persona apuntaba por teléfono cada cambio de los transportistas (otro peso, otra hora, cancelaciones, viajes extra) y pulsaba «actualizar». Frágil y dependiente de esa persona: si no estaba, la planificación no se movía, y con el silo lleno o vacío eso son camiones esperando o producción parada.",
          "El sistema sustituye ese Excel por una app web que replica su motor de simulación y lo lleva a tiempo real: modela el nivel del silo durante toda la semana, decide cuándo descarga cada camión según el espacio libre, prioriza los viajes críticos y anticipa retrasos y paradas antes de que ocurran.",
          "La clave es que conductores, personal de planta, mecánicos y supervisores hablan con el sistema por Telegram. El sistema lo orquesta todo: ante un cambio —un retraso, otro peso, una incidencia— recalcula la secuenciación, actualiza el gráfico del dashboard con el nuevo consumo y las entradas, y avisa a los implicados. El responsable pasa de teclear en un Excel a supervisar un panel que se mantiene solo.",
          "Convierte un flujo manual y frágil en un sistema centralizado, accesible desde cualquier navegador y auditable, y da visibilidad anticipada de los dos problemas caros de una planta: silo lleno (camiones esperando) y silo vacío (parada de producción). La siguiente fase, ya prevista, es conectarlo al SCADA de la planta para leer el nivel real directamente.",
        ],
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
        captures: [
          {
            src: "/logistica/1dashboard.png",
            caption:
              "Dashboard: el nivel del silo en «dientes de sierra» durante la semana, con las entradas de camión y el consumo, y los KPIs de horas de parada y viajes con retraso.",
          },
          {
            src: "/logistica/2secuenciacion.png",
            caption:
              "Secuenciación automática: cada viaje con su hora real de descarga, el retraso acumulado cuando no hay espacio y los viajes críticos priorizados. Editable en línea.",
          },
          {
            src: "/logistica/3productivididad.png",
            caption:
              "Consumo configurable por franjas: se define el caudal de cada tolva por día y hora —incluido el fin de semana— para modelar picos o ampliar el consumo.",
          },
          {
            src: "/logistica/telegram.png",
            caption:
              "Conductores, planta, mecánicos y supervisores hablan con el sistema por Telegram: confirman o comunican cambios y el sistema recalcula la secuencia y avisa a los implicados.",
          },
        ],
      },
    ],
    others: [
      {
        category: "Agentes conversacionales",
        title: "Reservas por WhatsApp con CRM",
        description:
          "Integración con el CRM de clínicas dentales para reservar, cancelar, modificar y recordar citas, trabajando sobre los datos y el calendario del propio CRM.",
        stack: ["WhatsApp", "Nubimed CRM", "n8n", "LLM", "PostgreSQL"],
      },
      {
        category: "Agentes conversacionales",
        title: "Reservas por WhatsApp con Google Calendar",
        description:
          "Reserva de citas para pequeños negocios tradicionales sin CRM, gestionando la agenda directamente sobre Google Calendar.",
        stack: ["WhatsApp", "n8n", "LLM", "React / Node.js", "PostgreSQL"],
      },
      {
        category: "Agentes conversacionales",
        title: "Asistente para WooCommerce y Shopify",
        description:
          "Atención posventa y orientación durante la compra o la búsqueda de productos, en WhatsApp y como widget web.",
        stack: ["WhatsApp", "Chatwoot", "n8n", "Qdrant", "PostgreSQL"],
      },
      {
        category: "Agentes conversacionales",
        title: "Asistente RAG sobre documentación interna",
        description:
          "Chat interno que responde citando las instrucciones de trabajo y fichas técnicas de la empresa como única fuente.",
        stack: ["React / Node.js", "n8n", "Qdrant", "PostgreSQL", "OpenAI API"],
      },
      {
        category: "Ventas y captación",
        title: "Funnel de ventas en redes sociales",
        description:
          "Automatiza las conversaciones como un setter y conduce al lead hasta que pide una llamada o un enlace de registro.",
        stack: ["Instagram", "n8n", "LLM", "Chatwoot", "PostgreSQL"],
      },
      {
        category: "Ventas y captación",
        title: "CRM para agencias inmobiliarias",
        description:
          "Clasifica oportunidades, hace seguimiento de los leads y cruza los datos con los criterios de la agencia; deriva a una persona los casos que lo requieren.",
        stack: ["React / Node.js", "LLM", "WhatsApp", "PostgreSQL", "n8n"],
      },
      {
        category: "Integraciones y datos",
        title: "Pedidos por email directos al ERP",
        description:
          "Un pipeline lee los pedidos que llegan por correo, un LLM los interpreta —referencias, cantidades, variantes— y los crea en el ERP. De la bandeja de entrada a pedido registrado, sin manos.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        category: "Integraciones y datos",
        title: "Trazabilidad en industria cárnica",
        description:
          "Lee albaranes en papel —cientos de líneas que antes se tecleaban una a una— desde una foto o un escaneo, y vuelca cada artículo en el ERP automáticamente.",
        stack: ["OCR", "LLM", "ERP cliente", "n8n", "Google Drive"],
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
