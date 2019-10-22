<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    window.createModel("tororo");
    // 测试session & localStorage
    localStorage.setItem("user_name","zhangyuhang");
    sessionStorage.setItem("userName","张雨杭");
    sessionStorage.setItem("userId","zhangyuhang");
    sessionStorage.setItem("item","test");
  },
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
