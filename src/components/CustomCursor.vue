<template>
  <div class="z-50 hidden md:block" id="custom-cursor"></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import gsap from "gsap";

export default defineComponent({
  name: "CustomCursor",
  setup() {
    onBeforeMount(() => {
      document.addEventListener("DOMContentLoaded", function (event) {
        var cursor = document.querySelector("#custom-cursor");
        var initCursor = false;

        window.onmousemove = function (event: MouseEvent) {
          var mouseX = event.clientX;
          var mouseY = event.clientY;

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
  },
});
</script>

<style scoped>
#custom-cursor {
  position: fixed;
  opacity: 0;
  pointer-events: none;
  mix-blend-mode: difference;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  transition: transform 350ms ease;
  transform: translate(-50%, -50%) scale(0.3);
  z-index: 1000;
}
#custom-cursor--link {
  transform: translate(-50%, -50%) scale(1);
}

#box {
  color: beige;
  min-height: 100%;
  overflow-x: hidden;
}
</style>
