<template>
  <div class="container">
    <img src="../assets/image 3.png" alt="" />
    <div class="main1">
      <ul class="main">
        <li :class="isOnline ? 'online' : 'offline'">
          {{ isOnline ? "Online" : "Offline" }}
        </li>
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="about">About</router-link>
        <router-link class="link" to="create">Create</router-link>
        <router-link class="link" to="post">Post</router-link>
        <li class="link" @click="Logout">Logout</li>
        <router-link to="cart" class="link"
          >Cart ({{ useUser.cart.length }})</router-link
        >
        <li class="user">{{ useStore.user }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "../store/Cart"

export default {
  name: "HeaderPage",
  setup() {
    const useStore = useUserStore()

    const useUser = useUserStore()
    const router = useRouter()
    const isDarkMode = ref(false)

    const isOnline = ref(window.navigator.onLine)

    function updateNetworkStatus() {
      isOnline.value = window.navigator.onLine
    }
    onMounted(() => {
      window.addEventListener("online", updateNetworkStatus)
      window.addEventListener("offline", updateNetworkStatus)
    })
    function Logout() {
      localStorage.clear()
      router.push("/login")
    }
    function toggleBtn() {
      isDarkMode.value = !isDarkMode.value
    }

    return {
      router,
      isOnline,
      updateNetworkStatus,
      Logout,
      isDarkMode,
      toggleBtn,
      useUser,
      useStore,
    }
  },
}
</script>
<style scoped>
.main {
  display: flex;
  justify-content: flex-end;
}
.main .link {
  margin: 10px;
  text-decoration: none;
  padding: 12px;
  font-size: larger;
  color: black;
}
.main li {
  margin-top: 12px;
  margin-right: 12px;
  padding: 12px;
  list-style: none;
}
.main .link:hover {
  background: #000;
  color: #fff;
  border-radius: 20px;
}
.online {
  color: rgb(2, 192, 2);
  font-size: larger;
}
.offline {
  color: red;
}
.container {
  display: flex;
  justify-content: space-between;
  background: #ed1b1b6a;
}
img {
  width: 100px;
  margin-left: 20px;
}
button {
  width: 50px;
  height: 40px;
  margin-top: 10px;
  padding: 5px;
  margin-right: 12px;
  background: aqua;
  border: none;
  border-radius: 12px;
}
@media only screen and (max-width: 600px) {
  .main {
    /* visibility: hidden;
      */
    width: 100px;
    background: #f87878;
    display: flex;
    flex-direction: column;
    /* margin-top: 71%; */
    margin: 0;
  }
  .main .link {
    margin: 10px;
    text-decoration: none;
    padding: 12px;
    font-size: larger;
    color: black;
  }
  img {
    width: 50px;
    height: 50px;
    margin-top: 12px;
  }
  .container {
    width: 100vw;
    height: 100px;
  }
}
.user {
  width: 15px;
  height: 15px;
  background: #000;
  border-radius: 50%;
  color: #fff;
  text-align: center;
}
</style>
