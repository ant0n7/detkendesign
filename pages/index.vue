<template>
  <div>
    <Navbar active="home" />
    
    <div class="container-fluid">
    
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MainHeader from '~/components/MainHeader.vue'
import Navbar from '~/components/Navbar.vue'

export default Vue.extend({
    name: "IndexPage",
    components: { MainHeader, Navbar }
})
</script>
