import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Target, Eye, Leaf, Users, Shield, Monitor, TreePine } from 'lucide-react'

const AboutPage = () => {
  const programs = [
    {
      icon: TreePine,
      title: 'Donasi Pohon Langsung',
      desc: 'Terima pohon fisik dari donatur dengan standar kesehatan, spesies asli, dan pengawasan aman.'
    },
    {
      icon: Shield,
      title: 'Donasi Finansial',
      desc: 'Dana dialokasikan untuk pengadaan bibit, perawatan, transportasi penanaman, dan edukasi lingkungan.'
    },
    {
      icon: Users,
      title: 'Penanaman Terarah',
      desc: 'Bekerja sama dengan penjaga hutan, pemerintah daerah, dan ahli kehutanan untuk menentukan lokasi tanam yang tepat.'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Laporan',
      desc: 'Setiap pohon didokumentasikan, dipantau pertumbuhannya, dan dilaporkan secara berkala kepada donatur.'
    }
  ]

  const values = [
    { title: 'Transparansi', desc: 'Setiap pohon & rupiah dapat dilacak asal dan tujuannya.' },
    { title: 'Kolaborasi', desc: 'Bergandengan bersama komunitas, mitra lapangan, dan ahli ekologi.' },
    { title: 'Akuntabilitas', desc: 'Laporan penanaman, foto lokasi, dan update pertumbuhan tersedia untuk donatur.' },
    { title: 'Keberlanjutan', desc: 'Fokus pada spesies natif, perawatan pasca-tanam, dan edukasi lingkungan jangka panjang.' }
  ]

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary-500 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-6">
                <Leaf className="w-8 h-8 text-accent-400" />
                <span className="text-2xl font-bold">HIDUPOHON</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Tentang HIDUPOHON
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed">
                Menumbuhkan Harapan, Satu Pohon dalam Satu Waktu. HIDUPOHON lahir dari keyakinan sederhana: setiap pohon yang ditanam adalah janji untuk masa depan yang lebih hijau, lebih sehat, dan lebih layak huni. Kami adalah inisiatif kolaboratif yang menghubungkan niat baik masyarakat dengan aksi nyata penghijauan, berfokus pada restorasi ekologi dan pemberdayaan komunitas di Indonesia, khususnya wilayah Sumatera.
              </p>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-8 h-8 text-accent-400" />
                  <h2 className="text-2xl font-bold text-primary-500">VISI</h2>
                </div>
                <p className="text-charcoal leading-relaxed">
                  Indonesia yang subur secara ekologis melalui penghijauan berkelanjutan dan ruang hidup yang seimbang.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-8 h-8 text-accent-400" />
                  <h2 className="text-2xl font-bold text-primary-500">MISI</h2>
                </div>
                <ol className="text-charcoal leading-relaxed space-y-2 list-decimal list-inside">
                  <li>Memfasilitasi donasi pohon & dana secara transparan, terukur, dan mudah diakses.</li>
                  <li>Memastikan setiap bibit ditanam di lokasi yang tepat, dengan metode berbasis ilmu ekologi.</li>
                  <li>Memberdayakan komunitas lokal sebagai penjaga dan perawat pohon jangka panjang.</li>
                  <li>Menyediakan pelaporan terbuka agar setiap donatur melihat dampak nyata kontribusinya.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Apa Yang Kami Lakukan */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">APA YANG KAMI LAKUKAN?</h2>
            <p className="text-charcoal mb-8 leading-relaxed">
              HIDUPOHON tidak hanya menggalang donasi. Kami membangun sistem hijau yang utuh:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-cream rounded-lg p-6 hover:shadow-lg transition">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-500 mb-2">{program.title}</h3>
                      <p className="text-charcoal text-sm leading-relaxed">{program.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kenapa Donasi Langsung */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-primary-500 rounded-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">KENAPA DONASI POHON LANGSUNG?</h2>
              <p className="leading-relaxed">
                Kami percaya bahwa menanam pohon bukan sekadar aksi sekali, melainkan sebuah perjalanan. Dengan menerima donasi pohon secara langsung, kami membuka ruang bagi individu, sekolah, komunitas, dan bahkan anak-anak untuk aktif dari hulu ke hilir: dari penyediaan bibit sehat, pengiriman aman, hingga penanaman yang bertanggung jawab. Semua proses kami rancang agar praktis, terverifikasi, dan ramah anak dan bumi.
              </p>
            </div>
          </div>
        </section>

        {/* Nilai Yang Kami Pegang */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-8">NILAI YANG KAMI PEGANG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-accent-400 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-500 mb-1">{value.title}</h3>
                    <p className="text-charcoal text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gabung & Berkontribusi */}
        <section className="py-16 bg-primary-500 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">GABUNG & BERKONTRIBUSI</h2>
            <p className="mb-6">Bersama HIDUPOHON, Anda tidak hanya menyumbang. Anda menumbuhkan kehidupan.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold"></span>
                <span>Kirim atau antarkan pohon langsung ke posko kami.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold">💰</span>
                <span>Transfer donasi untuk mendukung program penanaman & perawatan.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold"></span>
                <span>Jadi relawan lapangan atau mitra komunitas.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-accent-400 font-bold"></span>
                <span>Sebarkan misi ini ke lingkaran terdekatmu.</span>
              </li>
            </ul>
            <p className="italic text-primary-100">Setiap langkah kecil Anda adalah napas baru bagi bumi.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutPage