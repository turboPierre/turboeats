<template>
  <div class='container mt-5' id='userInfos'>
    <h3><strong id="title">Mon Compte </strong></h3><br>
  </div>
</template>

<script>
  export default {
    data() {

        this.$http.get(this.$auth_api_uri + '/users/myInfos', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            var div = document.getElementById('userInfos');
            var data = response.data;
            div.innerHTML += '<b>Nom : </b><p>' + data.lastName + '</p>';
            div.innerHTML += '<b>Prénom : </b><p>' + data.firstName + '</p>';
            div.innerHTML += '<b>Email : </b><p>' + data.email + '</p>';
            div.innerHTML += '<b>Numéro de téléphone : </b><p>' + data.phone + '</p>';
            div.innerHTML += '<b>Adresse : </b><p>' + data.address + '</p>';
            div.innerHTML += '<b>Code de parrainage : </b><p>' + data.id + '</p>';
            document.getElementById('title').innerHTML += data.role;
        }).catch(error => {
            console.log(error);
            this.$router.push({ name: "login"});
            location.reload();
        });
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
