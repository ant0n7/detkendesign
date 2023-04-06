<template>
  <div>
    <PageTitle>&Uuml;ber uns</PageTitle>

    <main>
      <div class="container">
        <TextWrapper>
          <p>
            Wir planen und realisieren Webdesign für Anwaltskanzleien. Dabei
            setzen wir durchdachte Techniken ein, die potenzielle Kunden und
            Mitarbeiter überzeugen. Dadurch verhindern wir unter anderem, dass
            potenzielle Mandanten und Mitarbeiter zum Konkurrenten abspringen
            und helfen beim Vertrauensaufbau von Interessenten.
          </p>
        </TextWrapper>
        <div class="team">
          <div class="team-title-row">
            <div class="col-md-6 col-12">
              <h2 class="team-title">Anton Detken</h2>
            </div>
            <div class="col-md-3"></div>
          </div>
          <div class="row team-desc-row">
            <div class="col-md-2 col-12">
              <nuxt-img
                class="team-img"
                src="/team/detken_anton_portrait.jpg"
              />
              <p class="team-job" style="opacity: 50%">
                Gesch&auml;ftsf&uuml;hrer
              </p>
            </div>
            <div class="col-md-10 col-12">
              <p>
                <em
                  >“Gutes Design ist unsichtbar - Es funktioniert einfach.”</em
                >
              </p>
              <p>
                Anton Detken kennt sich durch seine Erfahrung bei Google bestens
                im Bereich der Informatik aus. Während seiner Zeit dort
                entdeckte er seine Leidenschaft für Webdesign.
              </p>
              <p>
                Seit mehreren Jahren bildet er sich in diesem Bereich stets
                weiter, um seinen Kunden die bestmöglichen Ergebnisse zu
                ermöglichen. Dabei hat er sich vor allem auf hochqualitatives
                und konvertierendes Design und performanceorientiertes
                Programmieren spezialisiert.
              </p>
              <p>
                <br />
                <a href="mailto:anton@detkendesign.com"
                  >anton@detkendesign.com</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Über uns - Detken Design',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Wir planen und realisieren Webdesign für Anwaltskanzleien. Dabei setzen wir durchdachte Techniken ein, die potenzielle Kunden und Mitarbeiter überzeugen. Dadurch verhindern wir unter anderem, dass Ihre Website-Besucher zu Ihren Konkurrenten abspringen.',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Wir planen und realisieren Webdesign für Anwaltskanzleien. Dabei setzen wir durchdachte Techniken ein, die potenzielle Kunden und Mitarbeiter überzeugen. Dadurch verhindern wir unter anderem, dass Ihre Website-Besucher zu Ihren Konkurrenten abspringen.',
      },
    ],
  },
}
</script>
