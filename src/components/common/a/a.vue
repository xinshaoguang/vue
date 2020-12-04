<template>
  <a :href="href" :target="target?'':'_blank'">{{ name || "来源" }}</a>
</template>

<script>
export default {
  name: "A-a",
  props: ["href", "name", "target"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
