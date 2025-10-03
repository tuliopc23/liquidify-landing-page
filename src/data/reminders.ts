// Mock data for reminders, events, and month theme
// TODO: Replace with CMS/Supabase integration

export type ReminderType = "aviso" | "evento" | "prazo";

export interface Reminder {
  id: string;
  title: string;
  type: ReminderType;
  dateISO: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface Event {
  id: string;
  title: string;
  dateISO: string;
  location?: string;
}

export interface MonthTheme {
  month: string;
  title: string;
  bullets: string[];
}

export const mockReminders: Reminder[] = [
  {
    id: "r1",
    title: "Prazo de entrega do projeto final",
    type: "prazo",
    dateISO: "2024-02-15T23:59:00Z",
    cta: {
      label: "Ver detalhes",
      href: "/app/cursos/projeto-final",
    },
  },
  {
    id: "r2",
    title: "Nova atualização de conteúdo disponível",
    type: "aviso",
    dateISO: "2024-02-10T10:00:00Z",
  },
  {
    id: "r3",
    title: "Webinar ao vivo: Estratégias de Marketing Digital",
    type: "evento",
    dateISO: "2024-02-20T15:00:00Z",
    cta: {
      label: "Inscrever-se",
      href: "/app/eventos/webinar-marketing",
    },
  },
];

export const mockEvents: Event[] = [
  {
    id: "e1",
    title: "Aula ao vivo: Análise Financeira Avançada",
    dateISO: "2024-02-18T19:00:00Z",
    location: "Online via Zoom",
  },
  {
    id: "e2",
    title: "Workshop: Criação de Templates Eficazes",
    dateISO: "2024-02-22T14:00:00Z",
    location: "Sala Virtual",
  },
];

export const mockMonthTheme: MonthTheme = {
  month: "Fevereiro 2024",
  title: "Estratégia e Planejamento",
  bullets: [
    "Como criar planos estratégicos eficazes",
    "Ferramentas de análise SWOT e gestão de metas",
    "Implementação de OKRs na sua empresa",
  ],
};
