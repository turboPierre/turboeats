<template>
  <div class="container">
  <div class="mt-5">
    <div class='row' style="margin-top: -10%">


      <div class="cont">
        <img alt="restaurant" src="https://www.agencephotoup.fr/public/Medias/0_bandeaux_new/portfolio/bandeau_restaurants.jpg">
        <div class="text-block">
          <h4>{{ restaurant.name }}</h4>
          <p>{{restaurant.describe}}</p>
        </div>
      </div>


    </div>
    <div class="row">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Menus" active>
          <div class="row">
            <div class="col-sm-4 mt-3" v-for="menu in listMenus" :key="menu.id">
              <div v-if="menu._restaurantId === restaurant._id" @click="add_menu(menu)">
                <h1>{{ menu.name }}</h1>
                <h5>{{menu.describe}}</h5>
                <h5>{{menu.price}} €</h5>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Produits">
          <div class="row">
            <div class="col-sm-4 mt-3" v-for="product in listProducts" :key="product.id">
              <div v-if="product._restaurantId === restaurant._id" @click="add_product(product)">
                <h1>{{ product.name }}</h1>
                <h5>{{product.describe}}</h5>
                <h5>{{product.price}} €</h5>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      this.basket_product = [];
      this.basket_menu = [];
      return {
        restaurant: null,
        listProducts: null,
        listMenus: null,
      }
    },
    methods: {
      add_product(product){
        this.basket_product.push(product);
        localStorage.setItem('basket_product', JSON.stringify(this.basket_product));

      },
      add_menu(menu){
        this.basket_menu.push(menu);
        localStorage.setItem('basket_menu', JSON.stringify(this.basket_menu));
      },
    },
    mounted() {

      //requete pour info restaurant
      this.$http.get(this.$app_api_uri + '/restaurants/'+this.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => { this.restaurant = result.data; console.log(result)}).catch(error => {
        console.log(error);
      });

      //requete pour liste des produits
      this.$http.get(this.$app_api_uri + '/products').then((result) => { this.listProducts = result.data; console.log(result)}).catch(error => {console.log(error);});
      //requete pour liste des menus
      this.$http.get(this.$app_api_uri + '/menus').then((result) => { this.listMenus = result.data; console.log(result)}).catch(error => {console.log(error);});

    }
  }
</script>

<style>
/* Container holding the image and the text */
.cont {
  position: relative;
  margin-left: -3.2%;
}

/* Bottom right text */
.text-block {
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
