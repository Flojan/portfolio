<template class="{localStorage.getItem('theme')}">
  <html class="bg-white dark:bg-black">
    <head class="bg-white dark:bg-black"> </head>
    <header class="bg-white dark:bg-black">
      <NavBar class="text-black dark:text-white" />
    </header>
    <body class="bg-white dark:bg-black">
      <Feature class="text-black dark:text-white" />
    </body>
    <footer class="bg-white dark:bg-black"></footer>
  </html>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";
import { useTheme } from "./modules/theme";
import Feature from "./components/Feature.vue";
import NavBar from "./components/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
    Feature,
  },
  setup() {
    window.scroll({
      top: 1000,
      behavior: "smooth",
    });
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
/* html {
  background-color: black;
} */
</style>
