import { defineStore } from "pinia";
const apiURL = "https://rickandmortyapi.com/api/character"

export const useCharactersStore = defineStore("characters",{
  state: () => {
    return {
      characters: [] as Character[],
      singleCharacter: {} as Character,
      characterEpisodes: [] as Episode[],
      searchResults: [] as Character[],
      endPointInfo: {} as EndPointInfo
    }
  },
  actions: {
    async getCharacters(page: number = 1) {
      try {
        const res = await fetch(apiURL + `?page=${page}`)
        const data = await res.json()
        this.characters = data.results
        this.endPointInfo = data.info
      } catch (error) {
        console.error(error)
      }
    },
    async getSingleCharacter(id: number) {
      try {
        const res = await fetch(`${apiURL}/${id}`)
        const data = await res.json()
        this.singleCharacter = data
      } catch (error) {
        console.error(error)
      }
    },
    async searchCharacter(name: string) {
      try {
        const res = await fetch(`${apiURL}/?name=${name}`)
        const data = await res.json()
        this.searchResults = data.results
      } catch (error) {
        console.error(error)
      }
    },
    async getCharacterEpisodes(episodeURLs: string[]) {
      try {
        const episodes = await Promise.all(episodeURLs.map(url => fetch(url).then(res => res.json())))
        this.characterEpisodes = episodes
      } catch (error) {
        console.error(error)
      }
    }
  },
})