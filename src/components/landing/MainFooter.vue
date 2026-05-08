<script setup lang="ts">
import { logoUrl } from '../../constants'
import { Instagram, Mail, Phone } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
    <!-- Decor Gradient -->
    <div class="absolute right-0 bottom-0 w-[60rem] h-[60rem] bg-blue-600/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
    
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-5 gap-16 mb-24 text-center lg:text-left">
        <!-- Brand -->
        <div class="lg:col-span-2 space-y-10">
          <img :src="logoUrl" alt="ASIQ Logo White" class="h-12 w-auto brightness-0 invert mx-auto lg:mx-0" />
          <p class="text-slate-400 text-xl font-light leading-relaxed max-w-sm mx-auto lg:mx-0">
             ASIQ hadir sebagai asisten digital terpercaya untuk mendukung kegiatan belajar mengajar Anda menjadi lebih bermakna.
          </p>
          <div class="flex items-center justify-center lg:justify-start gap-4">
            <a v-for="icon in [Instagram, Mail]" :key="icon" href="#" class="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all duration-500 group shadow-lg border border-white/5">
              <component :is="icon" class="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div class="space-y-10">
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Produk</h4>
          <ul class="space-y-6">
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Fitur Utama</a></li>
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Dokumentasi</a></li>
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Analisis Multi-Agent</a></li>
          </ul>
        </div>

        <div class="space-y-10">
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Dukungan</h4>
          <ul class="space-y-6">
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Pusat Bantuan</a></li>
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Komunitas</a></li>
             <li><a href="#" class="text-slate-400 hover:text-white transition-colors font-bold text-sm tracking-wide">Kebijakan Privasi</a></li>
          </ul>
        </div>

        <!-- Contact Detail -->
        <div class="space-y-10 text-center lg:text-left">
          <h4 class="text-xs font-black uppercase tracking-[0.3em] text-blue-500">Hubungi Kami</h4>
          <div class="space-y-8">
            <a href="mailto:marketing@asiq.id" class="flex flex-col lg:flex-row items-center gap-4 text-slate-300 hover:text-white group justify-center lg:justify-start">
              <div class="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-blue-600 transition-all duration-500 shadow-xl border border-white/5">
                <Mail class="h-5 w-5" />
              </div>
              <div class="flex flex-col text-center lg:text-left">
                <span class="text-[9px] uppercase font-black text-slate-500 tracking-[0.2em] mb-1">Email Resmi</span>
                <span class="font-black text-sm tracking-tight">marketing@asiq.id</span>
              </div>
            </a>
            <a href="#" class="flex flex-col lg:flex-row items-center gap-4 text-slate-300 hover:text-white group justify-center lg:justify-start">
              <div class="w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl group-hover:bg-blue-600 transition-all duration-500 shadow-xl border border-white/5">
                <Phone class="h-5 w-5" />
              </div>
              <div class="flex flex-col text-center lg:text-left">
                <span class="text-[9px] uppercase font-black text-slate-500 tracking-[0.2em] mb-1">Layanan CS</span>
                <span class="font-black text-sm tracking-tight">+62 821-3178-2622</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <p class="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">© 2024 ASIQ INDONESIA. SELURUH HAK CIPTA DILINDUNGI.</p>
        <div class="flex items-center gap-10">
           <a v-for="link in ['Privasi', 'Layanan', 'Cookie']" :key="link" href="#" class="text-slate-600 text-[9px] hover:text-white transition uppercase font-black tracking-[0.3em]">
             {{ link }}
           </a>
        </div>
      </div>
    </div>
  </footer>
</template>
