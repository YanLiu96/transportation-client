<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-comment" style="padding: 3px"></i>{{messagetitle}}</h3>
    <br>
    <table align="center">
      <tr>
        <td>
          <p class="lead"><p><i>My Github account name is YanLiu96  </i></p>
          <p class="lead"><p><i>My facebook account name is 刘岩 </i></p>
          <p class="lead"><p><i>My email is 20082245@mail.wit.ie </i></p>
        </td>
      </tr>
      <tr>
        <td>
          <p class="lead"><p><i>Please click <a href ="https://github.com/YanLiu96">My GitHub</a> to follow me (^o^)</i></p>
          <p class="lead"><p><i>Just contact me if you have any problems</i></p>
          <p class="lead"><p><i>Please email me during 9:00 am and 22:00 pm</i></p>
        </td>
      </tr>
    </table>
    <dfooter></dfooter>
    <br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'

  export default {
    name: 'ContactUs',
    data () {
      return {
        messagetitle: ' Contact Us '
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
  #app1 {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: url("../assets/background.png") no-repeat center top;
    padding-top: 20px;
    background-size: cover;

  }
  .hero{
    text-align: center;
  }
</style>
