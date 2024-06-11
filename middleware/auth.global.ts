import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  if (to.path.startsWith('/dashboard') && to.path !== '/login') {
    if (!window.localStorage.getItem('token')) {
      return navigateTo('/login')
    }
  }
})
