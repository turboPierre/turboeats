<template>
  <div class='container mt-5'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3><strong>Créer votre compte client !</strong></h3><br>
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

      <br>
      <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none"><strong>S'enregistrer</strong></b-button>
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
          lastname: '',
          firstname: '',
          phone: '',
          address: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        if(this.form.password1 !== this.form.password2){
          window.alert("Les mots de passes ne correspondent pas.")
        } else{
          this.$http.post(
                  this.$auth_api_uri + '/users/signup',
                  {
                    firstName: this.form.firstname,
                    lastName: this.form.lastname,
                    email: this.form.email,
                    phone: this.form.phone,
                    password: this.form.password1,
                    address: this.form.address,
                    role: "client",
                  }
          ).then(response => {
            console.log(response);
            window.alert("Compte créé.");
            setTimeout(() => {
              this.$router.push({ name: "login"});
              location.reload();
            }, 1000);
          }).catch(error => {
            console.log(error);
            window.alert("ERROR");
          });
        }
        event.preventDefault();
      },
    }
  }
</script>