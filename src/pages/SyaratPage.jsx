import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Leaf } from 'lucide-react'

const SyaratPage = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="w-8 h-8 text-accent-400" />
                <span className="text-2xl font-bold">HIDUPOHON</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Tanam Lebih Banyak Pohon,<br />Beri Lebih Banyak Harapan
              </h1>
              <p className="text-primary-100 leading-relaxed">
                Bergabunglah bersama komunitas relawan untuk menghijaukan hutan kembali. Setiap pohon yang Anda tanam adalah investasi untuk masa depan.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-500 mb-6">
                SYARAT DAN KETENTUAN DONASI POHON LANGSUNG
              </h2>
              <p className="text-charcoal mb-8 leading-relaxed">
                Terima kasih atas niat baik Anda untuk mendonasikan pohon secara langsung. Agar pohon yang Anda kirim dapat tumbuh optimal, aman bagi ekosistem lokal, dan mudah dikelola oleh tim, kami memberikan syarat dan ketentuan sebagai berikut:
              </p>

              {/* Section 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 flex items-center">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
                  KONFIRMASI SEBELUM PENGIRIMAN/KEDATANGAN
                </h3>
                <p className="text-charcoal leading-relaxed pl-11">
                  Donatur wajib menghubungi tim terlebih dahulu via Email untuk menyebutkan jenis pohon, jumlah, ukuran, dan rencana waktu pengiriman/kedatangan. Donasi tanpa konfirmasi awal tidak dapat diproses dan berisiko ditolak saat tiba di lokasi.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 flex items-center">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
                  SPESIFIKASI POHON YANG DITERIMA
                </h3>
                <p className="text-charcoal mb-4 pl-11">Tim hanya menerima pohon yang memenuhi kriteria berikut:</p>
                <ol className="space-y-2 pl-11 text-charcoal">
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">1.</span>
                    <span>Jenis: Pohon unggulan, pohon buah lokal, pohon konservasi, atau bibit keras. Tidak menerima bunga hias, tanaman akuatik, atau semak pendek yang tidak sesuai fungsi penanaman.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">2.</span>
                    <span>Status Ekologis: Hanya spesies asli/lokal yang telah direkomendasikan resmi oleh tim. Tidak menerima spesies invasif, asing yang berpotensi mengganggu ekosistem, atau spesies dilindungi oleh undang-undang.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">3.</span>
                    <span>Kondisi Fisik: Sehat, bebas hama/penyakit parah, batang tidak patah/terbelah, dan sistem perakaran utuh.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="font-bold">4.</span>
                    <span>Ukuran: Tinggi ideal 30–100 cm dengan diameter batang minimal 1–3 cm atau sudah berusia dalam polibag. Bibit terlalu kecil (&lt;20 cm) atau terlalu dewasa dengan akar terbuka/berpindah besar sulit ditangani logistik & penanaman.</span>
                  </li>
                </ol>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 flex items-center">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">3</span>
                  PERSIAPAN & PENGEMASAN
                </h3>
                <p className="text-charcoal leading-relaxed pl-11">
                  Pohon harus berada dalam polibag atau tempat yang stabil selama pengiriman. Akar wajib dibungkus media lembab/rindan dan dilindungi dari guncangan atau paparan panas berlebih. Pot tidak boleh bocor atau mengeluarkan media tanah secara berlebihan selama transit. Biaya pengemasan, pengiriman, dan asuransi (jika ada) sepenuhnya menjadi tanggung jawab donatur.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 flex items-center">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">4</span>
                  PROSES VERIFIKASI & HAK PENOLAKAN
                </h3>
                <p className="text-charcoal leading-relaxed pl-11">
                  Tim akan melakukan inspeksi visual & kesehatan saat pohon tiba atau saat donatur datang ke lokasi. Pohon dapat ditolak tanpa penggantian biaya jika:
                </p>
                <ol className="space-y-2 pl-11 text-charcoal mt-3">
                  <li>1. Tidak sesuai konfirmasi awal atau jenis tidak direkomendasikan</li>
                  <li>2. Tiba/tiba layu, kering, patah, berjamur, atau berkarat ketika diterima</li>
                  <li>3. Dikirim di luar jadwal pengiriman atau diluar lokasi aman</li>
                  <li>4. Tidak melampirkan dokumentasi asal bibit (jika diminta tim). Keputusan tim bersifat final demi keamanan ekosistem & keberlanjutan program.</li>
                </ol>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4 flex items-center">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">5</span>
                  TANGGUNG JAWAB & PENGGUNAAN POHON
                </h3>
                <ol className="space-y-2 pl-11 text-charcoal">
                  <li>1. Setelah diterima & dinyatakan layak, pohon menjadi bagian dari aset program dan akan ditanam di lokasi, waktu, & metode yang telah ditetapkan oleh tim ahli/rekomendasi.</li>
                  <li>2. Tim tidak bertanggung jawab atas kerusakan atau kematian pohon yang terjadi setelah proses penanaman atau akibat kondisi lingkungan yang tidak dapat dikontrol (cuaca ekstrem, hama alami, dll).</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SyaratPage