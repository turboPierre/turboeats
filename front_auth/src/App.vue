<template>
  <div id="app">
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">

<!--        TODO v-if role : RESTAURANT route : restaurantMenu, restaurantAdd, DELIVERER route : delivererMenu, delivererCommand-->

        <router-link class="navbar-brand float-left" to="/menu"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
        <ul class="nav navbar-nav flex-row float-right">
            <div v-if="logged">
              <router-link class=" btn btn-success" to="/basket">
                &#128722;
              </router-link>
              <b-dropdown id="user-dropdown" text="Mon compte" class="m-md-2" variant="success">
                <template #button-content>
                  <span class="sr-only" id="userButton"></span>
                </template>
                <b-dropdown-item><router-link class="dropItem" to="/myaccount">Mon compte</router-link></b-dropdown-item>
                <b-dropdown-item><span class="dropItem">Mes commandes</span></b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item v-on:click="disconnect" ><span class="redDropItem">Se déconnecter</span></b-dropdown-item>
              </b-dropdown>
            </div>
            <div v-else>
              <li class="nav-item">
                  <router-link class="btn btn-success" to="/login">Se connecter</router-link>
              </li>
            </div>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<!--<router-link to="/menu"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>-->

<script>

export default {
  data() {
    if (localStorage.getItem('email') != null && localStorage.getItem('access_token') != null ) {
      return {
        logged: true
      }
    } else {
      return {
        logged: false
      }
    }
  },
  methods: {
    disconnect : function (event) {
      // TODO Revoke Token
      localStorage.removeItem('access_token');
      location.reload();
      console.log(event);
    }
  }, mounted: function () {
    this.$http.get(this.$auth_api_uri + '/users/myInfos', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    }).then((response) => {
      var data = response.data;
      document.getElementById('userButton').innerHTML += data.firstName;
    }).catch(error => {
      console.log(error);
    });
  }
}

</script>

<style>
  body {
    display: flex;
    font-weight: 400;
    padding-top: 60px !important;
  }
  body,
  html,
  .App,
  .vertical-center {
    width: 100%;
    height: 100%;
  }
  #app{
    font-family: Gill Sans, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin:auto;
  }

  .container{
    max-width:inherit !important;
  }

  .btn-success{
    background-color: #5FB709 !important;
    border: none !important;
    font-weight: bold !important;
    color : white !important;
  }

  .vertical-center {
    display: flex;
    text-align: left;
    justify-content: center;
    flex-direction: column;
  }

  .inner-block {
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 20px 50px 40px 50px;
    border-radius: 15px;
    transition: all .3s;
  }

  .vertical-center {
    border-color: #2554FF;
    box-shadow: none;
  }

  label {
    font-weight: 500;
  }

  .dropItem{
    color: #5FB709 !important;
    font-weight: bold !important;
    text-decoration: none;
  }

  .redDropItem{
    color: red !important;
    font-weight: bold !important;
    text-decoration: none;
  }

</style>
