<template>
  <div class="parent">
    🎈父亲
    <p>attrs就是没有在props中声明要接收的一些属性</p>
    <p>props：{{ msg1 }}</p>
    <p>$attrs：{{ $attrs }}</p>
    <GrandSon v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import GrandSon from "./GrandSon";
export default {
  props: ["msg1"],
  components: { GrandSon },
};
</script>
<style lang="scss" scoped>
.parent {
  background: rgba(92, 7, 172, 0.4);
}
</style>
