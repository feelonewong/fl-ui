<template>
  <button v-bind="rest" class="fl-button" :class="`fl-theme-${theme}`">
    <slot />
  </button>
</template>

<script lang="ts">
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
  },
  setup(props, context) {
    //   const {size, onClick, mouseover} = context.attrs的缩写;
    const { size, ...rest } = context.attrs;
    return {
      size,
      rest,
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