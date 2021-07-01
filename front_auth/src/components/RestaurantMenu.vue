<template>
  <div class='container mt-5'>
    <h3 style="text-align: center"><strong>Modifier votre restaurant</strong></h3>
    <b-tabs fill>
      <b-tab title="Informations" active>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group class="mt-3" id="input-group-2" label="Nom: " label-for="restaurant_name">
        <b-form-input
                id="restaurant_name"
                v-model="form.restaurant_name"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Description: " label-for="restaurant_description">
        <b-form-input
                id="restaurant_description"
                v-model="form.restaurant_description"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Image (lien): " label-for="restaurant_picture">
        <b-form-input
                id="restaurant_picture"
                v-model="form.restaurant_picture"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Adresse: " label-for="restaurant_address">
        <b-form-input
                id="restaurant_address"
                v-model="form.restaurant_address"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Ville: " label-for="restaurant_city">
        <b-form-input
                id="restaurant_city"
                v-model="form.restaurant_city"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Numéro de téléphone:" label-for="restaurant_phone">
        <b-form-input
                id="restaurant_phone"
                v-model="form.restaurant_phone"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Horraire d'ouverture: (heure:minutes)" label-for="open_hour">
        <b-form-input
                id="open_hour"
                v-model="form.open_hour"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" id="input-group-2" label="Horraire de fermeture: (heure:minutes)" label-for="close_hour">
        <b-form-input
                id="close_hour"
                v-model="form.close_hour"
                type="text"
                required
        ></b-form-input>
      </b-form-group>
      <br>
      <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none;"><strong>Modifier le restaurant</strong></b-button>
      <br>
      <b-button class="mt-3" type="cancel" variant="primary" style="background-color: #b50000; border: none;"><strong>Supprimer le restaurant</strong></b-button>
    </b-form>
      </b-tab>
      <b-tab title="Produits">
          <div class="mt-3" v-for="product in listProducts" :key="product.id">
            <b-button variant="primary" @click="deleteProduct(product)" style="background-color: #b50000; border: none; float:right"><strong>X</strong></b-button>
            <h5>{{product.name }}</h5>
            <p>{{product.describe}}</p>
            <h5><em>{{product.price}} €</em></h5>
            <hr>
          </div>
        <b-button v-b-modal.add-product class="mt-3" variant="primary" style="background-color: #5FB709; border: none;"><strong>Ajouter un produit</strong></b-button>
      </b-tab>
      <b-tab title="Menus">
        <div class="mt-3" v-for="menu in listMenus" :key="menu.id">
          <b-button variant="primary" @click="deleteMenu(menu)" style="background-color: #b50000; border: none; float:right"><strong>X</strong></b-button>
          <h5>{{menu.name }}</h5>
          <p>{{menu.describe}}</p>
          <h5><em>{{menu.price}} €</em></h5>
          <hr>
        </div>
        <b-button v-b-modal.add-menu class="mt-3" variant="primary" style="background-color: #5FB709; border: none;"><strong>Ajouter un menu</strong></b-button>
      </b-tab>
      <b-tab title="Liste des commandes">
        <div class="mt-3" v-for="menu in listMenus" :key="menu.id">

        </div>
      </b-tab>
    </b-tabs>

    <b-modal id="add-product" size="lg" centered title="Ajouter un produit">
      test
    </b-modal>

    <b-modal id="add-menu" size="lg" centered title="Ajouter un menu">
      test
    </b-modal>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        restaurant: null,
        listProducts:null,
        listMenus: null,
        form: {
        },
        show: true
      }
    }
    ,mounted() {
      this.$http.get(this.$api_uri + '/restaurants/userRestaurant', {
        headers: {
          'Authorization': 'Bearer ' + this.$cookie.get('access_token')
        }
      }).then((response) => {
        var data = response.data;
          console.log(data._id);
          document.getElementById('restaurant_name').setAttribute("value", data.name);
          document.getElementById('restaurant_description').setAttribute("value", data.describe);
          document.getElementById('restaurant_picture').setAttribute("value", data.picture);
          document.getElementById('restaurant_address').setAttribute("value", data.address);
          document.getElementById('restaurant_city').setAttribute("value", data.city);
          document.getElementById('restaurant_phone').setAttribute("value", data.phone);
          document.getElementById('open_hour').setAttribute("value", data.open_hour);
          document.getElementById('close_hour').setAttribute("value", data.close_hour);
        }).catch(error => {
          console.log(error);
        });

        //requete pour info restaurant
        this.$http.get(this.$api_uri + '/restaurants/userRestaurant', {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((result) => {
          if (result.data === "") {
            this.$router.push({name: "restaurantAdd"});
          } else {
            this.restaurant = result.data;
            //requete pour liste des produits
            this.$http.get(this.$api_uri + '/products/restaurant=' + this.restaurant._id)
                    .then((result) => { this.listProducts = result.data; console.log(result)})
                    .catch(error => {console.log(error);});

            // requete pour liste des menus
            this.$http.get(this.$api_uri + '/menus/restaurant=' + this.restaurant._id)
                    .then((result) => { this.listMenus = result.data; console.log(result)})
                    .catch(error => {console.log(error);});
          }
          console.log(result);
        }).catch(error => {
          if (error.response.status === 404) {
            this.$router.push({name: "restaurantAdd"});
          }
          if (error.response.status === 401 || error.response.status === 500) {
            this.$router.push({name: "login"});
          }
        });

    },

    methods: {
      onSubmit(event) {
        this.$http.put(this.$api_uri + '/restaurants/' + this.restaurant._id, {
          name: this.form.restaurant_name,
          describe: this.form.restaurant_description,
          picture: this.form.restaurant_picture,
          address: this.form.restaurant_address,
          city: this.form.restaurant_city,
          phone: this.form.restaurant_phone,
          open_hour: this.form.open_hour,
          close_hour: this.form.close_hour,
        }, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          console.log(response);
          window.alert("Restaurant modifié.");
          location.reload();
        }).catch(error => {
          console.log(error);
          window.alert("Erreur : le restaurant n'a pas pu être modifié.");
        });
        event.preventDefault();
      },
      deleteProduct(product){
        let productId = product._id;
        this.listProducts.splice(this.listProducts.indexOf(product), 1);
        this.$http.delete(this.$api_uri + '/products/' + productId, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          this.$bvToast.toast(product.name, {
            title: `Produit supprimé`,
            autoHideDelay: 2000,
            appendToast: false
          })
        }).catch(error => {
          window.alert("Erreur : impossible de supprimer le produit.");
          console.log(error);
        });
      },
      deleteMenu(menu){
        let menuId = menu._id;
        this.listMenus.splice(this.listMenus.indexOf(menu), 1);
        this.$http.delete(this.$api_uri + '/menus/' + menuId, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          this.$bvToast.toast(menu.name, {
            title: `Menu supprimé`,
            autoHideDelay: 2000,
            appendToast: false
          })
        }).catch(error => {
          window.alert("Erreur : impossible de supprimer le menu.");
          console.log(error);
        });
      },
    },


  }

</script>