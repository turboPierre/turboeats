<template>
  <div class='m-5'>
<!--    <div class="row">-->
<!--      <h3><strong>Information sur les commandes :</strong></h3>-->
<!--      <h5>Nombre total de commandes : {{ total }}</h5>-->
<!--      <h5>Bénéfice total des restaurants : {{ total_argent }}</h5>-->
<!--    </div>-->


    <b-tabs fill>
      <b-tab title="Liste utilisateurs" active>
        <div class="row">
          <b-table striped hover :items="listUsers"></b-table>
        </div>
      </b-tab>
      <b-tab title="Liste restaurants">
        <div class="row">
          <b-table striped hover :items="listRestaurants"></b-table>
        </div>
      </b-tab>
    </b-tabs>




  </div>
</template>

<script>

  export default {
    data() {

      return {
        total: 0,
        total_argent: 0,
        listUsers: null,
        listRestaurants: null,
      }
    },
    mounted() {
      this.$http.get(this.$api_uri + '/commands', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => {
        this.total = result.data.length;

        for(let i; i < result.data.length; i++){
          this.total_argent = result.data[i].price + this.total_argent;
        }

      }).catch(error => {
        console.log(error);
      });


      this.$http.get(this.$api_uri + '/users', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => {
        this.listUsers = result.data;
        console.log(this.listUsers);
      }).catch(error => {
        console.log(error);
      });



      this.$http.get(this.$api_uri + '/restaurants', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((result) => {
        this.listRestaurants = result.data;
      }).catch(error => {
        console.log(error);
      });






    },
  }

</script>