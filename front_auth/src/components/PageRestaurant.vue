<template>
  <div class="mt-5 container">
    <div class='mt-3'>


      <div class="mt-3">
      <img style="display: block;margin:auto;" alt="restaurant" src="https://offloadmedia.feverup.com/parissecret.com/wp-content/uploads/2020/05/23132534/hero-1583762206.jpg" width="50%">
        <h1 style="margin-top: 2%"><strong>{{ restaurant.name }}</strong></h1>
        <p><b>{{restaurant.describe}}</b></p>
      </div>


    </div>
    <div class="mt-3">
      <b-tabs content-class="mt-3" fill>
        <b-tab title="Menus" active>

        </b-tab>
        <b-tab title="Produits">
          <div class="row">
            <div class="col-sm-3 mt-3" v-for="product in listProducts" :key="product.id">
              <div v-if="product._restaurantId === restaurant._id" @click="add_product(product)">
                <h3>{{ product.name }}</h3>
                <h5>{{product.describe}}</h5>
                <h5>{{product.price}} €</h5>
              </div>
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
      this.basket = [];
      this.price = [];
      return {
        restaurant: null,
        listProducts: null,
      }
    },
    methods: {
      add_product(product){
        this.basket.push(product);
        this.price.push(product.price);
        this.$cookie.set('basket_product', JSON.stringify(this.basket));
      },
      add_menu(menu){
        console.log(menu);
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
