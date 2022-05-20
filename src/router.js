import {createRouter, createWebHistory} from 'vue-router'


    const routes = [
        {
            path: '/',
            alias: '/products',
            name: 'products',
            component: () => import('@/components/ProductList.vue')
        },
        {
            path: '/products/:id',
            name: 'edit-product',
            component: () => import('@/components/EditProduct.vue')
        },
        {
            path: '/add',
            name: 'add-product',
            component: () => import('@/components/AddProduct.vue')
        }
    ]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router