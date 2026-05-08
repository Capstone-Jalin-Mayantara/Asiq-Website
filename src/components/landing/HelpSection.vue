<script setup lang="ts">
import { ref } from 'vue'
import { HelpCircle, BookOpen, Phone, ChevronDown, ArrowRight } from 'lucide-vue-next'

const activeFaq = ref(0)
const faqs = [
  {
    q: 'Apa itu ASIQ dan mengapa saya sebagai guru perlu menggunakannya?',
    a: 'ASIQ adalah asisten digital berbasis AI yang membantu guru menyiapkan materi pembelajaran, rencana pembelajaran, dan soal dengan jauh lebih cepat dan lebih nyaman. Dengan teknologi AI generatif, ASIQ mampu menghemat waktu kerja guru hingga 85% sehingga Anda bisa fokus pada proses mengajar, bukan penulisan dokumen.'
  },
  {
    q: 'Siapa yang bisa menggunakan ASIQ?',
    a: 'Seluruh guru di Indonesia dari berbagai jenjang pendidikan (PAUD, SD, SMP, SMA/SMK) dapat menggunakan ASIQ untuk mempermudah administrasi dan persiapan mengajar.'
  },
  {
    q: 'Apakah ASIQ mendukung kurikulum terbaru?',
    a: 'Ya, ASIQ dirancang untuk mendukung Capaian Pembelajaran (CP) dan Alur Tujuan Pembelajaran (ATP) sesuai standar Kurikulum Merdeka yang paling mutakhir.'
  },
  {
    q: 'Apakah data saya aman di ASIQ?',
    a: 'Keamanan data dan privasi guru adalah prioritas kami. Semua konten yang Anda buat tersimpan secara aman di dashboard akun Anda sendiri.'
  }
]

const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? -1 : idx
}
</script>

<template>
  <section id="help" class="py-32 bg-slate-50 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 relative z-10">
       <div class="text-center mb-24 space-y-6">
          <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
            <HelpCircle class="h-4 w-4" /> Bantuan
          </div>
          <h2 class="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">Bagaimana Kami Bisa Membantu Anda?</h2>
       </div>

       <div class="grid lg:grid-cols-3 gap-16">
          <!-- Support Channels -->
          <div class="space-y-8">
             <div class="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 space-y-10">
                <h3 class="text-2xl font-black text-slate-900 leading-tight">Saluran Dukungan</h3>
                
                <a href="#" class="flex items-center gap-6 p-8 bg-blue-50 rounded-3xl group hover:bg-blue-600 transition-all duration-500">
                   <div class="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors duration-500 shadow-xl shadow-blue-200">
                      <BookOpen class="h-7 w-7 text-white group-hover:text-blue-600" />
                   </div>
                   <div class="text-left">
                     <h4 class="font-black text-slate-900 group-hover:text-white mb-1 transition-colors duration-500">Situs Bantuan</h4>
                     <p class="text-xs text-slate-400 group-hover:text-blue-100 transition-colors duration-500 font-bold uppercase tracking-widest">Panduan Lengkap</p>
                   </div>
                </a>

                <div class="p-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] text-white space-y-8 shadow-2xl relative overflow-hidden">
                   <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
                   <h4 class="text-2xl font-black">Hubungi Langsung</h4>
                   <p class="text-sm text-blue-100 font-medium leading-relaxed">Tim customer service kami siap membantu kendala teknis Anda di jam operasional kerja.</p>
                   <a href="https://wa.me/6282131782622" target="_blank" 
                      class="flex items-center justify-center gap-3 w-full py-4 bg-white text-emerald-600 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl">
                      <Phone class="h-4 w-4 fill-emerald-600" /> WhatsApp Kami
                   </a>
                </div>
             </div>
          </div>

          <!-- FAQ Accordion -->
          <div class="lg:col-span-2 space-y-6">
             <div v-for="(item, i) in faqs" :key="i" 
                  class="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500">
                <button @click="toggleFaq(i)" class="w-full flex items-center justify-between p-10 text-left group">
                   <span :class="[activeFaq === i ? 'text-blue-600' : 'text-slate-900', 'text-xl font-black transition-colors leading-tight pr-8']">
                     {{ item.q }}
                   </span>
                   <div :class="[activeFaq === i ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-slate-400', 'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shrink-0 shadow-inner']">
                      <ChevronDown class="h-6 w-6" />
                   </div>
                </button>
                
                <div v-show="activeFaq === i" class="px-10 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div class="h-px bg-slate-100 mb-8"></div>
                  <p class="text-slate-600 leading-relaxed text-lg font-medium">{{ item.a }}</p>
                </div>
             </div>
             
             <div class="pt-12 text-center">
                <button class="inline-flex items-center gap-3 text-blue-600 font-black hover:text-blue-700 transition-all group">
                  <span class="border-b-2 border-transparent group-hover:border-blue-700">Lihat Semua Tanya Jawab (12)</span>
                  <ArrowRight class="h-5 w-5 transform group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
          </div>
       </div>
    </div>
  </section>
</template>
