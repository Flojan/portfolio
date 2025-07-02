<template>
  <div class="flex flex-col">
    <Feature />
    <About
      class="flex flex-col justify-start min-h-screen md:justify-center pb-72 mx-auto max-w-6xl pt-72 px-4 md:px-8"
    />
    <Experience
      class="flex flex-col min-h-screen mx-auto max-w-6xl md:pt-72 pb-72 px-4 md:px-8"
    />
    <Projects />
    <Skills
      class="flex flex-col min-h-screen mx-auto max-w-6xl pt-72 md:pt-0 px-4 md:px-8"
    />
    <SayHello
      class="flex flex-col min-h-screen mx-auto max-w-6xl px-4 md:px-8"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "./Feature.vue";
import About from "./About.vue";
import SayHello from "./SayHello.vue";
import Experience from "./Experience.vue";
import Projects from "./Projects.vue";
import Skills from "./Skills.vue";
export default defineComponent({
  name: "OnePager",
  components: { Feature, About, SayHello, Experience, Projects, Skills },
  setup() {},
});
</script>

<style></style>
