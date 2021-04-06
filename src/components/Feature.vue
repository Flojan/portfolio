<template>
  <div class="flex items-center justify-center min-h-screen">
    <div id="feature-text" class="z-0 absolute">
      <h1
        class="mt-20 dark:text-white uppercase text-center min-w-full text-feature font-black"
      >
        <p id="florian" class="tracking-wider">Florian</p>
        <p id="schmidt" class="leading-10">Schmidt</p>
      </h1>
    </div>
    <div id="feature-img" class="z-10 flex justify-center mt-40 w-2/4">
      <img src="../assets/portrait_florian_small.png" alt="Portrait-Florian" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "Feature",
  setup() {
    onMounted(() => {
      fadeinName();
      opacityPersonIMG();
    });

    function fadeinName() {
      gsap.from("#florian", {
        x: -400,
        duration: 1,
      });
      gsap.to("#florian", {
        x: 0,
        duration: 1,
      });
      gsap.from("#schmidt", {
        x: 400,
        duration: 1,
      });
      gsap.to("#schmidt", {
        x: 0,
        duration: 1,
      });
    }

    function opacityPersonIMG() {
      gsap.from("#feature-img", {
        opacity: 0,
        delay: 2,
      });
      gsap.to("#florian", {
        opacity: 100,
      });
    }
  },
});
</script>

<style></style>
