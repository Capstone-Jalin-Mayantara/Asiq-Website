<script setup lang="ts">
import { Sparkles, Zap, Crown, Users, Building2, Check } from 'lucide-vue-next'
</script>

<template>
  <section id="subscribe" class="py-32 bg-blue-600 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute inset-0 pointer-events-none opacity-30">
      <div class="absolute -top-48 -left-48 w-[40rem] h-[40rem] bg-indigo-400 rounded-full blur-[150px]"></div>
      <div class="absolute -bottom-48 -right-48 w-[40rem] h-[40rem] bg-cyan-400 rounded-full blur-[150px]"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center text-white mb-24 space-y-6">
        <h2 class="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Rencanakan Pembelajaran Lebih Mudah</h2>
        <p class="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
          Dapatkan fitur eksklusif untuk mengelola, berkolaborasi, dan menciptakan pengalaman belajar digital yang lebih interaktif.
        </p>
      </div>

      <div class="grid lg:grid-cols-4 gap-8 items-stretch pt-8">
        <!-- Tier 1 -->
        <div class="bg-white rounded-[3rem] p-10 flex flex-col shadow-2xl hover:scale-[1.02] transition-transform duration-500">
          <div class="mb-12 text-center space-y-4">
             <div class="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto shadow-inner"><Sparkles class="h-10 w-10 text-slate-300" /></div>
             <div>
               <h3 class="text-2xl font-black text-slate-900">Guru Terbantu</h3>
               <p class="text-5xl font-black text-blue-600 my-2 tracking-tighter">Gratis</p>
               <p class="text-xs text-slate-400 uppercase font-black tracking-widest">Tak ada batasan waktu</p>
             </div>
          </div>
          <ul class="space-y-6 mb-12 flex-grow border-t border-slate-50 pt-10">
             <li v-for="feat in ['15 Energi/bulan', '3 Proyek Pertama', 'Format Kurikulum Nasional']" :key="feat" class="flex items-center gap-4 text-sm font-bold text-slate-600">
               <div class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Check class="h-4 w-4" stroke-width="4" /></div>
               {{ feat }}
             </li>
          </ul>
          <button class="w-full py-5 border-4 border-blue-600 text-blue-600 rounded-[1.5rem] font-black hover:bg-blue-600 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-blue-100 uppercase tracking-widest text-xs">Mulai Sekarang</button>
        </div>

        <!-- Tier 2 - POPULAR -->
        <div class="bg-white rounded-[3rem] p-10 flex flex-col shadow-[0_40px_100px_-20px_rgba(30,58,138,0.4)] lg:-translate-y-12 relative ring-8 ring-blue-500/20 hover:scale-[1.05] transition-transform duration-500 group">
          <div class="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-2xl flex items-center gap-2 z-20">
            <Crown class="h-4 w-4 fill-white" /> Paling Populer
          </div>
          
          <div class="mb-12 text-center space-y-6 relative z-10">
             <div class="w-24 h-24 bg-blue-600 rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl rotate-3 group-hover:rotate-6 transition duration-500"><Zap class="h-12 w-12 text-white fill-white" /></div>
             <div>
                <h3 class="text-2xl font-black text-slate-900">Guru Hebat</h3>
                <div class="mt-4 space-y-1">
                  <p class="text-lg text-slate-300 line-through font-bold">Rp 230.000</p>
                  <p class="text-6xl font-black text-blue-600 tracking-tighter">Rp 125rb</p>
                  <p class="text-xs text-slate-400 uppercase font-black tracking-widest">/ 12 bulan</p>
                </div>
             </div>
          </div>
          
          <ul class="space-y-6 mb-12 flex-grow border-t border-slate-50 pt-10 relative z-10">
             <li v-for="feat in ['Semua Fitur Gratis', '700 Energi Setahun', 'Proyek Tanpa Batas', 'Prompting Lanjutan', 'Kursus Online AI']" :key="feat" class="flex items-center gap-4 text-sm font-black text-slate-900">
               <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg"><Check class="h-4 w-4" stroke-width="4" /></div>
               {{ feat }}
             </li>
          </ul>
          <button class="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black shadow-[0_20px_40px_-5px_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-none transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs">Pilih Paket Hebat</button>
        </div>

        <!-- Tier 3 -->
        <div class="bg-white rounded-[3rem] p-10 flex flex-col shadow-2xl hover:scale-[1.02] transition-transform duration-500">
          <div class="mb-12 text-center space-y-4">
             <div class="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto shadow-inner"><Users class="h-10 w-10 text-slate-300" /></div>
             <div>
               <h3 class="text-2xl font-black text-slate-900">Guru Kolaboratif</h3>
               <p class="text-5xl font-black text-blue-600 my-2 tracking-tighter">Rp 200rb</p>
               <p class="text-xs text-slate-400 uppercase font-black tracking-widest">Sekolah & Tim</p>
             </div>
          </div>
          <ul class="space-y-6 mb-12 flex-grow border-t border-slate-50 pt-10">
             <li v-for="feat in ['Semua fitur Guru Hebat', 'Manajemen Tim', 'Kolaborasi Perangkat Ajar']" :key="feat" class="flex items-center gap-4 text-sm font-bold text-slate-600">
               <div class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Check class="h-4 w-4" stroke-width="4" /></div>
               {{ feat }}
             </li>
          </ul>
          <div class="w-full py-5 bg-slate-50 text-slate-400 border-2 border-slate-100 rounded-[1.5rem] font-black text-center uppercase tracking-widest text-[10px]">Segera Hadir</div>
        </div>

        <!-- Tier 4 -->
        <div class="bg-white rounded-[3rem] p-10 flex flex-col shadow-2xl hover:scale-[1.02] transition-transform duration-500">
          <div class="mb-12 text-center space-y-4">
             <div class="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto shadow-inner"><Building2 class="h-10 w-10 text-slate-300" /></div>
             <div>
               <h3 class="text-2xl font-black text-slate-900">Enterprise</h3>
               <p class="text-4xl font-black text-blue-600 my-2 tracking-tighter">Kustom</p>
               <p class="text-xs text-slate-400 uppercase font-black tracking-widest">Yayasan & Universitas</p>
             </div>
          </div>
          <ul class="space-y-6 mb-12 flex-grow border-t border-slate-50 pt-10">
             <li v-for="feat in ['Semua Fitur Terbuka', 'Energi Kustom', 'API Integrasi', 'On-site Training']" :key="feat" class="flex items-center gap-4 text-sm font-bold text-slate-600">
               <div class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><Check class="h-4 w-4" stroke-width="4" /></div>
               {{ feat }}
             </li>
          </ul>
          <button class="w-full py-5 border-4 border-slate-100 text-slate-900 rounded-[1.5rem] font-black hover:bg-slate-100 transition-all duration-300 active:scale-95 uppercase tracking-widest text-xs">Hubungi TIM ASIQ</button>
        </div>
      </div>
    </div>
  </section>
</template>
