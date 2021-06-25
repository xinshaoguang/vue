<template>
  <div>
    <A-a name="vue.draggable" href="http://www.itxst.com/vue-draggable/tutorial.html" /><br/>
    <a-button @click="add">add</a-button>
    <Drag :data="data" @end="print" />
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
          { name: 'A-1', bgc: '#ccffff', id: 'name_1' },
          { name: 'A-2', bgc: '#ccffff', id: 'name_2' },
          { name: 'A-3', bgc: '#ccffff', id: 'name_3' },
          {
            list: [
              { name: 'B-1', bgc: '#ccff99', id: 'name_4' },
              { name: 'B-2', bgc: '#ccff99', id: 'name_5' },
              { name: 'B-3', bgc: '#ccff99', id: 'name_6' },
              {
                list: [
                  { name: 'C-1', bgc: '#ffccff', id: 'name_7' },
                  { name: 'C-2', bgc: '#ffccff', id: 'name_8' },
                  { name: 'C-3', bgc: '#ffccff', id: 'name_9' },
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
      this.data.list.unshift({ name: 'A-' + randomNum, bgc: '#ccffff', id: randomNum });
    },
    print() {
      console.log(this.data, 'this.data');
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
