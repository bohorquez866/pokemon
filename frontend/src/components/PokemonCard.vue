<script setup lang="ts">
import Card from 'primevue/card'
import Image from 'primevue/image'

import { type PokeCardProps } from '@/types/pokemon'

const props = defineProps<PokeCardProps>()
const primaryColor = ['light', 'dark'].includes(props.color.split(' ')[0])
  ? 'red'
  : props.color.split(' ')[0]
</script>

<template>
  <Card id="pokemon-card">
    <template #header>
      <div class="flex justify-center">
        <strong class="order">#{{ order }}</strong>
        <Image v-if="image?.length" :src="image" :alt="name" />
      </div>
    </template>
    <template #title>{{ name }}</template>

    <template #subtitle><strong>Colors:</strong> {{ color }}</template>
  </Card>
</template>

<style lang="scss">
#pokemon-card {
  box-shadow: 1px 10px 18px -7px v-bind('primaryColor');
  width: 300px;
  height: fit-content;
  text-align: center;
  position: relative;
  padding: 20px;
  padding-bottom: 0;

  & .order {
    position: absolute;
    right: 10px;
    top: 10px;
    font-weight: bold;
    color: v-bind('primaryColor');
    text-shadow: -1px 2px 2px rgba(0, 0, 0, 0.478);
  }
  &:hover img {
    transform: scale(1.2);
  }

  & img {
    width: 180px;
    height: 180px;
    transition: all 0.2s ease-in-out;
  }
}
</style>
