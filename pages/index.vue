<template>
  <div>
    <main>
      <div class="container-fluid" id="lettering-container">
        <Lettering />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p id="welcome-text">
              Wir helfen Anwaltskanzleien dabei, ihre Mandantengewinnung durch
              eine moderne Webseite zu verbessern. Mit unseren durchdachten
              Techniken verhindern wir, dass potenzielle Mandanten und
              Mitarbeiter zum Konkurrenten abspringen und hilft beim
              Vertrauensaufbau von Interessenten.
            </p>
          </div>
        </div>
        <hr />
        <TextWrapper class="mt-5" style="font-size: 24px">
          <h2 class="h3">
            Kredibilität steigern, Vertrauen gewinnen, Mandanten und Mitarbeiter
            anziehen
          </h2>
          <p>
            Wussten Sie, dass eine Internetseite laut Studien etwa 50
            Millisekunden hat, um beim Besucher einen guten ersten Eindruck zu
            hinterlassen? Besonders als Anwaltskanzlei ist es wichtig, diesen
            kritischen ersten Eindruck zu nutzen. So können sie den Besuchern
            ihrer Internetseite direkt Vertrauen und Professionalität
            vermitteln. Profitieren Sie jetzt von unserem Expertenwissen und
            lassen Sie uns gemeinsam Ihre Vertrauenswürdigkeit, Expertise und
            Professionalität auf Ihre Online-Präsenz übertragen.
          </p>
          <h2 class="h3">Stellen Sie sich bitte einmal folgendes vor…</h2>
          <p>
            Sie sind ein Mandant, der eine Kanzlei sucht, um eine rechtliche
            Angelegenheit zu regeln. Sie finden durch eine Online-Recherche
            mehrere Kanzleien in Ihrer Nähe. Dabei fallen ihnen drei dieser
            Anwaltskanzleien besonders auf. Die erste Internetseite ist sehr
            veraltet und unprofessionell gestaltet. Bei der zweiten fällt Ihnen
            eine moderne Gestaltung, aber sie ist sonst nicht sehr intuitiv. Ein
            professionelles und modernes Design kennzeichnet die dritte
            Internetseite. Welche der drei würden Sie wählen?
          </p>
          <!-- <p>
            Um es in den Worten von Steve Jobs zu sagen: "Es geht nicht nur
            darum, wie es aussieht und sich anfühlt. Design bestimmt wie es
            funktioniert”
          </p> -->
          <h2 class="h3">Design</h2>
          <Testimonial author="Steve Jobs" author-job="Gründer, Apple">
            Es geht nicht nur darum, wie es aussieht und sich anfühlt. Design
            bestimmt wie es funktioniert
          </Testimonial>
          <p>
            Professionelles und vertrauenswürdiges Design lassen sich besonders
            darin finden, wie intuitiv die Handhabung in Kombination mit der
            Gestaltung ist. Deshalb variiert die Qualität der Internetseiten
            auch so stark. Oft wird die Gestaltung oder Handhabung in Angriff
            genommen. Aber nicht immer beides.
          </p>

          <p>
            Sowohl Mandanten, als auch arbeitssuchende Anwälte können sie
            deshalb leichter auf Sie aufmerksam machen.
          </p>

          <p>Wir übernehmen diese Aufgabe gerne für Sie.</p>
          <p>
            Detken Design hat sich auf das Erstellen von Internetseiten von
            Anwaltskanzleien spezialisiert.
          </p>
        </TextWrapper>
      </div>
    </main>
  </div>
</template>

<style scoped>
#welcome-text {
  text-align: center;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Navbar from '~/components/Navbar.vue'
import Lettering from '~/components/Lettering.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { Navbar, Lettering, Footer },
})
</script>
