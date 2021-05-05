<template>
  <button v-bind="rest" class="fl-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  //不让Vue继承原生的事件
  inheritAttrs: false,
  props: {
    theme: {
      type: String,
      default() {
        return "button";
      },
    },
    size: {
      type: String,
      default() {
        return "normal";
      },
    },
    level: {
      type: String,
      default() {
        return "";
      },
    },
  },
  setup(props, context) {
    //   const {size, onClick, mouseover} = context.attrs的缩写;
    const { ...rest } = context.attrs;

    const { theme }: any = { ...props };
    const { size }: any = { ...props };
    const { level }: any = { ...props };

    const classes = computed(() => {
      return {
        [`fl-theme-${theme}`]: theme,
        [`fl-size-${size}`]: size,
        [`fl-level-${level}`]: level,
      };
    });
    return {
      rest,
      classes,
    };
  },
};
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$red: red;
.fl-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  &.fl-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.fl-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.fl-level-main {
    background: $blue;
    color: white;
    border-color: $blue;
    &:hover,
    &:focus {
      background: darken($blue, 10%);
      border-color: darken($blue, 10%);
    }
  }
  &.fl-level-danger {
    background: $red;
    border-color: $red;
    color: white;
    &:hover,
    &:focus {
        color: #ddd;
      background: darken($red, 10%);
      border-color: darken($red, 10%);
    }
  }
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    transition: all 100ms;
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.fl-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.fl-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
}
</style>