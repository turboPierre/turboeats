<template>
    <div class='container mt-5'>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <h3><strong>Créez votre restaurant !</strong></h3><br>
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
              <b-form-group class="mt-3" id="input-group-2" label="Image (lien) :" label-for="restaurant_picture">
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
              <b-form-group class="mt-3" id="input-group-2" label="Numéro de téléphone :" label-for="restaurant_phone">
                <b-form-input
                        id="restaurant_phone"
                        v-model="form.restaurant_phone"
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
            <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none"><strong>Enregistrer le restaurant</strong></b-button>
        </b-form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    //RESTAURANT
                    restaurant_name: '',
                    restaurant_description: '',
                    restaurant_picture: '',
                    restaurant_address: '',
                    restaurant_phone: '',
                    open_hour: '',
                    close_hour: '',
                    open_days: '',
                },
                show: true
            }
        },
        methods: {
            onSubmit(event) {
                //POST for RESTAURANT informations
                this.$http.post(
                        this.$app_api_uri + '/restaurants/',
                        {
                          name: this.form.restaurant_name,
                          describe: this.form.restaurant_description,
                          picture: this.form.restaurant_picture,
                          address: this.form.restaurant_address,
                          phone: this.form.restaurant_phone,
                          open_hour: this.form.open_hour,
                          close_hour: this.form.close_hour,
                          open_days: this.form.open_days,
                        }
                ).then(response => {
                  console.log(response);
                  window.alert("Compte restaurant créé.");
                  setTimeout(() => {
                    this.$router.push({ name: "login"});
                    location.reload();
                  }, 1000);
                }).catch(error => {
                  console.log(error);
                    //TODO Gerer l'erreur en dessous
                  window.alert("Le restaurant n'as pas pu être créé car vous possèdez déjà un restaurant.");
                });
                event.preventDefault();
            },
        }
    }
</script>