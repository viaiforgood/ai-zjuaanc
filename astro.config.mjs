// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ai.zjuaanc.org',
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['en', 'zh-tw', 'zh-cn'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});