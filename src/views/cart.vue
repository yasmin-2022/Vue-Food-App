<template>
  <div>
    <button class="btn" @click="clearCart()">Clear Cart</button>
    <button class="btn" @click="removeItems()">Remove Cart</button>
  </div>
</template>

<script>
import { useUserStore } from "../store/Cart"
export default {
  name: "Cart",
 
  setup() {
    const useCart = useUserStore()
    function clearCart() {
      useCart.clearCart()
    }
    function removeItems () {
      useCart. removeItems()
    }
    return {
      useCart,
      clearCart,
      removeItems
    }
  },
}
</script>

<style scoped>
.btn {
  background: #000;
  color: #fff;
  padding: 12px;
  margin-left: 45%;
  margin-top: 3%;
  border-radius: 12px;
}
</style>
