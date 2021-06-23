<template>
  <div class='container'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <h4><strong>Mon Compte</strong></h4>
        <b-form-group
        id="input-group-1"
        label="User Name"
        label-for="input-1"
        ></b-form-group>
        <b-form-group
        id="input-group-2"
        label="User Surname"
        label-for="input-2"
        ></b-form-group>
        <b-form-group
        id="input-group-3"
        label="Email"
        label-for="input-3"
        ></b-form-group>
        <b-form-group
        id="input-group-4"
        label="Phone"
        label-for="input-4"
        ></b-form-group>
        <b-form-group
        id="input-group-5"
        label="Adress"
        label-for="input-5"
        ></b-form-group>
        <b-form-group
        id="input-group-6"
        label="Date Created"
        label-for="input-6"
        ></b-form-group>
        <b-form-group
        id="input-group-7"
        label="Role"
        label-for="input-7"
        ></b-form-group>
        <b-form-group
        id="input-group-8"
        label="Avatar"
        label-for="input-8"
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