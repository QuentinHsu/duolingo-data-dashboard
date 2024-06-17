<script setup lang="ts">
import type { z } from 'zod'
import { ref } from 'vue'
import { toast } from 'vue-sonner'
import { Loader2 } from 'lucide-vue-next'
import List from './List.vue'
import DialogAdd from './DialogAdd.vue'
import type { UserSchema } from '~/server/database/schema'

const users: Ref<z.infer<typeof UserSchema>[]> = ref([])
const loading = ref(false)

async function init() {
  try {
    loading.value = true
    const { data } = await useAPI('/api/users/list', {
      method: 'POST',
      body: JSON.stringify({
        page: 1,
        limit: 10,
      }),
    })
    data && (users.value = (data as any[]).map((user: any) => user))
  }
  catch (error) {
    console.error(error)
    toast.error('Failed to fetch users.')
  }
  finally {
    loading.value = false
  }
}
function refresh() {
  init()
}
onMounted(() => {
  init()
})
</script>

<template>
  <main>
    <DialogAdd @refresh="refresh" />
    <template v-if="loading">
      <Loading />
    </template>
    <template v-else>
      <List :users="users" class="mt-5" />
    </template>
  </main>
</template>
