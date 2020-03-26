<template>
  <div>
    <div :key= "todo.id" v-for="(todo) in todos">
      <TodoItem :todo="todo" @delItem= "$emit('delItem', todo.id)" >{{todo}}</TodoItem>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodosItem.vue'

export default {
  name: 'todos',
  props: {
    todos: {
      type: Array
    }
  },
  components: {
    TodoItem
  }
}
</script>

<style scoped="scoped">
</style>
