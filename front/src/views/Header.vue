<script setup lang="ts">
</script>

<template>
  <header>
    <p class="logo">Arthea</p>
    <nav>
      <router-link :to="{ name: 'home' }">Accueil</router-link>
      <router-link :to="{ name: 'about-me' }">Qui je suis</router-link>
      <router-link :to="{ name: 'art-therapy' }">Art-thérapie</router-link>
      <a href="">Tarifs</a>
      <a href="">Blogs</a>
      <a href="">Contact</a>
    </nav>
  </header>
</template>