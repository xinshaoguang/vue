<template>
  <div>
    <a-button @click="add">add</a-button>
    <Drag :data="data" />
  </div>
</template>

<script>
import Drag from './drag';
export default {
  name: 'dragItem',
  components: { Drag },

  data() {
    return {
      data: {
        list: [
          { name: 'A-1', bgc: '#ccffff', key: '1' },
          { name: 'A-2', bgc: '#ccffff', key: '2' },
          { name: 'A-3', bgc: '#ccffff', key: '3' },
          {
            list: [
              { name: 'B-1', bgc: '#ccff99', key: '4' },
              { name: 'B-2', bgc: '#ccff99', key: '5' },
              { name: 'B-3', bgc: '#ccff99', key: '6' },
              {
                list: [
                  { name: 'C-1', bgc: '#ffccff', key: '7' },
                  { name: 'C-2', bgc: '#ffccff', key: '8' },
                  { name: 'C-3', bgc: '#ffccff', key: '9' },
                ],
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    change() {
      this.data;
      //   debugger;
    },
    add() {
      let randomNum = new Date().getTime().toString();
      this.data.list.unshift({ name: 'A-' + randomNum, bgc: '#ccffff', key: randomNum });
    },
  },
};
</script>

<style lang="scss" scoped>
.mod {
  //   display: flex;
  //   flex-direction: row;
  //   justify-content: center;
  //   align-items: center;
  //   font-size: 32px;
  //   color: #555;
  li {
    margin-bottom: 10px;
    background: skyblue;
    cursor: pointer;
  }
}
</style>
