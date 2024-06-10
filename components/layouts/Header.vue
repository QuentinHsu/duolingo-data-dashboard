<script setup>
import Badge from '@/components/ui/badge'

const showMenu = ref(false)
</script>

<template>
  <section class=" bg-[var(--duolingo-feather-green)] dark:bg-inherit w-full">
    <nav class="container relative z-50 h-20 select-none">
      <div
        class="container relative flex flex-wrap items-center justify-between h-24 px-0 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible"
      >
        <div class="flex">
          <nuxt-link to="/" class="text-lg font-bold text-white dark:text-[var(--duolingo-feather-green)]">
            Duolingo Data Dashboard
          </nuxt-link>
          <TooltipProvider :ignore-non-keyboard-focus="true">
            <Tooltip>
              <TooltipTrigger as-child>
                <Badge variant="outline" class="ml-2 text-white dark:text-[var(--duolingo-feather-green)]">
                  Unofficial
                </Badge>
              </TooltipTrigger>
              <TooltipContent class="p-2 bg-[var(--duolingo-feather-green)] dark:bg-inherit">
                <div class="text-sm text-white dark:text-[var(--duolingo-feather-green)] opacity-50 transition ease-in-out delay-150 hover:opacity-100 hover:scale-105 duration-300">
                  A dashboard to visualize your Duolingo learning data. Not officially affiliated with Duolingo.
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          class="top-0 left-0 items-start w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 lg:text-base md:bg-transparent md:p-0 md:relative md:flex justify-end"
          :class="{ 'flex fixed': showMenu, 'hidden': !showMenu }"
          @touchmove.prevent
        >
          <div class="flex justify-between items-center">
            <SwitchTheme />
            <nuxt-link to="/dashboard" class="text-white dark:text-[var(--duolingo-mask-green)] not-first:ml-5">
              Dashboard
            </nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
