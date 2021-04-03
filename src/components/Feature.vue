<template>
  <div class="flex items-center justify-center min-h-screen">
    <div id="feature-text" class="z-0 absolute">
      <h1
        class="dark:text-white uppercase text-center min-w-full text-feature font-black mb-96"
      >
        <p class="tracking-wider">Florian</p>
        <p class="leading-10">Schmidt</p>
      </h1>
    </div>
    <div id="feature-img" class="z-10 flex justify-center mb-80 w-2/4">
      <img
        class=""
        src="../assets/portrait_florian_small.png"
        alt="Portrait-Florian"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Feature",
  setup() {},
});
</script>

<style></style>
