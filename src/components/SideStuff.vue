<script setup lang="ts">
import Link from './Link.vue'
</script>
<template>
    <div>
        <section id="aboutme">
        <h1>自我介紹 <a href='#aboutme'><Link/></a></h1>
        <p>我是一個學生，準備在臺灣就讀有關資訊工程的五專。</p>
        <p>熟悉 HTML, CSS , Vercel , Debian CLI 與 MacOS CLI </p>
        <p>國中畢業後，正要學習 Vuejs , .NET Core , Python , TypeScript 開發語言 :)</p>
        </section>
        <br>
        <hr>
        <section id="certifications">
        <h1>檢定通過<a href='#certifications'><Link/></a></h1>
        <h2>GEPT</h2>
        <ul>
            <li>初級</li>
            <li>中級聽讀</li>
        </ul>
        </section>
        <br>
        <hr>
        <section id="projects">
        <h1>我的簡單 Projects<a href='#projects'><Link/></a></h1>
        <ul>
            <li>testconnectcenter (<a style="color:aquamarine" href="https://github.com/hpware/testconnectcenter">Source Code</a>) (<a href="https://testconnectcenter.azurewebsites.net">網站</a>)
            </li>
            <li>Site-V1 (<a style="color:aquamarine" href="https://github.com/hpware/hpware.github.io">Source Code</a>)(<a href="https://3002.hwtw.cc">網站</a>)</li>
            <li>Site-V2 (<a style="color:aquamarine" href="https://github.com/hpware/site-v2">Source Code</a>)(<a href="https://hpware.hwtw.cc">網站</a>)</li>
            <li>lovemusic.asia (<a style="color:aquamarine" href="/sourcecodena.html">Source Code</a>)(<a href="https://www.lovemusic.asia">網站</a>)</li>
        </ul>
        </section>
        <br>
        <hr>
        <section id="posts">
        <h1>Posts<a href='#posts'><Link/></a></h1>
        <ul>
            <li><a href="/l.htm?id=2">#2 機器人?</a></li>
            <li><a href="/l.htm?id=1">#1 Setting Up</a></li>
        </ul>
        </section>
        <br>
        <hr>
        <section id="socials">
        <h1>社群連結<a href='#socials'><Link/></a></h1>
        <ul style="list-style-type: none;"> 
            <li>Instagram <a href="/?go=ig">yh_.5_26</a></li>
            <li>Threads <a href="/?go=th">yh_.5_26</a></li>
            <li>GitHub <a href="/?go=gh">hpware</a></li>
        </ul>
        </section>
        <br>
        <hr>
    </div>
</template>
