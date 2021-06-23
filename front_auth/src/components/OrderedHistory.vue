<template>
  <div class='container'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h4><strong>Mon Compte</strong></h4>
        <b-form-group
        id="input-group-1"
        label="User Name"
        label-for="input-1"
        ></b-form-group>
        

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