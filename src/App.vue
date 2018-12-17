<template>
  <div id="app">
    <b-navbar toggleable="md" variant="dark" type="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <img src="./assets/mevnnav.png" class="img-circle" style="padding: 10px">
      <b-navbar-brand to="/">Express Transportation Web App</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/#"><i class="fa fa-home" style="padding: 10px; font-size: 18px"> Home</i></b-nav-item>
          <b-nav-item to="/goods"><i class="fa fa-list" style="padding: 10px; font-size: 18px"> AllGoods</i></b-nav-item>
          <b-nav-item data-test="goodbtn" to="/addGood"><i class="fa fa-money" style="padding: 10px; font-size: 18px"> AddGood</i></b-nav-item>
          <b-nav-item to="/map"><i class="fa fa-globe" style="padding: 10px; font-size: 18px"> Map</i></b-nav-item>

          <b-nav-item to="/about"><i class="fa fa-info" style="padding: 10px; font-size: 18px"> AboutUs</i></b-nav-item>
          <b-nav-item to="/contact"><i class="fa fa-comment" style="padding: 10px; font-size: 18px"> ContactUs</i></b-nav-item>
          <b-nav-item to="/auth"><i class="fa fa-sign-in" style="padding: 10px; font-size: 18px"> Login </i></b-nav-item>
          <b-nav-item to="/dashboard"><i class="fa fa-sign-out" style="padding: 10px; font-size: 18px"> Logout </i></b-nav-item>
          <div v-if="user" style="color:yellow;font-size: 10px;padding: 10px">
            <img :src="user.photoURL" width="40">
            <br>
            {{user.displayName}}
          </div>
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
  // color: #2c3e50;
    padding-top: 20px;
    background: url("./assets/background.png") no-repeat center top;
    background-size: cover;
  // background-color: #f6d54f
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
