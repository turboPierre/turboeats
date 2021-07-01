<template>
  <div class='m-5'>
<div class="row">
<!--  <h1>-->
<!--    Liste des restaurants-->
<!--  </h1>-->
</div>

    <!-- afficher si le deliverer a une commande active -->
    <div v-if="waitCommands.data.length != 0 ">
      <div v-for="command in waitCommands.data" :key="command._id">
          Livraison en cours :
        Numéro de commande : {{ command._id }}
        Adresse de livraison :
      </div>
    </div>

    <!-- afficher si le deliverer n'a pas de commande active -->
    <div v-else>
      <h1>Liste des commandes en attente :</h1>
      <div class=" col-sm-3" v-for="command in commands.data" :key="command._id">
        <div class="case" v-if="command._delivererId === -1" @click="valid(command._id)">
          <b-card tag="article" style="max-width: 30rem;" class="mb-2">
            <b-card-title><h6>Numéro de commande : {{ command._id }}</h6></b-card-title>
            <b-card-text>
              <div v-for="restaurant in restaurants.data" :key="restaurant._id">
                <div v-if="restaurant._id === command._restaurantId">
                  Nom du restaurant : {{ restaurant.name }}
                  <hr>
                  Adresse : {{ restaurant.address }}, {{ restaurant.city }}
                </div>
              </div>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>



  </div>
</template>

<script>

  export default {
    data() {

      return {
        commands: null,
        waitCommands: null,
        restaurants: null,
        active: 0,
        userId: this.$cookie.get('userId')
      }
    },
    mounted() {

      //récupération de la liste des commandes
      this.$http.get(this.$api_uri + '/commands', {
          headers: {
              'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
      }).then((result) => { this.commands = result }).catch(error => {
      console.log(error);
      });

      //récupération de la liste des restaurants
      this.$http.get(this.$api_uri + '/restaurants',).then((result) => { this.restaurants = result }).catch(error => {
        console.log(error);
      });

      //recuperation de la liste des commandes en cours de livraison du livreur
      this.$http.get(this.$api_uri + '/commands/delivererCommand', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => { this.waitCommands = result;}).catch(error => {
        console.log(error);
      });

      console.log(this.waitCommands);


    },
    methods:{
      valid(id){
        this.$http.put(this.$api_uri + '/commands/'+ id, {
              _delivererId: this.$cookie.get('userId')
            },{
              headers: {
                'Authorization': 'Bearer ' + this.$cookie.get('access_token'),
              }
            }
        ).then(response => {
          console.log(response);
          //this.$bvToast.toast('Livraison', {
          // title: `La livraison a été prise en charge`,
          //autoHideDelay: 2000,
          //appendToast: false
          //})
          location.reload();

        }).catch(error => {
          console.log(error);
          window.alert(error);
        });

      }
    }
  }

</script>