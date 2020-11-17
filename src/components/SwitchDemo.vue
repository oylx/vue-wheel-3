<template>
    <p>Switch 的文档</p>
    <Switch :value="y" v-model:value="y"/>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
      const y = ref(false)
      return { y }
  } 
}
</script>
