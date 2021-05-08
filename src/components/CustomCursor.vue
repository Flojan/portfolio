<template>
  <div v-if="!isTouchDevice()" class="z-50 block custom-cursor" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "CustomCursor",
  setup() {
    onBeforeMount(() => {
      isTouchDevice();
      document.addEventListener("DOMContentLoaded", function (event) {
        let cursor = document.querySelector(".custom-cursor");
        let links = document.querySelectorAll("a");
        let initCursor = false;

        for (let i = 0; i < links.length; i++) {
          var selfLink = links[i];

          selfLink.addEventListener("mouseover", function () {
            if (cursor) {
              cursor.classList.add("custom-cursor--link");
            }
          });
          selfLink.addEventListener("mouseout", function () {
            if (cursor) {
              cursor.classList.remove("custom-cursor--link");
            }
          });
        }

        window.onmousemove = function (event: MouseEvent) {
          let mouseX = event.clientX;
          let mouseY = event.clientY;

          if (!initCursor) {
            gsap.to(cursor, 0.3, {
              opacity: 1,
            });
            initCursor = true;
          }

          gsap.to(cursor, 0, {
            top: mouseY + "px",
            left: mouseX + "px",
          });
        };

        window.onmouseout = function () {
          gsap.to(cursor, 0.3, {
            opacity: 0,
          });
          initCursor = false;
        };
      });
    });

    function isTouchDevice() {
      if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      ) {
        return true;
      } else {
        return false;
      }
    }

    return { isTouchDevice };
  },
});
</script>

<style scoped>
.custom-cursor {
  width: 60px;
  height: 60px;
  position: fixed;
  opacity: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  border-radius: 50%;
  background-color: white;
  transition: transform 350ms ease;
  transform: translate(-50%, -50%) scale(0.3);
  z-index: 1000;
}

.custom-cursor--link {
  transform: translate(-50%, -50%) scale(1);
}
#box {
  color: beige;
  min-height: 100%;
  overflow-x: hidden;
}
</style>
