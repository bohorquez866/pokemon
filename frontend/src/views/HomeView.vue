<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import SearchBox from '@/components/SearchBox.vue'
import PokemonList from '@/components/PokemonList.vue'
</script>

<template>
  <main>
    <MainHeader />
    <SearchBox />
    <pokemonList />
  </main>
</template>
