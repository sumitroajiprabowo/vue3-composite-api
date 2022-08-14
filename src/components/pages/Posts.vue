<template>
<Suspense>
    <template #default>
        <PostList />
    </template>

    <template #fallback>
        <div>Loading...</div>
    </template>
</Suspense>
</template>

<script>
import PostList from "./../Postlist.vue"
export default {
    components: {
        PostList
    }
}
</script>