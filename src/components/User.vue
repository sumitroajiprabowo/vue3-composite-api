<template>
<div>
  This is user component
</div>

<div>
  {{ data }}
</div>
</template>

<script>

import { ref } from 'vue'

export default {
  async setup () {
    const data = ref('null')
    const getData = () => new Promise(resolve => {
      return setTimeout(() => {
        resolve(data.value = 'async data from user')
      }, 5000)
    })

    await getData()

    return {
      data
    }
  }
}

</script>