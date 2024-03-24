import { defineStore } from 'pinia'
import { usePokemonStore } from '@/stores/pokemon'
import { computed, ref, watch } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {
  const store = usePokemonStore()
  const currentPage = ref(1)
  const itemsPerPage = ref(20)
  const pokemonList = ref(store.filteredPokemon)

  watch(currentPage, () => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    store.setPokemons(pokemonList.value.slice(start, end))
  })

  const totalPages = computed(() => Math.ceil(pokemonList.value.length / itemsPerPage.value))
  const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const goToPage = (page: number) => {
    currentPage.value = page
  }

  return { currentPage, itemsPerPage, totalPages, pages, prevPage, nextPage, goToPage }
})
