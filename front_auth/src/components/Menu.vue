<template>
  <div class='container mt-5'>
<h1 v-if="users">OK</h1>
    <div>

      <ul id="example-1">
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>

    </div>


<!--    <div>-->
<!--      <b-card title="Nom du restaurant" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" style="max-width: 20rem;" class="mb-2">-->
<!--        <b-card-text>-->
<!--          texte du restaurant-->
<!--        </b-card-text>-->
<!---->
<!--        <b-button href="#" variant="primary">Go</b-button>-->
<!--      </b-card>-->
<!--    </div>-->



  </div>
</template>

<script>
  export default {
    data() {

      this.$http.get(this.$app_api_uri + '/restaurants', {
              headers: {
                  'Authorization': 'Bearer ' + localStorage.getItem('access_token')
              }
            }).then((result) => {
            this.users = result.data
          }).catch(error => {
                console.log(error);
                this.$router.push({ name: "login"});
      });

      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
    }
  }

</script>