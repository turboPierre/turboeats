<template>
  <div class="mt-5 container" style="width:100%" >

    <div class='mt-3'>
      <div class="row">
        <div class="col-sm-3">
          <img alt="restaurant" :src="restaurant.picture" width="100%">
        </div>
        <div class="col-sm-3">
          <h1 style="margin-top: 2%"><strong>{{ restaurant.name }}</strong></h1>
          <p><b>{{restaurant.describe}}</b></p>
        </div>
      </div>
    </div>

    <div class="mt-3">


      <div v-if="this.$cookie.get('access_token') != null">
      <b-tabs fill>
        <b-tab title="Menus" active>
          <div class="row" style="background-color: #f5f5f5;">
            <div class="case col-sm-3 mt-3" v-for="menu in listMenus" :key="menu.id">
              <div v-if="menu._restaurantId === restaurant._id" @click="add_menu(menu)">
                <h5>{{ menu.name }}</h5>
                <p>{{menu.describe}}</p>
                <h5><em>{{menu.price}} €</em></h5>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Produits">
          <div class="row" style="background-color: #f5f5f5;">
            <div class="case col-sm-3 mt-3" v-for="product in listProducts" :key="product.id">
              <div v-if="product._restaurantId === restaurant._id" @click="add_product(product)">
                <h5>{{ product.name }}</h5>
                <p>{{product.describe}}</p>
                <h5><em>{{product.price}} €</em></h5>
              </div>
            </div>
          </div>
        </b-tab>
      </b-tabs>
      </div>

      <div v-else>
      <b-tabs fill>
        <b-tab title="Menus" active>
          <div class="row" style="background-color: #f5f5f5;">
            <div class="col-sm-3 mt-3" v-for="menu in listMenus" :key="menu.id">
                <h5>{{ menu.name }}</h5>
                <p>{{menu.describe}}</p>
                <h5><em>{{menu.price}} €</em></h5>
            </div>
          </div>
        </b-tab>
        <b-tab title="Produits">
          <div class="row" style="background-color: #f5f5f5;">
            <div class="col-sm-3 mt-3" v-for="product in listProducts" :key="product.id">
                <h5>{{ product.name }}</h5>
                <p>{{product.describe}}</p>
                <h5><em>{{product.price}} €</em></h5>
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
        toastCount: 0
      }
    },
    methods: {

      add_product(product){
        this.basket_product.push(product);
        this.$cookie.set('basket_product', JSON.stringify(this.basket_product));
        let nbProducts = Object.keys(JSON.parse(this.$cookie.get('basket_product'))).length;
        let nbMenus = Object.keys(JSON.parse(this.$cookie.get('basket_menu'))).length;
        document.getElementById("basketCount").innerHTML = nbProducts + nbMenus;
        this.$bvToast.toast(product.name, {
          title: `Produit ajouté au panier`,
          autoHideDelay: 2000,
          appendToast: false
        })
      },


      add_menu(menu){
        this.basket_menu.push(menu);
        this.$cookie.set('basket_menu', JSON.stringify(this.basket_menu));
        let nbProducts = Object.keys(JSON.parse(this.$cookie.get('basket_product'))).length;
        let nbMenus = Object.keys(JSON.parse(this.$cookie.get('basket_menu'))).length;
        document.getElementById("basketCount").innerHTML = nbProducts + nbMenus;
        this.$bvToast.toast(menu.name, {
          title: `Menu ajouté au panier`,
          autoHideDelay: 2000,
          appendToast: false
        })
      },
    },
    mounted() {


      if(this.$cookie.get('basket_product') == null){
        this.$cookie.set('basket_product', JSON.stringify(''));
      }
      if(this.$cookie.get('basket_menu') == null){
        this.$cookie.set('basket_menu', JSON.stringify(''));
      }

      //requete pour info restaurant
      this.$http.get(this.$api_uri + '/restaurants/id='+this.$route.params.id, {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => { this.restaurant = result.data; this.$cookie.set('basket_restaurantId', this.restaurant._id)}).catch(error => {
        console.log(error);
      });

      console.log(this.$route.query)

      //TODO Faire requetes
      //requete pour liste des produits
      this.$http.get(this.$api_uri + '/products/restaurant=' + this.$route.params.id).then((result) => { this.listProducts = result.data; console.log(result)}).catch(error => {console.log(error);});
      //requete pour liste des menus
      this.$http.get(this.$api_uri + '/menus/restaurant=' + this.$route.params.id).then((result) => { this.listMenus = result.data; console.log(result)}).catch(error => {console.log(error);});



    }
  }
</script>

<style>
/* Container holding the image and the text */
.toast {
  opacity: 1 !important;
  color : #5FB709 !important;
  font-weight: bold !important;
}
.b-toaster-slot{
  margin-top: 75px !important;
}

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

.tab-content {
  margin-left: 0.5%;
}

.nav-tabs .nav-link.active{
  background-color: #f5f5f5 !important;
}

.nav-tabs .nav-link{
  font-weight: bold;
  color:black;
}

.nav-tabs .nav-link.active{
  font-weight: bold;
  color:#5FB709 !important;
}

.nav-tabs .nav-link:hover{
  font-weight: bold;
  color:#5FB709 !important;
}

</style>
