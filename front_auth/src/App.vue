<template>

  <div id="app" style="overflow-x:hidden">
    <router-link to="/menu"><img width="200px" alt="Vue logo" src="./assets/logo.svg"></router-link>
    <router-view></router-view>
  </div>

</template>

<script>

export default { 
  data(){
    return{
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
