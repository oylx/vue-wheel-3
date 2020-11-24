<template>
  <Markdown :src="src" key="intro" />
</template>

<script>
export default {
  data() {
    return {
      src: "../markdown/intro.md",
    };
  },
};
</script>
