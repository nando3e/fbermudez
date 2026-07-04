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
    menu: "Menú",
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
          "Dissenyo i construeixo automatitzacions i sistemes potenciats amb IA, fent servir codi propi, MCPs, API Rest i n8n entre d'altres per aconseguir solucions que entenen i actuen sobre la teva pròpia informació.",
      },
      {
        name: "Missatgeria & integracions",
        description:
          "Connecto els canals per on passa el negoci —WhatsApp, Instagram, Telegram, mail— amb Chatwoot i altres CRM, a més d'afegir-hi veu mitjançant Vapi o ElevenLabs. El client pregunta, el sistema respon.",
      },
      {
        name: "Backend & frontend",
        description:
          "Desenvolupament d'entorn servidor i entorn client per construir aplicacions integrals, amb accés a dades, dashboards, vistes personalitzades i totalment responsive per a mòbils.",
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
          "Anàlisi, disseny, programació, proves i lliurament amb documentació. Del problema a les especificacions, i de les especificacions a la solució que funciona.",
      },
    ],
  },
  projects: {
    title: "Projectes",
    intro: "Casos reals en producció. Problema, solució i impacte.",
    cases: [
      {
        id: "descargas-camiones",
        sector: "Valorització de residus",
        title: "Agent IA per coordinar descàrregues de camions",
        description:
          "Els camions arribaven sense ordre i la bàscula era un coll d'ampolla. Un agent a Telegram coordina ara les descàrregues: els transportistes anuncien la seva arribada, l'agent assigna torn i la planta veu la cua en temps real.",
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
      },
      {
        id: "reservas-whatsapp",
        sector: "Perruqueria",
        title: "Agent de reserves per WhatsApp",
        description:
          "Gestiona disponibilitat real, canvis i cancel·lacions. Inclou la part difícil: zones horàries, canvis d'hora (DST) i casos límit de cap de setmana que trencaven les cites.",
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
      },
      {
        id: "pedidos-erp",
        sector: "Distribució ecològica",
        title: "Comandes per email directes a l'ERP",
        description:
          "Un pipeline llegeix les comandes que arriben per correu, un LLM les interpreta (referències, quantitats, variants) i les crea a Odoo via JSON-RPC. De la safata d'entrada a comanda registrada, sense mans.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        id: "dispatch-recogidas",
        sector: "Gestió de residus",
        title: "Sistema de dispatch de recollides",
        description:
          "Tauler Kanban per a l'oficina, PWA per a conductors, bústia de fotos per Telegram i avisos per WhatsApp. Tota l'operació de recollida coordinada en un sol flux.",
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
      },
    ],
    viewAll: "Veure més projectes",
    caseMore: "Veure més",
  },
  cases: {
    metaTitle: "Casos — Fernando Bermúdez",
    metaDescription:
      "Dotze casos reals d'automatització, agents d'IA i integracions en producció: agents conversacionals, pipelines de dades i sistemes a mida.",
    breadcrumbHome: "Inici",
    eyebrow: "Casos",
    title: "Casos en producció",
    intro:
      "Sistemes construïts a mida que avui funcionen en empreses reals. Els quatre primers, amb més detall i captures; la resta, en versió breu.",
    othersTitle: "Més casos",
    galleryPrev: "Captura anterior",
    galleryNext: "Captura següent",
    capturePending: "Captura en preparació",
    lightboxClose: "Tancar",
    featured: [
      {
        id: "descargas-camiones",
        sector: "Valorització de residus",
        title: "Agent IA per coordinar descàrregues de camions",
        paragraphs: [
          "Els camions arribaven a planta sense ordre previ: cues a la bàscula, trucades creuades i una operativa que depenia de la memòria de qui fos a recepció aquell dia.",
          "Un agent a Telegram coordina ara les descàrregues: els transportistes anuncien l'arribada des de la cabina, l'agent els assigna torn segons el material i el moll disponible, i la planta veu la cua en temps real.",
          "El resultat: menys esperes a la bàscula, zero trucades de coordinació i un registre complet de cada descàrrega sense que ningú apunti res a mà.",
        ],
        stack: ["Telegram", "Claude API", "n8n", "PostgreSQL"],
        captures: [
          { caption: "Un transportista anuncia l'arribada des de la cabina" },
          { caption: "L'agent assigna torn i hora estimada de descàrrega" },
          { caption: "La cua de camions en temps real, vista des de planta" },
          { caption: "Panell d'administració de torns i molls" },
          { caption: "Avís automàtic al següent camió de la cua" },
          { caption: "Històric de descàrregues amb material i tonatge" },
        ],
      },
      {
        id: "reservas-whatsapp",
        sector: "Perruqueria",
        title: "Agent de reserves per WhatsApp",
        paragraphs: [
          "El telèfon del saló sonava mentre s'atenia clients: cites apuntades a mitges, canvis que no es registraven i forats perduts.",
          "Un agent de WhatsApp gestiona l'agenda amb disponibilitat real: reserva, canvia i cancel·la cites conversant amb naturalitat. Inclou la part difícil — zones horàries, canvis d'hora (DST) i casos límit de cap de setmana que trencaven les cites.",
          "El saló va deixar de perdre reserves fora d'horari i l'agenda es manté coherent sense intervenció manual.",
        ],
        stack: ["WhatsApp · Evolution API", "n8n", "Claude API"],
        captures: [
          { caption: "Una reserva completa, de salutació a confirmació" },
          { caption: "Canvi d'una cita existent en dos missatges" },
          { caption: "Cancel·lació amb el forat alliberat al moment" },
          { caption: "L'agenda del saló, sincronitzada" },
          { caption: "Cas límit resolt: reserva sobre un canvi d'hora (DST)" },
        ],
      },
      {
        id: "pedidos-erp",
        sector: "Distribució ecològica",
        title: "Comandes per email directes a l'ERP",
        paragraphs: [
          "Cada matí, una persona transcrivia a mà les comandes que arribaven per correu: referències, quantitats, variants. Lent i amb errors que acabaven al repartiment.",
          "Un pipeline llegeix els correus entrants, un LLM interpreta cada comanda i la valida contra el catàleg, i la comanda es crea a Odoo via JSON-RPC. Les referències dubtoses es marquen per revisar en lloc d'endevinar-se.",
          "De la safata d'entrada a la comanda registrada sense mans, amb les excepcions assenyalades perquè una persona decideixi només on aporta.",
        ],
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
        captures: [
          { caption: "L'email de comanda original, tal com arriba" },
          { caption: "La interpretació del LLM: línies, referències i quantitats" },
          { caption: "La comanda creada automàticament a Odoo" },
          { caption: "Una referència dubtosa marcada per a revisió humana" },
          { caption: "Registre d'activitat del pipeline" },
        ],
      },
      {
        id: "dispatch-recogidas",
        sector: "Gestió de residus",
        title: "Sistema de dispatch de recollides",
        paragraphs: [
          "L'operació de recollides es coordinava per trucades i grups de WhatsApp: ningú tenia la foto completa i els justificants arribaven tard o no arribaven.",
          "Un sol flux ho ordena tot: tauler Kanban per a l'oficina, PWA per als conductors amb la ruta del dia, bústia de fotos per Telegram des del camió i avisos automàtics per WhatsApp al client.",
          "Cada recollida queda documentada al moment, i l'oficina veu l'estat de tota la flota d'un cop d'ull.",
        ],
        stack: ["PWA", "React", "Telegram", "WhatsApp", "Node.js"],
        captures: [
          { caption: "El tauler Kanban de l'oficina" },
          { caption: "La PWA del conductor amb la ruta del dia" },
          { caption: "Fotos del servei enviades per Telegram des del camió" },
          { caption: "Avís de WhatsApp al client amb la recollida confirmada" },
          { caption: "Detall d'una recollida completada i documentada" },
          { caption: "Vista general de l'operació en temps real" },
        ],
      },
    ],
    groups: [
      {
        name: "Agents conversacionals",
        items: [
          {
            sector: "Restauració",
            title: "Atenció de WhatsApp fora d'horari",
            description:
              "Relay que atén els missatges quan el negoci és tancat: respon dubtes freqüents i deixa les reserves anotades per confirmar al matí.",
            stack: ["WhatsApp", "n8n", "Claude API"],
          },
          {
            sector: "Media",
            title: "Agent conversacional per a un podcast",
            description:
              "Conversa amb l'audiència guiat per una màquina d'estats: recomana episodis, recull suggeriments i manté el fil entre visites.",
            stack: ["Telegram", "FSM", "LLM"],
          },
          {
            sector: "Serveis",
            title: "Agent de veu per a cites",
            description:
              "Recepcionista de veu que atén la trucada, consulta disponibilitat real i deixa la cita confirmada abans de penjar.",
            stack: ["Vapi", "ElevenLabs", "n8n"],
          },
        ],
      },
      {
        name: "Integracions i dades",
        items: [
          {
            sector: "Alimentació",
            title: "Traçabilitat de producte carni",
            description:
              "D'albarans en PDF i Excel a codis de traçabilitat generats i validats automàticament, sense transcripció manual.",
            stack: ["PDF/Excel", "LLM", "Node.js"],
          },
          {
            sector: "Serveis industrials",
            title: "Plataforma d'incidències multi-actor",
            description:
              "Registre i seguiment d'incidències entre client, tècnics i oficina, amb estats, responsables i avisos automàtics.",
            stack: ["React", "Node.js", "PostgreSQL"],
          },
          {
            sector: "Immobiliari",
            title: "Informes automàtics de mercat",
            description:
              "Agent que rastreja portals, creua les dades amb els criteris del client i envia un informe periòdic amb oportunitats filtrades.",
            stack: ["Scraping", "LLM", "n8n"],
          },
        ],
      },
      {
        name: "Web i backoffice",
        items: [
          {
            sector: "Consultoria",
            title: "Web corporativa multiidioma",
            description:
              "Lloc corporatiu en tres idiomes amb SEO tècnic, rendiment cuidat i desplegament autoallotjat en infraestructura pròpia.",
            stack: ["Next.js", "Tailwind", "Docker"],
          },
          {
            sector: "Indústria",
            title: "Assistent RAG sobre documentació interna",
            description:
              "Xat intern que respon citant les instruccions de treball i fitxes tècniques de l'empresa com a única font.",
            stack: ["RAG", "Base vectorial", "Claude API"],
          },
        ],
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
    note: "Un agent IA conversacional que t'atendrà per WhatsApp a l'instant. Pregunta-li el que vulguis sobre mi!",
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
