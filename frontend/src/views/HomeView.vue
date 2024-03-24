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

<style scoped>
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
–
