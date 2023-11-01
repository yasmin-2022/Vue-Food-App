<template>
  <div class="input">
    <img src="../assets/image 3.png" alt="logo" />

    <h1>Login</h1>
    <input type="text" v-model="useStore.name">
    <input type="email" placeholder="Enter Email" v-model="email" />
    <input type="text" placeholder="Enter Password" v-model="password" />
    <button @click="getdata">Login</button>
    <p class="footer">
      Not a member ?
      <router-link to="/signup">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"
import {useUserStore} from '../store/Cart'
export default {
  name: "Login",
  setup () {
    const useStore = useUserStore()
    const router = useRouter()
    const email = ref("")
    const password = ref("")
    async function getdata() {
      try {
        const response = await axios.get(
          `http://localhost:3000/user?email=${email.value}&password=${password.value}`
        )
        console.warn(response)
        if (response.status == 200 && response.data.length > 0) {
          router.push("/")
        }
      } catch (e) {
        console.error("error", e)
      }

      localStorage.setItem("email", email.value)
      localStorage.setItem("password", password.value)
    }
    return {
      router,
      getdata,
      email,
      password,
      useStore,
    }
  },
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 35%;
}
input {
  width: 400px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 22px;
  border-color: aqua;
}
button {
  width: 430px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 22px;
  border-color: aqua;
  background: aqua;
  border: none;
}
h1 {
  margin-left: 15%;
}
img {
  width: 120px;
  margin-left: 12%;
}
.footer {
  margin-top: 12px;
  margin-left: 280px;
  font-size: 15px;
}
</style>
