export default [{
        name: '$attrs&$listeners',
        path: "/js/vue/$attrs&$listeners",
        component: () => import( /* webpackChunkName: "$attrs&$listeners" */ "@/views/js/vue/attr&listeners"),
        meta: {
            keepAlive: true,
        }
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-jsx",
        component: () => import( /* webpackChunkName: "jsx-jsx" */ "@/views/js/vue/jsx/index.jsx")
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-js",
        component: () => import( /* webpackChunkName: "jsx-js" */ "@/views/js/vue/jsx/index.js")
    },
    {
        name: 'jsx',
        path: "/js/vue/jsx-vue",
        component: () => import( /* webpackChunkName: "jsx-vue" */ "@/views/js/vue/jsx/index.vue")
    },
    {
        name: 'draggable',
        path: "/plugs/draggable",
        component: () => import( /* webpackChunkName: "draggable" */ "@/views//plugs/draggable")
    },
]