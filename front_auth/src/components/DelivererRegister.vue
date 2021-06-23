<template>
  <div class='container'>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <h4><strong>Inscription Livreur</strong></h4>
      <b-form-group
        id="input-group-1"
        label="Email propriétaire:"
        label-for="input-1"
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="mt-3" id="input-group-2" label="Mot de passe:" label-for="password">
        <b-form-input
            id="password1"
            v-model="form.password1"
            type="password"
            placeholder="Mot de passe"
            required
        ></b-form-input>
        <b-form-input
          id="password2"
          v-model="form.password2"
          type="password"
          placeholder="Confirmer le mot de passe"
          required
      ></b-form-input>
      </b-form-group>

      <b-button class="mt-3" type="submit" variant="primary" style="background-color: #5FB709; border: none"><strong>S'enregistrer</strong></b-button>
    </b-form>

<!--    <b-card class="mt-3" header="Form Data Result">-->
<!--      <pre class="m-0">{{ form }}</pre>-->
<!--    </b-card>-->

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