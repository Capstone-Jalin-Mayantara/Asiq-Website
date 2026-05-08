<script setup lang="ts">
import { ref } from 'vue'
import { logoUrl } from '../constants'
import { useRouter } from 'vue-router'
import { 
  ArrowLeft, Mail, Lock, User, 
  Chrome, Apple, CheckCircle2 
} from 'lucide-vue-next'

const router = useRouter()
const isLoginFormVisible = ref(false)

const handleSocialLogin = (platform: string) => {
  console.log(`Login with ${platform}`)
  router.push('/dashboard')
}

const handleEmailLogin = () => {
  router.push('/dashboard')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 p-4 md:p-8">
    <div class="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
      
      <!-- Left Content: Forms -->
      <div class="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
        <button v-if="isLoginFormVisible" @click="isLoginFormVisible = false" class="absolute top-8 left-8 p-2 text-slate-400 hover:text-slate-900 transition-colors">
          <ArrowLeft class="w-6 h-6" />
        </button>

        <Transition name="fade" mode="out-in">
          <!-- Step 1: Welcome / Pre-Auth -->
          <div v-if="!isLoginFormVisible" class="space-y-12 text-center flex flex-col items-center">
            <div class="space-y-4">
              <div class="flex items-center justify-center gap-3">
                <img :src="logoUrl" alt="ASIQ Logo" class="h-12 w-auto" />
              </div>
              <p class="text-slate-400 font-medium text-sm">Asisten Guru untuk Pembelajaran Adaptif</p>
            </div>

            <div class="space-y-4 w-full max-w-xs">
              <h2 class="text-2xl font-bold text-slate-900">Sign In</h2>
              <p class="text-slate-400 text-sm">Selamat Datang di Aplikasi ASIQ</p>
              <button 
                @click="isLoginFormVisible = true"
                class="w-full py-4 bg-white border-2 border-slate-100 rounded-2xl font-bold text-slate-900 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center gap-3 shadow-sm"
              >
                <User class="w-5 h-5" /> Masuk
              </button>
            </div>
          </div>

          <!-- Step 2: Main Login Form -->
          <div v-else class="space-y-8">
            <div class="text-center space-y-4">
              <div class="flex items-center justify-center gap-3 mb-6">
                <img :src="logoUrl" alt="ASIQ Logo" class="h-10 w-auto" />
              </div>
              <h2 class="text-xl font-bold text-slate-900">Masuk (login) dengan akun Anda</h2>
            </div>

            <!-- Social Buttons -->
            <div class="space-y-3">
              <button @click="handleSocialLogin('Apple')" class="w-full py-3.5 px-6 border-2 border-slate-100 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-700 hover:border-slate-300 transition-all">
                <Apple class="w-5 h-5" /> Lanjutkan dengan Apple
              </button>
              <button @click="handleSocialLogin('Google')" class="w-full py-3.5 px-6 border-2 border-slate-100 rounded-xl flex items-center justify-center gap-3 font-semibold text-slate-700 hover:border-slate-300 transition-all">
                <Chrome class="w-5 h-5 text-blue-500" /> Lanjutkan dengan Google
              </button>
            </div>

            <div class="flex items-center gap-4 text-slate-300">
              <div class="h-px bg-slate-100 flex-grow"></div>
              <span class="text-xs uppercase font-bold tracking-widest">atau</span>
              <div class="h-px bg-slate-100 flex-grow"></div>
            </div>

            <!-- Email Form -->
            <form @submit.prevent="handleEmailLogin" class="space-y-4">
              <div class="space-y-2">
                <div class="relative">
                  <User class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="text" placeholder="Nama Pengguna / Email / Surel" class="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
                </div>
              </div>
              <div class="space-y-2">
                <div class="relative">
                  <Lock class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input type="password" placeholder="Kata Sandi" class="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-xl focus:border-blue-600 focus:bg-white outline-none transition-all placeholder:text-slate-400" />
                </div>
              </div>
              <div class="flex @justify-end">
                <a href="#" class="text-sm font-semibold text-blue-600 hover:underline">Apakah Anda lupa kata sandinya?</a>
              </div>
              
              <button type="submit" class="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                Masuk (Login)
              </button>

              <p class="text-center text-sm text-slate-500">
                Belum memiliki akun? <a href="#" class="font-bold text-blue-600 hover:underline">Buat Akun</a>
              </p>
            </form>
          </div>
        </Transition>
      </div>

      <!-- Right Content: Brand Illustration -->
      <div class="hidden md:block w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 p-12 relative overflow-hidden">
        <!-- Abstract Patterns -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div class="relative h-full flex flex-col justify-center items-center text-center space-y-12">
          <!-- Illustration Box -->
          <div class="bg-white/20 backdrop-blur-xl border border-white/30 rounded-[2.5rem] p-10 w-full max-w-sm shadow-2xl relative">
            <div class="absolute top-12 -right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
              <CheckCircle2 class="w-8 h-8 text-green-500" />
            </div>
            <div class="absolute bottom-12 -left-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl p-3">
              <img src="https://api.iconify.design/noto-v1:open-book.svg" alt="Book" />
            </div>
            
            <h3 class="text-3xl font-black text-white leading-tight mb-6">
              Solusi <br />
              Pembelajaran <br />
              Adaptif untuk <br />
              Guru Masa Kini
            </h3>

            <div class="mt-8 flex justify-center">
              <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2670&auto=format&fit=crop" alt="Teacher" class="w-48 h-48 rounded-2xl object-cover border-4 border-white shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
