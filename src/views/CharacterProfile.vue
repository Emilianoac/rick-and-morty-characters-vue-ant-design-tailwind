<script lang="ts" setup>
  import { useRoute } from "vue-router"
  import { useCharactersStore } from "@/stores/characters";
  import { watch } from "vue";

  const store = useCharactersStore()
  const route = useRoute()
  
  async function getCharacter() {
    const parsesId = parseInt(route.params.id as string)
    await store.getSingleCharacter(parsesId)

    document.title = `${store.singleCharacter.name} | Rick and Morty Characters`

    if (store.singleCharacter) {
      await getCharacterEpisodes()
    }
  }
  getCharacter()

  async function getCharacterEpisodes() {
    await store.getCharacterEpisodes(store.singleCharacter.episode)
  }

  watch(() => route.params.id, async () => {
    getCharacter()
  })

</script>

<template>
  <main clas="main-character-profile" v-if="store.singleCharacter.name">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl my-10">
      <a-row :gutter="[40, 40]">
        <a-col
          :xs="24"
          :md="12"
          :lg="8">
          <a-card class="sticky top-20">
            <h1 class="text-3xl uppercase font-bold text-center">{{ store.singleCharacter.name }}</h1>
            <img class="max-w-full w-44 my-5 rounded-full mx-auto":src="store.singleCharacter.image">
            <dd class="mt-5">
              <dt class="font-bold">Status</dt>
              <dd>{{ store.singleCharacter.status }}</dd>
              <hr class="my-4">
              <dt class="font-bold">Gender</dt>
              <dd>{{ store.singleCharacter.gender }} </dd>
              <hr class="my-4">
              <dt class="font-bold">Species</dt>
              <dd>{{ store.singleCharacter.species }} </dd>
              <hr class="my-4">
              <dt class="font-bold">Dimension</dt>
            </dd>
          </a-card>
        </a-col>
        <a-col 
          :xs="24"
          :md="12"
          :lg="16">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-bold">Episodes </h2>
            <p>Total: <strong> {{ store.singleCharacter.episode.length }}</strong> </p>
          </div>
          <ul class="mt-5" v-if="store.characterEpisodes.length">
            <li v-for="episode in store.characterEpisodes">
              <dd>
                <dt class="font-bold">{{ episode.name }}</dt>
                <dd class="flex items-center text-sm mt-1  text-zinc-600"> 
                  {{ episode.air_date }}
                </dd>
                <hr class="my-4"/>
              </dd>
            </li>
          </ul>
          <a-skeleton v-else active class="mt-4" />
        </a-col>
      </a-row>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  
</style>
