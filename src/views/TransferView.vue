<template>
  <div class="tab-view">
    <!-- <h3>这是Transfer组件测试页面</h3>
    <a href="https://github.com/xszi/vue-ts/tree/main/packages/tree-transfer" target="_blank">源码地址</a> -->
    <h5>具有树形嵌套结构的穿梭框</h5>
    <i-tree-transfer
        v-model="value"
        :data="data"
        filterable
    />
    <!-- <i-tree-transfer :value="value" @input="value=$event.target.value"> -->
        <!-- v-model就是绑定了一个名为value的props和一个事件input -->
    <p>v-model: {{value}}</p>
    <!-- <i-tree /> -->
    <!-- <div class="desc">
        <img src="../assets/transfer.png">
    </div> -->
  </div>
</template>

<script lang="ts">
// @ is an alias to /srccc
import Vue from 'vue'
import { Component} from 'vue-property-decorator'

@Component
export default class Transfer extends Vue {
    data () {
        return {
            value: [],
            data: [
                {
                    key: 1,
                    label: '备选项1',
                    disabled: false,
                    children: [
                        {
                            key: 11,
                            label: '备选项11',
                            disabled: false,
                            children: [
                                { key: 111, label: '备选项111', disabled: false },
                                { key: 112, label: '备选项112', disabled: false },
                                { key: 113, label: '备选项113', disabled: false }
                            ]
                        },
                        { key: 12, label: '备选项12', disabled: false },
                        { key: 13, label: '备选项13', disabled: false }
                    ]
                },
                { key: 2, label: '备选项2', disabled: false },
                { key: 3, label: '备选项3', disabled: false },
                { key: 4, label: '备选项4', disabled: false },
                { key: 5, label: '备选项5', disabled: false }
            ]
        }
    }
}

</script>

<style lang="stylus" scoped>
h5
    color: red;
.desc
    width: 100%
    height: 100%
    margin-top: 20px
    display: flex;
    flex-direction: column
    img
        display: inline-block
        width: 300px
        margin: 20px auto
    a
        margin-left: 20px
</style>
