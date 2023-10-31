<template>
  <div>
    <h1 class="menu">Menu</h1>
    <div
      v-for="(item, index) in accordianitems"
      :key="item?.card?.card?.itemCards?.card?.id"
      @click="accordianBtn(index)"
    >
      <p class="accordian">
        {{ item?.card?.card?.title }}
      </p>

      <cardItem :item="item" :accordian="accordian" :index="index" />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue"
import axios from "axios"
import CardItem from '../components/CardItem.vue'
// import cardItem from "../components/CardItem.vue"

export default {
  components: {
    CardItem,
  },
  setup() {
    const searchTerm = ref("")
    const accordianitems = ref([])
    const accordian = ref(false)

    const filteredItems = computed(() => {
      const term = searchTerm.value.toLowerCase()
      return menuItems.value.filter((item) => item.toLowerCase().includes(term))
    })
    const accordianItem = async () => {
      const data = await axios.get(" http://localhost:3000/Menu")
      accordianitems.value = data?.data
      console.log(data?.data)
    }
    onMounted(() => {
      accordianItem()
    })
    const accordianBtn = (index) => {
      accordian.value = index === accordian.value ? null : index
    }
    function hello() {
      console.log("hello")
    }
    return {
      hello,
      accordianItem,
      filteredItems,
      accordianitems,
      accordian,
      accordianBtn,
    }
  },
}
</script>
<style scoped>
.accordian {
  border-radius: 12px;
  padding: 12px;
  margin-left: 12px;
  /* margin-right: 12px;  */
  font-size: medium;
  border: 2px solid aqua;
  background: aqua;
  color: black;
  font-size: larger;
  margin-bottom: 0;
  word-wrap: break-word;
}

/* .name {
  font-size: larger;
} */
.menu {
  text-align: center;
}
</style>
