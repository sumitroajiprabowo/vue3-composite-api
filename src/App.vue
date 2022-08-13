<script setup>
import { ref } from 'vue'
import ChildComp from './components/Child.vue'

const msg = ref('from parent')
</script>

<template>
  <ChildComp>
    {{ msg}}
  </ChildComp>
</template>