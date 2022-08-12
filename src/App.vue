<script setup>
import { ref } from 'vue'

const count = ref(0)
const count2 = ref(0)

// increment the count
const increment = () => {
  count.value++
}

function incrementcount() {
  count2.value++
}

</script>

<template>
  <!-- make this button work -->
  <button @click="increment">count is: {{ count }}</button>
  <button @click="incrementcount">count is: {{ count2 }}</button>
</template>