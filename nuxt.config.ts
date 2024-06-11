// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/css/variables.css'],
  devtools: { enabled: true },
  modules: ['@nuxthub/core', '@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/color-mode'],
  hub: {
    database: true,
  },
  colorMode: {
    classSuffix: '',
  },
  routeRules: {
    '/': {
      prerender: true,
    },
    '/dashboard/**': {
      ssr: false,
    },
    '/login': {
      ssr: false,
    },
  },
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  runtimeConfig: {
    token: 'duolingo',
  },

})
