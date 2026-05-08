# ASIQ (Agentic AI for Inclusive Education Support System)

ASIQ adalah sebuah prototipe sistem orkestrasi agen berbasis pengetahuan (Knowledge-Based Agent Orchestration) yang terintegrasi di dalam ekosistem platform Jalin AI. Sistem ini dirancang untuk mengotomatisasi proses adaptasi materi pembelajaran bagi siswa berkebutuhan khusus, mengevaluasi standar aksesibilitas secara objektif, serta mensentralisasi manajemen pengetahuan materi pembelajaran inklusif untuk mencegah hilangnya aset informasi pendidikan.

## 👥 Anggota kelompok

1. 235150207111002 - Bintang Ula Nur Maghfirow
2. 235150207111067 - Anak Agung Ngurah Aditya Wirayudha
3. 235150407111027 - Bram Oktavian Ramadhan
4. 235150707111057 - Bagus Setiawan
5. 235150707111029 - Andrean Noviandi
6. 235150201111046 - Muhammad Rifki Akbar

## 🎯 Fitur-fitur

### Fitur Wajib

1. Fitur Wajib (Kebutuhan Fungsional)
2. Login Sistem: Autentikasi dan manajemen sesi pengguna (Guru dan Admin).
3. Input Materi & Profil Siswa: Form unggah teks materi dan input karakteristik spesifik murid (disleksia, ADHD, dll.).
4. Orkestrasi Multi-Agent: Alur kerja otomatis yang melibatkan Learner Profiling Agent, Adaptive Transformation Agent, dan Inclusivity Insight Agent.
5. Analisis & Transformasi Materi: Penyederhanaan struktur dan diksi teks materi agar sesuai dengan kebutuhan siswa.
6. Evaluasi Skor Inklusivitas: Kalkulasi readability score dan pengecekan standar WCAG/Permendikbud menggunakan arsitektur RAG.
7. Unduh Materi Adaptif: Konversi hasil transformasi materi ke format PDF atau Word.
8. Monitoring AI & Token: Visualisasi statistik penggunaan token LLM, efisiensi biaya, dan waktu proses bagi Admin.

### Fitur Opsional

1. Ekspansi Multimodal: Transformasi materi ke format audio untuk tunanetra atau video bahasa isyarat untuk tunarungu.
2. Implementasi Edge AI/Offline-First: Versi ringan sistem yang dapat berjalan tanpa koneksi internet di wilayah terpencil.
3. Analitik Prediktif: Rekomendasi kurikulum masa depan berdasarkan data historis kecepatan belajar siswa.
4. Integrasi Kurikulum Nasional: Sinkronisasi otomatis dengan database kurikulum Merdeka Belajar.

## 👤 _Role_

| Role  | Hak Akses                                                                                                          |
| ----- | ------------------------------------------------------------------------------------------------------------------ |
| Admin | Mengelola data pengguna (CRUD), konfigurasi sistem, serta memantau performa AI dan biaya token.                    |
| User  | Menginput materi, melihat hasil adaptasi, mengunduh laporan evaluasi inklusivitas, dan memberikan rating/feedback. |

## 🔄 Alur Sistem

Alur 1: User membuat laporan

1. Guru melakukan login ke dashboard.
2. Guru memasukkan materi mentah dan data karakteristik profil siswa.
3. System Orchestrator memicu Agent 1 untuk merumuskan strategi adaptasi berdasarkan profil siswa.
4. Agent 2 melakukan transformasi materi mentah menjadi materi adaptif berdasarkan strategi dari Agent 1.
5. Agent 3 mengevaluasi materi hasil transformasi untuk memberikan skor inklusivitas dan rekomendasi perbaikan.
6. Hasil akhir (materi, skor, dan insight) dikonsolidasi dan disimpan ke database.
7. Guru melihat dan mengunduh hasil materi pembelajaran yang telah disesuaikan.

## 🗂️ Desain _Database_
