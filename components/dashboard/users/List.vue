<script setup lang="ts">
import type { z } from 'zod'
import { User } from 'lucide-vue-next'
import type { UserSchema } from '@/server/database/schema'

const props = defineProps(
  {
    users: {
      type: Array as PropType<z.infer<typeof UserSchema>[]>,
      required: true,
      default: () => [],
    },
  },

)
</script>

<template>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4 ">
    <Card v-for="user in props.users" :key="user.id" class="select-none animate-scale-up-bottom">
      <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle class="text-sm font-medium">
          {{ user.name }}
          <span class="text-xs text-gray-500">{{ user.username }}</span>
        </CardTitle>

        <User class="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div class="text-2xl font-bold">
          {{ user.totalXp }}
        </div>
        <p class="text-xs text-muted-foreground" />
      </CardContent>
    </Card>
  </div>
</template>
