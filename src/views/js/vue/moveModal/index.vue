<template>
  <div>
    <a-button type="" @click="openModal">openModal</a-button>
    <move-modal class="modal-box" title="XX" v-if="visible" :visible="visible" width="40%" @cancel="oncancel" @ok="handleEnameOk()">
      <template slot="modalBody">
        弹窗主体信息
      </template>
    </move-modal>
  </div>
</template>

<script>
export default {
  data() {
    return { visible: true };
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
  },
};
</script>

<style lang="scss" scoped></style>
