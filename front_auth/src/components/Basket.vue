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
          <b-button v-b-modal.modal-center class="btn btn-danger">Annuler</b-button>
        </div>
        <div class="col-sm-6">
          <b-button class="btn btn-success">Commander</b-button>
        </div>
      </div>


      <div>

        <b-modal id="modal-center" centered title="vider du panier">
          <p class="my-4">Voulez-vous vider votre panier ?</p>
        </b-modal>
      </div>


    </b-form>
  </div>
</template>

<script>
export default {
  data() {

    this.basket_product = JSON.parse(localStorage.getItem('basket_product'));
    this.basket_menu = JSON.parse(localStorage.getItem('basket_menu'));
    console.log(this.basket_menu = JSON.parse(localStorage.getItem('basket_menu')));

    return {
    }
  },
  methods: {

  }
}
</script>