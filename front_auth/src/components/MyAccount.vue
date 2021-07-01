<template>
  <div class='container mt-5'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h3><strong id="title"></strong></h3><br>
      <b-form-group
              id="input-group-1"
              label="Email :"
              label-for="email">
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
  import bcrypt from 'bcryptjs';

  export default {
    data() {

      return {
        form: {
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        if(this.form.password1 !== this.form.password2){
        window.alert("Les mots de passes ne correspondent pas.")
      } else {
          this.$http.put(this.$api_uri + '/users/updateInfos', {
            firstName: this.form.firstname,
            lastName: this.form.lastname,
            email: this.form.email,
            phone: this.form.phone,
            password: bcrypt.hashSync(this.form.password1,bcrypt.genSaltSync(10)),
            address: this.form.address,
            city: this.form.city,
            role: "client",
          }, {
            headers: {
              'Authorization': 'Bearer ' + this.$cookie.get('access_token')
            }
          }).then((response) => {
            console.log(response);
            window.alert("Compte client modifié.");
            location.reload();
          }).catch(error => {
            console.log(error);
            window.alert("Erreur : le compte client n'a pas pu être modifié.");
          });
        }
        event.preventDefault();
      },
    },mounted() {
      this.$http.get(this.$api_uri + '/users/myInfos', {
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
        this.$router.push({ name: "login"});
        location.reload();
      });
    }
  }
</script>
