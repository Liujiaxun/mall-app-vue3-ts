<template>
  <div class="nav">
    <div class="navItem">
      <div class="navImg">
        <img src="" />
      </div>
      <div class="navTitle">水果</div>
    </div>
    <div class="navItem">
      <div class="navImg">
        <img src="" />
      </div>
      <div class="navTitle">牛奶</div>
    </div>
    <div class="navItem">
      <div class="navImg">
        <img src="" />
      </div>
      <div class="navTitle">芒果</div>
    </div>
    <div class="navItem">
      <div class="navImg">
        <img src="" />
      </div>
      <div class="navTitle">生蚝</div>
    </div>
    <div class="navItem">
      <div class="navImg">
        <img src="" />
      </div>
      <div class="navTitle">河鲜</div>
    </div>
    <div class="navItem">
      <div class="navImg">
        <img src="../../../assets/img/more.png" />
      </div>
      <div class="navTitle">更多</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
@import "src/style/index.scss";
.nav {
  width: 100%;
  padding: 8px 0;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  .navItem {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 8px;
    padding-top: 8px;
    .navImg {
      width: 46px;
      height: 46px;
    }
    .navTitle {
      font-size: $fs14;
      font-family: SourceHanSansCN;
      font-weight: 400;
      color: $c1;
      margin-top: 9px;
    }
  }
}
</style>
