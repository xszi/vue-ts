import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import Tree from "./tree"
import template from "./treeNav.vue"

@Component({
    name: "treeNav",
    mixins: [template],
    components: {
        Tree
    }
})

export default class TreeNav extends Vue {
    currentNode = {}
    treeData = [{
        name: '一级1',
        expand: false,
        nodes: [{
            id: 1001,
            hasNodes: false,
            name: '菜单一'
        }, {
            id: 1002,
            hasNodes: false,
            name: '菜单二'
        }]
    }, {
        name: '一级2',
        expand: false,
        nodes: [{
            id: 1003,
            hasNodes: false,
            name: '菜单三'
        }, {
            id: 1004,
            hasNodes: false,
            name: '菜单四'
        }]
    }]

    @Prop({
        type: String,
        default: ''
    })
    aa

    clickNode (node) {
        this.currentNode = node
    }

    loadNodes () {
        this.treeData.forEach(v => {
            if (v.nodes && v.nodes.length > 0) {
                v.expand = true
            }
        })
        console.log(this.treeData, 'ddddd');
    }
}
