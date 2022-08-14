<template>
<ul v-for="(item, index) in posts" :key="index">
    <li>
        <router-link :to="`/posts/${item.id}`">
            {{ item.title }}
        </router-link>
    </li>
</ul>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    async setup() {
        const data = reactive({
            posts: []
        })

        const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        data.posts = await result.json();

        return {
            ...toRefs(data)
        }
    },
    }
</script>