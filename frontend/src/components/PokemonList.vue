<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import { type PokeCardProps } from '@/types/pokemon'
import Skeleton from 'primevue/skeleton'
import { ref, computed, onMounted } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import { usePagination } from '@/composables/usePagination'
import { getPokemons } from '@/helpers/getPokemons'
import { imageUrl } from '../constants'

const pokemons = ref<PokeCardProps[]>([])
const isLoading = ref<boolean>(false)
const store = usePokemonStore()

onMounted(async () => {
  isLoading.value = true
  const data = await getPokemons()
  pokemons.value = data
  store.setPokemons(pokemons.value)
  isLoading.value = false
})

const pokemonList = computed(() => store.filteredPokemon)
const { currentPage, totalPages, pages, prevPage, nextPage, goToPage } = usePagination()
</script>

<template>
  <section>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <li v-for="(pokemon, index) in pokemonList" :key="index">
        <PokemonCard
          v-if="!isLoading"
          :name="pokemon.name"
          :color="pokemon.color"
          :order="pokemon.order"
          :image="imageUrl + pokemon.id + '.svg'"
        />

        <div v-else>
          <Skeleton class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="10rem" class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="5rem" borderRadius="16px" class="mb-2"></Skeleton>
          <Skeleton height="2rem" class="mb-2" borderRadius="16px"></Skeleton>
          <Skeleton width="10rem" height="4rem" borderRadius="16px"></Skeleton>
        </div>
      </li>
    </ul>

    <nav class="mt-10 rounded-3xl shadow-2xl max-w-full mx-auto" key="">
      <ul class="pagination flex justify-around items-center h-10">
        <li v-if="currentPage > 1">
          <button @click="prevPage">Previous</button>
        </li>

        <li v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
          <button @click="goToPage(page)">{{ page }}</button>
        </li>

        <li v-if="currentPage < totalPages">
          <button @click="nextPage">Next</button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss">
nav {
  & .active {
    font-weight: bold;
    font-size: 16px;
  }
  & li {
    color: black;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 20px;
    &:hover {
      background-color: rgb(218, 239, 218);
    }
  }
}
</style>
