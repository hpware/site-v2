import { createRouter, createWebHistory } from 'vue-router';

const pages = import.meta.glob('@/pages/**/*.vue');

const routes = Object.keys(pages).map((path) => {
    const name = path.match(/\/pages\/(.*)\.vue$/)[1];
    return {

        path: name === 'index' ? '/' : `/${name.toLowerCase()}`,
        name,
        component: pages[path],
    };
});

routes.push({
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/oops.vue'),
    meta: {
        title: 'Oops! Page not found',
    },
});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;