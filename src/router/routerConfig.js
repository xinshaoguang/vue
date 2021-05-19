export default [
    {
        name: '$attrs&$listeners',
        path: "/js/vue/$attrs&$listeners",
        component: () => import("@/views/js/vue/attr&listeners")
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-jsx",
        component: () => import("@/views/js/vue/jsx/index.jsx")
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-js",
        component: () => import("@/views/js/vue/jsx/index.js")
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-vue",
        component: () => import("@/views/js/vue/jsx/index.vue")
    },
    {
        name: 'draggable',
        path: "/plugs/draggable",
        component: () => import("@/views//plugs/draggable")
    },
]