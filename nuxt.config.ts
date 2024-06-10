// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json'

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
  nitro: {
    experimental: {
      // Enable Server API documentation within NuxtHub
      openAPI: true,
    },
  },
  runtimeConfig: {
  },

})
