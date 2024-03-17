import { defineStore } from "pinia";

export const useCharactersStore = defineStore("characters",{
  state: () => {
    return {
      characters: [] as Character[],
      singleCharacter: {} as Character,
    }
  },
  actions: {
    async getCharacters() {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()
        this.characters = data.results
      } catch (error) {
        console.error(error)
      }
    },
    async getSingleCharacter(id: number) {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await res.json()
        this.singleCharacter = data
      } catch (error) {
        console.error(error)
      }
    },
  },
})