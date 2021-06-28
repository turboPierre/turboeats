<template>
  <div class='m-5' style=" margin-top: 70px;">
<div class="row">
<!--  <h1>-->
<!--    Liste des restaurants-->
<!--  </h1>-->
</div>


    <div class="row mt-3">
    <div class="col-sm-3" v-for="restaurant in restaurants.data" :key="restaurant.id">
      <router-link :to="{ name: 'PageRestaurant', params: { id: restaurant.id }}" style="color: #2C3E50; text-decoration: none">
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

      this.$http.get(this.$app_api_uri + '/restaurants', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      }).then((result) => { this.restaurants = result;console.log(result)}).catch(error => {
        console.log(error);
        this.$router.push({ name: "login"})
      });

    }
  }

</script>