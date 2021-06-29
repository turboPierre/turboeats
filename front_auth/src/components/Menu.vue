<template>
  <div class='mt-5'>
    <div class="row mt-3">
    <div class="col-sm-3" v-for="restaurant in restaurants.data" :key="restaurant.id">
      <router-link :to="{ name: 'PageRestaurant', params: { id: restaurant._id }}" style="color: #2C3E50; text-decoration: none">
        <b-card :img-src="restaurant.picture" img-alt="Image" img-top tag="article"class="mb-2">
          <b-card-title>{{ restaurant.name }}</b-card-title>
          <b-card-text>Horaires : 00h00 - 00h00</b-card-text>
        </b-card>
      </router-link>
    </div>
    </div>
  </div>
</template>
<style>
  .card-img-top {
    width: 100%;
    height: 14vw;
    object-fit: cover;
  }
</style>
<script>

  export default {
    data() {

      return {
        restaurants: null
      }
    },
    mounted() {

      this.$http.get(this.$app_api_uri + '/restaurants',).then((result) => { this.restaurants = result;console.log(result)}).catch(error => {
        console.log(error);
      });

    }
  }

</script>