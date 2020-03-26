<template>
  <div>
    <form @submit.prevent="AddTodo">
      <input type="text" name="title" v-model="title" placeholder="请添加待办事项...">
      <input type="submit" value="添加" class="btn"/>
    </form>
  </div>
</template>

<script>
// import uuid from 'uuid/v4'
export default {
  name: 'AddTodo',
  data () {
    return {
      title: ''
    }
  },
  methods: {
    AddTodo () {
      const newTodo = {
        // id: uuid(),
        title: this.title,
        completed: false
      }
      // 注册事件
      this.$emit('AddTodo', newTodo)
      this.title = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form{
    display: flex;
  }
  input[type='text']{
    flex: 10;
    padding: 5px;
  }
  input[type='submit']{
    flex: 2;
  }
</style>
