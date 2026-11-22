// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://martynsheridan.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
});
