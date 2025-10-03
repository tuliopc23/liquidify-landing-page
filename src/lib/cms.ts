// CMS stub helper - returns mock data
// TODO: Replace with real CMS/Supabase integration

import { mockReminders, mockEvents, mockMonthTheme } from "../data/reminders";
import { mockArticles } from "../data/articles";
import { mockMaterials } from "../data/materials";
import { mockCourses } from "../data/courses";
import { mockDiscussions } from "../data/discussions";

import type { Reminder, Event, MonthTheme } from "../data/reminders";
import type { Article } from "../data/articles";
import type { Material } from "../data/materials";
import type { CourseProgress } from "../data/courses";
import type { Discussion } from "../data/discussions";

// Simulated async fetch with delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getReminders(): Promise<Reminder[]> {
  await delay(300);
  return mockReminders;
}

export async function getEvents(): Promise<Event[]> {
  await delay(300);
  return mockEvents;
}

export async function getMonthTheme(): Promise<MonthTheme> {
  await delay(300);
  return mockMonthTheme;
}

export async function getArticles(
  category?: string,
): Promise<Article[]> {
  await delay(300);
  if (category) {
    return mockArticles.filter((a) => a.category === category);
  }
  return mockArticles;
}

export async function getFeaturedArticle(): Promise<Article | null> {
  await delay(300);
  return mockArticles.find((a) => a.featured) || null;
}

export async function getMaterials(tag?: string): Promise<Material[]> {
  await delay(300);
  if (tag) {
    return mockMaterials.filter((m) => m.tags.includes(tag));
  }
  return mockMaterials;
}

export async function getCourseProgress(): Promise<CourseProgress[]> {
  await delay(300);
  return mockCourses;
}

export async function getDiscussions(): Promise<Discussion[]> {
  await delay(300);
  return mockDiscussions;
}

// Export types for convenience
export type {
  Reminder,
  Event,
  MonthTheme,
  Article,
  Material,
  CourseProgress,
  Discussion,
};
