import { defineCollection, z } from 'astro:content';

const projekte = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    year: z.string(),
    category: z.enum(['wandmalerei', 'illustration', 'kalligrafie', 'hochzeit', 'logo', 'skulpturen', 'leinwand']),
    location: z.string().optional(),
    description: z.string(),
    images: z.array(z.string()).default([]),
    credits: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
    process: z.string().optional(),
    prev: z.string().optional(),
    next: z.string().optional(),
  }),
});

export const collections = { projekte };
