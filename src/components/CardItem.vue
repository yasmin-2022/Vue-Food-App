<template>
  <div>
    <div v-if="accordian === index">
      <div
        class="itemcards"
        v-for="card in item?.card?.card?.itemCards ||
        item?.card?.card?.categories[1]?.itemCards"
        :key="card?.card?.info?.id"
      >
        <div>
          <p class="name">{{ card?.card?.info?.name }}</p>
          <p>{{ card?.card?.info?.description }}</p>
          <p>{{ card?.card?.info?.category }}</p>
          <p>{{ "₹" + " " + card?.card?.info?.price / 100 }}</p>
        </div>
        <img class="img" :src="card?.card?.info?.imageId" alt="itemImg" />
        <button class="btn" @click="hello()">btn</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardItem",
  props: {
    item: Object,
    accordian: [Number,null],
    index:Number  
  },
}
</script>

<style scoped>
.itemcards {
  margin-left: 22px;
  padding: 22px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid black;
  border-top: 2px solid aqua;
  /* border: 2px solid black; */
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin-top: 0;
  margin-bottom: 0;
}
.img {
  width: 150px;
  height: 150px;
}
.btn {
  position: absolute;
  left: 95%;
  background: #000;
  color: #fff;
  border-radius: 10px;
  width: 60px;
  height: 40px;
  padding: 12px;
}
</style>
