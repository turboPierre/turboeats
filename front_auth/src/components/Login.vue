<template>
  <div class='mt-5'>
    <h3><strong>Content de vous revoir !</strong></h3>
    <br>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Mot de passe:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" placeholder="Mot de passe" required></b-form-input>
      </b-form-group>
      <br>
      <b-button class="mt-3 btn-success" type="submit" variant="primary"><strong>Se connecter</strong></b-button>
      <br><br>
      <p>Vous êtes nouveau ?<router-link style="color:#5FB709" to="/register"> Créer votre compte utilisateur !</router-link></p>
      <hr>
      <p>Vous êtes livreur ?<router-link style="color:#5FB709" to="/deliverer_register"> Créer votre compte livreur !</router-link></p>
      <p>Vous êtes restaurateur ?<router-link style="color:#5FB709" to="/restaurant_register"> Créer votre compte restaurant !</router-link></p>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        this.$http.post(
                this.$auth_api_uri + '/users/login',
                {
                  email: this.form.email,
                  password: this.form.password
                }
        ).then(response => {
                  localStorage.setItem('access_token', response.data.token);
                  this.$router.push({ name: "menu"});
                  location.reload();
        }).catch(error => {
                  console.log(error);
                  window.alert("Identifiants incorrects.");
        });
        //Acceder au token : localStorage.getItem('access_token');
        event.preventDefault();
      },
    }
  }
</script>