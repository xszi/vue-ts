import Vue from "vue"
import { Component } from "vue-property-decorator"
import template from "./tabNav.vue"

@Component({
    name: "tabNav",
    mixins: [template],
    components: {
    }
})

export default class TabNav extends Vue {

    tab = 'first';

    changeActiveTab (tabName: string) {
        this.tab = tabName;
        const bar = document.getElementsByClassName('tabs-active-bar')[0] as HTMLElement;
        // ts语法需要加类型断言<HTMLElement>
        const tab = this.$refs[`tab-${tabName}`] as HTMLElement;
        if (!bar || !tab || !tab.querySelector('.text')) {
            return;
        }
        const left = tab.offsetLeft;
        // 使用非空断言符号tab.querySelector('.text')!
        const { width } = tab.querySelector('.text')!.getBoundingClientRect();
        const barWidth = bar.getBoundingClientRect().width;
        const x = left + (width - barWidth) / 2;
        bar.style.transform = `translate(${x}px)`
    }
}
