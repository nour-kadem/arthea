<script setup lang="ts">
import Header from '@/Header.vue';
import Footer from '@/Footer.vue';
import Hero from '@/components/Hero.vue';
import TextAndShapes from '@/components/TextAndShapes.vue';
</script>

<template>
  <Header></Header>
  <main class="home">
    <Hero>
      <h1>Art thérapie pour tous</h1>
      <p class="text">Phrase accrocheuse qui
        décrit le but de la thérapie</p>
    </Hero>
    
    <TextAndShapes>
      <h2>Démarche de l'art thérapie</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.</p>
      <button class="leaf">En savoir plus</button>
    </TextAndShapes>

    <section class="about">
      <div class="rectangle">

      </div>
      <div class="card bordered leaf">
        <h2>À propos d'Arthea</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente praesentium ratione natus. Voluptates
          voluptas beatae, ullam quam animi, eos consectetur facilis quae sequi ipsa aspernatur excepturi consequuntur
          aliquid vel!</p>
        <button class="leaf">En savoir plus</button>

        <img src="/src/assets/pictures/about-main.png" alt="">
      </div>

      <blockquote>
        <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem quisquam perferendis amet incidunt
          voluptate
          temporibus, aliquid dolores dolorem natus? Beatae sint fuga, eum repudiandae provident nemo voluptatum
          praesentium
          optio.</em>
      </blockquote>
    </section>

    <section class="main-topic">
      <div v-for="n in 3" :class="`circle${n}`"></div>
      <div class="line"></div>

      <h2>L'art thérapie...</h2>
      <div class="cards">
        <div class="card leaf">
          <h3>Pour qui ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis velit! Aliquid alias eum sit
            rerum animi iste. Error inventore enim dolor quam dolores odio possimus ipsam provident numquam libero.</p>
          <button class="leaf">En savoir plus</button>
        </div>
        <div class="card leaf">
          <h3>Quand ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis velit! Aliquid alias eum sit
            rerum animi iste. Error inventore enim dolor quam dolores odio possimus ipsam provident numquam libero.</p>
          <button class="leaf">En savoir plus</button>
        </div>
        <div class="card leaf">
          <h3>Comment ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis velit! Aliquid alias eum sit
            rerum animi iste. Error inventore enim dolor quam dolores odio possimus ipsam provident numquam libero.</p>
          <button class="leaf">En savoir plus</button>
        </div>
        <div class="card leaf">
          <h3>Où ?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, perspiciatis velit! Aliquid alias eum sit
            rerum animi iste. Error inventore enim dolor quam dolores odio possimus ipsam provident numquam libero.</p>
          <button class="leaf">En savoir plus</button>
        </div>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>