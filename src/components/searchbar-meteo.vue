<script setup lang="ts">
import { ref } from 'vue'
import { useMeteoStore } from '../store/meteo'
const querySearch = ref('')
const error = ref({
  isDisplay: false,
  message: '',
})

const meteoStore = useMeteoStore()

function handleChange(event: any) {
  if (event.target.value) {
    querySearch.value = event.target.value
    error.value.isDisplay = false
    meteoStore.sendDataMeteoApi(querySearch.value)
  }
}
</script>

<template>
  <div>
    <h1>Searchbar</h1>
    <input type="text" @change="handleChange" />
    <p v-if="querySearch">Your search: {{ querySearch }}</p>
    <p v-if="error.isDisplay">An error has occurred!</p>
  </div>
</template>
