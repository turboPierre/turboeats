<template>
  <div class='container mt-5'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3><strong id="title"></strong></h3><br>
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
      <hr>
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
      <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none;"><strong>Modifier les infos</strong></b-button>
      <br>
      <b-button class="mt-3" type="cancel" variant="primary" style="background-color: #b50000; border: none;"><strong>Supprimer le compte</strong></b-button>

    </b-form>

    <!--    <b-card class="mt-3" header="Form Data Result">-->
    <!--      <pre class="m-0">{{ form }}</pre>-->
    <!--    </b-card>-->

  </div>
</template>

<script>
  export default {
    data() {

      return {
        form: {
          email: '',
          password1: '',
          password2: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.form))
      },
    },mounted() {
      this.$http.get(this.$auth_api_uri + '/users/myInfos', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((response) => {
        var data = response.data;
        document.getElementById('lastname').setAttribute("value",data.lastName);
        document.getElementById('firstname').setAttribute("value",data.firstName);
        document.getElementById('email').setAttribute("value",data.email);
        document.getElementById('phone').setAttribute("value",data.phone);
        document.getElementById('address').setAttribute("value",data.address);
        document.getElementById('city').setAttribute("value",data.city);
        document.getElementById('sponsorId').innerHTML += '<p>Code de parrainage : <b>' + data.id + '</b></p>';
        document.getElementById('title').innerHTML += 'Mon Compte ' + data.role;
      }).catch(error => {
        console.log(error);
        //TODO Erreur ?
        // this.$router.push({ name: "login"});
        // location.reload();
      });
    }
  }
</script>
