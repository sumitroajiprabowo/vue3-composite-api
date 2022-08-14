<template>
<h2>
    {{ title }}
</h2>
<div>
    {{ body }}
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRoute } from 'vue-router'
export default {
    async setup() {
        const data = reactive({
            title: '',
            body: ''
        });

        const route = useRoute();
        const id = route.params.id;

        const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const { title, body } = await result.json();

        data.title = title;
        data.body = body;

        return {
            ...toRefs(data)
        };
    },
    }
</script>