<template>
  <div class='container'>
    <b-form>
      <div class="row">
        <h4><strong>Votre panier</strong></h4>
      </div>
<!--      menus-->
      <div class="row" v-for="menu in this.basket_menu" :key="menu._id">
        <div class="col-sm-6">
          <strong>{{ menu.name }}</strong>
        </div>
        <div class="col-sm-6">
          {{ menu.price }} €
        </div>
      </div>
<!--      produits-->
      <div class="row" v-for="product in this.basket_product" :key="product._id">
        <div class="col-sm-6">
          <strong>{{ product.name }}</strong>
        </div>
        <div class="col-6">
          {{ product.price }} €
        </div>
      </div>
      <div class="row">
        <strong>Total €</strong>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-6">
          <b-button v-b-modal.modal-cancel class="btn btn-danger">Annuler</b-button>
        </div>
        <div class="col-sm-6">
          <b-button v-b-modal.modal-pay class="btn btn-success">Commander</b-button>
        </div>
      </div>


      <div>

        <b-modal id="modal-cancel" centered title="vider le panier">
          <p class="my-4">Voulez-vous vider votre panier ?</p>
          <template #modal-footer="{ cancel_panier }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <button type="button" class="btn btn-danger close" aria-label="close">
              annuler
            </button>
            <b-button variant="success" @click="cancel_panier">
              Valider
            </b-button>

          </template>
        </b-modal>



        <b-modal id="modal-pay" size="lg" centered title="Paiement">

          <template #modal-footer="{ cancel_payment, payment }">
            <!-- Emulate built in modal footer ok and cancel button actions -->
            <b-button variant="danger" @click="cancel_payment()">
              annuler
            </b-button>
            <b-button variant="success" @click="payment()">
              Valider
            </b-button>

          </template>

        </b-modal>
      </div>


    </b-form>
  </div>
</template>

<script>
export default {
  data() {

    this.basket_product = JSON.parse(this.$cookie.get('basket_product'));
    this.basket_menu = JSON.parse(this.$cookie.get('basket_menu'));
    console.log(this.basket_menu = JSON.parse(this.$cookie.get('basket_menu')));

    return {
    }
  },
  methods: {
    cancel_panier() {
      this.$cookie.remove('basket_product', {path: ''});
      this.$cookie.remove('basket_menu', {path: ''});
    },

    cancel_payment(){
    },

    payment(){
      console.log('test')
    },
  }
}
</script>