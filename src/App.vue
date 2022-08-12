<script setup>
import { ref, onMounted } from 'vue'

const p = ref(null)

onMounted(() => {
  p.value.textContent = 'Hello World'
})

</script>

<template>
  <p ref="p">hello</p>
</template>