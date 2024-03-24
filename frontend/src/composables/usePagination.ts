import { computed, ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'

export function usePagination() {
  const currentPage = ref(1)
  const itemsPerPage = ref(20)
  const store = usePokemonStore()
  const pokemonList = store.filteredPokemon

  watch(currentPage, () => {
    const start = (currentPage.value - 1) * itemsPerPage.value
    const end = start + itemsPerPage.value
    store.setPokemons(pokemonList.slice(start, end))
  })

  const totalPages = computed(() => Math.ceil(pokemonList.length / itemsPerPage.value))
  const pages = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1))

  const methods = {
    prevPage() {
      if (currentPage.value > 1) {
        currentPage.value--
      }
    },
    nextPage() {
      if (currentPage.value < totalPages.value) {
        currentPage.value++
      }
    },

    goToPage(page: number) {
      currentPage.value = page
    }
  }

  watch(pokemonList, () => (currentPage.value = 1))

  return { currentPage, itemsPerPage, totalPages, pages, ...methods }
}
