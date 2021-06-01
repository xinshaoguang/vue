<template>
  <div>
    <A-a name="组件再次封装实现拖拽案例来源" href="https://blog.csdn.net/weixin_42414668/article/details/109443131" /><br />
    <A-a name="指令实现拖拽案例来源" href="https://blog.csdn.net/baidu_20264113/article/details/113058067" /><br />
    <a-button type="" @click="openModal">openModal</a-button><br />
    <a-button type="" @click="openModal1">openModal指令实现拖拽</a-button>
    <move-modal class="modal-box" title="XX" v-if="visible" :visible="visible" width="40%" @cancel="oncancel" @ok="handleEnameOk()">
      <template slot="modalBody">
        弹窗主体信息
      </template>
    </move-modal>
    <a-modal
      v-drag-modal
      class="modal-box"
      title="XX"
      v-if="visible1"
      :visible="visible1"
      width="40%"
      @cancel="visible1 = false"
      @ok="visible1 = false"
    >
      openModal指令实现拖拽
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return { visible: false, visible1: false };
  },

  methods: {
    openModal() {
      this.visible = true;
    },
    handleEnameOk() {
      this.visible = false;
    },
    oncancel() {
      this.visible = false;
    },
    openModal1() {
      this.visible1 = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
