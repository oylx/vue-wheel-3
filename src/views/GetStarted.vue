<template>
  <Markdown :src="src" key="get-started" />
</template>

<script>
import Markdown from "./Markdown.vue";
export default {
  components: {
    Markdown,
  },
  data() {
    return {
      src: "../markdown/get-started.md",
    };
  },
};
</script>
