<template>
<div>{{ message }}</div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    // create variable to hold message value
    const message = ref('Hello World')

    setTimeout(() => {
      // update message value
      message.value = 'Goodbye World'
    }, 1000)

    // return object with message property
    return {
      message
    }
  }
}
</script>