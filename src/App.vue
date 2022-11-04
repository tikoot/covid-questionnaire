<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script></script>

<style>
.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active {
  transition: opacity 0.4s ease-out;
}

.route-leave-active {
  transition: opacity 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
