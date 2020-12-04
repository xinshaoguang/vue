<template>
  <div class="basicLeft fl">

  </div>
</template>

<script>
export default {
  name: "basicLeft",
  components: {
    basicLeft: require("./basicLeft").default,
    basicRight: require("./basicRight").default,
  },
  data() {
    return {
      msg: "String",
    };
  },
};
</script>

<style lang="scss" scoped>
.basicLeft{
    
}
</style>