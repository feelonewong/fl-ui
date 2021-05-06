<template>
  <div>
    <div>Button示例</div>
    <h2>示例1:支持各种主题的button</h2>
    <!-- 默认支持@click事件 -->
    <Button @click="ButtonClick" @mouseover="ButtonMouseOver">
      默认按钮
    </Button>
    <Button theme="button"> 普通按钮 </Button>

    <Button theme="text"> text按钮 </Button>
    <Button theme="link"> link按钮 </Button>
    <h2>示例2:支持各种大小的button</h2>
    <!-- 默认支持@click事件 -->
    <Button size="small"> small按钮 </Button>
    <Button> 普通按钮 </Button>
    <Button size="big"> big按钮 </Button>
    <h2>示例3:支持(主要、完成、危险)类型的button</h2>
    <!-- 默认支持@click事件 -->
    <Button size="small" level="main"> 主要链接按钮 </Button>
    <Button> 普通按钮 </Button>
    <Button size="big" level="danger"> 危险文字按钮 </Button>
    <h2>示例3:支持disabled类型的button</h2>
    <!-- 默认支持@click事件 -->
    <Button :disabled="true"> 主要链接按钮 </Button>
    <Button> 普通按钮 </Button>
      <h2>示例3:支持loading类型的button</h2>
    <!-- 默认支持@click事件 -->
    <Button :loading="true"> 加载中 </Button>
    <Button> 加载完毕 </Button>
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