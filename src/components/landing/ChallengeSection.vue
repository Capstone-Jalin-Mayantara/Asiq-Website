<script setup lang="ts">
import { School, Clock, AlertTriangle, BookOpen, CheckCircle2, Users } from 'lucide-vue-next'
</script>

<template>
  <section id="casestudies" class="relative overflow-hidden py-32 bg-white">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"></div>
      <div class="absolute top-10 -right-10 h-72 w-72 rounded-full bg-fuchsia-100/40 blur-3xl"></div>
      <div class="absolute -bottom-16 left-16 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl"></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mb-24 text-center space-y-6">
        <span class="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-black text-blue-700 shadow-sm ring-1 ring-blue-100 uppercase tracking-widest">
          <School class="h-4 w-4" />
          Kisah Nyata
        </span>
        <h2 class="text-4xl font-black text-slate-900 md:text-5xl tracking-tight leading-tight">
          Tantangan Pendidikan Masa Kini
        </h2>
        <p class="mx-auto mt-3 max-w-3xl text-lg text-slate-600 leading-relaxed font-medium">
          Tantangan guru hari ini bukan hanya soal teknis pembelajaran, tetapi juga tentang memenuhi tuntutan profesionalisme sebagai tenaga kependidikan. 
          <strong class="font-black text-blue-600">ASIQ hadir sebagai pendamping</strong> yang membantu guru menjawab tantangan tersebut.
        </p>
      </div>

      <div class="space-y-32">
        <!-- Item 1 -->
        <article class="grid items-center gap-16 lg:grid-cols-2">
          <div class="group relative order-1 lg:order-1">
            <div class="overflow-hidden rounded-[2.5rem] bg-white/60 shadow-2xl ring-1 ring-black/5 backdrop-blur transition-transform duration-500 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670" alt="Hemat Waktu, Fokus Mengajar" class="h-[26rem] w-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition duration-700">
            </div>
            <div class="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-800 shadow-xl backdrop-blur-md">
              <Clock class="h-4 w-4 text-blue-600" />
              Hemat Waktu, Fokus Mengajar
            </div>
            <div class="absolute -bottom-8 right-8">
              <div class="flex items-center gap-4 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur-md group-hover:translate-x-2 transition duration-500">
                <div class="grid h-14 w-14 place-items-center rounded-full border-4 border-slate-100 border-t-blue-600 font-black text-slate-900 text-sm">85%</div>
                <div class="text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">Waktu<br/>Dihemat</div>
              </div>
            </div>
          </div>

          <div class="relative space-y-10 lg:pl-8 order-2 lg:order-2">
            <div class="space-y-8">
              <div class="group/item relative p-8 bg-amber-50 rounded-3xl border border-amber-100 hover:bg-amber-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                <div class="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 rounded-2xl rotate-3 flex items-center justify-center shadow-xl transform group-hover/item:rotate-12 transition duration-300">
                  <AlertTriangle class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-amber-900 mb-2">Masalah</h3>
                <p class="text-amber-800/70 font-medium leading-relaxed">Guru menghabiskan 3–4 jam setiap hari membuat RPP manual untuk memenuhi tuntutan perencanaan pembelajaran tetap teratur, menyisakan sedikit waktu untuk refleksi.</p>
              </div>

              <div class="group/item relative p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:bg-blue-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                <div class="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-2xl -rotate-3 flex items-center justify-center shadow-xl transform group-hover/item:rotate-12 transition duration-300">
                  <BookOpen class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-blue-900 mb-2">Solusi ASIQ</h3>
                <p class="text-blue-800/70 font-medium leading-relaxed">Membantu guru menyusun perencanaan pembelajaran mendalam secara otomatis sebagai bagian dari pemenuhan kompetensi pedagogik nasional.</p>
              </div>

              <div class="group/item relative p-8 bg-emerald-50 rounded-3xl border border-emerald-100 hover:bg-emerald-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                <div class="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 rounded-2xl rotate-6 flex items-center justify-center shadow-xl transform group-hover/item:rotate-12 transition duration-300">
                  <CheckCircle2 class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-emerald-900 mb-2">Hasil</h3>
                <p class="text-emerald-800/70 font-medium leading-relaxed">85% penghematan waktu, guru tetap memegang kendali atas kurasi hasil, serta memiliki ruang untuk refleksi dan peningkatan kualitas pembelajaran.</p>
              </div>
            </div>
          </div>
        </article>

        <!-- Item 2 -->
        <article class="grid items-center gap-16 lg:grid-cols-2">
          <div class="group relative order-1 lg:order-2">
            <div class="overflow-hidden rounded-[2.5rem] bg-white/60 shadow-2xl ring-1 ring-black/5 backdrop-blur transition-transform duration-500 hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2670" alt="Beri latihan dan materi sesuai karakter siswa" class="h-[26rem] w-full object-cover transition duration-700">
            </div>
            <div class="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-bold text-slate-800 shadow-xl backdrop-blur-md">
              <Users class="h-4 w-4 text-emerald-600" />
              Sesuai Karakter Siswa
            </div>
            <div class="absolute -bottom-8 left-8">
              <div class="flex items-center gap-4 rounded-2xl bg-white/95 p-5 shadow-2xl ring-1 ring-black/5 backdrop-blur-md group-hover:-translate-x-2 transition duration-500">
                <div class="grid h-14 w-14 place-items-center rounded-full border-4 border-slate-100 border-t-emerald-600 font-black text-slate-900 text-sm">70%</div>
                <div class="text-xs font-black text-slate-400 uppercase tracking-widest leading-tight">Peningkatan<br/>Keterlibatan</div>
              </div>
            </div>
          </div>

          <div class="relative space-y-10 lg:pr-8 order-2 lg:order-1">
            <div class="space-y-8">
              <div class="group/item relative p-8 bg-amber-50 rounded-3xl border border-amber-100 hover:bg-amber-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                 <div class="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-amber-500 rounded-2xl -rotate-6 flex items-center justify-center shadow-xl transform group-hover/item:-rotate-12 transition duration-300">
                  <AlertTriangle class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-amber-900 mb-2">Masalah</h3>
                <p class="text-amber-800/70 font-medium leading-relaxed text-right lg:text-left">Setiap siswa memiliki karakteristik berbeda, guru dituntut mampu menerapkan pembelajaran berdiferensiasi sesuai kompetensi pedagogik yang diharapkan.</p>
              </div>

              <div class="group/item relative p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:bg-blue-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                <div class="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 rounded-2xl rotate-3 flex items-center justify-center shadow-xl transform group-hover/item:rotate-12 transition duration-300">
                  <BookOpen class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-blue-900 mb-2">Solusi ASIQ</h3>
                <p class="text-blue-800/70 font-medium leading-relaxed text-right lg:text-left">ASIQ membantu guru merancang materi dan latihan yang relevan dengan karakter siswa, sekaligus menjaga kualitas pembelajaran sesuai standar nasional.</p>
              </div>

              <div class="group/item relative p-8 bg-emerald-50 rounded-3xl border border-emerald-100 hover:bg-emerald-100/50 transition-colors duration-500 shadow-sm hover:shadow-lg">
                <div class="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 rounded-2xl -rotate-3 flex items-center justify-center shadow-xl transform group-hover/item:-rotate-12 transition duration-300">
                  <CheckCircle2 class="h-6 w-6 text-white" />
                </div>
                <h3 class="text-xl font-black text-emerald-900 mb-2">Hasil</h3>
                <p class="text-emerald-800/70 font-medium leading-relaxed text-right lg:text-left">Siswa lebih terlibat, termotivasi, dan hasil belajar meningkat hingga 70%, mendukung capaian mutu pembelajaran yang diharapkan.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
