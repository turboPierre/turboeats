<template>
  <div id="app">
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/menu"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
        <ul class="nav navbar-nav flex-row float-right">
            <div v-if="logged">
              <b-dropdown id="user-dropdown" text="Mon compte" class="m-md-2" variant="success">
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
      localStorage.removeItem('email');
      localStorage.removeItem('access_token');
      location.reload();
      console.log(event);
    }
  }
}

</script>

<style>
  body {
    display: flex;
    font-weight: 400;
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
    padding: 20px 55px 45px 55px;
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
