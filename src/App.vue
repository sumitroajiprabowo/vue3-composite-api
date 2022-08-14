<template>
<div v-if="error"> {{ error }}</div>
  <Suspense>
    <template #default>
      <div>
        <UserComponent />
        <User2Component />
      </div>
    </template>
    <template #fallback>
      <span> Loading ...</span>
    </template>
  </Suspense>
</template>


<script>
import { ref, onErrorCaptured } from 'vue'
import UserComponent from './components/User.vue'
import User2Component from './components/User2.vue'

export default {
  components: {
    UserComponent,
    User2Component
  },
  setup(){
    const error = ref(null)
    onErrorCaptured(e => {
      error.value = e
    })
    return {
      error
    }
  }

}
</script>