import type { NuxtConfig } from '@nuxt/types';

// https://nuxt.com/docs/api/configuration/nuxt-config
const config: NuxtConfig = {
  alias: {
    './runtimeConfig': './runtimeConfig.browser',
  },
  vite: {
    define: {
      'window.global': {},
    },
  },
  typescript: {
    strict: true,
  },
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
  },
  css: ['@/public/css/tailwind.scss'],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};

export default config;
