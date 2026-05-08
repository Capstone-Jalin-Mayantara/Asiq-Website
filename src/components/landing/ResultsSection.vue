<script setup lang="ts">
import { FileText, BookOpen, HelpCircle, Sparkles, ArrowRight } from 'lucide-vue-next'

const results = [
  { t: 'RPP Otomatis', d: 'Contoh Perencanaan Pembelajaran Mendalam.', c: 'bg-blue-50 text-blue-600', ic: FileText },
  { t: 'Materi Ajar', d: 'Materi belajar interaktif sesuai kebutuhan siswa.', c: 'bg-green-50 text-green-600', ic: BookOpen },
  { t: 'Soal & Kuis', d: 'Latihan soal HOTS-LOTS untuk evaluasi.', c: 'bg-purple-50 text-purple-600', ic: HelpCircle },
  { t: 'Course Online', d: 'Kursus AI interaktif (Coming Soon).', c: 'bg-pink-50 text-pink-600', ic: Sparkles }
]
</script>

<template>
  <section id="hasil" class="py-32 bg-slate-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 text-center">
       <h2 class="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Contoh Hasil <span class="text-blue-600">ASIQ</span></h2>
       <p class="max-w-2xl mx-auto text-lg text-slate-500 font-medium mb-20 leading-relaxed">
         Berikut contoh hasil AI Rencana Pembelajaran, Materi Ajar, dan Soal Latihan yang dihasilkan secara instan.
       </p>
       
       <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(res, i) in results" :key="i" 
               class="group p-10 rounded-[2.5rem] bg-white shadow-xl hover:shadow-[0_40px_80px_-12px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-3 text-left border border-slate-100 flex flex-col h-full relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-[2.5] transition-transform duration-700 opacity-50"></div>
            
            <div :class="[res.c, 'w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg relative z-10']">
              <component :is="res.ic" class="h-8 w-8" />
            </div>
            
            <div class="relative z-10 flex-grow">
              <h3 class="text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{{ res.t }}</h3>
              <p class="text-slate-500 font-medium leading-relaxed mb-10">{{ res.d }}</p>
            </div>

            <button class="relative z-10 mt-auto inline-flex items-center gap-3 text-blue-600 font-black text-sm uppercase tracking-widest hover:gap-5 transition-all">
              Unduh PDF <ArrowRight class="h-5 w-5" />
            </button>
          </div>
       </div>
    </div>
  </section>
</template>
