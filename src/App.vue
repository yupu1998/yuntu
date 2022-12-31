<template>
  <myHome />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myHome from "./views/home/myHome.vue";

export default defineComponent({
  name: "App",
  components: {
    myHome,
  },
});
</script>

