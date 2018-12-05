<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-sign-in" style="padding: 3px"></i>{{messagetitle}}</h3>
    <br>
    <br>
    <div id="firebaseui-auth-container"></div>
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
  </div>
</template>


<script>
  import auth from '@/auth'

  export default {
    name: 'Login',
    mounted() {
      auth.authForm('#firebaseui-auth-container')
    },
    data () {
      return {
        messagetitle: 'Login in'
      }
    }
  }
</script>

<style>
  @import "../../node_modules/firebaseui/dist/firebaseui.css";
</style>

<style scoped>

  #app1 {
    width: 95%;
    height: 90%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }


</style>
