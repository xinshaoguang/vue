<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">v</div>
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
      >
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
             <router-link to="/index"><a-icon type="inbox" />
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
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="11">
              Option 11
            </a-menu-item>
            <a-menu-item key="12">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="appstore" /><span>js</span></span>
          <a-menu-item key="13">
            Option 9
          </a-menu-item>
          <a-menu-item key="14">
            Option 10
          </a-menu-item>
          <a-sub-menu key="sub3" title="Submenu">
            <a-menu-item key="15">
              <router-link to="/js/vue/$attrs&$listeners"
                >$attrs&$listeners</router-link
              >
            </a-menu-item>
            <a-menu-item key="16">
              Option 12
            </a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
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
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import getTime from "@/assets/js/Date/date.js";
export default {
  data() {
    return {
      collapsed: false,
      time: "",
    };
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  mounted() {
    setInterval(() => {
      this.time = getTime();
    }, 1000);
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
