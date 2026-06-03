import { Leaf } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const HeroSection = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  const handleDonasiClick = () => {
    if (user) {
      navigate('/donasi')
    } else {
      navigate('/login')
    }
  }

  const handleMulaiTanamClick = () => {
    navigate('/education')
  }

  return (
    <section className="bg-primary-500 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="w-8 h-8 text-accent-400" />
              <span className="text-2xl font-bold">HIDUPOHON</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Tanam Lebih Banyak Pohon,<br />
              Beri Lebih Banyak Harapan
            </h1>
            <p className="text-primary-100 mb-8 text-lg">
              Bergabunglah bersama komunitas relawan untuk menghijaukan hutan kembali. Setiap pohon yang Anda tanam adalah investasi untuk masa depan.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDonasiClick}
                className="bg-accent-400 text-charcoal px-6 py-3 rounded-lg hover:bg-accent-500 transition font-medium shadow-md"
              >
                Donasi Pohon
              </button>
              <button 
                onClick={handleMulaiTanamClick}
                className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition shadow-md"
              >
                Mulai Tanam
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop"
              alt="Hutan Hijau"
              className="rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection