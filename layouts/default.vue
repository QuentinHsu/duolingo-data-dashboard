<template>
  <main class="flex flex-col min-h-screen dark:bg-grid-[#1C1C1C]/[0.6]">
    <LayoutsHeader />
    <section class="flex flex-1">
      <div class="container mx-auto ">
        <slot />
      </div>
    </section>
    <LayoutsFooter />
  </main>
</template>
