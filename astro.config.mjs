// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://martynsheridan.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'never' },
  // Keep scripts as files so the strict Content-Security-Policy (script-src 'self') allows them.
  vite: { build: { assetsInlineLimit: 0 } },
});
