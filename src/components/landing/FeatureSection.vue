<script setup lang="ts">
import { Zap, Check, Minus } from 'lucide-vue-next'

const rows = [
  { t: 'Klik, jadi! Fleksibel', d: 'Instan! Tidak perlu repot tulis prompt panjang, cukup isi form dengan opsi prompt singkat.' },
  { t: 'Template RPP Deep Learning', d: 'Berbasis CP Terbaru, Output sesuai pendekatan Pembelajaran Mendalam (3 Pilar).' },
  { t: 'Sesuai BSE & Buku AI', d: 'Terhubung langsung dengan referensi lokal tanpa perlu unggah berkas manual.' },
  { t: 'Standar Profesionalisme', d: 'Dirancang mengikuti alur kerja guru dan regulasi nasional Indonesia.' },
  { t: 'Materi & soal Terintegtasi', d: 'Materi ajar dan latihan otomatis dibuat mengikuti rencana pembelajaran yang sudah disusun.' }
]
</script>

<template>
  <section id="features" class="py-32 bg-slate-50 relative overflow-hidden">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-100 opacity-40 blur-[100px]"></div>
      <div class="absolute top-10 right-0 h-96 w-96 rounded-full bg-indigo-100 opacity-40 blur-[100px]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 relative z-10">
      <div class="text-center mb-24 space-y-6">
        <span class="inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2 text-sm font-black text-blue-800 uppercase tracking-widest">
           <Zap class="h-4 w-4 fill-blue-800" /> Keunggulan
        </span>
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Apa bedanya dengan Prompt Biasa?
        </h2>
        <p class="max-w-3xl mx-auto text-lg text-slate-600 font-medium">
          ASIQ hadir sebagai solusi instan yang membantu guru bekerja lebih efisien, 
          <strong class="font-black text-slate-900">tanpa mengabaikan standar pembelajaran nasional.</strong>
        </p>
      </div>

      <div class="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-200 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse min-w-[700px]">
            <thead class="bg-slate-50/50 border-b border-slate-200">
              <tr>
                <th class="p-10 text-sm font-black text-slate-400 uppercase tracking-widest">Fitur Unggulan</th>
                <th class="p-10 text-center">
                  <div class="flex flex-col items-center gap-2">
                    <span class="text-2xl font-black text-blue-600">ASIQ</span>
                    <span class="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase rounded-full">Recommended</span>
                  </div>
                </th>
                <th class="p-10 text-center">
                  <span class="text-2xl font-black text-slate-400">Prompt Biasa</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr v-for="(feat, idx) in rows" :key="idx" class="group hover:bg-blue-50/30 transition-all duration-300">
                <td class="p-10 space-y-2">
                  <h4 class="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">{{ feat.t }}</h4>
                  <p class="text-sm font-medium text-slate-500 leading-relaxed max-w-md">{{ feat.d }}</p>
                </td>
                <td class="p-10 text-center">
                  <div class="inline-flex items-center gap-3 px-8 py-3 bg-green-50 text-green-700 rounded-2xl font-black text-sm shadow-sm transform group-hover:scale-110 transition">
                    <Check class="h-5 w-5" stroke-width="4" /> YA
                  </div>
                </td>
                <td class="p-10 text-center opacity-60 grayscale group-hover:grayscale-0 transition duration-500">
                  <div class="inline-flex items-center gap-3 px-8 py-3 bg-slate-50 text-slate-400 rounded-2xl font-black text-sm">
                    <Minus class="h-5 w-5" stroke-width="4" /> MANUAL
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-16 text-center">
        <p class="text-2xl font-medium text-slate-400 italic max-w-4xl mx-auto leading-relaxed">
          “Perbedaan utama ASIQ bukan pada kecanggihan AI, tetapi pada cara ASIQ mendukung guru menjalankan perannya secara profesional.”
        </p>
      </div>
    </div>
  </section>
</template>
