<template>
<pre> {{ name}} </pre>
<pre> {{ age }} </pre>

<UserComponent v-model:name="name" v-model:age="age" />
</template>


<script>
import { ref } from 'vue'
import UserComponent from './components/User.vue'

export default {
  components: {
    UserComponent,
  },
  setup(){
    const name = ref("");
    const age = ref(0);
    return {
      name,
      age,
    };
  },
};
</script>