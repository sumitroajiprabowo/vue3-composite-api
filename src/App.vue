<script setup>
import { ref, onMounted } from 'vue'

const p = ref(null)

onMounted(() => {
  p.value.textContent = 'Hello World'
})

const update = () => {
  p.value.textContent = 'Hello World Update'
}

</script>

<template>
  <p ref="p">hello</p>
  <button @click="update">update</button>
</template>