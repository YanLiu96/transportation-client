<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-info" style="padding: 3px"></i>{{messagetitle}}</h3>
    <br><br><br>
    <p><i>This website is just for the assignment of </i></p>
    <p><i>Web Application Development 2 and Agile Software Practice </i></p>
    <p><i>In Waterford Institute of Technology </i></p>
    <img src="../assets/wit-log.png" width="270">
    <br><br><br>
    <p>It references from ddrohan. You can click on this URL to learn it. </p>
    <p> <a target="_blank" href="https://ddrohan.github.io/wit-wad-2-2018/">Link URL</a></p>
  </div>
</template>

<script>
  export default {
    name: 'AboutUs',
    data () {
      return {
        messagetitle: ' About Us '
      }
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
