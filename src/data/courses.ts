// Mock data for courses and progress
// TODO: Replace with CMS/Supabase integration

export interface CourseProgress {
  id: string;
  title: string;
  progress: number;
  lastLesson?: {
    moduleId: string;
    lessonId: string;
    title: string;
  };
  thumbnail?: string;
}

export const mockCourses: CourseProgress[] = [
  {
    id: "c1",
    title: "Fundamentos de Gestão Empresarial",
    progress: 65,
    lastLesson: {
      moduleId: "m3",
      lessonId: "l2",
      title: "Planejamento Estratégico: Parte 2",
    },
  },
  {
    id: "c2",
    title: "Marketing Digital Avançado",
    progress: 40,
    lastLesson: {
      moduleId: "m2",
      lessonId: "l4",
      title: "SEO e Otimização de Conteúdo",
    },
  },
  {
    id: "c3",
    title: "Análise Financeira para Negócios",
    progress: 85,
    lastLesson: {
      moduleId: "m5",
      lessonId: "l3",
      title: "Projeções e Cenários Financeiros",
    },
  },
];
