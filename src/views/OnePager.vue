<template>
  <div class="flex flex-col px-4 md:px-8">
    <Feature />
    <About
      class="flex flex-col justify-center min-h-screen mx-auto max-w-6xl"
    />
    <Experience class="flex flex-col min-h-screen mx-auto max-w-6xl" />
    <div class="bg-white dark:bg-black">
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
import Experience from "./Experience.vue";
export default defineComponent({
  name: "OnePager",
  components: { Feature, About, SayHello, Experience },
  setup() {},
});
</script>

<style></style>
