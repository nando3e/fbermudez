import type { SiteContent } from "./types";

export const ca: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Desenvolupament web, automatització i intel·ligència artificial",
    description:
      "Programador i especialista en millora de processos. Construeixo agents d'IA i integracions que connecten els sistemes d'una pime.",
  },
  nav: {
    about: "Perfil",
    skills: "Skills",
    projects: "Projectes",
    education: "Formació",
    contact: "Contacte",
  },
  intro: {
    name: "Fernando Bermúdez",
    role: "Desenvolupament web | Automatització | Intel·ligència artificial",
    bio: [
      "Programador i especialista en millora de processos, format en Lean i Six Sigma en multinacionals. Treballo per entendre el procés i el problema, per després construir el sistema que el resol.",
      "Sóc soci tecnològic a Solutia (RBImprove, S.L.), on creem tot tipus d'automatitzacions, agents d'IA, desenvolupaments a mida i integracions entre les diferents eines de les empreses per oferir solucions efectives.",
      "El meu propòsit és aportar rigor industrial al món digital, amb sistemes que funcionen, de manera real, mesurada i sense soroll.",
    ],
    ctaProjects: "Veure projectes",
    ctaAssistant: "Provar un agent IA",
  },
  skills: {
    title: "Skills",
    groups: [
      {
        name: "Automatització & IA",
        description:
          "Dissenyo i construeixo automatitzacions i sistemes potenciats amb IA, utilitzant Claude, OpenAI, codi propi, n8n i MCP: sistemes que entenen llenguatge natural, decideixen i actuen sobre la teva pròpia informació.",
      },
      {
        name: "Missatgeria & integracions",
        description:
          "Connecto els canals per on passa el negoci —WhatsApp, Instagram, Telegram— amb Chatwoot i altres CRM, i hi afegeixo veu mitjançant Vapi i ElevenLabs. El client escriu o truca i el sistema respon.",
      },
      {
        name: "Backend & frontend",
        description:
          "Desenvolupament en entorn servidor i entorn client per construir aplicacions integrals, amb accés a dades, dashboards, vistes personalitzades i totalment responsive per a mòbils.",
      },
      {
        name: "Dades & seguretat",
        description:
          "Bases de dades relacionals, no relacionals, vectorials per a cerca semàntica i grafs de coneixement. Autenticació encriptada per a totes les aplicacions.",
      },
      {
        name: "DevOps & infra",
        description:
          "Desplegaments en VPS amb Docker: cada projecte de cada client aïllat i traçable, en contenidors, sense dependre de plataformes tancades.",
      },
      {
        name: "Metodologia",
        description:
          "Fases d'anàlisi, disseny, programació, proves i documentació. Del problema a les especificacions, i d'aquí a solucions que funcionin.",
      },
    ],
  },
  projects: {
    title: "Projectes",
    intro: "Casos reals en producció. Problema, solució i impacte.",
    note: "Noms de client omesos per confidencialitat — referències disponibles si les necessites.",
    cases: [
      {
        sector: "Valorització de residus",
        title: "Agent IA per coordinar descàrregues de camions",
        description:
          "Els camions arribaven sense ordre i la bàscula era un coll d'ampolla. Un agent a Telegram coordina ara les descàrregues: els transportistes anuncien la seva arribada, l'agent assigna torn i la planta veu la cua en temps real.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        sector: "Perruqueria",
        title: "Agent de reserves per WhatsApp",
        description:
          "Gestiona disponibilitat real, canvis i cancel·lacions. Inclou la part difícil: zones horàries, canvis d'hora (DST) i casos límit de cap de setmana que trencaven les cites.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        sector: "Distribució ecològica",
        title: "Comandes per email directes a l'ERP",
        description:
          "Un pipeline llegeix les comandes que arriben per correu, un LLM les interpreta (referències, quantitats, variants) i les crea a Odoo via JSON-RPC. De la safata d'entrada a comanda registrada, sense mans.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        sector: "Gestió de residus",
        title: "Sistema de dispatch de recollides",
        description:
          "Tauler Kanban per a l'oficina, PWA per a conductors, bústia de fotos per Telegram i avisos per WhatsApp. Tota l'operació de recollida coordinada en un sol flux.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
      },
    ],
  },
  education: {
    title: "Formació",
    items: [
      {
        name: "Tècnic Superior en Desenvolupament d'Aplicacions Web (DAW)",
        org: "ILERNA",
        detail:
          "Cicle de Grau Superior en desenvolupament web full-stack: frontend, backend, bases de dades i desplegament d'aplicacions. La base formal sobre la qual recolzo la resta de la meva feina.",
      },
      {
        name: "Especialista en Intel·ligència Artificial Generativa",
        org: "Racks Academy",
        detail:
          "Formació pràctica en IA generativa: dels fonaments dels models de llenguatge a integrar-los en solucions reals que arriben a producció.",
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
          "Formació en Yellow Belt, Green Belt i metodologia Kaizen, que vaig aplicar com a supervisor de producció per a la gestió d'equips i en l'impuls de projectes de millora contínua i estandardització.",
      },
    ],
  },
  assistant: {
    eyebrow: "Demo en viu",
    question: "Vols parlar amb el meu assistent?",
    note: "És un agent IA real, com els que construeixo, que t'atendrà per WhatsApp a l'instant. Pregunta-li el que vulguis sobre mi!",
    cta: "Obrir WhatsApp",
  },
  contact: {
    title: "Contacte",
    text: "Tens un projecte al cap o busques algú per al teu equip? Escriu-me o truca'm.",
    emailLabel: "Email",
    phoneLabel: "Telèfon",
    callLabel: "Trucar",
    whatsappLabel: "WhatsApp",
    linkedinPrompt: "Vols saber més de mi?",
    linkedinCta: "Fes una ullada al meu LinkedIn",
  },
  footer: {
    legalNotice: "Avís legal",
    privacy: "Privacitat",
  },
};
