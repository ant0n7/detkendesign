<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <MainHeader />
      </div>
      <div class="col-3"></div>
    </div>

    <NuxtLink to="projekte">Projekte</NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/components/MainHeader.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { MainHeader }
})
</script>
