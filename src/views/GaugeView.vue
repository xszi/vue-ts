<template>
  <div class="tree-nav-view">
      <v-gauge :options="options" :value="value" :width="width" :height="height" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /srccc
import Vue from 'vue'
import { Component} from 'vue-property-decorator'
// import TreeNav from "@/components/treeNav";

@Component({
    components: {
        // TreeNav
    }
})

export default class Transfer extends Vue {
    width = '500px'
    height = '200px'
    value = 58

    options = {
        angle: 0,
        lineWidth: 0.08,
        radiusScale: 0.7,
        pointer: {
            length: 0.3,
            strokeWidth: 0.035,
            color: '#E0E0E0'
        },
        limitMax: false,
        limitMin: false,
        colorStart: '#6FADCF',
        colorStop: '#3599D4',
        strokeColor: '#E0E0E0',
        generateGradient: true,
        highDpiSupport: true
    }

}

</script>

<style lang="stylus" scoped>

</style>
