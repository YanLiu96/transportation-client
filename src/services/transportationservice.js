import Api from '@/services/api'

export default {
  fetchGoods () {
    return Api().get('/goods')
  },
  fetchOneGood(id){
    return Api().get(`/goods/${id}`)
  },
  postGood (good) {
    return Api().post('/goods', good,
      { headers: {'Content-type': 'application/json'} })
  },
  upvoteGood(id){
    return Api().put(`/goods/${id}/voteForDeliveryman`)
  },
  putGood(id,good){
    console.log('REQUESTING ' + good._id + ' ' + JSON.stringify(good, null, 5))
    return Api().put(`/goods/${id}`, good,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteGood (id) {
    return Api().delete(`/goods/${id}`)
  }
}
