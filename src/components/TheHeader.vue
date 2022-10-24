<template>
  <header class="border-b-2 border-solid border-[#232323]">
    <div class="flex justify-between items-center">
      <img src="../assets/images/Frame.png" />
      <p class="font-anonymous font-bold text-[40px]">{{ page }}/4</p>
    </div>
  </header>
</template>

<script>
export default {
  props: ["page"],
};
</script>
