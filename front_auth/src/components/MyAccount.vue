<template>
  <div class='container' id='userInfos'>
  </div>
</template>

<script>
  export default {
    data() {

        this.$http.get(this.$auth_api_uri + '/users/', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        }).then((response) => {
            var div = document.getElementById('userInfos');
            var data = response.data;
            console.log(data);
            div.innerHTML += '<b>Nom : </b><p>' + data.lastName + '</p>';
            div.innerHTML += '<b>Prénom : </b><p>' + data.firstName + '</p>';
            div.innerHTML += '<b>Email : </b><p>' + data.email + '</p>';
            div.innerHTML += '<b>Phone : </b><p>' + data.phone + '</p>';
            div.innerHTML += '<b>Avatar : </b><p>' + data.avatar + '</p>';
            div.innerHTML += '<b>Address : </b><p>' + data.address + '</p>';
            div.innerHTML += '<b>Type : </b><p>' + data.role + '</p>';
            div.innerHTML += '<b>Code de parrainage : </b><p>' + data.sponsor + '</p>';
        }).catch(error => {
            console.log(error);
            // this.$router.push({ name: "login"});
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
