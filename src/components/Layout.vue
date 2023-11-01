<template>
  <div>
    <Header />
  <RouterView></RouterView>
  </div>
</template>

<script>
import Header from './Header.vue'
import {useUserStore} from '../store/Cart'
export default {
  components: {
    Header
  },
  setup () {
    const userStore = useUserStore();
    return {
      userStore
    }
 }
  }
</script>

<style scoped>


</style>