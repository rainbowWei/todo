<template>
  <div class="todo">
    <p class="inp">
			<input type="text" placeholder="要添加的事项" v-model.trim="inp" @keyup.enter="handleAdd"/>
			<button class="add" @click="handleAdd">添加</button>
		</p>

		<p>1{{inp}}1</p>

		<ul class="list">
			<li
				v-for="(todo, index) in show()"
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
		mounted() {
			this.list = this.todos
		},
		updated() {
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
				console.log(id, '99990900900000000000000000000')
				// this.$store.dispatch('mapDel', id)
				// this.mapDel(id)

				this.$store.commit('DEL',id)
				// this.DEL(id)
			},
			toggle (id) {
				this.TOGGLE(id)
			},
			filter (button) {
				this.$store.commit('FILTER', button)
				// this.$store.commit({...button, type: 'FILTER', a: 1, b: 8})
				// switch (button.title) {
				// 	case 'done':
				// 		this.list = this.todos.filter(todo => todo.done)
				// 	break;
				// 	case 'undone':
				// 		this.list = this.todos.filter(todo => !todo.done)
				// 	break;
				// 	case 'all':
				// 		this.list = this.todos
				// 	break;
				// }
				console.log(this.list)
			},
			show() {
				switch (this.compelete) {
					case 'done':
						return this.list.filter(todo => todo.done)
					break;
					case 'undone':
						return this.list.filter(todo => !todo.done)
					break;
					case 'all':
						return this.list
					break;
				}
			}
		}
	}
</script>

<style>
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
</style>
