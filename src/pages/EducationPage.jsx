import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Leaf, AlertTriangle, TreePine, Droplets, Users, ArrowRight } from 'lucide-react'

const EducationPage = () => {
  const endangeredFlora = ['Rafflesia arnoldii - Status: Kritis', 'Bunga Bangkai - Status: Rentan', 'Kantong Semar - Status: Rentan']
  const endangeredFauna = ['Harimau Sumatera - Status: Kritis', 'Badak Sumatera - Status: Kritis', 'Orangutan Sumatera - Status: Kritis', 'Gajah Sumatera - Status: Kritis']

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

        {/* Mengapa Pohon Sumatera Penting */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">MENGAPA POHON SUMATERA PENTING?</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-bold text-primary-500 mb-4">FAKTA DEFORESTASI SUMATERA</h3>
              <ul className="space-y-2 text-charcoal">
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span>78.000 hektar hutan Sumatera hilang pada 2024</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span>Laju deforestasi Indonesia: 175.400 hektar/tahun</span>
                </li>
                <li className="flex items-start space-x-2">
                  <ArrowRight className="w-5 h-5 text-accent-400 flex-shrink-0 mt-0.5" />
                  <span>Hanya 51.1% daratan Indonesia yang masih berhutan</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-primary-500 mb-4">PENYEBAB UTAMA:</h3>
              <p className="text-charcoal leading-relaxed">
                Perkebunan sawit, pertambangan, illegal logging, dan kebakaran hutan. Dampaknya? Hilangnya habitat satwa langka, meningkatnya emisi karbon, dan terganggunya siklus air. Bersama HIDUPOHON, setiap pohon yang Anda tanam adalah investasi untuk masa depan Sumatera yang lebih hijau.
              </p>
            </div>
          </div>
        </section>

        {/* Keanekaragaman Hayati */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">KEANEKARAGAMAN HAYATI YANG TERANCAM</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-cream rounded-lg p-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4">Flora Endemik</h3>
                <p className="text-charcoal mb-4">40% tumbuhan di Sumatera adalah spesies endemik.</p>
                <p className="text-charcoal mb-4">Contoh: Rafflesia arnoldii, Bunga Bangkai, Kantong Semar</p>
                
                <h4 className="font-bold text-primary-500 mb-2">Fauna Kritis:</h4>
                <ul className="space-y-1 text-charcoal text-sm">
                  {endangeredFauna.map((fauna, index) => (
                    <li key={index}>• {fauna}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-cream rounded-lg p-8">
                <h3 className="text-xl font-bold text-primary-500 mb-4">Habitat Penting</h3>
                <p className="text-charcoal">Taman Nasional Way Kambas, Tesso Nilo, dan Bukit Tiris membutuhkan perlindungan segera.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fungsi Vital */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">FUNGSI VITAL HUTAN SUMATERA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <TreePine className="w-8 h-8 text-accent-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary-500 mb-1">Penyangga Karbon</h3>
                  <p className="text-charcoal text-sm">284.496 ton karbon/hektar</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <Droplets className="w-8 h-8 text-accent-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary-500 mb-1">Penghasil Oksigen</h3>
                  <p className="text-charcoal text-sm">Untuk stabilitas iklim global</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <Users className="w-8 h-8 text-accent-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary-500 mb-1">Sumber Ekonomi</h3>
                  <p className="text-charcoal text-sm">Madu, hasil hutan non-kayu, agriwisata</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4">
                <AlertTriangle className="w-8 h-8 text-accent-400 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary-500 mb-1">Pencegah Kekeringan</h3>
                  <p className="text-charcoal text-sm">Habitat spesies flora dan fauna</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mengapa Donasi Penting */}
        <section className="py-16 bg-primary-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">MENGAPA DONASI POHON ITU PENTING?</h2>
            <p className="mb-6">Setiap pohon yang kamu donasikan:</p>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Menyimpan emisi karbon hingga mencegah kerusakan global</li>
              <li>Menyediakan habitat bagi satwa terancam punah</li>
              <li>Menjaga ketersediaan air dan mencegah banjir</li>
              <li>Memberdayakan ekonomi masyarakat sekitar hutan</li>
            </ol>
            <p className="mt-6 italic">Tahukah kamu? Satu pohon dewasa dapat menyerap 48 pon CO2 per tahun dan menghasilkan oksigen untuk 2 orang selama setahun.</p>
          </div>
        </section>

        {/* Langkah Nyata */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">LANGKAH NYATA YANG BISA KAMU LAKUKAN</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <h3 className="font-bold text-primary-500">Donasi pohon langsung atau melalui dana</h3>
                    <p className="text-charcoal text-sm">Mulai dari Rp 25.000 untuk satu pohon</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <h3 className="font-bold text-primary-500">Sebarkan kesadaran tentang pentingnya hutan</h3>
                    <p className="text-charcoal text-sm">Ajak teman dan keluarga untuk ikut bergerak</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <h3 className="font-bold text-primary-500">Bergabung dengan komunitas hijau lokal</h3>
                    <p className="text-charcoal text-sm">Bersama HIDUPOHON, setiap pohon yang Anda tanam adalah investasi untuk masa depan Sumatera yang lebih hijau.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default EducationPage