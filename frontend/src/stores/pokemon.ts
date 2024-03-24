import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type PokeCardProps } from '../types/pokemon'

export const usePokemonStore = defineStore('Pokemon', () => {
  const pokemonList = ref<PokeCardProps[]>([])
  const searchterm = ref<string>('')

  const filteredPokemon = computed(() =>
    pokemonList.value.filter((pk) => pk.name.toLowerCase().includes(searchterm.value))
  )

  function setPokemons(pokemon: PokeCardProps[]) {
    pokemonList.value = pokemon
  }

  function setSearchTerm(value: string) {
    searchterm.value = value.toLowerCase()
  }

  return { pokemonList, setPokemons, filteredPokemon, setSearchTerm }
})
