<template>
  <div id="app">
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <router-link class="navbar-brand float-left" to="/menu"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn turbo-btn" to="/login">Se connecter</router-link>
          </li>
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
  data(){
    return{
    }
  }
}

</script>

<style>
  body {
    min-height: 100vh;
    display: flex;
    font-weight: 400;
  }
  body,
  html,
  .App,
  .vertical-center {
    margin-top: 35px;
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

  .turbo-btn{
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
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
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

</style>
