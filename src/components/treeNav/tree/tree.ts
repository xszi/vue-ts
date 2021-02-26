import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import template from "./tree.vue"

@Component({
    name: "tree",
    mixins: [template],
    components: {
    }
})

export default class Tree extends Vue {

    @Prop({
        type: Array,
        default: () => []
    })
    data

    @Prop({
        type: Number,
        default: 0
    })
    level

    @Prop({
        type: Function,
        default: () => null
    })
    clickNode

    @Prop({
        type: Object,
        default: () => null
    })
    currentNode

    @Prop({
        type: Function,
        default: () => null
    })
    loadNodes

    whetherHasNodes(data) {
        let flag = false
        data.forEach(item => {
            if (item.hasNodes) {
                flag = true
                return
            }
        })
        return flag
    }

    handleExpandNode (node) {
        if (Object.prototype.hasOwnProperty.call(node, 'expand')) {
            node.expand = !node.expand
        } else {
            Vue.set(node, 'expand', true)
        }
        if (node.expand && this.level !== 0) {
            this.loadNodes(node)
        }
    }

    handleClickNode (node) {
        this.clickNode && this.clickNode(node)
    }
}
