<template>
    <br>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-links">
                <a style="color:aqua" href="/?go=gh" target="_blank" rel="noopener">GitHub</a>
                <a style="color:aqua"href="/?go=ig" target="_blank" rel="noopener">Instagram</a>
                <a style="color:aqua" href="/?go=th" target="_blank" rel="noopener">Threads</a>
                <a style="color:aqua" href="/l.htm?go=oldsite" target="_blank" rel="noopener">舊網站</a>
                <a style="color:goldenrod"href="/?go=em" target="_blank" rel="noopener">Email</a>
            </div>
            <div class="footer-copyright">
                <span>© {{ new Date().getFullYear() }} hpware</span><br>
                <span>Hosted by<a style="color:darksalmon" href="/l.htm?go=vercelcom" target="_blank" rel="noopener">Vercel</a>, Powered by<a style="color:darksalmon" href="/l.htm?go=vitejsdev" target="_blank" rel="noopener">Vitejs</a></span>
            </div>
        </div>
        
    </div>
</template>
<style>
.footer {
    text-align:center;
}
</style>