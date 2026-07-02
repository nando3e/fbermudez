import type { Locale } from "./types";
import { site } from "./site";

// Contenido de las páginas legales (aviso legal y política de privacidad).
// Vive fuera de SiteContent porque solo lo usan sus dos rutas.

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalPage {
  title: string;
  updated: string;
  back: string;
  sections: LegalSection[];
}

// NIF y domicilio salen de site.ts; hasta que se rellenen se marca el hueco.
const nif = site.legalNif || "[pendiente]";
const address = site.legalAddress || "[pendiente]";

export const legal: Record<Locale, { notice: LegalPage; privacy: LegalPage }> =
  {
    es: {
      notice: {
        title: "Aviso legal",
        updated: "Última actualización: julio de 2026",
        back: "Volver al inicio",
        sections: [
          {
            heading: "Identificación del titular",
            paragraphs: [
              "En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:",
            ],
            list: [
              "Titular: Fernando Bermúdez",
              `NIF: ${nif}`,
              `Domicilio: ${address}`,
              `Email de contacto: ${site.email}`,
              "Actividad: desarrollo de software, automatización con IA e integración de sistemas",
            ],
          },
          {
            heading: "Objeto",
            paragraphs: [
              "Este sitio web es un portfolio profesional: da a conocer la actividad, los proyectos y los datos de contacto del titular. El acceso es gratuito y no requiere registro.",
            ],
          },
          {
            heading: "Propiedad intelectual e industrial",
            paragraphs: [
              "Los contenidos de este sitio —textos, imágenes, código y diseño— son titularidad de Fernando Bermúdez o se utilizan con autorización de sus titulares. No se permite su reproducción, distribución o transformación sin autorización expresa, salvo en los casos permitidos por la ley.",
            ],
          },
          {
            heading: "Responsabilidad",
            paragraphs: [
              "El titular no se hace responsable del mal uso de los contenidos de este sitio ni de los daños derivados de circunstancias técnicas ajenas a su control. Los enlaces a sitios de terceros (por ejemplo, solutia.cat) se facilitan a título informativo; el titular no responde de sus contenidos.",
            ],
          },
          {
            heading: "Legislación aplicable",
            paragraphs: [
              "La relación entre el titular y el usuario se rige por la normativa española. Cualquier controversia se someterá a los juzgados y tribunales que correspondan conforme a derecho.",
            ],
          },
        ],
      },
      privacy: {
        title: "Política de privacidad",
        updated: "Última actualización: julio de 2026",
        back: "Volver al inicio",
        sections: [
          {
            heading: "Responsable del tratamiento",
            paragraphs: [
              "Esta política describe cómo se tratan los datos personales en fbermudez.dev, conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
            ],
            list: [
              "Responsable: Fernando Bermúdez",
              `NIF: ${nif}`,
              `Email: ${site.email}`,
            ],
          },
          {
            heading: "Datos que se tratan",
            paragraphs: [
              "Este sitio no utiliza formularios, cookies ni herramientas de analítica: navegar por él no recoge ningún dato personal. Los únicos datos tratados son los que facilitas voluntariamente al contactar por email, teléfono o WhatsApp: tu nombre, tus datos de contacto y el contenido del mensaje.",
            ],
          },
          {
            heading: "Finalidad y base jurídica",
            paragraphs: [
              "Los datos se utilizan exclusivamente para atender tu consulta y, en su caso, gestionar la relación profesional que se derive. La base jurídica es tu consentimiento (art. 6.1.a RGPD) y la aplicación de medidas precontractuales a petición tuya (art. 6.1.b RGPD).",
            ],
          },
          {
            heading: "Conservación",
            paragraphs: [
              "Los datos se conservan mientras dure la conversación o la relación profesional y, después, únicamente durante los plazos legalmente exigibles.",
            ],
          },
          {
            heading: "Destinatarios",
            paragraphs: [
              "No se ceden datos a terceros salvo obligación legal. Los proveedores de correo y alojamiento pueden tratar datos como encargados del tratamiento, con las garantías que exige el RGPD.",
            ],
          },
          {
            heading: "Tus derechos",
            paragraphs: [
              `Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${site.email}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).`,
            ],
          },
          {
            heading: "Cookies",
            paragraphs: ["Este sitio no utiliza cookies."],
          },
        ],
      },
    },
    ca: {
      notice: {
        title: "Avís legal",
        updated: "Última actualització: juliol de 2026",
        back: "Tornar a l'inici",
        sections: [
          {
            heading: "Identificació del titular",
            paragraphs: [
              "En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i de Comerç Electrònic (LSSI-CE), s'informa de les dades següents:",
            ],
            list: [
              "Titular: Fernando Bermúdez",
              `NIF: ${nif}`,
              `Domicili: ${address}`,
              `Email de contacte: ${site.email}`,
              "Activitat: desenvolupament de programari, automatització amb IA i integració de sistemes",
            ],
          },
          {
            heading: "Objecte",
            paragraphs: [
              "Aquest lloc web és un portfolio professional: dona a conèixer l'activitat, els projectes i les dades de contacte del titular. L'accés és gratuït i no requereix registre.",
            ],
          },
          {
            heading: "Propietat intel·lectual i industrial",
            paragraphs: [
              "Els continguts d'aquest lloc —textos, imatges, codi i disseny— són titularitat de Fernando Bermúdez o s'utilitzen amb autorització dels seus titulars. No se'n permet la reproducció, distribució o transformació sense autorització expressa, llevat dels casos permesos per la llei.",
            ],
          },
          {
            heading: "Responsabilitat",
            paragraphs: [
              "El titular no es fa responsable del mal ús dels continguts d'aquest lloc ni dels danys derivats de circumstàncies tècniques alienes al seu control. Els enllaços a llocs de tercers (per exemple, solutia.cat) es faciliten a títol informatiu; el titular no respon dels seus continguts.",
            ],
          },
          {
            heading: "Legislació aplicable",
            paragraphs: [
              "La relació entre el titular i l'usuari es regeix per la normativa espanyola. Qualsevol controvèrsia se sotmetrà als jutjats i tribunals que corresponguin conforme a dret.",
            ],
          },
        ],
      },
      privacy: {
        title: "Política de privacitat",
        updated: "Última actualització: juliol de 2026",
        back: "Tornar a l'inici",
        sections: [
          {
            heading: "Responsable del tractament",
            paragraphs: [
              "Aquesta política descriu com es tracten les dades personals a fbermudez.dev, conforme al Reglament (UE) 2016/679 (RGPD) i la Llei Orgànica 3/2018 (LOPDGDD).",
            ],
            list: [
              "Responsable: Fernando Bermúdez",
              `NIF: ${nif}`,
              `Email: ${site.email}`,
            ],
          },
          {
            heading: "Dades que es tracten",
            paragraphs: [
              "Aquest lloc no utilitza formularis, cookies ni eines d'analítica: navegar-hi no recull cap dada personal. Les úniques dades tractades són les que facilites voluntàriament en contactar per email, telèfon o WhatsApp: el teu nom, les teves dades de contacte i el contingut del missatge.",
            ],
          },
          {
            heading: "Finalitat i base jurídica",
            paragraphs: [
              "Les dades s'utilitzen exclusivament per atendre la teva consulta i, si escau, gestionar la relació professional que se'n derivi. La base jurídica és el teu consentiment (art. 6.1.a RGPD) i l'aplicació de mesures precontractuals a petició teva (art. 6.1.b RGPD).",
            ],
          },
          {
            heading: "Conservació",
            paragraphs: [
              "Les dades es conserven mentre duri la conversa o la relació professional i, després, únicament durant els terminis legalment exigibles.",
            ],
          },
          {
            heading: "Destinataris",
            paragraphs: [
              "No se cedeixen dades a tercers llevat d'obligació legal. Els proveïdors de correu i allotjament poden tractar dades com a encarregats del tractament, amb les garanties que exigeix el RGPD.",
            ],
          },
          {
            heading: "Els teus drets",
            paragraphs: [
              `Pots exercir els drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a ${site.email}. També pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (aepd.es).`,
            ],
          },
          {
            heading: "Cookies",
            paragraphs: ["Aquest lloc no utilitza cookies."],
          },
        ],
      },
    },
    en: {
      notice: {
        title: "Legal notice",
        updated: "Last updated: July 2026",
        back: "Back to home",
        sections: [
          {
            heading: "Site owner",
            paragraphs: [
              "In compliance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following details are provided:",
            ],
            list: [
              "Owner: Fernando Bermúdez",
              `Tax ID (NIF): ${nif}`,
              `Address: ${address}`,
              `Contact email: ${site.email}`,
              "Activity: software development, AI automation and systems integration",
            ],
          },
          {
            heading: "Purpose",
            paragraphs: [
              "This website is a professional portfolio: it presents the owner's activity, projects and contact details. Access is free and requires no registration.",
            ],
          },
          {
            heading: "Intellectual property",
            paragraphs: [
              "The contents of this site — text, images, code and design — are owned by Fernando Bermúdez or used with their owners' permission. Reproduction, distribution or transformation without express authorisation is not allowed, except where permitted by law.",
            ],
          },
          {
            heading: "Liability",
            paragraphs: [
              "The owner is not responsible for misuse of this site's contents or for damage arising from technical circumstances beyond his control. Links to third-party sites (for example, solutia.cat) are provided for information only; the owner is not responsible for their contents.",
            ],
          },
          {
            heading: "Applicable law",
            paragraphs: [
              "The relationship between the owner and the user is governed by Spanish law. Any dispute will be submitted to the competent courts as provided by law.",
            ],
          },
        ],
      },
      privacy: {
        title: "Privacy policy",
        updated: "Last updated: July 2026",
        back: "Back to home",
        sections: [
          {
            heading: "Data controller",
            paragraphs: [
              "This policy describes how personal data is handled on fbermudez.dev, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).",
            ],
            list: [
              "Controller: Fernando Bermúdez",
              `Tax ID (NIF): ${nif}`,
              `Email: ${site.email}`,
            ],
          },
          {
            heading: "Data processed",
            paragraphs: [
              "This site uses no forms, cookies or analytics: browsing it collects no personal data. The only data processed is what you voluntarily provide when contacting by email, phone or WhatsApp: your name, your contact details and the content of your message.",
            ],
          },
          {
            heading: "Purpose and legal basis",
            paragraphs: [
              "Data is used exclusively to answer your enquiry and, where applicable, to manage the resulting professional relationship. The legal basis is your consent (Art. 6.1.a GDPR) and pre-contractual measures taken at your request (Art. 6.1.b GDPR).",
            ],
          },
          {
            heading: "Retention",
            paragraphs: [
              "Data is kept for as long as the conversation or professional relationship lasts and, afterwards, only for the periods required by law.",
            ],
          },
          {
            heading: "Recipients",
            paragraphs: [
              "Data is not shared with third parties except under legal obligation. Email and hosting providers may process data as processors, with the safeguards required by the GDPR.",
            ],
          },
          {
            heading: "Your rights",
            paragraphs: [
              `You may exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to ${site.email}. You may also lodge a complaint with the Spanish Data Protection Agency (aepd.es).`,
            ],
          },
          {
            heading: "Cookies",
            paragraphs: ["This site does not use cookies."],
          },
        ],
      },
    },
  };
