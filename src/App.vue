<script setup lang="ts">
import SearchBarMeteo from '../src/components/searchbar-meteo.vue'
import { useMeteoStore } from '../src/store/meteo'

const meteoStore = useMeteoStore()
</script>

<template>
  <SearchBarMeteo />
  <div v-if="Object.keys(meteoStore.data).length !== 0">{{ meteoStore.getData }}</div>
</template>
