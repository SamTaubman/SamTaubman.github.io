<template>
  <div class="container">

    <q-banner
      class="overlay-banner"
      dense
      inline-actions
      color="primary"
      text-color="white"
    >
      <div class="banner-left">
        <h4 class="banner-text">Sam Taubman</h4>
      </div>
      <template v-slot:avatar>
        <q-icon name="announcement" color="white" />
      </template>
      <template v-slot:action>
        <div class="banner-actions">
          <q-btn 
            flat
            class="btn-linkedin" 
            @click="onLinkedIn" 
            icon="ion-logo-linkedin" 
          />
          <q-btn 
            flat
            color="black" 
            class="btn-youtube" 
            @click="onYouTube" 
            icon="ion-logo-youtube" 
          />
          <q-btn 
            flat
            class="btn-github" 
            @click="onGitHub" 
            icon="ion-logo-github" 
          />
          <a href="mailto:taubmansam@gmail.com">
            <q-btn
              flat
              class="btn-email" 
              icon="email" 
            />
          </a>
          <q-btn 
            flat 
            label="About" 
            color="black" 
            class="btn-about" 
            @click="onAbout" 
          />
          <q-btn 
            flat 
            label="Resume" 
            color="black" 
            class="btn-resume" 
            @click="onResume"
          />
          <q-btn 
            flat 
            label="Projects" 
            color="black" 
            class="btn-projects" 
            @click="onProjects"
          />
          <q-btn 
            flat
            class="btn-mode" 
            @click="onSwitchMode" 
            icon="ion-moon"
          />
<!--           <q-btn 
            flat
            class="btn-toggle" 
            @click="onToggle" 
            icon="ion-close"
          /> -->
        </div>
      </template>
    </q-banner>

    <q-dialog v-model="showAbout">
      <q-card class="about-dialog">
        <q-card-actions align="right">
          <q-btn flat icon="ion-close" color="black" @click="showAbout = false" />
        </q-card-actions>
        <q-card-section>
          <div class="text-h6">About Me</div>
        </q-card-section>
        <q-card-section class="about-content">
          <img src="../public/profile.jpg" alt="Profile Picture" class="about-image" />
          <p>Sup.</p>
        </q-card-section>
      </q-card>
    </q-dialog>

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
  data() {
    return {
      showAbout: false,
    };
  },
  methods: {
    onLinkedIn() {
      window.open('https://www.linkedin.com/in/samtaubman/', '_blank');
    },

    onYouTube() {
      window.open('https://www.youtube.com/@samtaubman', '_blank');
    },

    onGitHub() {
      window.open('https://github.com/SamTaubman', '_blank');
    },

    onAbout() {
      this.showAbout = true;
    },

    onToggle() {
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

.banner-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
}

.banner-text {
  font-size: 1.5rem;
  color: #000000;
  margin: 0;
}

.btn-linkedin .q-icon {
  color: #0077B5
}

.btn-youtube .q-icon {
  color: #FF0000
}

.btn-github .q-icon {
  color: #000000
}

.btn-email .q-icon {
  color: #ffffff;
  background-color: #089cff;
}

.btn-mode .q-icon {
  color: #000000
}

.btn-toggle .q-icon {
  color: #000000;
}

.banner-actions {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
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

.q-card {
  width: 100% !important;
}

.q-dialog {
  width: 100vw !important;
  max-width: 100vw !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-dialog {
  width: 90vw !important;
  max-width: 1200px !important;
  height: 80vh;
  max-height: 90vh;
  padding: 30px;
  border-radius: 12px;
}

.about-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.about-image {
  width: 150px;
  height: auto;
  border-radius: 25%;
  object-fit: cover;
  overflow: hidden;
}

.landscape {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

</style>
