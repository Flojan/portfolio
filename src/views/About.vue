<template>
  <div id="about" class="w-full">
    <div class="max-w-3xl">
      <h2 class="text-6xl pb-10 uppercase md:text-9xl">About me</h2>
      <h3 class="text-3xl md:text-5xl pb-5">Hallo, mein Name ist Florian</h3>
      <p class="text-xl">
        und das ist meine Portfolio-Website. Ich komme aus Oppenheim, einem
        kleinen Städtchen am Rhein. Ich bin gelernter Fachinformatiker & aktuell
        am Ende meines Studiums in der Fachrichtung Medieninformatik. Sobald ich
        das Kolloquium meiner Bachelor-Arbeit gehalten habe, bin ich bereit für
        neue Herausforderungen. In den letzten Jahren habe ich ein großes
        Interesse an der Web-Entwicklung gefunden, weswegen ich mich zusammen
        mit meiner Schwester in diesem Bereich selbstständig gemacht habe. Um
        einen Ausgleich für das ständige Arbeiten am Computer zu finden, spiele
        ich von klein auf gerne Fußball.
      </p>
      <router-link
        @click="scrollTo('#experience')"
        to="#experience"
        class="inline-block mr-4"
      >
        <div class="mt-4 flex flex-row text-xl items-center">
          <p>Scroll gerne weiter!</p>
          <svg
            class="w-8 h-8 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 17l-4 4m0 0l-4-4m4 4V3"
            ></path>
          </svg>
        </div>
      </router-link>
      <!-- <a
        href="/CV_Florian-Schmidt.pdf"
        download="CV-FlorianSchmidt"
        class="button underline-effect py-5 text-xl z-0"
        >Download CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 inline-block mb-2"
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
      </a> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

export default defineComponent({
  name: "About",
  setup() {
    function scrollTo(hash: string) {
      gsap.registerPlugin(ScrollToPlugin);
      gsap.to(window, { duration: 1, scrollTo: { y: hash, offsetY: 130 } });
      console.log(hash);
    }
    return { scrollTo };
  },
});
</script>

<style></style>
