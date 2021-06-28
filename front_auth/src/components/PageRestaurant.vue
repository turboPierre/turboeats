<template>
  <div class='container'>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        restaurant: null
      }
    },
    mounted() {
      this.$http.get('http://localhost:8081/restaurants/'+this.id).then(response => (this.restaurants = response))
    }
  }
</script>