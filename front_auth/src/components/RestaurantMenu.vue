<template>
  <div class='container mt-5'>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    <h3><strong>Modifiez votre restaurant !</strong></h3><br>
    <b-form-group
            id="input-group-1"
            label="Email :"
            label-for="input-1"
    >
      <b-form-input
              id="email"
              v-model="form.email"
              type="email"
              required
      ></b-form-input>
    </b-form-group>

    <b-form-group class="mt-3" id="input-group-2" label="Mot de passe:" label-for="password1">
      <b-form-input
              id="password1"
              v-model="form.password1"
              type="password"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Confirmer le mot de passe:" label-for="password2">
      <b-form-input
              id="password2"
              v-model="form.password2"
              type="password"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Nom :" label-for="lastname">
      <b-form-input
              id="lastname"
              v-model="form.lastname"
              type="text"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Prenom:" label-for="firstname">
      <b-form-input
              id="firstname"
              v-model="form.firstname"
              type="text"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Numéro de téléphone:" label-for="phone">
      <b-form-input
              id="phone"
              v-model="form.phone"
              type="text"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Adresse:" label-for="address">
      <b-form-input
              id="address"
              v-model="form.address"
              type="text"
              required
      ></b-form-input>
    </b-form-group>
    <b-form-group class="mt-3" id="input-group-2" label="Ville :" label-for="city">
      <b-form-input
              id="city"
              v-model="form.city"
              type="text"
              required
      ></b-form-input>
    </b-form-group>
    <br>
    <div id="sponsorId"></div>
    <br>
    <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none;"><strong>Modifier le restaurant</strong></b-button>
    <br>
    <b-button class="mt-3" type="cancel" variant="primary" style="background-color: #b50000; border: none;"><strong>Supprimer le restaurant</strong></b-button>

  </b-form>
  </div>
</template>

<script>

  export default {
    data() {
      return {

      }
    },
    mounted() {

        //requete pour info restaurant
        this.$http.get(this.$app_api_uri + '/restaurants/userRestaurant', {
            headers: {
                'Authorization': 'Bearer ' + this.$cookie.get('access_token')
            }
        }).then((result) => { this.restaurant = result.data; console.log(result)}).catch(error => {
            if(error.response.status === 404){
              this.$router.push({ name: "restaurantAdd"});
            }
            if(error.response.status === 401 || error.response.status === 500){
                this.$router.push({ name: "login"});
            }
        });

    }
  }

</script>