<template>
  <RouterNext fix="home">
    <div class="home">
      123
      <About />
      <!-- <Button size="mini"> 1233 </Button> -->
    </div>
  </RouterNext>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import About from "@/views/About.vue";
import { Button } from "vant";
import RouterNext from "src/components/router-next/router-next.vue";
export default defineComponent({
  name: "Home",
  components: { About, Button, RouterNext },
  setup() {
    const route = useRoute();
    onMounted(() => {
      // console.log(route, 1);
    });
    return {};
  },
});
</script>
<style lang="scss">
.home {
  width: 100%;
  height: 100px;
}
</style>
