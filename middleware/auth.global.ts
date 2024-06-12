import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async (to) => {
  const storeLogin = useLoginStore()
  if (import.meta.server)
    return

  if (to.path.startsWith('/dashboard') && to.path !== '/login') {
    if (!storeLogin.getToken) {
      return navigateTo('/login')
    }
  }
})
