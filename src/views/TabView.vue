<template>
  <div class="tab-view">
    <h3>这是Tab组件测试页面</h3>
    <h5>tab文字后面带数字，但是bar需要停留在文字中间的下方</h5>
    <TabNav :tabs="tabs" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /srccc
import TabNav from "@/components/tabNav";

import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "tabView",
    components: {
        TabNav
    }
})

export default class TabView extends Vue {
        tabs: object[] = [{
            name: '环境信息',
            num: 1,
            tabName: 'envInfo'
        }, {
            name: '组件配置',
            num: 999,
            tabName: 'compoSet'
        }, {
            name: '数据库配置',
            num: 10,
            tabName: 'databaseSet'
        }]
}
</script>

<style lang="stylus" scoped>
h5
    color: red;
</style>
