<script setup lang="ts">
//IMPORT COMPONENTS
import Gitstats from "@/components/Gitstats.vue";
// STUFF
</script>
<template>
    <img alt="hpware" class="logo" src="https://storage.hpware.hwtw.cc/img/index-pfp.png" />
  <span>Pronouns: he/him</span><br>
  <hr>
  <section id="mytools">
  <h3>使用的工具</h3>
  <p>網頁: VS Code, Webstorm, Vim </p>
  <p>Python: VS Code, PyCharm</p>
  <p>OS: Windows 11, Ubuntu 24.01, MacOS</p>
  <p>Self Hosted: <a href="https://git.hwtw.cc">Git 伺服器 Gitea</a>(只是很爛)
    <br class="mobilei"><a href="https://zz.yuanhau.com">檔案分享伺服器 Zipline</a>(不會到期)
    <br class="mobilei"><a href="https://vd.yuanhau.com">使用者調查系統 Umami</a></p>
  </section>
  <hr>
  <section id="learn">
  <h3>我想學的</h3>
  <span>VueJS</span> <br class="mobilei">
<span>Python</span> <br class="mobilei">
<span>mySQL</span> <br class="mobilei">
<span>NextJS</span> <br class="mobilei">
    <span>React Expo</span>
  </section>
  <hr>
  <section id="stats">
  <h3>GitHub Stats</h3>
      <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/overview.svg#gh-dark-mode-only" />&nbsp;&nbsp;
      <img src="https://raw.githubusercontent.com/hpware/gitstats/master/generated/languages.svg#gh-dark-mode-only" />

  </section>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;
  align-items: center;
  border-radius: 50%;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
.gitstats {
  display: block;
  margin: 0 auto 2rem;
  transition: filter 300ms;

}
.gitstats:hover {
  filter: drop-shadow(0 0 2em #444444aa);
}
br.mobilei {
  display:none;
}
@media (max-width: 1274px) {
  br.mobilei{
    display: block;
  }
}
</style>
