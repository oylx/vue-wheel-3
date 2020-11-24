<template>
  <Markdown :src="src" key="get-started" />
</template>

<script>
export default {
  data() {
    return {
      src: "../markdown/get-started.md",
    };
  },
};
</script>
