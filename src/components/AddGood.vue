<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <good-form :good ="good" goodBtnTitle="Add Good" @good-is-created-updated="submitGood"></good-form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
  import transportationservice from '@/services/transportationservice'
  import GoodForm from '@/components/GoodForm'

  export default {
    data () {
      return {
        good: {goodsKind:'Expensive', goodsName:'',freight:0,goodsLocation: ''},
        messagetitle: ' Add Good '
      }
    },
    components: {
      'good-form': GoodForm,
    },
    methods: {
      submitGood: function (good) {
        transportationservice.postGood(good)
          .then(response => {
            console.log('submitGood!')
            console.log('Submitting in submitGood : ' + good)
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
