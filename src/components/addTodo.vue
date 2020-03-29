<template>
  <div>
    <h3>添加内容</h3>
    <div class="add">
      <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="添加代办事项">
        <input type="submit" >
      </form>
    </div>
  </div>
</template>

<script>
  import {mapActions} from "vuex"
  export default {
    name:'addTodo',
    data() {
      return {
        title:"",
      } 
    },
    methods: {
      ...mapActions(["addTodo"]),
      onSubmit() {
        // 分发action
        this.addTodo(this.title);
        this.title = ""
      }
    }
  }
</script>

<style scoped="scoped">
  form{
    display: flex;
  }
  input[type='text'] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41B883;
    outline: 0; /* 去掉获得焦点时的默认边框 */
  }
  input[type='submit'] {
    flex: 2;
    background: #41B883;
    color: white;
    border: 1px #41B883 solid;
    cursor: pointer;
  }
</style>
