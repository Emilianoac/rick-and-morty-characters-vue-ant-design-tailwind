<script lang="ts" setup>
  import { watch, ref } from 'vue';

  const value = ref<string>('');
  watch(value, () => {
    console.log(value.value);
  });
</script>

<template>
  <div class="p-3 bg-gray-100 sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 items-center">
        <div class="">
          <RouterLink to="/" >
            <img class="max-w-28" src="/logo.png" alt="Site logo">
          </RouterLink>
        </div>
        <div class="col-span-2 md:col-span-1">
          <SearchBar/>
        </div>
        <div class="justify-self-end row-start-1 col-start-2 md:row-auto md:col-auto ">
  
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  
</style>
