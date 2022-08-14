<template>
<!-- Create login -->
<div>
    Username : <input type="text" v-model="username">
    Password : <input type="password" v-model="password">
</div>
<div>
    <button @click="login">Login</button>
</div>
</template>

<script>
import { toRefs, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter();
        const data = reactive({
            username: '',
            password: ''
        });
        const login = () => {
            if (data.username === 'admin' && data.password === 'admin') {
                router.push('/');
            }
        }
        return {
            ...toRefs(data),
            login
        };
    }
}

</script>