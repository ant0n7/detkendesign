<template>
  <div>
    <a :href="projectLink" :title="projectTitle" target="_blank" rel="noopener">
      <nuxt-img
        class="desktop"
        :src="'/projects/' + projectImage + '-desktop.jpg'"
        :alt="projectAlt"
      />
      <nuxt-img
        class="mobile"
        :src="'/projects/' + projectImage + '-mobile.jpg'"
        :alt="projectAlt"
      />
    </a>
    <h3 class="img-desc">{{ projectTitle }}</h3>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    projectTitle: String,
    projectAlt: String,
    projectLink: String,
    projectImage: String,
  },
}
</script>
