// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.fernandocompanies.com',
  output: 'static',
  trailingSlash: 'ignore',
  // English only for now. To add Spanish later: add 'es' to locales,
  // create src/pages/es/*, and add an `es` entry in src/data/site.ts.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  build: { inlineStylesheets: 'always' },
  // Cast: @tailwindcss/vite ships types for a newer Vite than Astro 5 bundles (runtime is fine).
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
