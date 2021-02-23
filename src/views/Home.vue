<template>
  <div class="home">
      <ul>
          <li><router-link to="/tab-view">tab组件</router-link></li>
      </ul>
    <ChildTest />
  </div>
</template>

<script>
// @ is an alias to /srccc
import ChildTest from "@/components/ChildTest.vue";

export default {
  name: "Home",
  components: {
    ChildTest
  }
};
</script>
