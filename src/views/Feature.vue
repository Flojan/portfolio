<template>
  <div class="flex flex-col items-center justify-center min-h-screen pt-4">
    <div id="feature-text" class="z-0 absolute overflow-hidden w-full">
      <h1
        class="
          dark:text-white
          uppercase
          text-center text-feature
          font-black
          block
          leading-none
        "
      >
        <div id="florian" class="tracking-wider">Florian</div>
        <div id="schmidt" class="">Schmidt</div>
      </h1>
    </div>
    <div id="feature-img" class="z-10 w-1/2 max-w-1.5xl">
      <picture v-if="theme === 'dark'">
        <source
          srcset="../assets/images/portrait_florian_big_darkmode.webp"
          type="image/webp"
        />
        <source
          srcset="../assets/images/portrait_florian_big_darkmode.png"
          type="image/png"
        />
        <img
          src="../assets/images/portrait_florian_big_darkmode.png"
          alt="Portrait-Florian-Dark"
        />
      </picture>
      <picture v-if="theme === 'light'">
        <source
          srcset="../assets/images/portrait_florian_big_lightmode.webp"
          type="image/webp"
        />
        <source
          srcset="../assets/images/portrait_florian_big_lightmode.png"
          type="image/png"
        />
        <img
          src="../assets/images/portrait_florian_big_lightmode.png"
          alt="Portrait-Florian-Light"
        />
      </picture>
    </div>
    <div id="scrollDown" class="dark:text-white">
      <router-link @click="scrollTo('#about')" to="/">
        <svg
          href="#"
          xmlns="http://www.w3.org/2000/svg"
          class="max-h-10"
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
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted } from "vue";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
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
      opacityScrollDown();
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

    function opacityScrollDown() {
      gsap.from("#scrollDown", {
        opacity: 0,
        delay: 4,
        duration: 1,
      });
    }

    function opacityPersonIMG() {
      gsap.from("#feature-img", {
        opacity: 0,
        delay: 2.5,
      });
    }

    function scrollTo(hash: string) {
      gsap.registerPlugin(ScrollToPlugin);
      gsap.to(window, { duration: 1, scrollTo: { y: hash, offsetY: 150 } });
      console.log(hash);
    }
    return { theme, scrollTo };
  },
});
</script>

<style></style>
