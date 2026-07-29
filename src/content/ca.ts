import type { SiteContent } from "./types";

export const ca: SiteContent = {
  meta: {
    title: "Fernando Bermúdez — Desenvolupament web, automatització i intel·ligència artificial",
    description:
      "Programador i especialista en millora de processos. Construeixo agents d'IA i integracions que connecten els sistemes d'una pime.",
  },
  nav: {
    about: "Perfil",
    skills: "Com treballo",
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
    title: "Com treballo",
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
          "Desplegaments en VPS amb Docker: cada client i el seu projecte separat amb les seves pròpies instàncies, sense compartir contenidors i amb traçabilitat absoluta.",
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
        id: "fincas",
        sector: "Gestió de finques",
        title: "Gestió de comunitats i finques",
        description:
          "Programari per a administradors de finques amb un agent d'IA a WhatsApp. Els veïns s'identifiquen per l'habitatge, consulten dubtes freqüents sobre la seva comunitat i reporten incidències; el sistema avisa qui correspongui i coordina els proveïdors fins a tancar-les.",
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
      },
      {
        id: "logistica",
        sector: "Indústria agroalimentària",
        title: "Planificador de descàrregues en sitja",
        description:
          "App web que planifica en temps real la recepció de camions d'una planta: simula el nivell de la sitja, seqüencia les descàrregues i anticipa retards i aturades. Conductors i personal parlen amb el sistema per Telegram i el pla es recalcula sol.",
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
      },
    ],
    viewAll: "Veure més projectes",
    caseMore: "Veure més",
  },
  cases: {
    metaTitle: "Casos — Fernando Bermúdez",
    metaDescription:
      "Casos reals d'automatització, agents d'IA i integracions en producció: agents conversacionals, pipelines de dades i sistemes a mida.",
    breadcrumbHome: "Inici",
    eyebrow: "Casos",
    title: "Casos en producció",
    intro:
      "Sistemes construïts a mida que a dia d'avui estan funcionant en empreses de diferents sectors.",
    othersTitle: "Més casos",
    galleryPrev: "Captura anterior",
    galleryNext: "Captura següent",
    capturePending: "Captura en preparació",
    lightboxClose: "Tancar",
    backHome: "Tornar a l'inici",
    downloadsTitle: "Descàrrega",
    featured: [
      {
        id: "fincas",
        sector: "Gestió de finques",
        title: "Gestió de comunitats i finques",
        paragraphs: [
          "Administrar comunitats és respondre els mateixos dubtes una vegada i una altra i rebre avisos per telèfon, correu i grups de WhatsApp solts: una avaria es comunica com es pot, coordinar el proveïdor porta temps i, quan es resol, costa saber què va passar i a qui es va avisar.",
          "Un programari de gestió de comunitats amb un agent d'IA a WhatsApp com a porta d'entrada. Cada veí s'identifica amb el codi del seu habitatge, així el sistema el reconeix i només consulta i reporta sobre la seva comunitat. L'administrador puja a una secció de documents tot allò relatiu a cada comunitat, i l'agent respon amb aquesta documentació les preguntes freqüents dels veïns —normes, quotes, contactes— citant la font.",
          "Quan l'avís és una incidència, l'agent la registra de manera estructurada i unes regles d'alerta, per nivell d'urgència o per paraules clau, decideixen a qui es notifica (veïns, administrador o proveïdors) i per quin canal. Amb la gestió de proveïdors integrada, el sistema obre la conversa amb els del servei requerit associats a aquesta comunitat; quan un confirma, s'avisa tothom que està coberta. Cada incidència s'edita i s'hi van afegint notes, deixant traçabilitat del que ha passat fins al tancament.",
          "L'administrador deixa de perseguir avisos per canals dispersos i de repetir les mateixes respostes: els veïns escriuen per on ja escriuen, resolen els seus dubtes a l'instant i cada incidència queda documentada i coordinada sola amb el proveïdor. Funciona igual per a comunitats de veïns, urbanitzacions, polígons industrials i zones comercials, amb adreça concreta o ubicació dispersa.",
        ],
        stack: ["WhatsApp", "Claude API", "React / Node.js", "Qdrant", "PostgreSQL"],
        captures: [
          {
            src: "/fincas/whatsapp.png",
            caption:
              "Un veí reporta una avaria per WhatsApp; l'agent l'estructura, confirma les dades i avisa que un proveïdor ja la gestiona.",
          },
          {
            src: "/fincas/incidencias.png",
            caption:
              "Panell d'incidències de l'administrador: cada avís amb la seva comunitat, prioritat i estat.",
          },
          {
            src: "/fincas/reglas-alerta.png",
            caption:
              "Regles d'alerta: per urgència o paraules clau, defineixen a qui es notifica i per quin canal.",
          },
          {
            src: "/fincas/proveedores.png",
            caption:
              "Proveïdors associats a cada comunitat per activitat, a punt de rebre l'avís del servei requerit.",
          },
          {
            src: "/fincas/complejos.png",
            caption:
              "Comunitats, urbanitzacions, polígons industrials i zones comercials, amb adreça concreta o ubicació dispersa.",
          },
          {
            src: "/fincas/propiedades.png",
            caption:
              "Cada propietat amb el seu codi de verificació: el veí s'identifica i només accedeix al de la seva comunitat.",
          },
        ],
      },
      {
        id: "logistica",
        sector: "Indústria agroalimentària",
        title: "Planificador de descàrregues en sitja",
        paragraphs: [
          "Una planta agroalimentària coordinava la recepció de camions —uns 77 viatges per setmana— amb un Excel i una macro: una persona apuntava per telèfon cada canvi dels transportistes (un altre pes, una altra hora, cancel·lacions, viatges extra) i premia «actualitzar». Fràgil i depenent d'aquesta persona: si no hi era, la planificació no es movia, i amb la sitja plena o buida això són camions esperant o producció aturada.",
          "El sistema substitueix aquest Excel per una app web que replica el seu motor de simulació i el porta a temps real: modela el nivell de la sitja durant tota la setmana, decideix quan descarrega cada camió segons l'espai lliure, prioritza els viatges crítics i anticipa retards i aturades abans que passin.",
          "La clau és que conductors, personal de planta, mecànics i supervisors parlen amb el sistema per Telegram. El sistema ho orquestra tot: davant d'un canvi —un retard, un altre pes, una incidència— recalcula la seqüenciació, actualitza el gràfic del dashboard amb el nou consum i les entrades, i avisa els implicats. El responsable passa de teclejar en un Excel a supervisar un panell que es manté sol.",
          "Converteix un flux manual i fràgil en un sistema centralitzat, accessible des de qualsevol navegador i auditable, i dona visibilitat anticipada dels dos problemes cars d'una planta: sitja plena (camions esperant) i sitja buida (aturada de producció). La fase següent, ja prevista, és connectar-lo al SCADA de la planta per llegir el nivell real directament.",
        ],
        stack: ["React / Vite", "Recharts", "Node / Express", "PostgreSQL", "Telegram"],
        captures: [
          {
            src: "/logistica/1dashboard.png",
            caption:
              "Dashboard: el nivell de la sitja en «dents de serra» durant la setmana, amb les entrades de camió i el consum, i els KPIs d'hores d'aturada i viatges amb retard.",
          },
          {
            src: "/logistica/2secuenciacion.png",
            caption:
              "Seqüenciació automàtica: cada viatge amb la seva hora real de descàrrega, el retard acumulat quan no hi ha espai i els viatges crítics prioritzats. Editable en línia.",
          },
          {
            src: "/logistica/3productivididad.png",
            caption:
              "Consum configurable per franges: es defineix el cabal de cada tremuja per dia i hora —inclòs el cap de setmana— per modelar pics o ampliar el consum.",
          },
          {
            src: "/logistica/telegram.png",
            caption:
              "Conductors, planta, mecànics i supervisors parlen amb el sistema per Telegram: confirmen o comuniquen canvis i el sistema recalcula la seqüència i avisa els implicats.",
          },
        ],
      },
    ],
    others: [
      {
        category: "Agents conversacionals",
        title: "Reserves per WhatsApp amb CRM",
        description:
          "Integració amb el CRM de clíniques dentals per reservar, cancel·lar, modificar i recordar cites, treballant sobre les dades i el calendari del propi CRM.",
        stack: ["WhatsApp", "Nubimed CRM", "n8n", "LLM", "PostgreSQL"],
      },
      {
        category: "Agents conversacionals",
        title: "Reserves per WhatsApp amb Google Calendar",
        description:
          "Reserva de cites per a petits negocis tradicionals sense CRM, gestionant l'agenda directament sobre Google Calendar.",
        stack: ["WhatsApp", "n8n", "LLM", "React / Node.js", "PostgreSQL"],
      },
      {
        category: "Agents conversacionals",
        title: "Assistent per a WooCommerce i Shopify",
        description:
          "Atenció postvenda i orientació durant la compra o la cerca de productes, a WhatsApp i com a widget web.",
        stack: ["WhatsApp", "Chatwoot", "n8n", "Qdrant", "PostgreSQL"],
      },
      {
        category: "Agents conversacionals",
        title: "Assistent RAG sobre documentació interna",
        description:
          "Xat intern que respon citant les instruccions de treball i fitxes tècniques de l'empresa com a única font.",
        stack: ["React / Node.js", "n8n", "Qdrant", "PostgreSQL", "OpenAI API"],
      },
      {
        category: "Vendes i captació",
        title: "Funnel de vendes a xarxes socials",
        description:
          "Automatitza les converses com un setter i condueix el lead fins que demana una trucada o un enllaç de registre.",
        stack: ["Instagram", "n8n", "LLM", "Chatwoot", "PostgreSQL"],
      },
      {
        category: "Vendes i captació",
        title: "CRM per a agències immobiliàries",
        description:
          "Classifica oportunitats, fa seguiment dels leads i creua les dades amb els criteris de l'agència; deriva a una persona els casos que ho requereixen.",
        stack: ["React / Node.js", "LLM", "WhatsApp", "PostgreSQL", "n8n"],
      },
      {
        category: "Integracions i dades",
        title: "Comandes per email directes a l'ERP",
        description:
          "Un pipeline llegeix les comandes que arriben per correu, un LLM les interpreta —referències, quantitats, variants— i les crea a l'ERP. De la safata d'entrada a comanda registrada, sense mans.",
        stack: ["LLM", "Odoo · JSON-RPC", "Node.js"],
      },
      {
        category: "Integracions i dades",
        title: "Traçabilitat a la indústria càrnia",
        description:
          "Llegeix albarans en paper —centenars de línies que abans es teclejaven una a una— des d'una foto o un escaneig, i bolca cada article a l'ERP automàticament.",
        stack: ["OCR", "LLM", "ERP client", "n8n", "Google Drive"],
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
    downloads: {
      title: "Documentació",
      cv: "Currículum",
      portfolio: "Portfolio tècnic",
      downloadAction: "Descarregar",
    },
  },
  footer: {
    legalNotice: "Avís legal",
    privacy: "Privacitat",
  },
};
