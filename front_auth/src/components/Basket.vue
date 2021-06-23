<template>
  <div class='container'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h4><strong>Votre Panier</strong></h4>
        <b-form-group
        id="input-group-1"
        label="User Name"
        label-for="input-1"
        ></b-form-group>
        <b-button class="mt-3" type="submit" variant="primary" style="background-color: grey; border: none"><strong>+</strong></b-button>
        <b-button class="mt-3" type="submit" variant="primary" style="background-color: grey; border: none"><strong>-</strong></b-button>
    </b-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password1: '',
          password2: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>