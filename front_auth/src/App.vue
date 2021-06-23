<template>
  <div id="app">
    <img width="30%" alt="Vue logo" src="./assets/logo.svg">
    <div>
      <router-link to="/login">login</router-link>
      <router-link to="/register">register</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default { }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
