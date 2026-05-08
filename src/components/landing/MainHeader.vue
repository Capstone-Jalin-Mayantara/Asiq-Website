<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { logoUrl } from '../../constants'
import { Menu, X } from 'lucide-vue-next'

const router = useRouter()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Tantangan Pendidikan', href: '#casestudies' },
  { name: 'Keunggulan', href: '#features' },
  { name: 'Contoh Hasil', href: '#hasil' },
  { name: 'Testimoni', href: '#testimoni' },
  { name: 'Berlangganan', href: '#subscribe' },
  { name: 'Bantuan', href: '#help' }
]
</script>

<template>
  <header class="fixed top-0 left-0 right-0 bg-white backdrop-blur-md border-b border-gray-200 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-3">
          <img :src="logoUrl" alt="ASIQ Logo" class="h-10 w-auto">
        </div>
        
        <nav class="hidden md:flex items-center space-x-8">
          <a v-for="link in navLinks" :key="link.name" :href="link.href" 
             class="text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium">
            {{ link.name }}
          </a>
        </nav>

        <div class="flex items-center space-x-4">
          <div class="hidden md:flex items-center space-x-3">
            <button @click="router.push('/login')" class="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
              Masuk
            </button>
          </div>
          <button @click="isMenuOpen = !isMenuOpen" aria-label="Buka menu navigasi" class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Menu v-if="!isMenuOpen" class="w-5 h-5 text-gray-700" />
            <X v-else class="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white border-b border-gray-100 py-4 px-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-300">
      <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isMenuOpen = false"
         class="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors">
        {{ link.name }}
      </a>
      <div class="pt-4 border-t border-gray-100">
        <button @click="router.push('/login')" class="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg active:scale-95 transition-transform">
          Masuk
        </button>
      </div>
    </div>
  </header>
</template>
