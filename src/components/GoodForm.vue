<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Good Kind</label>
      <select id="goodsKind" name="goodsKind" class="form-control" type="text" v-model="goodsKind">
        <option value="null" selected disabled hidden>Choose Good Kind</option>
        <option value="Expensive">Expensive</option>
        <option value="Soft">Soft</option>
        <option value="Fragile">Fragile</option>
      </select>
    </div>

    <div class="form-group" :class="{ 'form-group--error': $v.freight.$error }">
      <label class="form-control-label" name="freight">Freight (Enter a number between 1 and 1000)</label>
      <input data-test="freight" class="form__input"  v-model.trim="freight"/>
    </div>

    <div class="error" v-if="!$v.freight.between">freight must be between 1 and 1000</div>

    <div class="form-group" :class="{ 'form-group--error': $v.goodsName.$error }">
      <label class="form__label">goodsName</label>
      <input class="form__input" v-model.trim="$v.goodsName.$model"/>
    </div>
    <div class="error" v-if="!$v.goodsName.required">GoodsName is Required</div>
    <div class="error" v-if="!$v.goodsName.minLength">GoodsName must have at least {{$v.message.$params.minLength.min}} letters.</div>

    <div class="form-group" :class="{ 'form-group--error': $v.deliveryman.$error }">
      <label class="form__label">deliveryman</label>
      <input class="form__input" v-model.trim="$v.deliveryman.$model"/>
    </div>
    <div class="error" v-if="!$v.deliveryman.required">Deliveryman man is Required</div>
    <div class="error" v-if="!$v.deliveryman.minLength">Deliveryman name must have at least {{$v.message.$params.minLength.min}} letters.</div>

    <div class="form-group" :class="{ 'form-group--error': $v.goodsLocation.$error }">
      <label class="form__label">goodsLocation</label>
      <input class="form__input" v-model.trim="$v.goodsLocation.$model"/>
    </div>
    <div class="error" v-if="!$v.goodsLocation.required">Good Location is Required</div>
    <div class="error" v-if="!$v.goodsLocation.minLength">Good Location must have at least {{$v.message.$params.minLength.min}} letters.</div>


    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">Add Goods</button>
    </p>
    <p>
      <a href="#/goods" class="btn btn-primary btn1" role="button">Manage Goods</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Add goods successfully!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">adding...</p>
  </form>
</template>

<script>
  import Vue from 'vue'
  import VueForm from 'vueform'
  import Vuelidate from 'vuelidate'
  import { required, minLength, between } from 'vuelidate/lib/validators'

  Vue.use(VueForm, {
    inputClasses: {
      valid: 'form-control-success',
      invalid: 'form-control-danger'
    }
  })

  Vue.use(Vuelidate)

  export default {
    name: 'FormData',
    props: ['goodBtnTitle', 'good'],
    data () {
      return {
        messagetitle: 'Add Good',
        goodsName:this.good.goodsName,
        goodsKind:this.good.goodsKind,
        freight: this.good.freight,
        goodsLocation:this.good.goodsLocation,
        deliveryman:this.good.deliveryman,
        deliverymanUpvotes:0,
        submitStatus: null
      }
    },
    validations: {
      freight: {
        required,
        between: between(1, 1000)
      },
      goodsName:{
        required,
        minLength: minLength(1)
      },
      goodsLocation:{
        required,
        minLength: minLength(1)
      },
      deliveryman:{
        required,
        minLength: minLength(1)
      }
    },
    methods: {
      submit () {
        console.log('submit!')
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          // do your submit logic here
          this.submitStatus = 'PENDING'
          setTimeout(() => {
            this.submitStatus = 'OK'
            var good = {
              goodsName:this.goodsName,
              goodsKind: this.goodsKind,
              freight: this.freight,
              goodsLocation:this.goodsLocation,
              deliveryman:this.deliveryman,
              deliverymanUpvotes:this.deliverymanUpvotes
            }
            this.good = good
            console.log('Submitting in GoodForm : ' + JSON.stringify(this.good, null, 5))
            this.$emit('good-is-created-updated', this.good)
          }, 500)
        }
      },
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
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .good-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
