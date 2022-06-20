<template>
  <div>
    <Navbar />

    <main>
      <div class="container-fluid" id="lettering-container">
        <Lettering />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 col-12">
            <p id="welcome-text">
              Wir helfen Anwaltskanzleien dabei, durch eine psychologisch und suchmaschinenoptimierte Website A und B 
              innerhalb von 4-10 Wochen zu erreichen, das Ganze ohne Schmerzpunkt X und mit Y.
            </p>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

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
