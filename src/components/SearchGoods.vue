<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="goods" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
  import transportationservice from '@/services/transportationservice'
  import Vue from 'vue'
  import VueTables from 'vue-tables-2'

  Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

  export default {
    name: 'goods',
    data () {
      return {
        messagetitle: ' Goods List ',
        goods: [],
        errors: [],
        columns: ['_id', 'goodsName', 'goodsKind', 'freight','goodsLocation','deliveryman','deliverymanUpvotes'],
        options: {
          headings: {
            _id: 'ID',
            goodsName: 'Name',
            goodsKind: 'Good Kind',
            freight:"Freight",
            goodsLocation:"Location",
            deliveryman:"Deliveryman",
            deliverymanUpvotes:"Upvote"
          }
        }
      }
    },
    // Fetches Donations when the component is created.
    created () {
      this.loadGoods()
    },
    methods: {
      loadGoods: function () {
        transportationservice.fetchGoods()
          .then(response => {
            // JSON responses are automatically parsed.
            this.goods = response.data
            console.log(this.goods)
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
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
