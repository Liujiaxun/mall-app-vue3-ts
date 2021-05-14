<template>
  <div class="swiper">
    <Swipe
      :autoplay="3000"
      lazy-render
      :width="width"
      :height="height"
      :show-indicators="false"
    >
      <SwipeItem v-for="item in list" :key="item">
        <img :src="item" class="swiper-img" />
      </SwipeItem>
    </Swipe>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Swipe, SwipeItem } from "vant";
export default defineComponent({
  porps: ["width", "height", "list"],
  components: { Swipe, SwipeItem },
  setup(props) {
    // const { width, height, list } = props;
    const state = reactive({
      list: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-3.jpg",
        "https://img.yzcdn.cn/vant/apple-4.jpg",
      ],
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style lang="scss" scoped>
@import "src/style/index.scss";
.swiper {
  width: 100%;
  min-height: $swiper-height;
  .swiper-img {
    height: $swiper-height;
  }
}
</style>
