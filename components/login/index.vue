<script setup lang="ts">
import { z } from 'zod'
import { toast } from 'vue-sonner'
import type { GenericObject } from 'vee-validate'

const LoginSchema = z.object({
  token: z.string().describe('token'),
})
const loginFieldConfig = {
  token: {
    inputProps: {
      type: 'password',
      placeholder: 'Enter your site token',
    },
  },
}

async function onSubmit(event: GenericObject) {
  const form = event as z.infer<typeof LoginSchema>
  const storeLogin = useLoginStore()
  try {
    storeLogin.login(form.token)
    await useAPI('/api/verify')
    navigateTo('/dashboard')
  }
  catch (e: any) {
    console.error(e)
    storeLogin.logout()
    toast.error('Login failed, please try again.', {
      description: e.message,
    })
  }
}
onMounted(async () => {
  try {
    await useAPI('/api/verify')
  }
  catch (error: any) {
    toast.error('Please login to access the dashboard.', {
      description: error.message,
    })
  }
})
</script>

<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle class="text-2xl">
        Login
      </CardTitle>
      <CardDescription>
        Enter your site token to login.
      </CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4">
      <AutoForm
        class="space-y-10"
        :schema="LoginSchema"
        :field-config="loginFieldConfig"
        @submit="onSubmit"
      >
        <Button class="w-full">
          Login
        </Button>
      </AutoForm>
    </CardContent>
  </Card>
</template>
