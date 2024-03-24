<script setup lang="ts">
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Button from 'primevue/button'
import { watchDebounced } from '@vueuse/core'
import { ref } from 'vue'
import { usePokemonStore } from '../stores/pokemon'

const store = usePokemonStore()
const searchTerm = ref<string>('')

watchDebounced(searchTerm, () => store.setSearchTerm(searchTerm.value), { debounce: 500 })
</script>

<template>
  <div class="shadow-2xl p-5 w-full lg:w-fit mx-auto mb-5 md:mb-10 rounded-2xl">
    <FloatLabel class="border-green-400">
      <InputText
        name="seatchTerm"
        v-model="searchTerm"
        class="w-px-2 text-slate-700 w-full lg:w-[600px] h-[40px] px-2"
        height="60"
        width="600px"
      />
      <label for="searchTerm" class="mb-4 block">Pokemon search</label>
    </FloatLabel>

    <Button
      class="rounded-lg flex align-middle bg-green-400 text-white px-5 py-2 mt-5 mx-auto"
      label="Reload pokemon list"
    />
  </div>
</template>
