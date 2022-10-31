<template>
  <router-link :to="to">
    <img src="@/assets/images/Vector 7.png" class=""
  /></router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
};
</script>
