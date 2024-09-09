<script setup lang="ts">
import NavSpace from '@/components/nav-space.vue'
</script>
<template>
  <nav>
    <h1>吳元皓</h1>
    <RouterLink to="/">Home</RouterLink><NavSpace/>
    <a href="https://yuanhau.com">Blog</a><NavSpace/>
    <RouterLink to="/About">About</RouterLink><NavSpace/>
    <RouterLink to="/Projects">Projects</RouterLink><span class="mobile">&nbsp;</span>
  </nav>
  <main>
    <RouterView />
  </main>
  <footer>
      <br><br>
        <a style="color:aqua" href="/Go?l=gh" target="_blank" rel="noopener">GitHub</a>&nbsp;
        <a style="color:aqua"href="Go/?l=ig" target="_blank" rel="noopener">Instagram</a>&nbsp;
        <a style="color:aqua" href="Go/?l=th" target="_blank" rel="noopener">Threads</a>&nbsp;
        <a style="color:aqua" href="/Go?l=oldsite" target="_blank" rel="noopener">舊網站</a>&nbsp;
        <a style="color:Goldenrod" href="/Go?l=em" target="_blank" rel="noopener">Email</a><br>
        <p>© {{ new Date().getFullYear() }} hpware</p>
</footer>
</template>

<style scoped>
</style>