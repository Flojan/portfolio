<template>
  <div id="app">
    <html class="bg-white dark:bg-black">
      <header class="bg-white dark:bg-black">
        <ProgressBar />
        <NavBar />
      </header>
      <body class="text-black bg-white dark:text-white dark:bg-black">
        <router-view />
      </body>
      <footer class="bg-white dark:bg-black"></footer>
    </html>
    <CustomCursor />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";
import { useTheme } from "./modules/theme";
import CustomCursor from "./components/CustomCursor.vue";
import ProgressBar from "./components/ProgressBar.vue";
import NavBar from "./components/NavBar.vue";
import Feature from "./views/Feature.vue";
import OnePager from "./views/OnePager.vue";

export default defineComponent({
  name: "App",
  components: {
    CustomCursor,
    NavBar,
    // Feature,
    OnePager,
    ProgressBar,
  },
  setup() {
    const { theme } = useTheme();
    // console.log("THEME-STATE:", theme.value);
    // console.log("THEME-LS:", localStorage.getItem("theme"));

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
@media (min-width: 768px) {
  * {
    cursor: none;
  }
}
@font-face {
  font-family: "Questa Sans Black";
  src: local("Questa Sans Black"),
    url(./assets/fonts/QuestaSans-Black.otf) format("opentype");
}
@font-face {
  font-family: "Questa Medium";
  src: local("Questa Medium"),
    url(./assets/fonts/Questa-Medium.otf) format("opentype");
}
::selection {
  background: #76d8cf;
}
::-moz-selection {
  background: #76d8cf;
}
h1,
h2,
h3,
section {
  font-family: "Questa Sans Black", Helvetica, sans-serif;
}
nav {
  font-family: "Questa Medium", Helvetica, sans-serif;
}
</style>
