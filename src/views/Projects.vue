<template>
  <div class="projects overflow-hidden h-screen w-full">
    <div id="projects" class="max-w-6xl mx-auto">
      <h2 class="text-6xl -ml-1 pb-10 uppercase md:text-9xl md:-ml-2">
        Projects
      </h2>
    </div>
    <section class="flex items-center scroll">
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">Meine Portfolio Website</h3>
          <h4 class="text-xl md:text-2xl pb-4">Vue / tailwindcss / GSAP</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">designzigartig Website</h3>
          <h4 class="text-xl md:text-2xl pb-4">Joomla / CSS / JS</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">iOS/Android App</h3>
          <h4 class="text-xl md:text-2xl pb-4">Flutter</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">Designer Portfolio Website</h3>
          <h4 class="text-xl md:text-2xl pb-4">Joomla / CSS</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">Klicker Spiel als WebApp</h3>
          <h4 class="text-xl md:text-2xl pb-4">React</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">Firmenwebsite</h3>
          <h4 class="text-xl md:text-2xl pb-4">Joomla / CSS</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div
        class="pb-8 lg:pb-0 w-full 2xl:w-1/2 xl:p-14 mr-4 flex flex-col flex-shrink-0 items-start xl:items-center"
      >
        <div class="max-w-xl">
          <h3 class="text-3xl md:text-5xl pb-1">Webshop</h3>
          <h4 class="text-xl md:text-2xl pb-4">Vue / Spring</h4>
          <p class="text-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </section>
  </div>
  <section class="min-h-screen"></section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Experience from "./Experience.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default defineComponent({
  name: "Projects",
  components: { Experience },
  setup() {
    onMounted(() => {
      horizontalScroll();
    });
    function horizontalScroll() {
      gsap.registerPlugin(ScrollTrigger);
      let container = document.querySelector(".scroll");
      gsap.to(".scroll", {
        x: () =>
          -(container!.scrollWidth - document.documentElement.clientWidth) +
          "px",
        ease: "none",
        scrollTrigger: {
          trigger: ".projects",
          invalidateOnRefresh: true,
          pin: true,
          scrub: 1,
          start: "top 150",
        },
      });
    }
  },
});
</script>

<style></style>
