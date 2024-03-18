<script setup lang="ts">
  import { ref } from "vue"
  import { useCharactersStore } from "@/stores/characters"

  const store = useCharactersStore()
  const currentPage = ref(1)
  const pageSize = ref(20)

  async function getCharacters() {
    await store.getCharacters()
  }
  getCharacters()
</script>

<template>
  <main>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl my-10">
      <div class="flex justify-center lg:justify-end my-4">
        <a-pagination 
          v-if="store.characters.length"
          @change="store.getCharacters(currentPage)"
          :pageSizeOptions="[]"
          v-model:current="currentPage" 
          v-model:pageSize="pageSize" 
          :total="store.endPointInfo.count"  
        />
      </div>
      <a-row :gutter="[16, 16]">
        <a-col 
          v-for="(character, i) in store.characters" 
          :key="character.id"
          class="gutter-row" 
          :xs="24"
          :sm="12"
          :md="8"
          :lg="6">
          <a-card hoverable>
            <template #cover>
              <RouterLink :to="`characters/${character.id}`">
                <div class="p-4">
                  <img 
                    :alt="character.name" 
                    :src="character.image" 
                    class="mx-auto block w-full"
                  />
                </div>
              </RouterLink>
              <a-divider class="my-2" />
            </template>
            <a-card-meta :title="character.name">
              <template #description>
                <dl>
                  <dt class="font-bold">Dimension</dt>
                  <dd class="ms-0">{{ character.origin.name }}</dd>
                </dl>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
      <div class="flex justify-center lg:justify-end my-4">
        <a-pagination 
          v-if="store.characters.length"
          @change="store.getCharacters(currentPage)"
          :pageSizeOptions="[]"
          v-model:current="currentPage" 
          v-model:pageSize="pageSize" 
          :total="store.endPointInfo.count" 
        />
      </div>
    </div>
  </main>
</template>
