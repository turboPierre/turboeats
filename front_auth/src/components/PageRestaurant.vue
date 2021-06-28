<template>
  <div class='container'>

    {{restaurant.name}}

  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    mounted() {

      this.$http.get(this.$app_api_uri + '/restaurants'+this.id, {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('access_token')
        }
      }).then((result) => { this.restaurant = result}).catch(error => {
        console.log(error);
        this.$router.push({ name: "login"});
      });



    }
  }
</script>