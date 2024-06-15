<script setup>
const { setLocale, locales, locale } = useI18n()

const availableLocales = computed(() => {
  return locales.value
})
</script>

<template>
  <DropdownMenu>
    <ClientOnly>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="text-white hover:text-[var(--duolingo-feather-green)] dark:text-[var(--duolingo-feather-green)]">
          <span class="sr-only">Toggle locale</span>
          <span class="block w-10">{{ locale }}</span>
        </Button>
      </DropdownMenuTrigger>
    </ClientOnly>
    <DropdownMenuContent
      align="end"
      class="min-w-min"
    >
      <!-- 被选中时，显示主题色 -->
      <DropdownMenuItem
        v-for="lang in availableLocales" :key="lang.code"
        :class="
          {
            'text-[var(--duolingo-feather-green)]': lang.code === locale,
          }"
        @click="setLocale(lang.code)"
      >
        {{ lang.code }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
