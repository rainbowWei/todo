
const state = {
  doneTypes: [{
    ctitle: '全部',
    title: 'all'
  }, {
    ctitle: '完成',
    title: 'done'
  }, {
    ctitle: '未完成',
    title: 'undone'
  }],
  compelete: 'all',
  list: [
    {
      id: 1,
      txt: '减肥',
      done: true
    }, 
    {
      id: 2,
      txt: '运动',
      done: false
    },
    {
      id: 3,
      txt: '吃饭',
      done: false
    }
  ]
}

export default state
