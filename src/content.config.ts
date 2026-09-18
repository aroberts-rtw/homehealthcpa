import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Askia Roberts, CPA'),
    licenseNumber: z.string().default('CPA038784'),
    targetQuery: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ctaHeadline: z.string().optional(),
    ctaBody: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { articles };
