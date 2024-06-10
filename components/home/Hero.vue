<script setup lang="ts">
const { title, slogan } = useAppConfig()
</script>

<template>
  <div class="w-full flex justify-center items-center mt-20">
    <img class="w-3/12" src="https://design.duolingo.com/f432eb8c3e03de216d20.svg" alt="Duolingo logo">
    <div>
      <h1 class="text-4xl font-bold text-center mt-8">
        {{ title }}
      </h1>
      <p class="text-lg mt-4">
        {{ slogan }}
      </p>
    </div>
  </div>
</template>
