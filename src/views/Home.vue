<template>
  <div id="app">
    <AddTodo @AddTodo= "AddTodo"></AddTodo>
    <todo :todos="todos" @delItem="delItem"></todo>
  </div>
</template>

<script>
import Todos from '../components/todos.vue'
import AddTodo from '../components/AddTodo.vue'
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      msg: 'hellow',
      todos: []
    }
  },
  components: {
    todo: Todos,
    AddTodo: AddTodo
  },
  methods: {
    delItem (id) {
      axios.delete('http://jsonplaceholder.typicode.com/todos/{id}')
        .then(res => {
          this.todos = this.todos.filter(todo => todo.id !== id)
        })
        .cache(err => console.log(err))
    },
    AddTodo (newTodo) {
      // this.todos.unshift(nweTodo)
      // this.todos = [...this.todos, nweTodo]
      const { title, complete } = newTodo
      // 解构的形式
      // const title = newTodo.title
      // const complete = newTodo.complete
      // 提交添加的数据
      axios.post('http://jsonplaceholder.typicode.com/todos', {
        title,
        complete
      })
        .then(res => { // 成功回调
          this.todos = [res.data, ...this.todos]
        })
        .cache(err => console.log(err))
    }
  },
  created () {
    axios
      .get('http://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => { // 成功回调
        this.todos = [...res.data]
      })
      .cache(err => console.log(err)) // 失败回调
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background-color: #555;
    color: #fff;
    cursor: pointer;
    padding: 7px 20px;
  }
  .btn:hover {
    background-color: #666;
  }
</style>
