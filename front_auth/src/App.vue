<template>
  <div v-if="loged" id="app" style="overflow-x:hidden; margin-top: 5px">
    <div class="nav">
      <router-link to="/login"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
    </div>

  </div>

  <div v-else id="app" style="overflow-x:hidden">
    <router-link to="/login"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
      <div>
        <strong>Loged</strong>
      </div>
    <router-link to="/myaccount" tag="button" class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none"><strong>Acceuil</strong></router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default { 
  data(){
    return{
      // Value for change header
      loged : false
    }
  }
}

</script>

<style>
#app {
  font-family: Gill Sans, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  border-radius: 0 !important;
}

.button {
  border : none;
}


</style>
