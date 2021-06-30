<template>
  <div class='container'>
    <b-form>
      <div class="row">
        <h4><strong>Votre panier</strong></h4>
      </div>
<!--      menus-->
      <div class="row" v-for="menu in this.basket_menu" :key="menu._id">
        <div class="col-sm-9">
          <strong>- {{ menu.name }}</strong>
        </div>
        <div class="col-sm-3" style="float: right;">
          {{ menu.price }} €
        </div>
      </div>
<!--      produits-->
      <div class="row" v-for="product in this.basket_product" :key="product._id">
        <div class="col-sm-9">
          <strong>- {{ product.name }}</strong>
        </div>
        <div class="col-sm-3">
          {{ product.price }} €
        </div>
      </div>
      <hr>
      <div class="row">
        <strong>Total {{ this.total }} €</strong>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <b-button v-b-modal.modal-cancel class="btn btn-danger">Annuler</b-button>
        </div>
        <div class="col-sm-6">
          <div v-if="this.total === 0">
            <b-button disabled class="btn btn-success">Commander</b-button>
          </div>
          <div v-else="">
            <b-button v-b-modal.modal-pay class="btn btn-success">Commander</b-button>
          </div>
        </div>
      </div>


      <div>

        <b-modal id="modal-cancel" centered title="vider le panier">
          <p class="my-4">Voulez-vous vider votre panier ?</p>
          <div slot="modal-footer">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="success" @click="cancel_panier()">
              Valider
            </b-button>

          </div>
        </b-modal>


        <b-modal id="modal-pay" size="lg" centered title="Méthodes de paiements :">


          <b-tabs fill>
            <b-tab title="Paypal" active>
              <div class="row">
                <div class="col-sm-3">
                  <img src="https://balancepayout.paypal.com/hw2web/javax.faces.resource/244013801687/en/login_logo.png.xhtml?ln=img" width="100%">
                </div>
              </div>
            </b-tab>
            <b-tab title="Carte bancaire">
              <div class="row">
                <div class="col-sm-2">
                  <img src="https://upload.wikimedia.org/wikipedia/fr/7/72/Logo_GIE-CB.jpg" width="100%">
                </div>
              </div>
            </b-tab>
          </b-tabs>


          <div slot="modal-footer">
            <div class="row">
                <h6>Total : {{ this.total }} €</h6>
                <b-button variant="success" @click="command()">
                Valider
                </b-button>
            </div>
          </div>

        </b-modal>
      </div>


    </b-form>
  </div>
</template>

<script>

export default {
  data() {
    this.total = 0;
    this.basket_product = JSON.parse(this.$cookie.get('basket_product'));
    this.basket_menu = JSON.parse(this.$cookie.get('basket_menu'));
    return {
    }
  },
  methods: {
    cancel_panier() {
      this.$cookie.delete('basket_product', {path: ''});
      this.$cookie.delete('basket_menu', {path: ''});
      document.getElementById("basketCount").innerHTML = 0;
      location.reload();
    },

    command(){

      this.$http.post(this.$app_api_uri + '/commands', {
        _delivererId: 1,
        _restaurantId: this.$cookie.get('basket_restaurantId'),
        _clientId: this.$cookie.get('userId'),
        price: this.total,
        _menuId: this.basket_menu,
        _productId: this.basket_product
          },{
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token'),
          }
      }
      ).then(response => {
        console.log(response)
        this.$cookie.set('basket_product','');
        this.$cookie.set('basket_menu','');
        window.location = "/orderedhistory";
      }).catch(error => {
        console.log(error);
        window.alert(error);
      });
    },
  },
  beforeMount() {

    for(let i = 0; i < this.basket_menu.length; i++){
      this.total = this.basket_menu[i].price + this.total;
    }
    for(let i = 0; i < this.basket_product.length; i++){
      this.total = this.basket_product[i].price + this.total;
      console.log(this.total);
    }
  }
}
</script>