<script setup lang="ts">
defineProps({
  margined: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <footer :class="{ margined }">
    <img class="logo" src="../assets/logo.svg" alt="">
    <div class="social-networks">
      <img src="../assets/instagram.svg" alt="">
      <img src="../assets/facebook.svg" alt="">
    </div>
    <address class="mail">arthéa.fr@gmail.com</address>
    <address class="postal">
      Arthéa <br>
      Route de je ne sais quoi <br>
      01000 BOURG-EN-BRESSE
    </address>
  </footer>
</template>