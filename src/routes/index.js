import { createWebHistory, createRouter } from "vue-router";

import Home from "./../components/pages/Home.vue";
import About from "./../components/pages/About.vue";
import Contact from "./../components/pages/Contact.vue";
import Posts from "./../components/pages/Posts.vue";
import Post from "./../components/pages/Post.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/about",
        name: "about",
        component: About
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact
    },
    {
        path: "/posts",
        name: "posts",
        component: Posts
    },
    {
        path: "/posts/:id",
        name: "post",
        component: Post
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;