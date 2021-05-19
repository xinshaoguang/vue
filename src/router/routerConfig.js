export default [
    {
        name: '$attrs&$listeners',
        path: "/js/vue/$attrs&$listeners",
        component: () => import("@/views/js/vue/attr&listeners")
    },
    {
        name: 'draggable',
        path: "/plugs/draggable",
        component: () => import("@/views//plugs/draggable")
    },
]