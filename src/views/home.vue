<template>
  <div>
    <div class="search">
      <input type="text" placeholder="Search" v-model="searchTerm" />
    </div>
    <div class="main">
      <div v-for="item in filteredItems" :key="item" class="card">
        <router-link to="/about" class="list">
          <img :src="item?.card?.card?.info?.cloudinaryImageId" alt="img" />
        </router-link>
          <h1>{{ item?.card?.card?.info?.name }}</h1>
          <p>{{ item?.card?.card?.info?.locality }}</p>
          <p>{{ item?.card?.card?.info?.cuisines.join() }}</p>
          <p>{{ item?.card?.card?.info?.areaName }}</p>
          <p>{{ item?.card?.card?.info?.costForTwo }}</p>
          <p>{{ item?.card?.card?.info?.avgRating + "Star" }}</p>
        </div>
      </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue"
import axios from "axios"
export default {
  name: "HomePage",
  setup() {
    const restMenu = ref([])
    const img = ref([])
    const searchTerm = ref("")
    const restaurent = async () => {
      const response = await axios.get("http://localhost:3000/Restaurent")
      restMenu.value = response.data
      console.log(response.data)
    }
    const filteredItems = computed(() => {
      const term = searchTerm.value.toLowerCase()
      return restMenu.value.filter((item) =>
        item?.card?.card?.info?.name.toLowerCase().includes(term)
      )
    })

    onMounted(() => {
      restaurent()
    })

    return {
      restaurent,
      restMenu,
      img,
      searchTerm,
      filteredItems,
    }
  },
}
</script>
<style scoped>
.menu {
  display: flex;
  justify-content: flex-end;
  margin-right: 40px;
}
.menu li {
  list-style: none;
  margin-left: 12px;
}
.online {
  color: rgb(0, 255, 0);
}
.offline {
  color: Red;
}
img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
}
.card {
  width: 300px;
  flex-wrap: wrap;
  margin: 10px;
  border: 2px solid black;
  justify-content: center;
  padding: 12px;
  text-align: center;
}
.main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.search {
  margin-top: 32px;
  margin-left: 13%;
}
.search input {
  width: 1000px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 2px;
}
button {
  width: 100px;
  height: 40px;
}
h1,
p {
  color: black;
  list-style: none;
}
.list {
  list-style: none;
}
</style>
