<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="./"
        ><p id="detken-text-nav">Detken Development</p>
        <nuxt-img id="anton_img-nav" src="/static/logo_d_white.png" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-text" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <NuxtLink
            class="nav-link" to="/">
            Home
          </NuxtLink>
          <NuxtLink class="nav-link" to="/projekte">Projekte</NuxtLink>
          <NuxtLink class="nav-link" to="/projects">Webdesign</NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>