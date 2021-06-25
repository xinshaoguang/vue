<template>
  <div class="mod">
    <ul>
      <draggable
        v-model="data.list"
        v-bind="{
          group: 'form-draggable',
          animation: 180,
        }"
        @change="change"
        @add="handleAdd"
        @end="$emit('end')"
        chosenClass="chosen"
        ghostClass="ghost"
      >
        <!-- <transition-group name="bounce"> -->
        <li :style="{ background: item.bgc }" v-for="item in data.list" :key="item.name">
          <div v-if="item.name">{{ item.name }}</div>
          <drag v-else :data="item" />
        </li>
        <!-- </transition-group> -->
      </draggable>
    </ul>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
  name: 'drag',
  components: { draggable },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    change() {
      this.data;
      // debugger;
    },
    handleAdd() {
      this.data;
      // debugger;
    },
  },
};
</script>

<style lang="scss" scoped>
// .chosen {
//   background-color: red !important;
//   color: #fff;
// }
// .ghost {
//   background-color: blue !important;
//   color: #fff;
// }
.mod {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 32px;
  //   color: #555;
  ul {
    background: #fff;
    border: 1px solid #adf;
    padding: 10px;
  }
  li {
    text-align: center;
    margin-bottom: 10px;
    // background: skyblue;
    cursor: pointer;
  }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
