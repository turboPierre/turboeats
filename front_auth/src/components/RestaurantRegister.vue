<template>
  <div class='container mt-5'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3><strong>Créez votre compte restaurant !</strong></h3><br>
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
      <br><br>
      <h3><strong>Informations restaurant</strong></h3><br>
      <b-form-group class="mt-3" id="input-group-2" label="Nom:" label-for="restaurant_name">
        <b-form-input
                id="restaurant_name"
                v-model="form.restaurant_name"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Description:" label-for="restaurant_description">
        <b-form-input
                id="restaurant_description"
                v-model="form.restaurant_description"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Image:" label-for="restaurant_picture">
        <b-form-input
                id="restaurant_picture"
                v-model="form.restaurant_picture"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Adresse:" label-for="restaurant_address">
        <b-form-input
                id="restaurant_address"
                v-model="form.restaurant_address"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Horraire d'ouverture:" label-for="open_hour">
        <b-form-input
                id="open_hour"
                v-model="form.open_hour"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Horraire de fermeture:" label-for="close_hour">
        <b-form-input
                id="close_hour"
                v-model="form.close_hour"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
        <b-form-group class="mt-3" id="input-group-2" label="Jours d'ouverture:" label-for="open_days">
          <b-form-input
                  id="open_days"
                  v-model="form.open_days"
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
          restaurant_name: '',
          restaurant_description: '',
          restaurant_picture: '',
          restaurant_address: '',
          open_hour: '',
          close_hour: '',
          open_days: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        if(this.form.password1 !== this.form.password2){
          window.alert("Les mots de passes ne correspondent pas.")
        } else{
          //POST For USER Restaurant
          this.$http.post(
                  this.$auth_api_uri + '/users/signup',
                  {
                    firstName: this.form.firstname,
                    lastName: this.form.lastname,
                    email: this.form.email,
                    phone: this.form.phone,
                    password: this.form.password1,
                    address: this.form.address,
                    role: "restaurant",
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

          //POST for RESTAURANT informations
          this.$http.post(
                  this.$app_api_uri + '/users/signup',
                  {
                    firstName: this.form.firstname,
                    lastName: this.form.lastname,
                    email: this.form.email,
                    phone: this.form.phone,
                    password: this.form.password1,
                    address: this.form.address,
                    role: "restaurant",
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