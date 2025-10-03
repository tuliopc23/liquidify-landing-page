// Mock data for materials (templates, resources)
// TODO: Replace with CMS/Supabase integration

export type MaterialType = "pdf" | "xlsx" | "docx" | "template";

export interface Material {
  id: string;
  title: string;
  type: MaterialType;
  description: string;
  tags: string[];
  size?: string;
}

export const mockMaterials: Material[] = [
  {
    id: "m1",
    title: "Template de Plano de Negócios",
    type: "docx",
    description:
      "Modelo completo para estruturar seu plano de negócios com todas as seções necessárias.",
    tags: ["Estratégia", "Planejamento"],
    size: "245 KB",
  },
  {
    id: "m2",
    title: "Planilha de Fluxo de Caixa",
    type: "xlsx",
    description:
      "Controle suas finanças com esta planilha automatizada de fluxo de caixa mensal.",
    tags: ["Financeiro", "Gestão"],
    size: "128 KB",
  },
  {
    id: "m3",
    title: "Guia Completo de Marketing Digital",
    type: "pdf",
    description:
      "E-book com estratégias práticas para aumentar sua presença online.",
    tags: ["Marketing", "Digital"],
    size: "3.2 MB",
  },
  {
    id: "m4",
    title: "Template de Apresentação Corporativa",
    type: "template",
    description:
      "Modelo profissional para apresentações de negócios e pitch decks.",
    tags: ["Estratégia", "Comunicação"],
    size: "1.8 MB",
  },
  {
    id: "m5",
    title: "Checklist de Lançamento de Produto",
    type: "pdf",
    description:
      "Lista completa de tarefas para um lançamento de produto bem-sucedido.",
    tags: ["Estratégia", "Marketing"],
    size: "180 KB",
  },
  {
    id: "m6",
    title: "Planilha de Análise SWOT",
    type: "xlsx",
    description:
      "Ferramenta para análise estratégica de forças, fraquezas, oportunidades e ameaças.",
    tags: ["Estratégia", "Planejamento"],
    size: "95 KB",
  },
];
