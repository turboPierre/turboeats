<template>
  <div class='container' style="margin-left: -10%; margin-right: -10%; margin-top: 70px">
<div class="row">
  <h1>
    Liste des restaurants
  </h1>
</div>


    <div class="row">
    <div class="col-3" v-for="restaurant in restaurants.data" :key="restaurant.id">
      <router-link :to="{ name: 'Restaurant', params: { id: restaurant.id }}" style="color: #2C3E50; text-decoration: none">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 30rem;" class="mb-2">
          <b-card-title>{{ restaurant.name }}</b-card-title>
          <b-card-text>Horaires : 00h00 - 00h00</b-card-text>
        </b-card>
      </router-link>
    </div>
    </div>



  </div>
</template>

<script>

  export default {
    data() {
      return {
        restaurants: null
      }
    },
    mounted() {
      this.$http.get('http://localhost:8081/restaurants').then(response => (this.restaurants = response))
    }
  }

</script>