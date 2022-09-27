<template>
  <div class="quote">
    <p>
      <slot />
    </p>
    <p>
      <strong>{{ author }}</strong>
      <br>
      {{ authorJob }}
    </p>
  </div>
</template>

<style scoped>
.quote {
  border-left: 5px solid white;
  padding-left: 1em;
  margin: 1.5em 10px;
  font-size: 1.2em;
  line-height: 1.6;
  font-style: italic;
}
</style>

<script>
export default {
  props: {
    author: String,
    authorJob: String
  }
}
</script>
