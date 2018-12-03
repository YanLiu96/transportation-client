<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-money" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <good-form :good="good" goodBtnTitle="Update Good" @good-is-created-updated="updateGood"></good-form>
          </template>
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
        good: {},
        childDataLoaded: false,
        temp: {},
        messagetitle: ' Update Good '
      }
    },
    components: {
      'good-form': GoodForm,
    },
    created () {
      this.getGood()
    },
    methods: {
      getGood: function () {
        transportationservice.fetchOneGood(this.$router.params)
          .then(response => {
            this.temp = response.data
            this.good = this.temp[0]
            this.childDataLoaded = true
            console.log('Getting Good in Edit: ' + JSON.stringify(this.good, null, 5))
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      updateGood: function (good) {
        console.log('Before PUT ' + JSON.stringify(good, null, 5))
        transportationservice.putGood(this.$router.params, good)
          .then(response => {
            console.log(response)
            console.log('AFTER PUT ' + JSON.stringify(good, null, 5))
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
