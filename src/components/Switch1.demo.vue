<demo>
常规用法
</demo>

<template>
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { Switch } from "vue3-wheel-oylx";
import { ref } from "vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false);
    return {
      bool,
    };
  },
};
</script>
