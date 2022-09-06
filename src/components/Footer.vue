<template>
  <div class="flex justify-center pb-5 text-black dark:text-white">
    <a class="flex" href="https://designzigartig.de/" target="_blank" rel="noopener noreferrer"
      >made with&nbsp;
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#76d8cf">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      &nbsp;by designzigartig®</a
    >
  </div>
  <div class="flex justify-center space-x-5 pb-7 text-black dark:text-white">
    <a class="flex" href="https://designzigartig.de/impressum" target="_blank" rel="noopener noreferrer">Impressum</a>
    <a class="flex" href="https://designzigartig.de/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutz</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  setup() {},
});
</script>

<style></style>
