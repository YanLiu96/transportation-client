<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/mevnnav.png" class="img-circle" style="padding: 5px">
      <b-navbar-brand to="/">Express Transportation Web App</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 5px; text-align:center;font-size: 18px"> Home</i></b-nav-item>
          <b-nav-item to="/goods"><i class="fa fa-list" style="padding: 5px; text-align:center;font-size: 18px"> SearchExpress</i></b-nav-item>
          <b-nav-item data-test="goodbtn" to="/addGood"><i class="fa fa-money" style="padding: 5px; text-align:center;font-size: 18px"> AddGood</i></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 5px; text-align:center;font-size: 18px"> Map</i></b-nav-item>
          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 5px;text-align:center; font-size: 18px"> AboutUs</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 5px; text-align:center;font-size: 18px"> ContactUs</i></b-nav-item>
          <b-nav-item to="/auth"><i class="fa fa-sign-in" style="padding: 5px; text-align:center;font-size: 18px"> Login </i></b-nav-item>
          <b-nav-item to="/dashboard"><i class="fa fa-sign-out" style="padding: 5px;text-align:center; font-size: 18px"> Logout </i></b-nav-item>
          <b-navbar-nav>
          <div v-if="user" style="color:yellow;font-size: 2px;text-align:center;padding: 5px">
            <img :src="user.photoURL" width="30">
            {{user.displayName}}
          </div>
        </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    computed: {
      user() {
        return this.$store.getters['user/user']
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 100%;
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
   padding-top: 10px;
   background-size: cover;
  }
  button
  {
    margin:5px;
  }
  img {
    border-radius: 50px;
  }
  .b-nav-item {
    color: white;
    font-size: 30px;
  }
  .VueTables__child-row-toggler {
    width: 16px;
    height: 16px;
    line-height: 16px;
    display: block;
    margin: auto;
    text-align: center;
  }

  .VueTables__child-row-toggler--closed::before {
    content: "+";
  }

  .VueTables__child-row-toggler--open::before {
    content: "-";
  }
  .VueTables__sortable {
    cursor: pointer;
  }
</style>
