<template>
  <div>
    <Switch v-model:value="value" />
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import Switch from "../lib/Switch/Switch.vue";
export default {
  setup() {
    const value = ref(false);
    return {
      value,
    };
  },
  components: {
    Switch,
  },
};
</script>
