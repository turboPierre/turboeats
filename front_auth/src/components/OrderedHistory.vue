<template>
  <div class='mt-5'>
    <div class="row">
      <div v-for="command in commands" :key="command._id">
        <h1>Commande {{ command._id }}</h1>
        <h5>Composition de la commande :</h5>
        <div v-for="product in command._productId" :key="product._id">
          {{ product }}<br>
        </div>
        <div v-for="menu in command._menuId" :key="menu._id">
          {{ menu }}<br>
        </div>
        <h4>Total : {{ command.price }} €</h4>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          commands: null
        }
    },
    mounted(){
      //récupération de la liste des commandes
      this.$http.get(this.$api_uri + '/commands/userCommands', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => { this.commands = result.data; console.log(result.data) }).catch(error => {
        console.log(error);
      });


    },
    methods: {

    }
  }
</script>