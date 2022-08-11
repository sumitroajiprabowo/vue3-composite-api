<template>
<div>{{ user }}</div>

<div>
  {{ user.name}}
  {{ user.age }}
</div>

</template>

<script>
import { reactive } from 'vue'
export default {
  setup(){
    const user = reactive({
      name: 'John Doe',
      age: 30
    })

    setTimeout(() => {
      user.age = 35
    }, 1000)
    // return object with message property
    return {
      user
    }

  }

}
</script>