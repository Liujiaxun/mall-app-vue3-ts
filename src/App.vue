<template>
  <div class="page app">
    <header class="header"></header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer novv_height">
      <Tabbar v-model="active">
        <Tabbar-item icon="home-o">标签</Tabbar-item>
        <Tabbar-item icon="search" dot>标签</Tabbar-item>
        <Tabbar-item icon="friends-o" badge="5">标签</Tabbar-item>
        <Tabbar-item icon="setting-o" badge="20">标签</Tabbar-item>
      </Tabbar>
    </footer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { Tabbar, TabbarItem } from "vant";

export default defineComponent({
  components: {
    Tabbar,
    TabbarItem,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .main {
    flex: 1;
    overflow-y: auto;
  }
  .footer {
    width: 100%;
    &.novv_height {
      height: 50px;
    }
  }
}
</style>
