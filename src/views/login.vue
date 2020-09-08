<template>
  <div class="about">
    <h1>Login</h1>
    <el-button @click="go">aaa</el-button>
  </div>
</template>
<script>
export default {
  name: 'LogIn',
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push({ path: '/home' });
    }
  }
};
</script>