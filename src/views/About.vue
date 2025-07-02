<template>
  <div id="about" class="w-full">
    <div class="max-w-3xl">
      <h2 class="text-6xl pb-10 uppercase md:text-9xl">About me</h2>
      <h3 class="text-3xl md:text-5xl pb-5">
        Hallo, ich bin Florian aus Oppenheim am Rhein.
      </h3>
      <p class="text-xl">
        Als ausgebildeter Fachinformatiker (IHK) und einem Bachelor in
        Medieninformatik (B.Sc.) arbeite ich als Web-Entwickler bei DB Systel
        GmbH in einem agilen DevOps-Team.<br /><br />

        Meine Schwerpunkte liegen in der Web-Entwicklung mit Vue/Nuxt und
        TypeScript sowie der Implementierung/Optimierung von CI/CD-Pipelines für
        zuverlässige Softwarebereitstellungen. Dabei verbinde ich Kreativität
        mit Technik, um nutzerzentrierte und barrierefreie Lösungen zu
        entwickeln.<br /><br />

        Bei DB Systel GmbH trage ich zur Digitalisierung der Deutschen Bahn bei,
        indem ich innovative und moderne Weblösungen entwickle, die sowohl
        technisch robust als auch benutzerfreundlich sind. Als Teil eines
        interdisziplinären DevOps-Teams übernehme ich Verantwortung für den
        gesamten Softwareentwicklungszyklus – von der Konzeption über die
        Entwicklung bis hin zum Betrieb und der kontinuierlichen Verbesserung
        unserer Anwendungen. Dabei pflege ich auch den direkten Kontakt zu
        unseren Kunden, um deren Anforderungen zu verstehen und maßgeschneiderte
        Lösungen zu entwickeln, die ihre spezifischen Bedürfnisse erfüllen.<br /><br />

        Meine Leidenschaft gilt der kontinuierlichen Verbesserung von
        Entwicklungsprozessen durch Automatisierung und der Förderung von
        Barrierefreiheit in der Webentwicklung. Ich glaube fest daran, dass
        Technologie für alle zugänglich sein sollte, weshalb ich mich als
        Treiber für barrierefreie Anwendungen engagiere. Dabei setze ich auf
        bewährte Standards wie WCAG-Richtlinien und moderne Accessibility-Tools,
        um sicherzustellen, dass unsere Webanwendungen von allen Nutzern
        verwendet werden können.
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
