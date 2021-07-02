<template>
  <div class='container'>
    <div class='row'>
      <b-embed
              type="iframe"
              :src="APILink"
              allowfullscreen
              style=" padding-top: 70px;
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 100%;"
      ></b-embed>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        APILink: this.$api_uri + "/docs",
      }
    }
  }
</script>