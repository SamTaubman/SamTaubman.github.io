<template>
  <div class="container">

    <q-banner
      class="overlay-banner"
      dense
      inline-actions
      color="primary"
      text-color="white"
    >
      <template v-slot:avatar>
        <q-icon name="announcement" color="white" />
      </template>
      <template v-slot:action>
        <div class="banner-actions">
          <q-btn flat label="LinkedIn" color="black" @click="onLinkedIn" />
          <q-btn flat label="YouTube" color="black" @click="onYouTube" />
          <q-btn flat label="GitHub" color="black" @click="onGitHub" />
          <q-btn flat label="Email" color="black" @click="onEmail" />
          <q-btn flat label="About" color="black" @click="onAbout" />
          <q-btn flat label="Resume" color="black" @click="onResume" />
          <q-btn flat label="Projects" color="black" @click="onProjects" />
          <q-btn flat label="Toggle" color="black" @click="onToggle" />
        </div>
      </template>
    </q-banner>

    <div class="landscape">
      <div class="mountain"></div>
      <div class="mountain mountain-2"></div>
      <div class="mountain mountain-3"></div>
      <div class="sun-container sun-container-1"></div>
      <div class="sun-container">
        <div class="sun"></div>
      </div>
      <div class="cloud"></div>
      <div class="cloud cloud-1"></div>
      <div class="sun-container sun-container-reflection">
        <div class="sun"></div>
      </div>
      <div class="light"></div>
      <div class="light light-1"></div>
      <div class="light light-2"></div>
      <div class="light light-3"></div>
      <div class="light light-4"></div>
      <div class="light light-5"></div>
      <div class="light light-6"></div>
      <div class="light light-7"></div>
      <div class="water"></div>
      <div class="splash"></div>
      <div class="splash delay-1"></div>
      <div class="splash delay-2"></div>
      <div class="splash splash-4 delay-2"></div>
      <div class="splash splash-4 delay-3"></div>
      <div class="splash splash-4 delay-4"></div>
      <div class="splash splash-stone delay-3"></div>
      <div class="splash splash-stone splash-4"></div>
      <div class="splash splash-stone splash-5"></div>
      <div class="lotus lotus-1"></div>
      <div class="lotus lotus-2"></div>
      <div class="lotus lotus-3"></div>
      <div class="trash-container"></div>
      <div class="front">
        <div class="stone"></div>
        <div class="grass"></div>
        <div class="grass grass-1"></div>
        <div class="grass grass-2"></div>
        <div class="reed"></div>
        <div class="reed reed-1"></div>
      </div>
    </div>
    <div class="logo"></div>
    <h1 class="money"></h1>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    onLearnMore() {
      alert('Learn more about this scene!');
    },
    onDismiss() {
      alert('Banner dismissed.');
    },
  },
};
</script>

<style src="./assets/styles.css"></style>

<style>
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay-banner {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 100%;
  /* max-width: 100px; */
  border-radius: 0 0 8px 8px;
}

.landscape {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}


</style>
