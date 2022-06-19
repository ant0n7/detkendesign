<template>
  <div>
    <Navbar active="home" />

    <main>
      <div class="container-fluid" id="lettering-container">
        <Lettering />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 col-12">
            <p id="welcome-text">
              Wir helfen Anwaltskanzleien dabei, mehr und bessere Kunden
              innerhalb von 8 Wochen zu erreichen, das Ganze ohne Ausgaben
              f&uuml;r Werbekosten.
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
import MainHeader from '~/components/MainHeader.vue'
import Navbar from '~/components/Navbar.vue'
import Lettering from '~/components/Lettering.vue'
import Footer from '~/components/Footer.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: { MainHeader, Navbar, Lettering, Footer },
})
</script>
