<script setup lang="ts">
const currentTab: Ref<string> = ref('overview')
</script>

<template>
  <main>
    <Tabs v-model:model-value="currentTab" default-value="overview" class="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">
          Overview
        </TabsTrigger>
        <TabsTrigger value="users">
          Users
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="space-y-4">
        <DashboardOverview />
      </TabsContent>
      <TabsContent value="users" class="space-y-4">
        <DashboardUsers />
      </TabsContent>
    </Tabs>
  </main>
</template>
