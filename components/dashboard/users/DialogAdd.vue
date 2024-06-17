<script setup lang="ts">
import type { GenericObject } from 'vee-validate'
import { toast } from 'vue-sonner'
import { z } from 'zod'
import { Loader2 } from 'lucide-vue-next'
import { UserSchema } from '~/server/database/schema'

const emit = defineEmits(['refresh'])
const LoginSchema = z.object({
  user_id: UserSchema.shape.user_id,
  cookie: UserSchema.shape.cookie,
})
const dialogOpen = ref(false)
const loading = ref(false)
const fieldConfig = {
  user_id: {
    label: 'User ID',
    inputProps: {
      type: 'number',
      placeholder: 'Enter your user ID in Duolingo',
    },
  },
  cookie: {
    inputProps: {
      type: 'password',
      placeholder: 'Enter your Duolingo cookie',
    },
  },
}
async function onSubmit(event: GenericObject) {
  try {
    loading.value = true
    const form = event as z.infer<typeof LoginSchema>

    await useAPI('/api/users/create', {
      method: 'POST',
      body: JSON.stringify(form),
    })
    dialogOpen.value = false
    emit('refresh')
    toast.success('User created successfully.')
  }
  catch (e: any) {
    console.error(e)
    toast.error('Create user failed, please try again.', {
      description: e.message,
    })
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <Dialog v-model:open="dialogOpen">
    <DialogTrigger>
      <Button variant="default">
        Create
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription>
          Enter the user details to create a new user.
        </DialogDescription>
        <AutoForm
          class="space-y-10"
          :schema="LoginSchema"
          :field-config="fieldConfig"
          @submit="onSubmit"
        >
          <Button class="w-full" :disabled="loading">
            <Loader2 v-if="loading" class="w-4 h-4 mr-2 animate-spin" />
            Login
          </Button>
        </AutoForm>
      </DialogHeader>

      <DialogFooter />
    </DialogContent>
  </Dialog>
</template>
