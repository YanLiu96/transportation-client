<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-globe" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <googlemap></googlemap>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    <div class="vue-footer">
      <dfooter></dfooter>
    </div>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import GoogleMap from '@/components/GoogleMap'

  export default {
    name: 'Map',
    data () {
      return {
        goods: [],
        messagetitle: ' Good Map '
      }
    },
    components: {
      'dfooter': Footer,
      'googlemap': GoogleMap
    }
  }
</script>

<style scoped>
  #app1 {
    width: 100%;
    height: 100%;
    text-align: center;
    background: url("../assets/background.png") no-repeat center top;
    padding-top: 20px;
    background-size: cover;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .vue-footer {
    text-align: center;
    font-size: 17px;
    margin-top: 30px;
    margin-left: 80px;
  }
</style>
