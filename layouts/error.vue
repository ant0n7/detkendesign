<template>
  <div>
    <PageTitle v-if="error.statusCode === 404">Seite nicht gefunden.</PageTitle>
    <PageTitle v-else>Fehler</PageTitle>

    <p style="text-align: center"><NuxtLink to="/">Zurück zur Startseite</NuxtLink></p>
  </div>
</template>

<script>
export default {
  props: ['error'],	
  layout: 'error',
}
</script>