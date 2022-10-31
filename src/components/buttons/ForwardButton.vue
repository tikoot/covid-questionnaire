<template>
  <router-link v-if="active" :to="to">
    <img src="@/assets/images/Vector 8.png"
  /></router-link>
  <button v-else><img src="@/assets/images/Vector 4.png" /></button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: false,
      default: "/",
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
