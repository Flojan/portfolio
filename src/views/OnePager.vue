<template>
  <Feature />
  <div class="bg-white dark:bg-black">
    <section id="about" class="min-h-screen">ABOUT</section>
    <section id="experience" class="min-h-screen">EXPERIENCE</section>
    <section id="education" class="min-h-screen">EDUCATION</section>
    <section id="skills" class="min-h-screen">SKILLS</section>
    <section id="hello" class="min-h-screen">SAY HELLO</section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Feature from "./Feature.vue";
export default defineComponent({
  name: "OnePager",
  components: { Feature },
  setup() {},
});
</script>

<style></style>
