import {
  ADD,
  TOGGLE,
  DEL,
  FILTER
} from './types'

const mutations = {
  ADD1 (state, inp) {
    state.list.push({
      id: (new Date()).getTime(),
      txt: inp,
      done: false
    })
  },
  [TOGGLE] (state, val) {
    state.list = state.list.map((todo, index) => {
      if (val === todo.id) {
        todo.done = !todo.done
      }
      return todo
    })
  },
  [DEL] (state, val) {
    console.log(state.list, '********************')
    const tempArr = []
    state.list.map((todo, index) => {
      console.log(todo, '00000')
      if (val !== todo.id) {
        tempArr.push(todo)
      }
    })
    state.list = tempArr

    // state.list.forEach((todo, index) => {
    //   if (val === todo.id) {
    //     state.list.splice(index, 1)
    //   }  
    // })


    // state.list = state.list.filter((todo, index) => index !== val)

    // console.log(state.list, '999999999999999')
  },
  [FILTER] (state, {ctitle, title}) {
    console.log(title, ctitle)
    state.compelete = title
  }
}

export default mutations
