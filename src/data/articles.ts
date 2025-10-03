// Mock data for articles
// TODO: Replace with CMS/Supabase integration

export interface Article {
  id: string;
  title: string;
  category: string;
  minutes: number;
  dateISO: string;
  image?: string;
  featured?: boolean;
  excerpt?: string;
}

export const mockArticles: Article[] = [
  {
    id: "a1",
    title: "Como estruturar um plano de negócios vencedor",
    category: "Estratégia",
    minutes: 8,
    dateISO: "2024-02-08T10:00:00Z",
    featured: true,
    excerpt:
      "Aprenda os componentes essenciais de um plano de negócios que impressiona investidores e guia seu crescimento.",
  },
  {
    id: "a2",
    title: "5 técnicas de marketing digital para 2024",
    category: "Marketing",
    minutes: 6,
    dateISO: "2024-02-05T14:30:00Z",
  },
  {
    id: "a3",
    title: "Gestão financeira para pequenas empresas",
    category: "Financeiro",
    minutes: 10,
    dateISO: "2024-02-03T09:00:00Z",
  },
  {
    id: "a4",
    title: "Tendências de liderança para o próximo ano",
    category: "Liderança",
    minutes: 7,
    dateISO: "2024-02-01T11:00:00Z",
  },
  {
    id: "a5",
    title: "Automatização de processos: por onde começar",
    category: "Estratégia",
    minutes: 9,
    dateISO: "2024-01-28T16:00:00Z",
  },
];
