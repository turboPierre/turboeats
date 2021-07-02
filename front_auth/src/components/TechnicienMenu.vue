<template>
  <div class='container' style="width: 1700px; height: 800px">

    <b-tabs fill>
      <b-tab title="Metrics controleur de résolution">
        <b-embed
            type="iframe"
            :src="APILink"
            style=" padding-top: 70px;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 800px;"
        ></b-embed>
      </b-tab>
      <b-tab title="auth">

      </b-tab>
      <b-tab title="app">

      </b-tab>
    </b-tabs>


  </div>
</template>

<script>

  export default {
    data() {

      return {
        APILink: "http://localhost:8083/metrics",
      }
    },
    mounted() {

    },
  }

</script>