<script setup lang="ts">
</script>

<template>
  <section class="bg-[var(--duolingo-feather-green)] dark:bg-inherit w-full">
    <nav class="container relative z-50 select-none">
      <div
        class="container h-20 relative flex flex-wrap items-center justify-between px-2 lg:px-10 mx-auto overflow-hidden font-medium md:overflow-visible"
      >
        <div class="flex items-center justify-start h-full pr-4">
          <nuxt-link to="/" class="h-full flex justify-between items-center text-lg font-bold text-white dark:text-[var(--duolingo-feather-green)]">
            <div class="logo drop-shadow-lg block">
              <img src="https://design.duolingo.com/86230c9ad10d9f08b785.svg" alt="Duolingo logo" class="w-8 h-8">
            </div>
            <div class="hidden lg:block ml-2">
              Duolingo Data Dashboard
            </div>
          </nuxt-link>
          <TooltipProvider :ignore-non-keyboard-focus="true">
            <Tooltip>
              <TooltipTrigger as-child>
                <!-- <Badge variant="outline" class="ml-2 text-white dark:text-[var(--duolingo-feather-green)]"> -->
                Unofficial
                <!-- </Badge> -->
              </TooltipTrigger>
              <TooltipContent class="p-2 bg-[var(--duolingo-feather-green)] dark:bg-inherit">
                <div class="text-sm text-white dark:text-[var(--duolingo-feather-green)] opacity-50 transition ease-in-out delay-150 hover:opacity-100 hover:scale-105 duration-300">
                  A dashboard to visualize your Duolingo learning data. Not officially affiliated with Duolingo.
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div class="flex justify-between items-center">
          <SwitchTheme />
          <nuxt-link to="/dashboard" class="text-white dark:text-[var(--duolingo-mask-green)] not-first:ml-1">
            Dashboard
          </nuxt-link>
          <div class="not-first:ml-3">
            <LoginLogout />
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>
