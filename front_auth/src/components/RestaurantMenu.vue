<template>
  <div class='m-5'>
<div class="row">
  <h1>
    Modifiez votre restaurant !
  </h1>
</div>




  </div>
</template>

<script>

  export default {
    data() {
      return {
          restaurant: null,
          listProducts: null,
          listMenus: null,
      }
    },
    mounted() {

        var idrestaurant = 0;
        //requete pour info restauran
        this.$http.get(this.$app_api_uri + '/restaurants/'+ idrestaurant, {
            headers: {
                'Authorization': 'Bearer ' + this.$cookie.get('access_token')
            }
        }).then((result) => { this.restaurant = result.data; console.log(result)}).catch(error => {
            console.log(error);
        });

        //TODO Faire requetes
        //requete pour liste des produits
        this.$http.get(this.$app_api_uri + '/products')
            .then((result) => { this.listProducts = result.data; console.log(result)})
            .catch(error => {console.log(error);});

        //requete pour liste des menus
        this.$http.get(this.$app_api_uri + '/menus')
            .then((result) => { this.listMenus = result.data; console.log(result)})
            .catch(error => {console.log(error);});


    }
  }

</script>