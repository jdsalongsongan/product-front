import {createRouter, createWebHistory} from 'vue-router'


    const routes = [
        {
            path:'/',
            name: 'home-page',
            component: () => import('@/components/HomePage.vue')
        },
        {
            path:'/login',
            name: 'login-page',
            component: () => import('@/components/Login.vue')
        },
        {
            path: '/seller',
            alias: '/seller/products',
            name: 'products',
            component: () => import('@/components/ProductList.vue')
        },
        {
            path: '/seller/products/:id',
            name: 'edit-product',
            component: () => import('@/components/EditProduct.vue')
        },
        {
            path: '/seller/add',
            name: 'add-product',
            component: () => import('@/components/AddProduct.vue')
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router