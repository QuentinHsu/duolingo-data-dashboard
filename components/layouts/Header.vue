<script setup lang="ts">
import { Cloud } from 'lucide-vue-next'
import { useLoginStore } from '../../stores/login'
import ImgIconDuolingo from '@/assets/images/icon-duolingo.svg'

const showLoginOut = computed(() => {
  const storeLogin = useLoginStore()
  const route = useRoute()
  return storeLogin.isLogin && route.path !== '/login'
})
</script>

<template>
  <section class="bg-[var(--duolingo-feather-green)] dark:bg-inherit w-full">
    <nav class="relative z-50 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between py-4 px-4 lg:px-10 mx-auto overflow-hidden font-medium md:overflow-visible"
      >
        <div class="flex items-center justify-start h-full pr-4">
          <nuxt-link to="/" class="h-full flex justify-between items-center text-lg font-bold text-white dark:text-[var(--duolingo-feather-green)]">
            <div class="logo drop-shadow-lg block">
              <img :src="ImgIconDuolingo" alt="Duolingo logo" class="w-8 h-8">
            </div>
            <div class="hidden lg:block ml-2">
              {{ $t('header.title') }}
            </div>
          </nuxt-link>
          <ClientOnly>
            <Badge variant="outline" class="ml-2 text-white dark:text-[var(--duolingo-feather-green)]">
              {{ $t("header.unofficial") || '' }}
            </Badge>
          </ClientOnly>
        </div>

        <div class="flex justify-between items-center">
          <SwitchLocales />
          <SwitchTheme />
          <Button variant="ghost" class="text-white dark:text-[var(--duolingo-mask-green)]">
            <nuxt-link to="/dashboard" class="text-white dark:text-[var(--duolingo-mask-green)] not-first:ml-1">
              <Cloud class="h-[1.2rem] w-[1.2rem]" />
            </nuxt-link>
          </Button>
          <Button v-show="showLoginOut" variant="ghost" class="text-white dark:text-[var(--duolingo-mask-green)]">
            <LoginLogout />
          </Button>
        </div>
      </div>
    </nav>
  </section>
</template>
