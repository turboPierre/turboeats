<template>
  <div class='container'>
    <b-form>
        <h4><strong>Votre Panier</strong></h4>
        <b-form-group
        id="input-group-1"
        label="User Name"
        label-for="input-1"
        ></b-form-group>
<!--      <div class="row" v-for="product in this.basket_product">-->

<!--      </div>-->

<!--        <b-button class="mt-3" type="submit" variant="primary" style="background-color: grey; border: none"><strong>+</strong></b-button>-->
<!--        <b-button class="mt-3" type="submit" variant="primary" style="background-color: grey; border: none"><strong>-</strong></b-button>-->
    </b-form>

  </div>
</template>

<script>
  export default {
    data() {
      this.basket_product = localStorage.getItem('basket_product');
      this.price_product = localStorage.getItem('price_product');


      // this.basket_menu = localStorage.getItem('basket_menu');
      // this.price_menu = localStorage.getItem('price_menu');
// console.log(this.basket_product.length)
      return {
      }
    },
    methods: {

    }
  }
</script>