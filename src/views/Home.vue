<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <ChildTest />
  </div>
</template>

<script>
// @ is an alias to /srccc
import HelloWorld from "@/components/HelloWorld.vue";
import ChildTest from "@/components/ChildTest.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    ChildTest
  }
};
</script>
