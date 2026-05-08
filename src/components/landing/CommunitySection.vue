<script setup lang="ts">
import { Zap, School, ArrowRight } from 'lucide-vue-next'

const events = [
  {
    title: 'Pembelajaran Mendalam Kota Malang',
    date: 'Selasa, 5 Agustus 2025',
    loc: 'Ruang Dr. Sutomo, Kota Malang',
    source: 'Dinas Pendidikan & Kebudayaan Kota Malang',
    img: 'https://cdn.siap.id/s3/Asvri%20Adaptive%20Learning/dinas.jpg'
  },
  {
    title: 'Pelatihan ASVRI EDU - Charis National Academy',
    date: '5-10 Agustus 2025',
    loc: 'Charis National Academy',
    source: 'Instagram ASIQ',
    img: 'https://cdn.siap.id/s3/Asvri%20Adaptive%20Learning/charis.jpg'
  },
  {
    title: 'Pelatihan ASVRI EDU - SD Plus Al Kautsar Malang',
    date: '5-10 Agustus 2025',
    loc: 'SD Plus Al Kautsar Malang',
    source: 'Instagram ASIQ',
    img: 'https://cdn.siap.id/s3/Asvri%20Adaptive%20Learning/alkautsar.jpg'
  }
]
</script>

<template>
  <section id="community" class="py-32 bg-white">
    <div class="max-w-7xl mx-auto px-4">
       <div class="text-center mb-24 space-y-6">
          <div class="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest ring-1 ring-indigo-100">
            <Zap class="h-4 w-4 fill-indigo-700" /> Agenda & Pelatihan
          </div>
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">Event Kolaborasi ASIQ</h2>
          <p class="text-slate-500 font-medium text-lg">Kegiatan pembelajaran mendalam & pelatihan sekolah di berbagai daerah.</p>
       </div>

       <div class="flex overflow-x-auto gap-10 pb-16 no-scrollbar snap-x snap-mandatory">
          <div v-for="(ev, i) in events" :key="i" 
               class="min-w-[26rem] md:min-w-[30rem] snap-center bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden group hover:-translate-y-4 transition-all duration-700 flex flex-col hover:shadow-2xl">
            <div class="relative h-72 overflow-hidden">
              <img :src="ev.img" class="w-full h-full object-cover group-hover:scale-110 transition duration-1000 grayscale-[0.3] group-hover:grayscale-0" />
              <div class="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl text-xs font-black text-slate-900 shadow-2xl">
                {{ ev.date }}
              </div>
            </div>
            
            <div class="p-12 space-y-6 flex-grow flex flex-col justify-between">
              <div class="space-y-4">
                <h4 class="text-2xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{{ ev.title }}</h4>
                <p class="text-sm font-bold text-slate-400 flex items-center gap-3"><School class="h-5 w-5 text-blue-500" /> {{ ev.loc }}</p>
              </div>

              <div class="pt-8 border-t border-slate-50 flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-1">Sumber</span>
                  <span class="text-xs font-black text-blue-600 underline decoration-2 underline-offset-4">{{ ev.source }}</span>
                </div>
                <div class="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                  <ArrowRight class="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
       </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
