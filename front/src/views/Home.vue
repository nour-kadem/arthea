<script setup lang="ts">
import Hero from '@/components/Hero.vue'
</script>

<template>
  <main class="home">
    <Hero></Hero>
    <section class="approach">
      <div class="shapes">
        <div id="circle"></div>
        <div id="line"></div>
        <div id="circle2"></div>
      </div>
      
      <div class="texts">
        <h2>Démarche de l'art thérapie</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.</p>
        <button class="leaf">En savoir plus</button>
      </div>
    </section>
  </main>
</template>