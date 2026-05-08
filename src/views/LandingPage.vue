<script setup lang="ts">
import { ref } from "vue";
import { logoUrl } from "../constants";
import { useRouter } from "vue-router";
import { Menu, X, Check, ArrowRight, PlayCircle, Target, Zap, BookOpen, Users, Star, Shield, Rocket, Sparkles } from "lucide-vue-next";
import { motion } from "motion/vue";

const router = useRouter();
const isMenuOpen = ref(false);

const navLinks = [
  { name: "Karakteristik", href: "#" },
  { name: "Potensi", href: "#" },
  { name: "Lokalitas", href: "#" },
  { name: "Contoh", href: "#" },
  { name: "Benefit", href: "#" },
  { name: "Paket", href: "#" },
];

const features = [
  {
    title: "Fokus",
    desc: "Menghadirkan fokus pada peningkatan kualitas pembelajaran guru melalui adaptasi kurikulum yang relevan.",
    icon: Target,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Interaksi",
    desc: "Memudahkan interaksi antara guru dan murid dengan materi yang lebih personal dan mudah dipahami.",
    icon: Users,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Teknologi AI",
    desc: "Memanfaatkan kekuatan AI untuk menganalisis dan memberikan rekomendasi pembelajaran terbaik.",
    icon: Zap,
    color: "bg-green-100 text-green-600",
  },
];

