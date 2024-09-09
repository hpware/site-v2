<script setup lang="ts">
import Link from "@/components/Link.vue";
</script>
<template>
  <h2>About Me</h2>
  <section id="aboutme">
    <h1>自我介紹 <a href='#aboutme'><Link/></a></h1>
    <p>我是一個學生，準備在臺灣就讀有關資訊工程的五專。</p>
    <p>熟悉 HTML, CSS , Vercel , Debian CLI 與 MacOS CLI </p>
    <p>國中畢業後，正要學習 Vuejs , .NET Core , Python , TypeScript 開發語言 :)</p>
    <p>對了所有我寫的東西都(應該)有包含PGP</p>
  </section>
  <br>
  <hr>
  <section id="certifications">
    <h1>檢定通過<a href='#certifications'><Link/></a></h1>
    <p style="font-size: 1.5em; padding-bottom: 0;">GEPT</p>
    <span>初級</span><br>
    <span>中級聽讀</span>
  </section>
</template>