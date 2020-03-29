<template>
  <div>
    <h3>代办事项</h3>
    <div class="legend">
      <span>双击表示完成</span>
      <span>
        <span class="incomplete-box"></span> =  未完成
      </span>
      <span>
        <span class="complete-box"></span> =  已完成
      </span>
    </div>
    <div class="todos">
      <div :class="{'is-complete':todo.completed}" @dblclick="onDblclick(todo)" class="todo" v-for="(todo,key) in allTodos" :key="key">
        {{todo.title}}
        <span @click="deleteTodo(todo.id)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Todos",
  computed: mapGetters([
    "allTodos"
  ]),
  methods: {
    ...mapActions(["fetchTodos","deleteTodo","updataTodo"]),
    onDblclick (todo) {
      const upTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      }
      this.updataTodo(upTodo)
    }
  },
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped="scoped">
  .todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 有几列，每列有多大 */
    grid-gap: 1rem;   /* 上下左右间隔 */
  }
  .todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .todo span {
    background-color: red;
    color: white;
    border: 1px solid #E8F7F0;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    line-height: 15px;
    text-align: center;
    padding: 4px;
    margin: 0;
    font-size: 12px;
  }
  .is-complete {
    background: #35495e;
    color: #fff;
  }
  @media (max-width:500px) {
    .todos {
      grid-template-columns: 1fr;
    }
  }
  /* span */
  .legend {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 有几列，每列有多大 */
    grid-gap: 1rem;   /* 上下左右间隔 */
    text-align: center;
    margin-bottom: 20px;
  }
  .incomplete-box,.complete-box {
        width: 10px;
        height: 10px;
        display: inline-block;
  }
  .incomplete-box {
    background: #41B883;
  }
  .complete-box{
    background: #35495E;
  }
    
</style>
