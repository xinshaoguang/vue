<template>
  <div>
    <a-button @click="loginFn">登录</a-button>
  </div>
</template>

<script>
import { login } from '@/api/login';
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    loginFn() {
      login('hello')
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
