<template>
  <div class="quote">
    <p>
      <slot />
    </p>
    <p>
      <strong>{{ author }}</strong>
      <br />
      {{ authorJob }}
    </p>
  </div>
</template>

<style scoped>
.quote {
  border-left: 1px solid rgba(222, 226, 230, 0.49412);
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
    authorJob: String,
  },
}
</script>
