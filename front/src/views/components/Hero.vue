<script setup lang="ts">
defineProps({
  variant: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="hero">
    <div class="rectangle">

    </div>
    <figure>
      <img class="main" src="/src/assets/pictures/hero-main.jpg" alt="">
      <img v-if="variant" src="/src/assets/pictures/detail1.jpg" alt="" class="side">
    </figure>

    <div class="intro">
      <div class="leaf card normal">
        <slot></slot>
      </div>
      <button v-if="!variant" class="leaf">
        Prendre rendez-vous
      </button>
    </div>
  </section>
</template>