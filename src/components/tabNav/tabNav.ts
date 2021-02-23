import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import template from "./tabNav.vue"

@Component({
    name: "tabNav",
    mixins: [template],
    components: {
    }
})

export default class TabNav extends Vue {
    tab = 'first';

    @Prop({
        type: Array,
        default: () => []
    })
    tabs

    mounted () {
        this.tab = this.tabs[0] && this.tabs[0].tabName
        this.changeActiveTab(this.tab)
    }

    changeActiveTab (tabName: string) {
        this.tab = tabName;
        const bar = document.getElementsByClassName('tabs-active-bar')[0] as HTMLElement;
        // ts语法需要加类型断言<HTMLElement>
        const tab = this.$refs[`tab-${tabName}`] as HTMLElement;
        const tabText = tab[0].getElementsByClassName('tab-text')[0] as HTMLElement
        if (!bar || !tab || !tabText) {
            return;
        }
        const left = tab[0].offsetLeft;
        // 使用非空断言符号tab.querySelector('.text')!
        const { width } = tabText!.getBoundingClientRect();
        const barWidth = bar.getBoundingClientRect().width;
        const x = left + (width - barWidth) / 2;
        bar.style.transform = `translate(${x}px)`
    }
}
