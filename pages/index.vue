<template>
  <div>
    <main>
      <div class="container-fluid" id="lettering-container">
        <Lettering />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3"></div>
          <div class="col-md-6 col-12">
            <p id="welcome-text">
              Wir helfen Anwaltskanzleien dabei, ihre Mandantengewinnung durch
              eine moderne Website zu verbessern. Das Ganze hilft beim
              Vertrauensaufbau bei potentiellen Mandanten und verhindert, dass
              potentielle Mandanten zum Konkurrenten abspringen.
            </p>
          </div>
        </div>
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
