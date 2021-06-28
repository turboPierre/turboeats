<template>
  <div class="mt-5">
    <div class='row' style="margin-top: -10%">
<!--      <figure style="height: 400px">-->
<!--        <img alt="restaurant" src="https://www.agencephotoup.fr/public/Medias/0_bandeaux_new/portfolio/bandeau_restaurants.jpg">-->
<!--          <div class="row">-->
<!--            <h1 style="color: white"><strong>{{restaurant.name}}</strong></h1>-->
<!--          </div>-->
<!--      </figure>-->

              <img alt="restaurant" src="https://www.agencephotoup.fr/public/Medias/0_bandeaux_new/portfolio/bandeau_restaurants.jpg">
    </div>
    <div class="row">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Menus" active>



        </b-tab>
        <b-tab title="Produits">
          <div class="row">
            <div class="col-sm-4" v-for="product in listProducts" :key="product.id">
              <h1>{{ product.name }}</h1>
              <h5>{{product.describe}}</h5>
              <h5>{{product.price}} €</h5>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        restaurant: null,
        listProducts: null,
      }
    },
    mounted() {

      //requete pour info restaurant
      this.$http.get(this.$app_api_uri + '/restaurants/'+this.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      }).then((result) => { this.restaurant = result.data; console.log(result)}).catch(error => {
        console.log(error);
      });

      //requete pour liste des produits
      this.$http.get(this.$app_api_uri + '/products').then((result) => { this.listProducts = result.data; console.log(result)}).catch(error => {console.log(error);});

    }
  }
</script>