<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
<style  scoped>
body{
  padding: 0;
  margin: 0;
}
</style>
