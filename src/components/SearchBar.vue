<script lang="ts" setup>
  import {ref, watch} from "vue"
  import { useRouter } from "vue-router"
  import { useCharactersStore } from "@/stores/characters";

  const router = useRouter()
  const store = useCharactersStore()

  const searchTerm = ref("")
  const searchResults = ref<Character[]>([])
  const isActive = ref(false)

  watch(searchTerm, async (value) => {
    if (!value) return isActive.value = false
    if (value.length < 3) return searchResults.value = []
    isActive.value = true
    await store.searchCharacter(value)
    searchResults.value = store.searchResults
  })

  router.beforeEach(() => {
    isActive.value = false
  })
</script>

<template>
  <div class="relative">
    <a-input v-model:value="searchTerm" placeholder="Search Character" />
    <div class="container bg-white p-4 mt-1 rounded  shadow-lg absolute top-10 w-full overflow-auto max-h-80" v-if="isActive">
      <ul class="p-0">
        <li v-for="result in searchResults" class="hover:opacity-50">
          <RouterLink class="flex justify-start items-center" :to="`/characters/${result.id}`">
            <img class="w-12 h-12 me-2 rounded-md" :src="result?.image" :alt="result?.name">
            <div>
              <p>{{ result?.name }}</p>
              <p class="text-sm mt-1  text-slate-600">
                Dimension: {{ result.origin.name ? result.origin.name : "Unknow"  }}
              </p>
            </div>
          </RouterLink>
          <hr class="my-4"/>
        </li>
        <li v-if="searchResults.length === 0" class="text-center">No results found</li>
      </ul>
    </div>
  </div>
</template>