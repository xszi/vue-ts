<template>
  <div class="tree-nav-view">
      <tree-nav />
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
    data () {
        return {
            value: []
        }
    }
}

</script>

<style lang="stylus" scoped>

</style>
