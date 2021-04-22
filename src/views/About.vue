<template>
  <div id="about" class="w-full">
    <div class="max-w-3xl">
      <h2 class="text-6xl pb-10 uppercase md:text-9xl">About me</h2>
      <h3 class="text-3xl md:text-5xl pb-3">Hey, mein name ist Florian</h3>
      <p class="text-lg">
        und das ist meine Portfolio-Website. Ich komme aus Oppenheim, einem
        kleinen Städtchen am Rhein. Ich bin gelernter Fachinformatiker &
        studiere derzeit im letzten Studienjahr Medieninformatik. In den letzten
        Jahren habe ich ein großes Interesse an der Web-Entwicklung gefunden,
        weswegen ich mich auch zusammen mit meiner Schwester in diesem Bereich
        selbstständig gemacht habe. <br />
        Scroll gerne weiter!
      </p>
      <a
        href="src/assets/Lebenslauf_Florian-Schmidt.pdf"
        download="CV-FlorianSchmidt"
        class="button underline-effect py-5 text-xl z-0"
        >Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 inline-block mb-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {},
});
</script>

<style></style>
