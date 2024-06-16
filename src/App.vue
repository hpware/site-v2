<script setup lang="ts">
//IMPORT COMPONENTS
import Footer from './components/Footer.vue'
import Socials from'./components/Socials.vue'
import SideStuff from './components/SideStuff.vue'
import Loadingbar from './components/Loadingbar.vue'
import Gitstats from './components/Gitstats.vue'
// REDIRECT LINKS
const golink = new URLSearchParams(window.location.search).get('go');
if (golink == "ig") {window.location.href = "https://www.instagram.com/yh_.5_26/"; }
else if (golink == "gh") {window.location.href = "https://github.com/hpware";}
else if (golink == "th") {window.location.href = "https://threads.net/yh_.5_26";}
else if (golink == "blog") {window.location.href = "https://blog.hpware.hwtw.cc"}
else if (golink == "pgp") {window.location.href = "pgp.txt"}
else if (golink == "res") {window.location.href = "https://github.com/hpware/site-v2"}
else if (golink == "em") {window.location.href = "mailto:hw@hwtw.cc"}
</script>
<template>
  <header>
    <img alt="hpware" class="logo" style="border-radius: 50%;" src="https://storage.hpware.hwtw.cc/img/index-pfp.png" />
    <div class="wrapper">
      <Socials />
    </div>

  </header>
  <main>
     <SideStuff />
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
  }
</style>
