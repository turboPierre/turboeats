<template>
  <div class='m-5'>
<div class="row">
<!--  <h1>-->
<!--    Liste des restaurants-->
<!--  </h1>-->
</div>


    <div class="row mt-3">
    <div class="col-sm-3" v-for="command in command.data" :key="command.id">
      <router-link :to="{ name: 'Commande', params: { id: command._id }}" style="color: #2C3E50; text-decoration: none">
        <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 30rem;" class="mb-2">
          <b-card-title>{{ command.name }}</b-card-title>
          <b-card-text>{{ command._restaurantId }}</b-card-text>
        </b-card>
      </router-link>
    </div>
    </div>



  </div>
</template>

<script>

  export default {
    data() {

      return {
        command: null
      }
    },
    mounted() {

      this.$http.get(this.$api_uri + '/command',).then((result) => { this.command = result;console.log(result)}).catch(error => {
      console.log(error);
      });

    }
  }

</script>