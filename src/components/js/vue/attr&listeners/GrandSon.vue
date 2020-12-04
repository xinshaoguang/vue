<template>
  <div class="child">
    🎈孙子
    <p>GrandFather说：{{ msg2 }}</p>
    <button @click="reply">回复GrandFather</button>
  </div>
</template>

<script>
export default {
  props: ["msg2"],
  data() {
    return {
      replyWord: "GrandFather你好，我是GrandSon，收到消息了",
    };
  },
  methods: {
    reply() {
      this.$emit("getReply", this.replyWord);
      // this.$listeners.getReply(this.replyWord)
    },
  },
};
</script>
<style lang="scss" scoped>
.child {
  background: rgba(200, 221, 9, 0.4);
}
</style>
