<template>
  <div id="nav-bar">
    <nav class="flex items-center justify-between flex-wrap p-6">
      <div class="flex items-start flex-shrink-0 mr-6">
        <router-link to="/startseite">
          <img
            v-if="theme === 'dark'"
            class="w-16"
            src="../assets/Florian-Logo-White.png"
            alt="logo"
            id="logo"
          />
          <img
            v-else-if="theme === 'light'"
            class="w-16"
            src="../assets/Florian-Logo-Black.png"
            alt="logo"
            id="logo"
          />
        </router-link>
      </div>
      <div class="w-full flex-grow md:items-center md:w-auto hidden md:block">
        <div class="flex justify-end text-sm sm:flex-grow">
          <router-link
            to="/welcome"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >welcome</router-link
          >
          <router-link
            to="/about-me"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >about me</router-link
          >

          <router-link
            to="/experience"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >experience</router-link
          >

          <router-link
            to="/education"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >education</router-link
          >

          <router-link
            to="/skills"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >skills</router-link
          >

          <router-link
            to="/say-hello"
            class="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-gray-400 mr-4"
            >say hello</router-link
          >
        </div>
      </div>
      <div class="flex space-x-4">
        <div class="flex" @click="setTheme()">
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
        <!-- <div v-if="lang"></div> -->
        <div class="flex md:hidden">
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
import { defineComponent, onBeforeMount, watch } from "vue";
import { useTheme } from "../modules/theme";

export default defineComponent({
  name: "NavBar",
  setup() {
    const { setTheme, getTheme, theme } = useTheme();
    onBeforeMount(() => {
      getTheme();
    });
    return { setTheme, theme };
  },
});
</script>

<style scoped></style>
