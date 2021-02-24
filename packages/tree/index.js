import iTree from './src/main.vue'

iTree.install = function (Vue) {
    Vue.component(iTree.name, iTree)
}

export default iTree
