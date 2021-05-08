<template>
  <div id="app" class="text-black bg-white dark:text-white dark:bg-black">
    <header class="bg-white dark:bg-black">
      <ProgressBar />
      <NavBar v-if="$route.meta.showNavBar" />
    </header>
    <router-view @click="comfortClose" />
    <footer>
      <Footer />
    </footer>
    <CustomCursor />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, watch } from "vue";
import { useTheme } from "./modules/theme";
import { useMobileNav } from "./modules/mobileNav";
import CustomCursor from "./components/CustomCursor.vue";
import ProgressBar from "./components/ProgressBar.vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  name: "App",
  components: {
    CustomCursor,
    ProgressBar,
    NavBar,
    Footer,
  },
  setup() {
    const { theme } = useTheme();
    const { comfortClose } = useMobileNav();

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
    return { comfortClose };
  },
});
</script>

<style>
@media (min-width: 768px) {
  * {
    cursor: none;
  }
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
h4,
section {
  font-family: questa-sans, Helvetica, Arial;
  font-weight: 900;
}
.button {
  font-family: questa-sans, Helvetica, Arial;
  font-weight: 500;
}
nav,
p {
  font-family: questa-grande, Helvetica, sans-serif;
  font-weight: 400;
}

.underline-effect {
  display: inline-block;
  position: relative;
  padding-bottom: 1rem;
}
.underline-effect:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.5vw;
  width: 0;
  transition: width 0s ease, background 0.5s ease;
  z-index: -1;
}
.underline-effect:after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  height: 0.5vw;
  width: 0;
  background: #76d8cf;
  transition: width 0.5s ease;
  z-index: -1;
}
.underline-effect:hover:before {
  width: 100%;
  background: #76d8cf;
  transition: width 0.5s ease;
}
.underline-effect:hover:after {
  width: 100%;
  background: transparent;
  transition: all 0s ease;
}
</style>
