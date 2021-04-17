<template>
  <div class="px-4 md:px-8">
    <Feature />
    <About />
    <div class="bg-white dark:bg-black">
      <section id="experience" class="min-h-screen">EXPERIENCE</section>
      <section id="education" class="min-h-screen">EDUCATION</section>
      <section id="skills" class="min-h-screen">SKILLS</section>
    </div>
    <SayHello id="sayhello" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "./Feature.vue";
import About from "./About.vue";
import SayHello from "./SayHello.vue";
export default defineComponent({
  name: "OnePager",
  components: { Feature, About, SayHello },
  setup() {},
});
</script>

<style></style>
