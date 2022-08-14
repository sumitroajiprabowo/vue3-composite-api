<template>
<Suspense>
    <template #default>
        <PostDetail />
    </template>

    <template #fallback>
        <div>Loading...</div>
    </template>
</Suspense>
</template>

<script>
import PostDetail from "./../PostDetail.vue"
export default {
    components: {
        PostDetail
    }
}
</script>