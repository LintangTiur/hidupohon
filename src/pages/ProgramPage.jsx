import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Leaf, TreePine, Users, Heart } from 'lucide-react'

const ProgramPage = () => {
  const programs = [
    {
      icon: TreePine,
      title: 'Program Penanaman Pohon',
      desc: 'Donasi langsung pohon fisik atau dana untuk penanaman di lokasi-lokasi strategis Sumatera.',
      color: 'bg-primary-500'
    },
    {
      icon: Users,
      title: 'Program Edukasi Lingkungan',
      desc: 'Workshop dan pelatihan untuk masyarakat lokal tentang pentingnya konservasi hutan.',
      color: 'bg-secondary-500'
    },
    {
      icon: Heart,
      title: 'Program Adopsi Pohon',
      desc: 'Adopsi satu pohon dan pantau pertumbuhannya secara berkala melalui dashboard pribadi.',
      color: 'bg-accent-400'
    }
  ]

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
                Program Kami
              </h1>
              <p className="text-primary-100 text-lg leading-relaxed">
                Berbagai inisiatif untuk menghijaukan kembali hutan Sumatera dan memberdayakan masyarakat lokal.
              </p>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className={`${program.color} p-8 text-white`}>
                    <program.icon className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  </div>
                  <div className="p-8">
                    <p className="text-charcoal leading-relaxed">{program.desc}</p>
                    <button className="mt-4 text-primary-500 font-medium hover:text-primary-600">
                      Pelajari Lebih Lanjut →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProgramPage