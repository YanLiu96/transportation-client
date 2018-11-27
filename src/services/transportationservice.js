import Api from '@/services/api'

export default {
  fetchGoods () {
    return Api().get('/goods')
  },
  postGood (donation) {
    return Api().post('/goods', donation,
      { headers: {'Content-type': 'application/json'} })
  }
}
