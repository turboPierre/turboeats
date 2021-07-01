<template>
  <div class='mt-5'>
    <div class="row">
      <div v-for="command in commands" :key="command._id">
        <h3><strong>Commande {{ command._id }}</strong></h3>


        <div v-if="command.delivered === true && command.valid === true">
          <h3 style="color: #5fb709"><em>La commande a été livré</em></h3>
        </div>
        <div v-if="command.valid === false && command. delivered === false">
          <h3 style="color: orange"><em>La commande est en cours de préparation</em></h3>
        </div>
        <div v-if="command.delivered === false && command.valid === true">
          <h3 style="color: orange"><em>La commande est en cours de livraison</em></h3>
        </div>


        <h5>Composition de la commande :</h5>
        <div v-for="product in command._productId" :key="product._id">
          - {{ product }}<br>
        </div>
        <div v-for="menu in command._menuId" :key="menu._id">
          - {{ menu }}<br>
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