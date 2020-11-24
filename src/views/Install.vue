<template>
  <Markdown :src="src" key="install" />
</template>

<script>
export default {
  data() {
    return {
      src: "../markdown/install.md",
    };
  },
};
</script>
