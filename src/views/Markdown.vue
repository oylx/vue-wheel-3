<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    src: {
      type: String,
    },
  },
  setup(props) {
    let md = ref("");
    import(props.src).then((res) => {
      md.value = res.default;
    });
    return { md };
  },
};
</script>
