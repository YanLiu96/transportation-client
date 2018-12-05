
<template>
  <div id="app1" class="hero">
  <div v-if="user">
    <h1>Hello USER!</h1>
    <br>
    <br>
    <br>
    <img :src="user.photoURL" width="100"> <br>
    <h2>{{user.displayName}}</h2>
    <p>{{user.email}}</p>
    <button @click="logOut">Log out</button>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br><br><br>
  </div>
  </div>
</template>

<script>
  import auth from '@/auth'

  export default {
    name: 'auth-success',
    computed: {
      user() {
        return this.$store.getters['user/user']
      }
    },
    methods: {
      logOut() {
        auth.logout()
      }
    }
  }
</script>

<style scoped>
  img {
    border-radius: 50px;
  }

  h3 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
  }

  pre {
    text-align: left;
  }

  #app1 {
    width: 95%;
    height: 90%;
    margin: 0 auto;
  }
</style>
