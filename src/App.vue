<script setup>
import { ref } from 'vue'
import ChildComp from './components/Child.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <ChildComp @response="(msg) => childMsg = msg" />
  {{ childMsg }}
</template>