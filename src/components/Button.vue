<template>
  <div>
    <Button> 按钮 </Button>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Button from "../lib/Button/Button.vue";
export default {
  setup() {
    const value = ref(false);
    return {
      value,
    };
  },
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
</style>