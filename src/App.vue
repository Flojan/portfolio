<template>
  <div id="app">
    <html class="bg-white dark:bg-black">
      <head class="bg-white dark:bg-black"> </head>
      <header class="bg-white dark:bg-black">
        <ProgressBar />
        <NavBar class="text-black dark:text-white" />
      </header>
      <body class="bg-white dark:bg-black">
        <router-view />
      </body>
      <footer class="bg-white dark:bg-black"></footer>
    </html>
    <div class="bg-white dark:bg-black">
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";
import { useTheme } from "./modules/theme";
import Feature from "./components/Feature.vue";
import NavBar from "./components/NavBar.vue";
import ProgressBar from "./components/ProgressBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Feature,
    ProgressBar,
  },
  setup() {
    const { theme } = useTheme();
    console.log("THEME-STATE:", theme.value);
    console.log("THEME-LS:", localStorage.getItem("theme"));

    onBeforeMount(() => {
      changeTheme();
    });

    watch(theme, () => {
      changeTheme();
    });

    function changeTheme() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  },
});
</script>

<style>
section {
  min-height: 100vh;
  padding: 10vw 5vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
</style>
