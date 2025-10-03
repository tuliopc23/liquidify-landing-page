// Mock data for discussions
// TODO: Replace with CMS/Supabase integration

export type DiscussionTag = "Pergunta" | "Ideia" | "Anúncio";

export interface Discussion {
  id: string;
  title: string;
  tag: DiscussionTag;
  replies: number;
  lastActivityISO: string;
}

export const mockDiscussions: Discussion[] = [
  {
    id: "d1",
    title: "Como calcular o ROI de campanhas de marketing?",
    tag: "Pergunta",
    replies: 12,
    lastActivityISO: "2024-02-09T18:30:00Z",
  },
  {
    id: "d2",
    title: "Nova metodologia de gestão ágil para PMEs",
    tag: "Ideia",
    replies: 8,
    lastActivityISO: "2024-02-09T14:20:00Z",
  },
  {
    id: "d3",
    title: "Novos cursos disponíveis em março!",
    tag: "Anúncio",
    replies: 24,
    lastActivityISO: "2024-02-08T16:45:00Z",
  },
  {
    id: "d4",
    title: "Dicas para melhorar apresentações de pitch",
    tag: "Pergunta",
    replies: 15,
    lastActivityISO: "2024-02-08T11:10:00Z",
  },
  {
    id: "d5",
    title: "Compartilhando templates de relatórios financeiros",
    tag: "Ideia",
    replies: 6,
    lastActivityISO: "2024-02-07T20:00:00Z",
  },
];
