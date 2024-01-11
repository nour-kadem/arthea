<script setup lang="ts">
import Header from '@/Header.vue'
import Footer from '@/Footer.vue'
import { ref } from 'vue';

const qna = ref([
  {
    question: "Jsaisap",
    answer: "Toujours ap",
    expanded: false
  }
])

</script>

<template>
  <Header></Header>
  <main class="art-therapy">
    <section class="hero">
      <img src="/src/assets/pictures/art-therapy-main.png" alt="">
      <div class="card leaf variant">
        <h1>L'art thérapie</h1>
        <em>pour se découvrir</em>
      </div>
    </section>
    <section class="definition">
      <h2>L'art thérapie, qu'est ce que c'est ?</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, soluta cumque rerum culpa exercitationem sint
        eos aspernatur distinctio minima nam mollitia, eum optio vitae eaque officiis? Delectus fugiat eveniet ullam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quo illum quibusdam quia officia. Libero sequi sint,
        placeat consequatur nesciunt recusandae neque. Ipsum natus deserunt voluptate, ullam necessitatibus maxime
        laudantium.
        Aliquid quas deserunt cum iusto unde amet neque, in officia debitis. Laborum mollitia, dicta atque totam, aliquid
        odit consequatur cum laboriosam nobis quibusdam expedita ad quis quidem asperiores, dolores dignissimos.</p>
    </section>
    <section class="circumstances">
      <div class="circumstance">
        <div class="text">
          <h3>L'art thérapie, quand ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iure voluptatum nihil doloribus eaque
            inventore officia nam, aliquam tempora. Repellendus eius cum totam temporibus quo perferendis placeat omnis
            recusandae veritatis?</p>
        </div>
        <img src="/src/assets/pictures/circumstance1.jpg" alt="">

      </div>
      <div class="circumstance">
        <div class="text">
          <h3>L'art thérapie, quand ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iure voluptatum nihil doloribus eaque
            inventore officia nam, aliquam tempora. Repellendus eius cum totam temporibus quo perferendis placeat omnis
            recusandae veritatis?</p>
        </div>
      </div>
      <div class="circumstance">
        <div class="text">
          <h3>L'art thérapie, comment ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iure voluptatum nihil doloribus eaque
            inventore officia nam, aliquam tempora. Repellendus eius cum totam temporibus quo perferendis placeat omnis
            recusandae veritatis?</p>
        </div>
      </div>
      <div class="circumstance">
        <div class="text">
          <h3>L'art thérapie, qui ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iure voluptatum nihil doloribus eaque
            inventore officia nam, aliquam tempora. Repellendus eius cum totam temporibus quo perferendis placeat omnis
            recusandae veritatis?</p>
        </div>
      </div>
      <div class="circumstance">
        <div class="text">
          <h3>L'art thérapie, où ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur iure voluptatum nihil doloribus eaque
            inventore officia nam, aliquam tempora. Repellendus eius cum totam temporibus quo perferendis placeat omnis
            recusandae veritatis?</p>
        </div>
      </div>
    </section>
    <section class="rdv">
      <h2>Et si vous aussi, vous commenciez ?</h2>
      <button class="leaf">Prendre rendez-vous ?</button>
    </section>
    <section class="qna">
      <h2>FAQ</h2>
      <div class="couple" v-for="couple in qna">
        <div class="question card normal leaf" @click="couple.expanded = !couple.expanded">
          {{ couple.question }}
          <span class="material-symbols-outlined">
            {{ couple.expanded ? "expand_more" : "expand_less" }}
          </span>
        </div>
        <div :class="['answer', { expanded: couple.expanded }]">
          {{ couple.answer }}
        </div>
      </div>
    </section>
  </main>
  <Footer :margined="false"></Footer>
</template>