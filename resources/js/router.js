import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/index.js';

// auth
import Login from './auth/Login';
import Register from './auth/Register';
// import Logout from './auth/Logout';
// account
import Dashboard from './views/account/Dashboard';

// posts
import PostsIndex from './views/posts/PostsIndex';
import PostsCreate from './views/posts/PostsCreate';
import PostsShow from './views/posts/PostsShow';
import PostsEdit from './views/posts/PostsEdit';

// profiles
import ProfilesIndex from './views/profiles/ProfilesIndex';
import ProfilesCreate from './views/profiles/ProfilesCreate';
import ProfilesShow from './views/profiles/ProfilesShow';
import ProfilesEdit from './views/profiles/ProfilesEdit';
import { uniqueSort } from 'jquery';

Vue.use(VueRouter);

const router = new VueRouter({

    routes: [
        {   name: 'Login',
            path: '/login', 
            component: Login,
        },
        {   name: 'Register',
            path: '/register', 
            component: Register,
        },
        { 
            name: 'Logout',
            path: '/logout', 
            // component: Logout,
        },
        { 
            name: 'Dashboard',
            path: '/account/dashboard', 
            component: Dashboard, 
            meta: { requiresAuth: true }
        },
        { 
            name: 'Home',
            path: '/', 
            component: PostsIndex,
        },
        { 
            path: '/posts/create', 
            component: PostsCreate,
            meta: { requiresAuth: true }
        },
        { 
            path: '/posts/:id', 
            component: PostsShow,
        },
        { 
            path: '/posts/:id/edit', 
            component: PostsEdit,
            meta: { requiresAuth: true }
        },
        { 
            path: '/profiles', 
            component: ProfilesIndex,
        },
        { 
            path: '/profiles/create', 
            component: ProfilesCreate,
            meta: { requiresAuth: true }
        },
        { 
            path: '/profiles/:id', 
            component: ProfilesShow
        },
        { 
            path: '/profiles/:id/edit', 
            component: ProfilesEdit, 
            meta: { requiresAuth: true }
        },
    ],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['auth/authenticated'];
    
    if (to.meta.requiresAuth === true && isAuthenticated === false ) {
    // User is Unauthenticated
        router.replace({name: 'Login'});
    }
    // User is Authenticated  
    else {
        next();
    }
});

export default router;
