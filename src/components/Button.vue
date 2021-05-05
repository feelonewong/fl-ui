<template>
  <div>
    <div>Button示例</div>
    <h2>示例1</h2>
    <!-- 默认支持@click事件 -->
    <Button @click="ButtonClick" @mouseover="ButtonMouseOver"> 默认按钮 </Button>
    <Button theme="button"> 普通按钮 </Button>

    <Button theme="text"> text按钮 </Button>
    <Button theme="link"> link按钮 </Button>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button/Button.vue";

export default {
  setup() {
    const value = ref(false);
    const ButtonClick = () => {
      console.log("button click...");
    };
    const ButtonMouseOver = () => {
      console.log("button onmouseover....");
    };
    return {
      value,
      ButtonClick,
      ButtonMouseOver,
    };
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>