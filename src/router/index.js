import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        meta: {
            index: 0,
            showTab: true,
        },
        component: () => import('@/views/home.vue')
    }, {
        path: "/shop",
        name: "shop",
        meta: {
            index: 1,
            showTab: true,
        },
        component: () => import('@/views/shop.vue')
    }, {
        path: "/cart",
        name: "cart",
        meta: {
            index: 2,
            showTab: true,
        },
        component: () => import('@/views/cart.vue')
    }, {
        path: "/mine",
        name: "mine",
        meta: {
            index: 3,
            showTab: true,
        },
        component: () => import('@/views/mine.vue')
    }, {
        path: "/goodsDetail",
        name: "goodsDetail",
        component: () => import('@/views/goods/goodsDetail.vue')
    }, 
    // {// 404路由
    //     path: '/404',
    //     name: '404',
    //     component: () => import('/@/views/404.vue')
    // }, {// 后端管理系统路由组
    //     path: "/admin",
    //     redirect: "/admin/home",
    //     name: "admin",
    //     component: () => import("/@/views/admin.vue"),
    //     children: [
    //         {
    //             path: "home",
    //             name: "home",
    //             meta: {
    //                 requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    //             },
    //             component: () => import("/@/views/admin/Home.vue")
    //         },
    //         {
    //             path: "setting",
    //             name: "setting",
    //             meta: {
    //                 requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
    //             },
    //             component: () => import("/@/views/admin/Setting.vue")
    //         },
    //     ]
    // },
];

const router = createRouter({
    // hash模式：createWebHashHistory，
    // history模式: createWebHistory,
    // history: createWebHistory("/"),
    history:createWebHashHistory(),
    routes,
});

/**
* 路由守卫
*/
router.beforeEach((to, from) => {
    // console.log('router to--->', to)
    // console.log('router from--->', from)
});

/**
 * 路由错误回调
 */
router.onError((error) => {
    // console.log("error:", error);
});

export default router