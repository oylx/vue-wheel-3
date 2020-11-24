<template>
  <Markdown :src="src" key="install" />
</template>

<script>
import Markdown from "./Markdown.vue";
export default {
  components: {
    Markdown,
  },
  data() {
    return {
      src: "../markdown/install.md",
    };
  },
};
</script>
