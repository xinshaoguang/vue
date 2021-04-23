<template>
  <a-menu :default-selected-keys="['1']" :default-open-keys="['sub1']" mode="inline" theme="dark" :inline-collapsed="collapsed">
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
        <router-link to="/index"
          ><a-icon type="inbox" />
          <span>front-end</span>
        </router-link>
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="mail" /><span>html</span></span>
      <a-menu-item key="5">
        <router-link to="/index">首页</router-link>
      </a-menu-item>
      <a-menu-item key="6">
        Option 6
      </a-menu-item>
      <a-menu-item key="7">
        Option 7
      </a-menu-item>
      <a-menu-item key="8">
        Option 8
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="appstore" /><span>css</span></span>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="appstore" /><span>js</span></span>
      <a-sub-menu key="sub31" title="plugs">
        <a-menu-item key="11">
          <router-link to="/plugs/draggable">draggable</router-link>
        </a-menu-item>
        <a-menu-item key="12">
          Option 12
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub32" title="vue">
        <a-menu-item key="15">
          <router-link to="/js/vue/$attrs&$listeners">$attrs&$listeners</router-link>
        </a-menu-item>
        <a-menu-item key="16">
          Option 12
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
  </a-menu>
</template>

<script>
import { routes } from '@/router';
export default {
  data() {
    return {};
  },
  created() {
    this.routes = routes;
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
