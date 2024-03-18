<script setup lang="ts">
  import { reactive } from 'vue'

  const colorTheme = reactive({
    primary: "#00b96b",
  })
</script>

<template>
  <a-config-provider
    :theme="{
        token: {
          colorPrimary: colorTheme.primary,
        },
      }"
    >
    <MyHeader/>
    <RouterView />
  </a-config-provider>
</template>

<style>

</style>
