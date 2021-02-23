<template>
  <div class="tab-view">
    <h3>这是Tab组件测试页面</h3>
    <h5>tab文字后面带数字，但是bar需要停留在文字中间的下方</h5>
    <TabNav />
  </div>
</template>

<script>
// @ is an alias to /srccc
import TabNav from "@/components/tabNav";

export default {
  name: "TabView",
  components: {
    TabNav
  }
};
</script>

<style lang="stylus" scoped>
h5
    color: red;
</style>
