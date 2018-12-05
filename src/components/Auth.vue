<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-sign-in" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="firebaseui-auth-container"></div>

  </div>
</template>


<script>
  import auth from '@/auth'

  export default {
    name: 'Login in',
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
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
