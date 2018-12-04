const actions = {
  // mapDel (store, val) {
  //   store.commit('DEL', val)
  mapDel ({ commit }, val) {
    
    // this.$axios.post('/api/del.php', {index: 0, a: 1}, (req, resp) => {
    //   if (resp.response === 'ok') {

    //     commit('DEL', val)
    //   }
    // })
    setTimeout(() => {
      commit('DEL', val)
    }, 400)
  }
}

export default actions
