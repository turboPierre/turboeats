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
      <b-tab title="Commandes">

        <b-tabs fill>

          <b-tab title="Attente">

            <div class="mt-3" v-for="command in commands.data" :key="command._id">
              <div v-if="command.valid === false && command.delivered === false">
                <h3><strong>Commande N°{{ command._id }}</strong></h3>
                <h5>Composition de la commande :</h5>
                <div v-for="product in command._productId" :key="product._id">
                  - {{ product }}<br>
                </div>
                <div v-for="menu in command._menuId" :key="menu._id">
                  - {{ menu }}<br>
                </div>
                <h4>Total : {{ command.price }} €</h4>
                <b-button variant="success" @click="validation(command)">Valider</b-button>
                <hr>
              </div>
            </div>

          </b-tab>

          <b-tab title="En livraison">

            <div class="mt-3" v-for="command in commands_livraison.data" :key="command._id">
              <div v-if="command.valid === true && command.delivered === false">
                <h3><strong>Commande N°{{ command._id }}</strong></h3>
                <h5>Composition de la commande :</h5>
                <div v-for="product in command._productId" :key="product._id">
                  - {{ product }}<br>
                </div>
                <div v-for="menu in command._menuId" :key="menu._id">
                  - {{ menu }}<br>
                </div>
                <h4>Total : {{ command.price }} €</h4>
                <hr>
              </div>
            </div>

          </b-tab>

          <b-tab title="Historique">

            <div class="mt-3" v-for="command in commands.data" :key="command._id">
              <div v-if="command.valid === true && command.delivered === true">
                <h3><strong>Commande N°{{ command._id }}</strong></h3>
                <h5>Composition de la commande :</h5>
                <div v-for="product in command._productId" :key="product._id">
                  - {{ product }}<br>
                </div>
                <div v-for="menu in command._menuId" :key="menu._id">
                  - {{ menu }}<br>
                </div>
                <h4>Total : {{ command.price }} €</h4>
                <hr>
              </div>
            </div>

          </b-tab>

        </b-tabs>

      </b-tab>
    </b-tabs>

    <b-modal id="add-product" size="sm" centered title="Ajouter un produit">
      <div class="row">
        <form ref="form">
          <b-form-group class="my-2" label="Nom :" label-for="pname" invalid-feedback="Le champ est vide.">
            <b-form-input id="pname" v-model="pform.name" required></b-form-input>
          </b-form-group>
          <b-form-group class="my-2" label="Description :" label-for="pdescription-input" invalid-feedback="Le champ est vide.">
            <b-form-input id="pdescription-input" v-model="pform.describe" required></b-form-input>
          </b-form-group>
          <b-form-group class="my-2" label="Prix : (en €)" label-for="pprice-input" invalid-feedback="Le champ est vide.">
            <b-form-input id="pprice-input" v-model="pform.price" required></b-form-input>
          </b-form-group>
        </form>
      </div>
      <div slot="modal-footer">
          <b-button variant="success" @click="addProduct()">Ajouter ce produit</b-button>
      </div>
    </b-modal>

    <b-modal id="add-menu" size="sm" centered title="Ajouter un menu">
      <div class="row">
        <form ref="form">
          <b-form-group class="my-2" label="Nom :" label-for="mname" invalid-feedback="Le champ est vide.">
            <b-form-input id="mname" v-model="mform.name" required></b-form-input>
          </b-form-group>
          <b-form-group class="my-2" label="Description :" label-for="mdescription-input" invalid-feedback="Le champ est vide.">
            <b-form-input id="mdescription-input" v-model="mform.describe" required></b-form-input>
          </b-form-group>
          <b-form-group class="my-2" label="Prix : (en €)" label-for="mprice-input" invalid-feedback="Le champ est vide.">
            <b-form-input id="mprice-input" v-model="mform.price" required></b-form-input>
          </b-form-group>
        </form>
      </div>
      <div slot="modal-footer">
        <b-button variant="success" @click="addMenu()">Ajouter ce menu</b-button>
      </div>
    </b-modal>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        commands: null,
        commands_livraison: null,
        restaurant: null,
        listProducts:null,
        listMenus: null,
        form: {
        },
        pform : {

        },
        mform : {

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
          this.form.restaurant_name = data.name;
          this.form.restaurant_description = data.describe;
          this.form.restaurant_picture = data.picture;
          this.form.restaurant_address = data.address;
          this.form.restaurant_city = data.city;
          this.form.restaurant_phone = data.phone;
          this.form.open_hour = data.open_hour;
          this.form.close_hour = data.close_hour;
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

            //requete pour affichage liste des commandes
            this.$http.get(this.$api_uri + '/commands/restaurantCommand/' + this.restaurant._id , {
              headers: {
                'Authorization': 'Bearer ' + this.$cookie.get('access_token')}})
                .then((response) => { this.commands = response; this.commands_livraison = response})
                .catch(error => {console.log(error);});

            //requete pour liste des produits
            this.$http.get(this.$api_uri + '/products/restaurant=' + this.restaurant._id)
                    .then((result) => { this.listProducts = result.data })
                    .catch(error => {console.log(error);});

            // requete pour liste des menus
            this.$http.get(this.$api_uri + '/menus/restaurant=' + this.restaurant._id)
                    .then((result) => { this.listMenus = result.data })
                    .catch(error => {console.log(error);});
          }
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
        this.$http.delete(this.$api_uri + '/products/' + productId, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          this.listProducts.splice(this.listProducts.indexOf(product), 1);
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
      addProduct(){
        let product = {
          name: this.pform.name,
          price: this.pform.price,
          describe: this.pform.describe,
          _restaurantId: this.restaurant._id,
        };
        this.$http.post(this.$api_uri + '/products/',product
        ,{
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          console.log(response);
          this.listProducts.push(product);
          this.$bvToast.toast(this.pform.name, {
            title: `Produit ajouté`,
            autoHideDelay: 2000,
            appendToast: false
          });
          this.$bvModal.hide('add-product');
        }).catch(error => {
          window.alert("Erreur : impossible d'ajouter le produit, veuillez vérifier les champs.");
          console.log(error);
        });
      },
      addMenu(){
        let menu = {
          name: this.mform.name,
          price: this.mform.price,
          describe: this.mform.describe,
          _restaurantId: this.restaurant._id,
        };
        this.$http.post(this.$api_uri + '/menus/',menu
          ,{
            headers: {
              'Authorization': 'Bearer ' + this.$cookie.get('access_token')
            }
          }).then((response) => {
          console.log(response);
          this.listMenus.push(menu);
          this.$bvToast.toast(this.mform.name, {
            title: `Menu ajouté`,
            autoHideDelay: 2000,
            appendToast: false
          });
          this.$bvModal.hide('add-menu');
        }).catch(error => {
          window.alert("Erreur : impossible d'ajouter le menu, veuillez vérifier les champs.");
          console.log(error);
        });
      },
      deleteMenu(menu){
        let menuId = menu._id;
        this.$http.delete(this.$api_uri + '/menus/' + menuId, {
          headers: {
            'Authorization': 'Bearer ' + this.$cookie.get('access_token')
          }
        }).then((response) => {
          this.listMenus.splice(this.listMenus.indexOf(menu), 1);
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
      validation(command) {

        let id = command._id;
        this.commands.data.splice(this.commands.data.indexOf(command), 1);
        console.log(this.commands_livraison.data);
        this.commands_livraison.data.push({ _id: command._id, _productId: command._productId, _menuId: command._menuId, price: command.price });
        console.log(this.commands_livraison.data);

        this.$http.put(this.$api_uri + '/commands/' + id, {
              valid: true
            }, {
              headers: {
                'Authorization': 'Bearer ' + this.$cookie.get('access_token'),
              }
            }
        ).then(response => {
          console.log(response);
          this.$bvToast.toast('Livraison', {
           title: `La livraison a été prise en charge`,
          autoHideDelay: 2000,
          appendToast: false
          })

        }).catch(error => {
          console.log(error);
          window.alert(error);
        });
      }

    },


  }

</script>