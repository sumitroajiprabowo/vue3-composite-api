<script setup>
import { ref } from 'vue'
import ChildComp from './components/Child.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <ChildComp :msg="greeting" />
</template>