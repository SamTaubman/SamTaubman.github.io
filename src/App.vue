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
        <h4 class="banner-text">Sam Taubman | Data Engineer</h4>
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
            label="Code" 
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
        <q-card-actions class="about-header">
          <div class="text-h5">About</div>
          <q-space />
          <q-btn flat icon="ion-close" color="black" @click="showAbout = false" />
        </q-card-actions>
        <q-card-section class="about-content">
          <img src="../public/profile.jpg" alt="Profile Picture" class="about-image" />
          <p>
            Hi, I'm a Data Engineer at 
            <a href="https://www.genevatrading.com/" target="_blank" class="geneva-link">
              Geneva Trading</a>.
            I'm also pursuing an M.S. in CS at
            <a href="https://catalog.gatech.edu/programs/computer-science-ms/" target="_blank" class="georgiatech-link">
              Georgia Tech
            </a>
            specializing in Computing Systems. In 2024 I worked on the SAMI project in the 
            <a href="https://dilab.gatech.edu/sami/" target="_blank" class="dilab-link">
              Design Intelligence Lab
            </a>
            at Georgia Tech under Dr. Ashok Goels supervision. <!-- During that time
            I worked on improving the SAMI project which matches students based on introduction posts
            by adding personality detection using a support vector machine ensemble with bagging model
            trained on the output of GPT-4o mini and BERT. -->
            <br>
            <br>
            I have an interest in databases, low level computing, networking,
            and algorithms. I also post LeetCode and other content to my  
            <a href="https://www.youtube.com/@samtaubman" target="_blank" class="youtube-link">
              YouTube
            </a>
            channel. Outside of that I enjoy working out, cooking, painting, and recently have gotten into chess.
          </p>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showResume">
      <q-card class="resume-dialog">
        <q-card-actions class="resume-header">
          <div class="text-h5">Resume</div>
          <q-btn 
            color="primary" 
            label="Download PDF" 
            class="download-btn"
            href="/SamTaubman_Resume2025.pdf" 
            target="_blank"
            download
            style="margin-left: 15px;"
          />
          <q-space />
          <q-btn flat icon="ion-close" color="black" @click="showResume = false" />
        </q-card-actions>
        
        <q-card-section class="resume-content">
          <div class="text-subtitle1"><strong>Sam Taubman</strong></div>
          <div>taubmansam@gmail.com | staubman6@gatech.edu | 828-406-8815</div>

          <q-separator spaced />

          <div class="text-h6">Education</div>
          <p><strong>Georgia Institute of Technology</strong> – M.S. in Computer Science (Computing Systems) - GPA: 4.0 -  Expected Aug 2026</p>
          <p><strong>Appalachian State University</strong> – B.S. in Chemistry - Honors Student, Chancellor’s Scholar, Dean’s List - May 2022</p>

          <q-separator spaced />

          <div class="text-h6">Experience</div>

          <p><strong>Data Engineer</strong> – Geneva Trading (Aug 2024 – Present)</p>
          <ul>
            <li>Created firm performance dashboards using <b>Qlik Sense</b> and <b>SQL</b>, enabling data-driven decisions</li>
            <li>Developed an automated exchange reconciliation job for JPX with <b>Python</b>, <b>SQL</b>, <b>KDB</b>, <b>Docker</b>, and <b>Nomad</b>, saving 30 minutes of manual work per day</li>
            <li>Built a website that integrates with <b>NetSuite</b> and gives the accounting team control over <b>SQL</b> databases using <b>Python - Flask</b> and <b>JavaScript - Vue.js</b></li>
            <li>Automated the Mixed Straddle tax report using <b>Qlik Sense</b> and <b>SQL</b>, saving one week of manual work per year</li>
          </ul>

          <p><strong>Data Engineer Intern</strong> – Geneva Trading (June 2024 – Aug 2024)</p>
          <ul>
            <li>Built a website that simplifies <b>SQL</b> database management and gives Researchers and Traders access to <b>MongoDB</b> stored market data definitions using <b>Python - Flask</b> and <b>JavaScript - Vue.js</b></li>
            <li>Wrote an abstract and scalable <b>Q</b> library in <b>C++</b> that translates between <b>KDB</b>, <b>ClickHouse</b>, and other databases giving Researchers and Traders access to more data</li>
          </ul>

          <p><strong>Research Assistant</strong> – PI: Dr. Ashok Goel, Design Intelligence Lab at Georgia Institute of Technology (May 2024 – Dec 2024)</p>
          <ul>
            <li>Implemented, trained and tested <b>GPT-3.5-turbo</b>, <b>GPT-4o mini</b>, and <b>BERT</b> with <b>Bagging SVM</b> and <b>MLP</b> 
              models to predict personality based on the Big Five personality traits for better student matching in online courses</li>
          </ul>

          <p><strong>Coding Instructor</strong> – Brains and Motion Education (Feb 2024 – May 2024)</p>
          <ul>
            <li>Taught <b>Python</b> and Scratch in after-school programs in the Chicago area, working with students from 2nd to 7th grade</li>
          </ul>

          <p><strong>Data Engineer Intern</strong> – Keena Healthcare Technology (May 2023 – Aug 2023)</p>
          <ul>
            <li>Automated the creation of monthly insurance reports using <b>SQL</b>, resulting in a reduction of 10 hours of manual work per month</li>
            <li>Created a real-time <b>SQL Server Agent</b> dashboard to keep clients informed about the progress of ongoing tasks</li>
          </ul>
          
          <p><strong>Data Analyst</strong> – Eurofins PSS at Biogen (Aug 2022 – May 2023)</p>
          <ul>
            <li>Recognized with the <b>Impact Award</b> for going above and beyond the typical duties to assist clients</li>
            <li>Developed a PDF data scraping tool using <b>Streamlit</b> and <b>Pandas</b> to automate data entry for protein concentration testing, reducing analysis time from 30 minutes to 5 minutes</li>
            <li>Streamlined sample data querying by implementing a <b>SQL</b> dashboard in <b>LIMS</b> (Lab Management Software)</li>
          </ul>

          <p><strong>Product Engineer Intern</strong> – Pneuma Respiratory (Mar 2022 – Aug 2022)</p>
          <ul>
            <li>Optimized the battery waveform of Pneuma's product, increasing battery life by 2 hours</li>
            <li>Enhanced the consistency of vapor dispensed by Pneuma’s product by refining and optimizing settings in <b>C++</b></li>
          </ul>
          
          <p><strong>Research Assistant</strong> – PI: Dr. Bob Swarthout, Swarthout Lab at Appalachian State University (Jan 2021 – May 2022)</p>
          <ul>
            <li>Published in <a href="https://ui.adsabs.harvard.edu/abs/2022AGUFM.A12E..07S/abstract" target="_blank">https://ui.adsabs.harvard.edu/abs/2022AGUFM.A12E..07S/abstract</a></li>
            <li>Developed a drone air sampling method with 97% accuracy to determine concentrations of oil seeps</li>
            <li>Designed and programmed software in <b>C++</b> to remotely control air pumps during drone flights</li>
          </ul>

          <p><strong>Founder and President</strong> – Significant Figures Chemistry Club (Oct 2021 – May 2022)</p>
          <ul>
            <li>Established an inclusive STEM community at App State University, driving membership to over 50 students</li>
            <li>Hosted club meetings, facilitating connections between students and alumni for valuable research opportunities</li>
          </ul>

          <q-separator spaced />

          <div class="text-h6">Skills</div>
          <p><strong>Backend:</strong> Python, Flask, C++, Java</p>
          <p><strong>Frontend:</strong> JavaScript, Vue.js, Quasar, HTML, CSS, Tkinter</p>
          <p><strong>Databases/Machine Learning:</strong> SQL Server, MongoDB, ClickHouse, KDB and q, NumPy, pandas, Matplotlib, scikit-learn</p>
          <p><strong>Data Analytics/Tools:</strong>Qlik Sense, Microsoft Suite, Git, GitHub, Bitbucket, Linux, Docker, Nomad</p>
        </q-card-section>
      </q-card>
    </q-dialog>

  <q-dialog v-model="showProjects">
    <q-card class="projects-dialog">
      <q-card-actions class="projects-header">
        <div class="text-h5">Code</div>
        <q-space />
        <q-btn flat icon="ion-close" color="black" @click="showProjects = false" />
      </q-card-actions>

      <q-card-section class="projects-content">
        <!-- GitHub Stats Section -->
        <div v-if="githubStats" class="github-stats-card">
          <div class="github-header">GitHub Stats</div>
          <q-separator />
          <q-list>
            <q-item>
              <q-item-section avatar><q-icon name="star" color="yellow" /></q-item-section>
              <q-item-section>Total Stars: {{ githubStats.totalStars }}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar><q-icon name="mdi-source-commit" /></q-item-section>
              <q-item-section>Total Commits ({{ currentYear }}): {{ githubStats.totalCommits }}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar><q-icon name="mdi-git" /></q-item-section>
              <q-item-section>Total PRs: {{ githubStats.totalPRs }}</q-item-section>
            </q-item>

            <q-item>
              <q-item-section avatar><q-icon name="mdi-bug" /></q-item-section>
              <q-item-section>Total Issues: {{ githubStats.totalIssues }}</q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="projects-grid">
          <q-card 
            v-for="repo in repositories" 
            :key="repo.id" 
            class="project-card"
            flat bordered
          >
            <q-card-section class="project-header">
              <q-icon name="mdi-github" class="project-icon" />
              <a :href="repo.html_url" target="_blank" class="project-title">
                {{ repo.name }}
              </a>
            </q-card-section>

            <q-card-section class="project-description">
              {{ repo.description || "No description available." }}
            </q-card-section>

            <q-separator />

            <q-card-section class="project-footer">
              <q-badge outline color="blue" :label="repo.language || 'Unknown'" />
              <q-space />
              <q-icon name="star" color="yellow" />
              <span>{{ repo.stargazers_count }}</span>
            </q-card-section>
          </q-card>
        </div>
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
      showResume: false,
      showProjects: false,
      githubStats: null,
      repositories: [],
      currentYear: new Date().getFullYear()
    };
  },
  async created() {
    await this.fetchGitHubStats();
    await this.fetchRepositories();
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

    onResume() {
      this.showResume = true;
    },

    onProjects() {
      this.showProjects = true;
    },

    onToggle() {
      alert('Banner dismissed.');
    },

    async fetchGitHubStats() {
      try {
        const userResponse = await fetch("https://api.github.com/users/SamTaubman");
        const userData = await userResponse.json();

        const reposResponse = await fetch(userData.repos_url);
        const repos = await reposResponse.json();
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        const eventsResponse = await fetch(`https://api.github.com/users/SamTaubman/events`);
        const events = await eventsResponse.json();
        const totalPRs = events.filter(event => event.type === "PullRequestEvent").length;

        const issuesResponse = await fetch(`https://api.github.com/search/issues?q=author:SamTaubman`);
        const issuesData = await issuesResponse.json();
        const totalIssues = issuesData.total_count;

        let totalCommits = 0;
        for (const repo of repos) {
          const commitsResponse = await fetch(`https://api.github.com/repos/SamTaubman/${repo.name}/commits?author=SamTaubman`);
          const commits = await commitsResponse.json();
          totalCommits += commits.length;
        }

        this.githubStats = {
          totalStars,
          totalCommits,
          totalPRs,
          totalIssues
        };
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    },

    async fetchRepositories() {
      try {
        const response = await fetch("https://api.github.com/users/SamTaubman/repos");
        this.repositories = await response.json();
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    }
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
  width: 60vw !important;
  max-width: 1200px !important;
  height: 55vh;
  max-height: 55vh;
  padding: 30px;
  border-radius: 12px;
}

.about-content {
  overflow: hidden;
}

.about-image {
  width: 175px;
  height: auto;
  flex-shrink: 0;
  border-radius: 25%;
  float: left;
  margin-right: 20px;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

@media (max-width: 1024px) {
  .about-image {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .about-image {
    width: 100px;
  }
}

.about-image:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
}

.about-content p {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  color: #000000;
}

.geneva-link {
  color: #013448;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.geneva-link:hover {
  /*color: #ff4500;*/
  text-decoration: underline;
}

.georgiatech-link {
  color: #B3A369;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.georgiatech-link:hover {
  /*color: #ff4500;*/
  text-decoration: underline;
}

.dilab-link {
  color: #6dd47f;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.dilab-link:hover {
  /*color: #ff4500;*/
  text-decoration: underline;
}

.youtube-link {
  color: #ff0000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
}

.youtube-link:hover {
  /*color: #ff4500;*/
  text-decoration: underline;
}

.resume-dialog {
  width: 90vw !important;
  max-width: 1200px !important;
  height: 80vh;
  max-height: 80vh;
  padding: 30px;
  border-radius: 12px;
}

.resume-content {
  overflow: hidden;
}

.resume-image {
  width: 175px;
  height: auto;
  flex-shrink: 0;
  border-radius: 25%;
  float: left;
  margin-right: 20px;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

@media (max-width: 1024px) {
  .resume-image {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .resume-image {
    width: 100px;
  }
}

.resume-image:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
}

.resume-header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 1000;
  padding: 15px 10px;
  border-bottom: 1px solid #ddd;
}

.resume-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 15px;
  margin-top: 15px;
  max-height: calc(80vh - 100px);
}

.resume-content p {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  color: #000000;
}

.projects-dialog {
  width: 90vw !important;
  max-width: 1200px !important;
  height: 80vh;
  max-height: 80vh;
  padding: 30px;
  border-radius: 12px;
}

.projects-content {
  overflow: hidden;
}

.projects-image {
  width: 175px;
  height: auto;
  flex-shrink: 0;
  border-radius: 25%;
  float: left;
  margin-right: 20px;
  object-fit: cover;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

@media (max-width: 1024px) {
  .projects-image {
    width: 120px;
  }
}

@media (max-width: 768px) {
  .projects-image {
    width: 100px;
  }
}

.projects-image:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
}

.projects-content p {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 500;
  color: #000000;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ensures equal sizing */
  gap: 16px;
  justify-content: center;
}

.project-card {
  width: 220px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.project-image {
  width: 100%;
  height: 50px;
  object-fit: cover;
}

.landscape {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
}

</style>
