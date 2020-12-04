import a from './a.vue'

a.install = function (Vue) {
    Vue.component(a.name, a)
}

// 第二种写法
// const a = {
//     install: function (Vue) {
//         Vue.component(a.name, a)
//     }
// };

export default a