const pricing = [
  {
    name: "Guru Muda",
    price: "0",
    description: "Cocok untuk guru yang ingin mencoba fitur dasar AI.",
    features: ["10 Analisis RPP / bulan", "Akses Materi Dasar", "Komunitas Guru"],
    buttonText: "Coba Gratis",
    popular: false,
  },
  {
    name: "Guru Inspiratif",
    price: "125.000",
    description: "Pilihan terbaik untuk guru profesional.",
    features: ["Analisis RPP Sepuasnya", "Akses Materi Eksklusif", "Dukungan Prioritas", "Analisis Multi-Agent"],
    buttonText: "Pilih Paket",
    popular: true,
  },
  {
    name: "Institusi",
    price: "Custom",
    description: "Solusi lengkap untuk sekolah dan yayasan.",
    features: ["Dashboard Admin", "Manajemen Tim", "Pelatihan Guru", "Integrasi Sistem Sekolah"],
    buttonText: "Hubungi Kami",
    popular: false,
  },
];
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-2">
            <img :src="logoUrl" alt="ASIQ Logo" class="h-10 w-auto" />
          </div>

          <!-- Desktop Nav -->
          <div class="hidden md:flex items-center gap-8">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              {{ link.name }}
            </a>
            <button @click="router.push('/login')" class="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">Masuk</button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="p-2 text-slate-600">
              <Menu v-if="!isMenuOpen" class="w-6 h-6" />
              <X v-else class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Nav -->
      <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-slate-100 py-4 px-4 space-y-4">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" class="block text-base font-medium text-slate-600 hover:text-blue-600">
          {{ link.name }}
        </a>
        <button @click="router.push('/login')" class="w-full px-5 py-3 bg-blue-600 text-white rounded-xl text-base font-semibold hover:bg-blue-700 transition-all">Masuk</button>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold uppercase tracking-wider"><Sparkles class="w-3 h-3" /> Support Video Aktif</div>
          <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            AI Support <br />
            <span class="text-blue-600">Instructional Quality</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-md">Asisten AI yang membantu guru merencanakan dan mengevaluasi pembelajaran dengan standar kualitas terbaik.</p>
          <div class="flex flex-wrap gap-4">
            <button class="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-slate-50 transition-all">Hubungi Kami <ArrowRight class="w-4 h-4" /></button>
            <button class="bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"><PlayCircle class="w-4 h-4" /> Lihat Demo</button>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-blue-100 rounded-3xl blur-2xl opacity-50"></div>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop" alt="AI Learning" class="relative rounded-2xl shadow-2xl w-full object-cover aspect-video" />
        </div>
      </div>
    </section>

    <!-- Challenges Section -->
    <section class="py-24 bg-slate-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-20 space-y-4">
          <p class="text-blue-600 font-bold tracking-widest uppercase text-sm">Features</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Tantangan Pendidikan Masa Kini</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">Solusi cerdas untuk membantu guru beradaptasi dengan perubahan zaman dan meningkatkan efektivitas pengajaran.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -inset-10 bg-blue-600/5 rounded-full blur-3xl lg:block hidden"></div>
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2670&auto=format&fit=crop" class="relative rounded-3xl shadow-xl w-full" alt="Working together" />
          </div>
          <div class="space-y-8">
            <div v-for="feature in features" :key="feature.title" class="flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div :class="[feature.color, 'w-14 h-14 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110']">
                <component :is="feature.icon" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">{{ feature.title }}</h3>
                <p class="text-slate-600 leading-relaxed">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-24">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16 space-y-4">
          <p class="text-blue-600 font-bold uppercase tracking-widest text-sm">Comparison</p>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Apa bedanya dengan Prompt Biasa?</h2>
        </div>

        <div class="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
          <table class="w-full text-left">
            <thead class="bg-slate-50 border-b border-slate-200 font-bold text-slate-900">
              <tr>
                <th class="p-6">Fitur</th>
                <th class="p-6">Prompt Biasa</th>
                <th class="p-6 text-blue-600">Prompt ASIQ</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 text-sm">
              <tr v-for="i in 5" :key="i" class="hover:bg-slate-50 transition-colors">
                <td class="p-6 font-medium text-slate-900">Kualitas Output Analisis</td>
                <td class="p-6 text-slate-500">Sangat Standar</td>
                <td class="p-6 text-blue-600 font-bold flex items-center gap-2"><Check class="w-4 h-4" /> Sangat Mendalam</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-24 bg-blue-600 px-4">
      <div class="max-w-7xl mx-auto text-center space-y-16">
        <div class="space-y-4">
          <h2 class="text-4xl font-extrabold text-white">Rencanakan Pembelajaran Lebih Mudah</h2>
          <p class="text-blue-100 max-w-2xl mx-auto text-lg">Pilih paket yang sesuai dengan kebutuhan Anda atau institusi Anda.</p>
        </div>

        <div class="grid lg:grid-cols-3 gap-8 text-left">
          <div v-for="item in pricing" :key="item.name" :class="[item.popular ? 'bg-white scale-105 shadow-2xl relative z-10' : 'bg-white/95 text-slate-900', 'rounded-3xl p-8 space-y-8 flex flex-col']">
            <div v-if="item.popular" class="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold">Paling Populer</div>
            <div class="space-y-2">
              <h3 class="text-xl font-bold text-slate-900">{{ item.name }}</h3>
              <div class="flex items-baseline gap-1">
                <span class="text-3xl font-extrabold text-slate-900">{{ item.price === "Custom" ? "" : "Rp" }}</span>
                <span class="text-5xl font-extrabold text-slate-900">{{ item.price }}</span>
                <span v-if="item.price !== 'Custom' && item.price !== '0'" class="text-slate-500 font-medium">/bulan</span>
              </div>
              <p class="text-slate-600 text-sm italic">{{ item.description }}</p>
            </div>

            <div class="space-y-4 flex-grow">
              <div v-for="feat in item.features" :key="feat" class="flex items-center gap-3">
                <div class="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                  <Check class="w-3 h-3" />
                </div>
                <span class="text-sm text-slate-700">{{ feat }}</span>
              </div>
            </div>

            <button :class="[item.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-slate-100 text-slate-900 hover:bg-slate-200', 'w-full py-4 rounded-xl font-bold transition-all mt-auto']">
              {{ item.buttonText }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-100 py-16 px-4">
      <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div class="col-span-2 space-y-6">
          <div class="flex items-center gap-2">
            <img :src="logoUrl" alt="ASIQ Logo" class="h-10 w-auto" />
          </div>
          <p class="text-slate-500 max-w-sm">Membantu guru menciptakan kualitas pembelajaran terbaik dengan dukungan kecerdasan buatan.</p>
          <div class="flex gap-4">
            <!-- Social Icons would go here -->
          </div>
        </div>
        <div class="space-y-6">
          <h4 class="font-bold text-slate-900">Produk</h4>
          <ul class="space-y-4 text-sm text-slate-600">
            <li><a href="#" class="hover:text-blue-600">Fitur Utama</a></li>
            <li><a href="#" class="hover:text-blue-600">Integrasi Kurikulum</a></li>
            <li><a href="#" class="hover:text-blue-600">Analisis RPP</a></li>
            <li><a href="#" class="hover:text-blue-600">Soal Latihan</a></li>
          </ul>
        </div>
        <div class="space-y-6">
          <h4 class="font-bold text-slate-900">Perusahaan</h4>
          <ul class="space-y-4 text-sm text-slate-600">
            <li><a href="#" class="hover:text-blue-600">Tentang Kami</a></li>
            <li><a href="#" class="hover:text-blue-600">Hubungi Kami</a></li>
            <li><a href="#" class="hover:text-blue-600">Kebijakan Privasi</a></li>
            <li><a href="#" class="hover:text-blue-600">Syarat & Ketentuan</a></li>
          </ul>
        </div>
      </div>
      <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 text-center text-sm text-slate-400">&copy; 2024 ASIQ. Seluruh hak cipta dilindungi.</div>
    </footer>
  </div>
</template>

<style scoped>
/* Optional: Smooth scrolling for nav links */
html {
  scroll-behavior: smooth;
}
</style>
