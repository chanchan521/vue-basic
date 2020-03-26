<template>
  <header>
    <h1>代办事项</h1>
    <nav>
      <router-link to="/">主页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
  </header>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped="scoped">
  header{
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
  }
  nav a{
    padding: 5px;
    color: white;
    text-decoration: none;
  }
</style>
