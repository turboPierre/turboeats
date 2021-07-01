<template>
  <div class='m-5'>
<div class="row">
<!--  <h1>-->
<!--    Liste des restaurants-->
<!--  </h1>-->
</div>

    <!-- afficher si le deliverer a une commande active -->
    <div v-if="active">
      <div v-for="command in commands.data" :key="command._id">
        <div v-if="command._delivererId == userId">
          Livraison en cours :
          okokok
        </div>
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
        restaurants: null,
        active: 0,
        userId: this.$cookie.get('userId')
      }
    },
    beforeMount() {

      //récupération de la liste des commandes
      this.$http.get(this.$api_uri + '/commands', {
          headers: {
              'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
      }).then((result) => { this.commands = result;console.log(result)}).catch(error => {
      console.log(error);
      });

      //récupération de la liste des restaurants
      this.$http.get(this.$api_uri + '/restaurants',).then((result) => { this.restaurants = result;console.log(result)}).catch(error => {
        console.log(error);
      });


      console.log(this.commands);


      //voir si le deliverer a une commande active
      this.commands.forEach(function(element){
        if(element._delivererId == this.$cookie.get('userId')){
          this.active = 1;
        }
      });

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
          console.log(response)
        }).catch(error => {
          console.log(error);
          window.alert(error);
        });

      }
    }
  }

</script>