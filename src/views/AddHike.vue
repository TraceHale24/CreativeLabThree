<template>
  <div>
    <h1>Selected Hike</h1>
    <AddHike :currentHike = "currentHike"/>
    <div class="info">
        <div class = 'image'>
            <img :src="'/images/hikePics/' + currentHike.image">
        </div>
      </div>

      <div class = 'name'>
        <h1><u>{{currentHike.name}}</u></h1>
        </div>
        <div class = 'destination'>
        <p>{{currentHike.destination}}</p>
        </div>
        <div class="rating">
        <p>Rating: {{currentHike.rating}}/5</p>
        </div>
        <div class="time">
        <p>Time: {{currentHike.estimatedTime}}</p>
        </div>
      <h1>Reviews</h1>
        <div class="review" v-for="review in currentHike.reviews" :key="review">

        <h2>"{{review}}"</h2>
        <button class = 'btn btn-xs btn-danger' @click = "deleteReview(review)">Delete</button>
        </div>
        <h1>Add Your Own Review</h1>
        <form v-on:submit.prevent = "addReview">
            <div class="input">
            <input type = "text" v-model = "message">
            </div>
            <button type = "submit">Submit</button>
        </form>
      </div>
</template>

<script>
export default {
  name: 'Browse',
  components: {
  },
  data() {
      return {
      }
  },
  computed: {
    currentHike() {
      return this.$root.$data.currentHike;
    }
  },
  methods: {
        addReview() {
            this.$root.$data.currentHike.reviews.push(this.message);
            this.message = '';
        },
        deleteReview(review) {
            var index = 0;
            for(let i = 0; i < this.currentHike.reviews.length; i++){
              if(this.currentHike.reviews[i] === review) {
                index = i;
                break;
              }
            }
            if(index > -1) 
                this.$root.$data.currentHike.reviews.splice(index, 1);
        },
        showAll() {
            this.show = 'all';
        },
  }
}
</script>

<style scoped>
.input {
    border: solid black 3px;
    height: 100px;
}
input[type=checkbox] {
    transform: scale(1.5);
    margin-right: 10px;
}

input[type=text] {
    font-size: 1em;
}

button {
    font-family: 'Arvo';
    font-size: 1em;
    margin-left: 88.75%;
    width: 100px;
    margin-bottom: 50px;

}
.review {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding-top: 10px;
    
}
.name {
    display: flex;
    font-size: 20px;
    justify-content: center;
}

.destination {
    display: flex;
    font-size: 20px;
    justify-content: center;

}

.rating {
    display: flex;
    font-size: 20px;
    justify-content: center;

}

.time { 
    display: flex;
    font-size: 20px;
    justify-content: center;

}

.wrapper {
  display: flex;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}

.info {
    color: #000;
    padding: 10px 30px;
    display: flex;
}

.info h1 {
  font-size: 30px;
}

.info h2 {
  font-size: 20px;
}

.info p {
  margin: 0px;
  font-size: 20px;
}

.image {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;

}

</style>