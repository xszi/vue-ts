<template>
  <div class="home">
      <p>日常组件封装练习</p>
    <table>
        <tr>
            <th>组件</th>
            <th>组件描述</th>
        </tr>
        <tr>
            <td><router-link to="/tab-view" title="点击可在线查看效果">P1：tab组件</router-link></td>
            <td>element-ui组件el-tab不符合工作需求，tab文字后面带数字，且bar需要停留在文字中间的下方</td>
        </tr>
        <tr>
            <td><router-link to="/transfer-view" title="点击可在线查看效果">P2：transfer组件</router-link></td>
            <td>element-ui组件el-transfer不符合工作需求，需求为具有多层树形嵌套穿梭框</td>
        </tr>
        <tr>
            <td><router-link to="/treenav-view" title="点击可在线查看效果">P3：treenav组件</router-link></td>
            <td>实现一个树形导航组件，点击打开子目录导航</td>
        </tr>
    </table>
  </div>
</template>

<script>
// @ is an alias to /srccc
// import ChildTest from "@/components/ChildTest.vue";

export default {
  name: "Home",
  components: {
    // ChildTest
  }
};
</script>

<style lang="stylus" scoped>
table
    margin: 20px auto
    border-collapse: collapse;
table, td, th
    border: 1px solid #333;
    padding: 5px 10px
    text-align: left
</style>
