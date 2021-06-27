<template>
  <div class='container mt-5'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h4><strong>Content de vous revoir !</strong></h4>
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="email" v-model="form.email" type="email" placeholder="Email" required></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Mot de passe:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" placeholder="Mot de passe" required></b-form-input>
      </b-form-group>
      <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none"><strong>Se connecter</strong></b-button>
      <p>Vous êtes nouveau ?<router-link style="color:#5FB709" to="/register">créer votre compte</router-link></p>
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
        const request = this.$auth_api_uri + '/users/login';

        const bodyParameters = {
          email: this.form.email,
          password: this.form.password
        };

        this.$http.post(
                request,
                bodyParameters
        ).then(console.log).catch(console.log);

        event.preventDefault();
      },
    }
  }
</script>