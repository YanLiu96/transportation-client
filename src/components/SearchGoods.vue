<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="goods" :options="options">
        <a slot="upvote" slot-scope="props" class="fa fa-thumbs-up fa-2x" @click="upvote(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editGood(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteGood(props.row._id)"></a>
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
        proprs:['_id'],
        errors: [],
        columns: ['_id', 'goodsName', 'goodsKind', 'freight','goodsLocation','deliveryman','deliverymanUpvotes','upvote','edit','remove'],
        options: {
          perPage:10,
          filterable: ['goodsName', 'goodsKind', 'freight','goodsLocation','deliverymanUpvotes'],
          sortable:['deliverymanUpvotes'],
          headings: {
            _id: 'ID',
            goodsName: 'Name',
            goodsKind: 'Good Kind',
            freight:"Freight",
            goodsLocation:"Location",
            deliveryman:"Deliveryman",
            deliverymanUpvotes:"Upvotes Of Deliveryman"
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
      },
      upvote: function (id) {
        transportationservice.upvoteGood(id)
          .then(response => {
            // JSON responses are automatically parsed.
            this.loadGoods()
            console.log(response)
          })
          .catch(error => {
            this.errors.push(error)
            console.log(error)
          })
      },
      editGood: function (id) {
        this.$router.params = id
        this.$router.push('edit')
      },
      deleteGood: function (id) {
        this.$swal({
          title: 'Are you totaly sure?',
          text: 'You can\'t Undo this action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'OK Delete it',
          cancelButtonText: 'Cancel',
          showCloseButton: true
          // showLoaderOnConfirm: true
        }).then((result) => {
          console.log('SWAL Result : ' + result.value)
          if (result.value === true) {
            transportationservice.deleteGood(id)
              .then(response => {
                // JSON responses are automatically parsed.
                this.message = response.data
                console.log(this.message)
                this.loadGoods()
                // Vue.nextTick(() => this.$refs.vuetable.refresh())
                this.$swal('Deleted', 'You successfully deleted this Good ' + JSON.stringify(response.data, null, 5), 'success')
              })
              .catch(error => {
                this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
                this.errors.push(error)
                console.log(error)
              })
          } else {
            console.log('SWAL Else Result : ' + result.value)
            this.$swal('Cancelled', 'Your Donation still Counts!', 'info')
          }
        })
      }
    }
  }
</script>

<style scoped>
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
