<template>
  <div id="nav-bar">
    <nav
      class="fixed z-40 left-0 right-0 flex items-center justify-between flex-wrap p-3 pr-4 md:p-6 bg-white dark:bg-black text-black dark:text-white"
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

      <div class="flex space-x-4">
        <div @click="setTheme()" class="md:hidden">
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

        <div @click="toggle" class="md:hidden pt-1" id="burgermenu">
          <svg
            v-if="!open"
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
          <svg
            v-else
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <!-- Desktop menu -->
      <div
        class="hidden w-full md:flex-grow md:items-center md:w-auto md:block"
      >
        <div
          class="hidden md:flex items-center md:flex-row md:justify-end text-base"
        >
          <router-link
            @click="scrollTo('#about')"
            to="#about"
            class="inline-block mr-4"
            >about me</router-link
          >

          <router-link
            @click="scrollTo('#experience')"
            to="#experience"
            class="inline-block mr-4"
            >experience</router-link
          >

          <router-link
            @click="scrollTo('#projects')"
            to="#projects"
            class="inline-block mr-4"
            >projects</router-link
          >

          <router-link
            @click="scrollTo('#skills')"
            to="#skills"
            class="inline-block mr-4"
            >skills</router-link
          >

          <router-link
            @click="scrollTo('#sayhello')"
            to="#sayhello"
            class="inline-block mr-4"
            >say hello</router-link
          >
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        v-if="open === true"
        class="w-full md:flex-grow md:items-center md:w-auto md:hidden pb-6"
      >
        <div
          class="flex flex-col items-center md:flex-row md:justify-end text-2xl md:hidden"
        >
          <router-link @click="scrollTo('#about')" to="#about" class="mt-4"
            >about me</router-link
          >

          <router-link
            @click="scrollTo('#experience')"
            to="#experience"
            class="mt-4"
            >experience</router-link
          >

          <router-link
            @click="scrollTo('#projects')"
            to="#projects"
            class="mt-4"
            >projects</router-link
          >

          <router-link @click="scrollTo('#skills')" to="#skills" class="mt-4"
            >skills</router-link
          >

          <router-link
            @click="scrollTo('#sayhello')"
            to="#sayhello"
            class="mt-4"
            >say hello</router-link
          >
        </div>
      </div>
      <div @click="setTheme()" class="hidden md:flex">
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
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { useTheme } from "../modules/theme";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

export default defineComponent({
  name: "NavBar",
  setup() {
    const { setTheme, getTheme, theme } = useTheme();
    const open = ref(false);

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
      gsap.to(window, { duration: 1, scrollTo: { y: hash, offsetY: 130 } });
      console.log(hash);
    }

    function toggle() {
      if (open.value === true) {
        open.value = false;
      } else {
        open.value = true;
      }
    }

    return { setTheme, theme, scrollTo, toggle, open };
  },
});
</script>

<style scoped></style>
