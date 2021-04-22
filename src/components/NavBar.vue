<template>
  <div id="nav-bar">
    <nav
      class="fixed z-40 left-0 right-0 flex items-center justify-between flex-wrap p-6 bg-white dark:bg-black text-black dark:text-white"
    >
      <div id="logo" class="flex items-start flex-shrink-0 mr-6">
        <router-link @click="scrollTo('#nav-bar')" to="/">
          <img
            v-if="theme === 'dark'"
            class="w-24"
            src="../assets/images/Florian-Logo-White.png"
            alt="logo"
          />
          <img
            v-else-if="theme === 'light'"
            class="w-24"
            src="../assets/images/Florian-Logo-Black.png"
            alt="logo"
          />
        </router-link>
      </div>
      <div class="flex-grow md:items-center md:w-auto hidden md:block">
        <div class="flex justify-end text-base sm:flex-grow">
          <router-link
            @click="scrollTo('#about')"
            to="#about"
            class="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >about me</router-link
          >

          <router-link
            @click="scrollTo('#experience')"
            to="#experience"
            class="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >experience</router-link
          >

          <router-link
            @click="scrollTo('#projects')"
            to="#projects"
            class="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >projects</router-link
          >

          <router-link
            @click="scrollTo('#skills')"
            to="#skills"
            class="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >skills</router-link
          >

          <router-link
            @click="scrollTo('#sayhello')"
            to="#sayhello"
            class="block mt-4 sm:inline-block sm:mt-0 mr-4"
            >say hello</router-link
          >
        </div>
      </div>
      <div class="flex space-x-4">
        <div @click="setTheme()">
          <a>
            <svg
              v-if="theme === 'dark'"
              class="w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.66353 17H14.3365M8.46447 15.5355C6.51184 13.5829 6.51184 10.4171 8.46447 8.46447C10.4171 6.51184 13.5829 6.51184 15.5355 8.46447C17.4882 10.4171 17.4882 13.5829 15.5355 15.5355L14.9884 16.0826C14.3556 16.7155 14 17.5739 14 18.4689V19C14 20.1045 13.1046 21 12 21C10.8954 21 10 20.1045 10 19V18.4689C10 17.5739 9.64445 16.7155 9.01156 16.0826L8.46447 15.5355Z"
              />
            </svg>
            <svg
              v-else-if="theme === 'light'"
              class="w-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </a>
        </div>
        <div class="md:hidden" id="burgermenu">
          <svg
            class="w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";
import { useTheme } from "../modules/theme";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

export default defineComponent({
  name: "NavBar",
  setup() {
    const { setTheme, getTheme, theme } = useTheme();
    onBeforeMount(() => {
      getTheme();
    });

    onMounted(() => {
      rotateLogoScroll();
    });

    function rotateLogoScroll() {
      gsap.registerPlugin(ScrollTrigger);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#wrap",
            pin: true,
            scrub: 0.2,
            start: "top top",
            end: "+=10000",
          },
        })
        .to("#logo", {
          rotation: 360 * 5,
          duration: 1,
          ease: "none",
        });
    }

    function scrollTo(hash: string) {
      gsap.registerPlugin(ScrollToPlugin);
      gsap.to(window, { duration: 1, scrollTo: { y: hash, offsetY: 150 } });
      console.log(hash);
    }

    return { setTheme, theme, scrollTo };
  },
});
</script>

<style scoped></style>
