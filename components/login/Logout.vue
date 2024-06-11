<script setup lang="ts">
import { LogOut } from 'lucide-vue-next'

function onClickConfirm() {
  localStorage.removeItem('token')
  navigateTo('/login')
}
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <LogOut
        class="w-4 h-4 cursor-pointer"
      />
    </AlertDialogTrigger>
    <AlertDialogContent class="max-w-[95svw] max-h-[95svh] md:max-w-lg grid-rows-[auto_minmax(0,1fr)_auto]">
      <AlertDialogHeader>
        <AlertDialogTitle>LogOut ?</AlertDialogTitle>
        <AlertDialogDescription>
          Are you sure you want to log out ?
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="onClickConfirm">
          Confirm
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
