import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import template from "./treeNav.vue"

@Component({
    name: "treeNav",
    mixins: [template],
    components: {
    }
})

export default class TreeNav extends Vue {
    tab = 'first';

    @Prop({
        type: Array,
        default: () => []
    })
    tabs

}
