<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <dfooter></dfooter>
  </div>
</template>

<script>
  import Footer from '@/components/Login'

  export default {
    name: 'Login',
    data () {
      return {
        messagetitle: 'Login'
      }
    },
    components: {
      'dfooter': Footer
    }
  }
</script>

<style scoped>
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
