<template>
  <div class="flex items-center justify-center min-h-screen">
    <div id="feature-text" class="z-0 absolute">
      <h1
        class="mb-20 md:mb-32 dark:text-white uppercase text-center text-feature font-black"
      >
        <p id="florian" class="tracking-wider">Florian</p>
        <p id="schmidt" class="leading-10">Schmidt</p>
      </h1>
    </div>
    <div id="feature-img" class="z-10 justify-center lg:mt-20 w-2/4">
      <img
        v-if="theme === 'dark'"
        src="../assets/portrait_florian_big_darkmode.png"
        alt="Portrait-Florian"
      />
      <img
        v-if="theme === 'light'"
        src="../assets/portrait_florian_big_lightmode.png"
        alt="Portrait-Florian"
      />
    </div>
    <div class="dark:text-white self-end absolute mb-20 md:mb-10 z-20">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-14 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 17l-4 4m0 0l-4-4m4 4V3"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import gsap from "gsap";
import { useTheme } from "../modules/theme";

export default defineComponent({
  name: "Feature",
  setup() {
    const { getTheme, theme } = useTheme();
    onBeforeUnmount(() => {
      getTheme();
    });

    onMounted(() => {
      fadeinName();
      opacityPersonIMG();
    });

    function fadeinName() {
      gsap.from("#florian", {
        x: -1600,
        delay: 1,
        duration: 1,
      });
      gsap.to("#florian", {
        x: 0,
        delay: 1,
        duration: 1,
      });
      gsap.from("#schmidt", {
        x: 1600,
        delay: 1,
        duration: 1,
      });
      gsap.to("#schmidt", {
        x: 0,
        delay: 1,
        duration: 1,
      });
    }

    function opacityPersonIMG() {
      gsap.from("#feature-img", {
        opacity: 0,
        delay: 2.5,
      });
      gsap.to("#florian", {
        opacity: 100,
      });
    }
    return { theme };
  },
});
</script>

<style></style>
