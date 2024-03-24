<script setup lang="ts">
import PokemonCard from '@/components/PokemonCard.vue'
import { type PokeCardProps } from '@/types/pokemon'
import { ref, computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemon'
import { usePagination } from '@/composables/usePagination'

const pokemons = ref<PokeCardProps[]>([
  {
    color: 'green',
    order: 1,
    name: 'Bulbasaur',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
  },
  {
    color: 'orange',
    order: 2,
    name: 'Charmander',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'
  },
  {
    color: 'blue',
    order: 3,
    name: 'Squirtle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'
  },
  {
    color: 'brown',
    order: 4,
    name: 'Caterpie',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'
  },
  {
    color: 'yellow',
    order: 5,
    name: 'Weedle',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg'
  },
  {
    color: 'purple',
    order: 6,
    name: 'Kakuna',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'
  },
  {
    color: 'red & yellow',
    order: 7,
    name: 'Beedrill',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg'
  },
  {
    color: 'pink',
    order: 8,
    name: 'Pidgey',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg'
  },
  {
    color: 'brown & white',
    order: 9,
    name: 'Rattata',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg'
  },
  {
    color: 'black',
    order: 10,
    name: 'Raticate',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg'
  },
  {
    color: 'yellow',
    order: 11,
    name: 'Spearow',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg'
  },
  {
    color: 'brown',
    order: 12,
    name: 'Fearow',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg'
  },
  {
    color: 'light green',
    order: 13,
    name: 'Ekans',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg'
  },
  {
    color: 'purple',
    order: 14,
    name: 'Arbok',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg'
  },
  {
    color: 'brown',
    order: 15,
    name: 'Pikachu',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg'
  }
])

const store = usePokemonStore()
store.setPokemons(pokemons.value)
const pokemonList = computed(() => store.filteredPokemon)
const { currentPage, totalPages, pages, prevPage, nextPage, goToPage } = usePagination()
</script>

<template>
  <section>
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <li v-for="(pokemon, index) in pokemonList" :key="index">
        <PokemonCard
          :name="pokemon.name"
          :color="pokemon.color"
          :order="pokemon.order"
          :image="pokemon.image"
        />
      </li>
    </ul>

    <nav class="mt-10 rounded-3xl shadow-2xl max-w-80 mx-auto">
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
