import { createWebHistory, createRouter } from "vue-router";

import Login from "./../components/layouts/Login.vue";
// import Logout from "./../components/layouts/Logout.vue";
import Dashboard from "./../components/layouts/Dashboard.vue";
import Home from "./../components/pages/Home.vue";
import About from "./../components/pages/About.vue";
import Contact from "./../components/pages/Contact.vue";
import Posts from "./../components/pages/Posts.vue";
import Post from "./../components/pages/Post.vue";

const routes = [
    {
        path: "/login",
        component: Login,
        name: "Login"
    },
    // {
    //     path: "/logout",
    //     component: Logout,
    //     name: "Logout"
    // },
    {
        path: "/",
        component: Dashboard,
        name: "Dashboard",
        children: [
            {
                path: "",
                name: "Home",
                component: Home
            },
            {
                path: "about",
                name: "About",
                component: About
            },
            {
                path: "contact",
                name: "Contact",
                component: Contact
            },
            {
                path: "posts",
                name: "Posts",
                component: Posts
            },
            {
                path: "posts/:id",
                name: "Post",
                component: Post
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
    if (to.name !== "Login" && !isAuthenticated) {
        next({ name: "Login" });
    }
    else if (to.name === "Dashboard" && isAuthenticated) {
        next({ name: "Dashboard" });
    }
    else {
        next();
    }
});

export default router;