<script setup lang="ts">
import NavSpace from '@/components/nav-space.vue'
</script>
<template>
  <nav>
    <h1>吳元皓</h1>
    <RouterLink to="/">Home</RouterLink><NavSpace/>
    <a href="https://yuanhau.com">Blog</a><NavSpace/>
    <RouterLink to="/about">About</RouterLink><NavSpace/>
    <RouterLink to="/projects">Projects</RouterLink><span class="mobile">&nbsp;</span>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
      <br><br>
        <a style="color:aqua" href="/go?l=gh" target="_blank" rel="noopener">GitHub</a>&nbsp;
        <a style="color:aqua"href="go/?l=ig" target="_blank" rel="noopener">Instagram</a>&nbsp;
        <a style="color:aqua" href="go/?l=th" target="_blank" rel="noopener">Threads</a>&nbsp;
        <a style="color:aqua" href="/go?l=oldsite" target="_blank" rel="noopener">舊網站</a>&nbsp;
        <a style="color:goldenrod" href="/go?l=em" target="_blank" rel="noopener">Email</a><br>
        <p>© {{ new Date().getFullYear() }} hpware</p>
</footer>
</template>

<style scoped>
</style>