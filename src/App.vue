<template>
  <div id="app">
    <Header></Header>
    <!-- 路由切换容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
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
