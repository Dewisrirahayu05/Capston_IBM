# 📝 To-Do List Web App
Aplikasi To-Do List berbasis web sederhana yang memungkinkan pengguna mencatat dan mengelola daftar tugas secara efisien. Dibuat sebagai bagian dari Capstone Project pada pelatihan Code Generations and Optimization with IBM Granite.

## 🚀 Deployment
- ✅ Link aplikasi: https://capston-ibm.netlify.app
- ✅ Repositori GitHub: https://github.com/Dewisrirahayu05/Capston_IBM

---

## 📌 Description

Proyek ini bertujuan untuk membangun sebuah aplikasi pengelolaan tugas harian (to-do list) yang sederhana namun fungsional, dengan antarmuka yang mudah digunakan dan penyimpanan data lokal. Permasalahan yang diangkat adalah bagaimana membuat aplikasi to-do list yang tetap bisa menyimpan data tanpa server backend, serta memiliki kemampuan edit dan subtugas yang fleksibel.

Solusi yang ditawarkan adalah menggunakan HTML, CSS, dan JavaScript murni dengan LocalStorage API sehingga pengguna tetap bisa menyimpan data tanpa koneksi internet atau akun login. Proyek ini juga menjadi bukti pemahaman dalam penggunaan teknologi web dasar dan penerapan logika aplikasi dengan AI Support.

---

## 🛠️ Technologies Used
| Teknologi                | Fungsi                                       |
| ------------------------ | -------------------------------------------- |
| **HTML5**                | Struktur halaman aplikasi                    |
| **CSS3**                 | Styling dan layout UI                        |
| **JavaScript (Vanilla)** | Logika aplikasi (CRUD, rendering data)       |
| **LocalStorage API**     | Menyimpan data tugas secara lokal di browser |
| **Vercel**               | Platform deployment gratis dan cepat         |
| **GitHub**               | Kontrol versi dan kolaborasi kode sumber     |

---

## ⭐ Features
- Menambahkan tugas baru beserta sub-tugasnya.
- Mengedit dan memperbarui tugas yang sudah dibuat.
- Menghapus tugas langsung dari halaman utama.
- Data tersimpan secara permanen di browser tanpa database.
- Tampilan bersih, responsif, dan mudah digunakan

### Cara kerja fitur:
- Tugas disimpan dalam array tasks[] dan diserialisasi ke localStorage.
- Subtugas diparsing otomatis berdasarkan pola regex (1. subtask, 2. subtask).
- Semua interaksi (tambah/edit/hapus) langsung memperbarui UI dan storage.

---

## 🧑‍💻 Setup Instructions
1. Clone repositori:
git clone https://github.com/Dewisrirahayu05/Capston_IBM.git

2. Masuk ke folder proyek:
cd Capston_IBM

3. Jalankan di browser:
Buka file index.html langsung di browser, atau Gunakan ekstensi Live Server (VS Code) untuk menjalankan lokal

4. Deploy ke Vercel:
- Pastikan semua file sudah diupload ke GitHub
Contoh:
✅ https://github.com/Dewisrirahayu05/Capston_IBM)

- Masuk ke https://vercel.com dan login dengan akun GitHub

- Klik tombol "New Project"

- Pilih repository Capston_IBM (nama repository di github)

- Vercel akan otomatis mengenali sebagai proyek HTML static

- Klik "Deploy"

- Setelah proses selesai, kamu akan mendapatkan link deploy publik
Link dari Vercel: https://capston-ibm.vercel.app

## AI Support Explanation
Pengembangan proyek ini mendapatkan dukungan dari teknologi AI berikut:
- ChatGPT (OpenAI) – membantu menyusun struktur HTML, CSS, JavaScript, debugging kode, parsing subtugas dengan regex, serta penulisan README.md.
- IBM Granite AI – sempat digunakan untuk memberikan saran teknis dan pemecahan masalah pada tahap awal pengembangan, namun pengembangan selanjutnya dilanjutkan menggunakan bantuan dari ChatGPT karena hasil dan alurnya lebih sesuai dengan kebutuhan proyek.
Kombinasi keduanya memberikan pemahaman yang lebih baik dalam membangun aplikasi berbasis web yang sederhana namun fungsional.
