<script setup lang="ts">
import Header from '@/Header.vue'
import Footer from '@/Footer.vue'
import Hero from '@/components/Hero.vue'
import TextAndShapes from '@/components/TextAndShapes.vue'
</script>

<template>
  <Header></Header>
  <Hero :variant="true">
    <h1>Brigitte Duet</h1>
    <em>Art thérapeute</em>
  </Hero>
  <main class="about-me">
    <section>
      <blockquote>
        <em>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, asperiores modi consequatur veniam harum
          temporibus illum tenetur tempore et dolore iusto! Modi praesentium dolor placeat eaque culpa autem veritatis
          amet?</em>
      </blockquote>
    </section>
    <section class="about">
      <img class="leaf" src="/src/assets/pictures/about-main.png" alt="">
      <div class="text">
        <h2>À propos d'Arthea</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ex iste illum dicta quam saepe aliquam? Ut
          obcaecati perspiciatis enim tempore, nisi vero iste inventore, pariatur facilis quis vel non.</p>
      </div>
    </section>
    <TextAndShapes :reverse="true">
      <h2>Ma démarche</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aspernatur neque voluptatibus error facere
        quod minima blanditiis cum consequatur atque possimus sapiente illum quisquam asperiores velit, esse commodi
        distinctio nulla?</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dolores amet quidem illo quisquam ratione vitae
        tempore, quam et ea cum assumenda! Reprehenderit dolorum ex magnam eveniet distinctio. Error, velit?</p>
    </TextAndShapes>
    <section class="specialities">
      <h2>Mes spécialités</h2>
      <div class="portraits">
        <div v-for=" in 4" class="portrait">
          <div class="circle">

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, delectus nisi eligendi reprehenderit
            voluptatibus suscipit, veritatis ullam numquam exercitationem in ad! Ab impedit quibusdam dignissimos quo
            quasi
            repellat explicabo nobis.</p>
        </div>
      </div>
    </section>
    <img class="footer-banner" src="/src/assets/pictures/footer-banner.jpg" alt="">
  </main>
  <Footer></Footer>
</template>