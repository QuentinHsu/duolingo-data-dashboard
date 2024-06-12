<script setup lang="ts">
import ImgHeroDuolingo from '@/assets/images/hero-duolingo.svg'

const { title, slogan } = useAppConfig()
</script>

<template>
  <div class="w-full flex flex-col md:flex-row justify-center items-center mt-20">
    <img class="w-6/12 lg:w-3/12" :src="ImgHeroDuolingo" alt="Duolingo logo">
    <div>
      <h1 class="text-4xl font-bold text-center mt-8">
        {{ title }}
      </h1>
      <p class="text-lg text-center mt-4">
        {{ slogan }}
      </p>
    </div>
  </div>
</template>
