import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.homehealthcpa.com',
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !/\/(thank-you|get-started\/(welcome|wait-list))\/?$/.test(page),
    }),
  ],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
