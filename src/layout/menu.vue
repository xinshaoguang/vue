<template>
  <a-menu :openKeys="openKeys" @openChange="onOpenChange" :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark">
    <!-- <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>-->
    <a-sub-menu key="sub0">
      <span slot="title"><a-icon type="desktop" /><span>前端</span></span>
      <a-menu-item key="3">
        <router-link to="/index">
          <a-icon type="inbox" />
          <span>front-end</span>
        </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>html</span></span>
      <a-menu-item key="5">
        <router-link to="/index">首页</router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="appstore" /><span>css</span></span>
      <a-menu-item key="9">
        css
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="appstore" /><span>js</span></span>
      <a-sub-menu key="sub31" title="plugs">
        <a-menu-item key="11">
          <router-link to="/plugs/draggable">draggable</router-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub32" title="vue">
        <a-menu-item key="15">
          <router-link to="/js/vue/$attrs&$listeners">$attrs&$listeners</router-link>
        </a-menu-item>
        <a-sub-menu key="sub33" title="jsx">
          <a-menu-item key="16">
            <router-link to="/js/vue/jsx-jsx">jsx-jsx</router-link>
          </a-menu-item>
          <a-menu-item key="17">
            <router-link to="/js/vue/jsx-js">jsx-js</router-link>
          </a-menu-item>
          <a-menu-item key="18">
            <router-link to="/js/vue/jsx-vue">jsx-vue</router-link>
          </a-menu-item>
        </a-sub-menu>
          <a-menu-item key="18">
            <router-link to="/js/vue/moveModal">moveModal</router-link>
          </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { routes } from '@/router';
export default {
  data() {
    return {
      openKeys: [],
    };
  },
  created() {
    this.routes = routes;
  },
  methods: {
    onOpenChange(openKeys) {
      // 当菜单被展开时触发此处
      /* 
      经测试传入的变量openKeys是数组 点击已经展开的菜单时传入的是空数组
      点击未展开的菜单时传入的是[当前展开菜单的key,点击的菜单key]
      下面的if判断用openKeys === [] 无效 所以我只能判断数组length是否等于0
      */
      if (openKeys.length !== 0) {
        // this.openKeys = [openKeys[1]];
        this.openKeys = openKeys;
      } else {
        this.openKeys = [''];
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.mod {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #555;
}
</style>
