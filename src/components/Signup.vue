<template>
  <div class="main">
    <img src="../assets/image 3.png" alt="logo" />
    <div class="input">
      <h1>Sign up</h1>
      <input type="text" placeholder="Enter Name" v-model="name" />
      <input type="email" placeholder="Enter Email" v-model="email" />
      <input type="password" placeholder="Enter Password" v-model="password" />
      <button @click="getdata">Sign up</button>
    </div>
    <p class="footer">
      Already have an account ?<router-link to="/login">Login here</router-link>
    </p>
  </div>
</template>
<script>
import axios from "axios"
import { ref } from "vue"
import { useRouter } from "vue-router"
export default {
  name: "LoginPage",
  setup() {
    const router = useRouter()
    const name = ref("")
    const email = ref("")
    const password = ref("")
    async function getdata() {
      const data = await axios.post("http://localhost:3000/user", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      console.warn(data)
      localStorage.setItem("name", name.value)
      localStorage.setItem("email", email.value)
      localStorage.setItem("password", password.value)
      router.push({ name: "/home" })
    }
    return {
      name,
      email,
      password,
      getdata,
    }
  },
}
</script>

<style scoped>
.main {
  margin-top: 5%;
  margin-left: 35%;
}

img {
  width: 120px;
  margin-left: 12%;
}
.input {
  display: flex;
  flex-direction: column;
}
input {
  width: 400px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 22px;
  border-color: aqua;
}
h1 {
  margin-left: 14%;
}
button {
  border-style: none;
  background: aqua;
  width: 420px;
  padding: 12px;
  margin-right: 12px;
  /* color: wh; */
  cursor: pointer;
}
.footer {
  /* margin-top: 12px; */
  margin-left: 200px;
   margin-top: 32px;
  /* margin-left: 100px; */
  font-size: 15px;
}
</style>
