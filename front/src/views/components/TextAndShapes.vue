<script setup lang="ts">
defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section :class="['text-and-shapes', { reverse }]">
    <div class="shapes">
      <div class="circle"></div>
      <div class="line"></div>
      <div class="circle2"></div>
    </div>
    
    <div class="text">
      <slot></slot>
    </div>
  </section>
</template>