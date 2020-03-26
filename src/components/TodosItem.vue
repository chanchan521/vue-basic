<template>
  <div class="todo-item" :class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" @change="markComplete">
    {{todo.title}}
    <button class="del" @click="$emit('delItem',todo.id)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'todo',
  props: ['todo'],
  methods: {
    markComplete () {
      console.log(this.todo)
      this.todo.completed = !this.todo.completed
    }
  }
}
</script>

<style scoped="scoped">
.todo-item{
background-color: #f4f4f4;
padding: 10px;
border-bottom: 1px dotted #ccc;
}

.is-complete{
  text-decoration: line-through;
}

.del{
  background-color: #FF0000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  float: right;
}
</style>
