<template>
  <div>
    <div class='row'>
      <figure style="height: 400px">
        <img alt="restaurant" src="https://www.agencephotoup.fr/public/Medias/0_bandeaux_new/portfolio/bandeau_restaurants.jpg">
          <div class="row" style="margin-top: -300px; margin-left: -70%">
            <h1 style="color: white"><strong>{{restaurant.name}}</strong></h1>
          </div>
      </figure>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        restaurant: null,
      }
    },
    mounted() {

      this.$http.get(this.$app_api_uri + '/restaurants/'+this.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      }).then((result) => { this.restaurant = result.data; console.log(result)}).catch(error => {
        console.log(error);
      });



    }
  }
</script>