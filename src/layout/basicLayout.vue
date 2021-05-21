<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">v</div>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
        <span>{{ time }}</span>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <keep-alive>
          <!--使用keep-alive会将页面缓存-->
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import getTime from '@/assets/js/Date/date.js';

export default {
  components: {
    Menu: require('./menu').default,
  },
  data() {
    return {
      timer: null,
      collapsed: false,
      time: '',
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  mounted() {
    this.timer = setInterval(() => {
      this.time = getTime();
    }, 1000);
  },
  destroyed() {
    this.timer = null;
  },
};
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  line-height: 32px;
  font-size: 28px;
  color: #fff;
  font-weight: 700;
  text-align: center;
  background: #002140;
  margin: 16px;
  text-transform: uppercase;
}
</style>
