<template>
  <div>
    <button class="fl-switch" :class="{ 'fl-checked': value }" @click="toggle">
      <span></span>
    </button>
  </div>
</template>


<script lang="ts">
import { ref } from "@vue/reactivity";
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return {
      toggle,
    };
  },
};
</script>

<style scoped lang="scss">
$h: 22px;
$h2: $h - 4px;
.fl-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: gray;
  border-radius: $h/2;
  position: relative;
  &.fl-checked {
    background: #409eff;
  }
  &.fl-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }

  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.fl-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: #fff;
  border-radius: $h2 / 2;
  transition: all 250ms;
}
</style>
