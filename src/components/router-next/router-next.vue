<template>
  <div v-if="showNext">
    <slot></slot>
  </div>
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  props: ["fix"],
  setup(props) {
    const fix = ref(props.fix);
    const showNext = computed(() => {
      const route = useRoute();
      // const regxStr = `^${fix.value}-[\\w]$`;
      // const regx = new RegExp(regxStr);
      // const v = regx.test(route.name as string);
      // console.log(regx, route.name, regx.test(route.name as string), v);
      return (route.name as string).indexOf(`${fix.value}-`) === -1;
    });
    return {
      ...toRefs({
        showNext,
      }),
    };
  },
});
</script>
