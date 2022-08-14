import { createWebHistory, createRouter } from "vue-router";

import Home from "./../components/Home.vue";
import About from "./../components/About.vue";
import Contact from "./../components/Contact.vue";

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;