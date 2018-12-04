<template>
  <div class="todo">
    <router-link to="/hello" >去hello</router-link>
    <p class="inp">
      <input type="text" placeholder="要添加的事项" v-model.trim="inp" @keyup.enter="handleAdd"/>
      <button class="add" @click="handleAdd">添加</button>
    </p>

    <p>1{{inp}}1</p>

    <ul class="list">
      <li
        v-for="todo in show()"
        :key="todo.id"
        class="todo-item"
        :class="{'done': todo.done}"
      >
        <span class="icon iconfont checked"
          :class="todo.done ? 'icon-kongxinduigou' : 'icon-xingzhuang-tuoyuanxing'"
          @click="toggle(todo.id)"
        ></span>
        <span class="txt">{{todo.txt}}</span>
        <span class="del icon iconfont icon-guanbi"
          @click="del(todo.id)"
        ></span>
      </li>
    </ul>

    <p>总价： {{FINAL_MONEY()}}</p>

    <p class="buttons">
      <button v-for="button in doneTypes"
        :key="`button__${button.title}`"
		
        :class="compelete === button.title ? 'active' : ''"
        @click="filter(button)"
      >
      {{button.ctitle}}
      </button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'todo',
  data () {
    return {
      inp: '',
      list: []
    }
  },
  computed: {
    ...mapState({
      todos: state => state.todo.list,
      doneTypes: state => state.todo.doneTypes,
      compelete: state => state.todo.compelete
    })
  },
  mounted () {
    this.list = this.todos
  },
  updated () {
    this.list = this.todos
  },
  methods: {
    ...mapMutations([
      'ADD1',
      'TOGGLE',
      'DEL'
    ]),
    ...mapActions([
      'mapDel'
    ]),
    ...mapGetters([
      'FINAL_MONEY'
    ]),
    handleAdd () {
      if (this.inp !== '') {
        this.ADD1(this.inp)
        this.inp = ''
      }
    },
    del (id) {
      // this.$store.dispatch('mapDel', id)
      this.mapDel(id)

      // this.$store.commit({
      //   type: 'DEL',
      //   id: id,
      //   a: 2
      // })
      // this.$store.commit('DEL', {id: id, a: 2})
      // this.DEL(id)
    },
    toggle (id) {
      this.TOGGLE(id)
    },
    filter (button) {
      this.$store.commit('FILTER', button)
      console.log(this.list)
    },
    show () {
      switch (this.compelete) {
        case 'done':
          return this.list.filter(todo => todo.done)
        case 'undone':
          return this.list.filter(todo => !todo.done)
        case 'all':
          return this.list
      }
    }
  }
}
</script>

<style>
.todo {
  position: absolute;
}
button {
  outline: none;
}
.todo .done .checked {
  color: blue;
}
.todo .done .txt {
  text-decoration: line-through;
  opacity: 0.6;
}
.todo .del {
  display: none;
}
.todo .todo-item:hover .del {
  display: inline-block;
}
.todo .buttons .active {
  background: blue;
  color: #fff;
  border-color: blue;
}
</style>
