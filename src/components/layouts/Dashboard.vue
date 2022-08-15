<template>
<nav>
  <router-link to="/">Home </router-link>
  <router-link to="/posts">Posts </router-link>
  <router-link to="/about">About </router-link>
  <router-link to="/contact">Contact </router-link>
  <button @click="logout">Logout</button>
</nav>
<hr />

<router-view></router-view>
</template>

<script>
import {useRouter} from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const logout = () => {
      localStorage.setItem('authenticated', false);
      router.push({ name: 'Login' });
    }
    return {
      logout
    };
  }
}

</script>