<template>
  <button @click="toggle" :class="{checked}">
    <span></span>
  </button>
  <div>{{value}}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,

  },
  setup(){
    const checked = ref(false)
    const toggle = ()=>{
      checked.value = !checked.value
    }
    return {checked, toggle}
  } 
}
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  outline: none;
}
button.checked > span {
  left: $h + 2px;
  transition: all 250ms;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2 / 2;
  transition: all 250ms;
}
</style>
