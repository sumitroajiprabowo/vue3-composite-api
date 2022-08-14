<template>
<div>
  <input text="text" v-model="name_" />
  <input text="number" v-model="age_" />
</div>
</template>

<script>
import { toRefs, computed } from 'vue';

// create props with default values
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    age: {
      type: Number,
      default: 0
    }
  },
  // create emit for handle multiple v-model
  emits: ['update:name', 'update:age'],
  setup(props, { emit }) {
    const { name, age } = toRefs(props);

    const name_ = computed({
      get() {
        return name.value;
      },
      set(value) {
        emit('update:name', value);
      }
    });
    const age_ = computed({
      get() {
        return age.value;
      },
      set(value) {
        emit('update:age', parseInt(value));
      }
    });
    return {
      name_,
      age_
    };
  }
}
</script>