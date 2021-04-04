<template>
  <progress
    class="z-50 fixed left-0 appearance-none w-full h-1 border-none bg-transparent"
    max="100"
    value="0"
  ></progress>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default defineComponent({
  name: "ProgressBar",
  setup() {
    onMounted(() => {
      scrollAnimation();
      console.log("Test");
    });
    function scrollAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to("progress", {
        value: 100,
        ease: "none",
        scrollTrigger: { scrub: 0.3 },
      });
    }
  },
});
</script>

<style>
progress::-moz-progress-bar,
progress::-webkit-progress-value {
  background-color: #76d8cf !important;
  background-attachment: fixed;
}
progress::-webkit-progress-value {
  background: #76d8cf !important;
  background-attachment: fixed;
}
progress::-webkit-progress-bar {
  background: transparent;
}
</style>
