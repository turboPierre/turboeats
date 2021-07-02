<template>
  <div class='container' style="width: 1700px; height: 800px">

    <h3><strong>Metrics controleur de résolution</strong></h3>

        <b-embed
            type="iframe"
            :src="APILink"
            style=" padding-top: 70px;
                      left: 0;
                      top: 0;
                      width: 100%;
                      height: 800px;"
        ></b-embed>

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