<template>
  <div class="flex flex-col px-4 md:px-8">
    <Feature />
    <About
      class="flex flex-col justify-start md:justify-center min-h-screen mx-auto max-w-6xl mt-72"
    />
    <Experience
      class="flex flex-col min-h-screen mx-auto max-w-6xl mt-72 mb-72"
    />
    <Projects />
    <Skills
      class="flex flex-col min-h-screen mx-auto max-w-6xl mt-72 md:mt-0"
    />
    <SayHello class="flex flex-col min-h-screen mx-auto max-w-6xl" />
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
