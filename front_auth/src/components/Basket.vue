<template>
  <div class='container'>
    <b-form>
      <h4><strong>Votre Panier</strong></h4>
      <b-form-group
          id="input-group-1"
          label="User Name"
          label-for="input-1"
      ></b-form-group>
      <div class="row" v-for="product in this.basket_product" :key="product">
        {{ product.name }} {{ product.price }} €
      </div>

    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    this.basket_product = JSON.parse(localStorage.getItem('basket_product'));
    return {
    }
  },
  methods: {

  }
}
</script>