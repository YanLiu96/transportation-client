import Api from '@/services/api'

export default {
  fetchGoods () {
    return Api().get('/goods')
  },
  postGood (good) {
    return Api().post('/goods', good,
      { headers: {'Content-type': 'application/json'} })
  }
}
