<template>
  <div class="mod">
    <!-- <a href="https://blog.csdn.net/weixin_42776111/article/details/108827587" class="source" target="_blank">来源</a> -->
    <A-a
      name="文件来源"
      href="https://blog.csdn.net/weixin_42776111/article/details/108827587"
    />
    <GrandFather />
  </div>
</template>

<script>
export default {
  components: {
    GrandFather: require("./attr&listeners/GrandFather").default,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mod {
  font-size: 16px;
  color: #555;
}
</style>
