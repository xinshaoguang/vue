<template>
  <div class="parent">
    🎈爷爷
    <div>GrandSon的回复：{{ reply }}</div>
    <Father :msg1="msg1" :msg2="msg2" @getReply="getReply" />
  </div>
</template>

<script>
import Father from "./Father";
export default {
  components: { Father },
  data() {
    return {
      msg1: "1️⃣我是GrandFather，把第二条传给GrandSon",
      msg2: "2️⃣GrandSon你好，我是GrandFather",
      reply: "", //接收来自GrandSon的消息
    };
  },
  methods: {
    /* 将获得的数据绑定到data中，便于视图层渲染 */
    getReply(param) {
      this.reply = param;
    },
  },
};
</script>
<style lang="scss" scoped>
.parent {
  background: rgba(14, 204, 238, 0.4);
}
</style>
