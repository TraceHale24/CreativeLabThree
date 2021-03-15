<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="hike in hikes" :key="hike.id">
      <div class="info">
        <h1>{{hike.name}}</h1>
        <p>{{hike.destination}}</p>
        <p>Rating: {{hike.rating}}/5</p>
        <p>Time: {{hike.estimatedTime}}</p>
      </div>
      <div class="image">
        <img :src="'/images/hikePics/'+hike.image">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HikeList',
  props: {
    hikes: Array
  }
}
</script>



<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 250px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 250px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background:forestgreen;
  color: #000;
  padding: 10px 30px;
  height: 100px;
}

.info h1 {
  font-size: 12px;
}

.info h2 {
  font-size: 10px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>