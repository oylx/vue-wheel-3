<template>
  <Markdown :src="src" key="intro" />
</template>

<script>
import Markdown from "./Markdown.vue";
export default {
  components: {
    Markdown,
  },
  data() {
    return {
      src: "../markdown/intro.md",
    };
  },
};
</script>
