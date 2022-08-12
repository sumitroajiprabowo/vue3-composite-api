<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')

setTimeout(() => {
  message.value = 'Goodbye World!'
  counter.count++
}, 1000)


</script>

<template>
  <h1>{{ message }}</h1>
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <p>Count is: {{ counter.count }}</p>
</template>