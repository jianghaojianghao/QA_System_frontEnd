<template>
  <div id="app">
    <div id="nav">
      <div class="nav-title">
        <img src="/QA.png" />
        <span>QA System</span>
      </div>
      <div class="nav-menu">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/" route="/">
            <i class="el-icon-s-comment"></i>
            <span slot="title">Chatbot</span>
          </el-menu-item>
          <el-menu-item index="/graph" route="/graph">
            <i class="el-icon-menu"></i>
            <span slot="title">Knowledge Graph</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">option1</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">option2</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>

    <div id="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: this.$route.path,
    };
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
html,
body {
  margin: 0px;
  padding: 0px;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  display: flex;
}

#nav {
  height: 100%;
  display: inline-block;
  background: #545c64;
  width: 20%;
  min-width: 250px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .nav-menu {
    width: 100%;
    ul {
      border: 0;
    }
  }
  .nav-title {
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: white;
    font-size: 25px;
    font-weight: blod;
    display: flex;
    flex-direction: row;
    align-items: center; /*垂直居中*/
    justify-content: center; /*水平居中*/
    img {
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-right: 5px;
      align-items: center;
    }
  }
}

#content {
  display: inline-block;
  width: 80%;
}
</style>
