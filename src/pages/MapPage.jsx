import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Leaf, MapPin, TreePine, Calendar, Sprout } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Custom Pin Icon dengan SVG
const createCustomIcon = (color = '#15803d') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 12 16 26 16 26s16-14 16-26c0-8.837-7.163-16-16-16z" fill="${color}"/>
        <circle cx="16" cy="16" r="7" fill="white"/>
        <path d="M16 11c-1.5 0-3 1-3 3.5 0 2 1.5 3 2.5 3.5L16 19l.5-1c1-.5 2.5-1.5 2.5-3.5 0-2.5-1.5-3.5-3-3.5zm0 5c-.8 0-1.5-.7-1.5-1.5S15.2 13 16 13s1.5.7 1.5 1.5S16.8 16 16 16z" fill="${color}"/>
      </svg>
    `,
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -42],
  })
}

// Icon berbeda untuk setiap lokasi (opsional, bisa disamakan semua)
const primaryIcon = createCustomIcon('#15803d')  // Hijau gelap
const accentIcon = createCustomIcon('#F4A261')   // Orange

// Lokasi penanaman di Sumatera
// Lokasi penanaman yang AKURAT di daratan Sumatera
const plantingLocations = [
  {
    id: 1,
    name: 'Taman Nasional Gunung Leuser',
    province: 'Aceh',
    coords: [3.75, 97.83],  //  Di daratan Aceh
    trees: 1500,
    date: 'Januari 2024',
    species: 'Meranti, Shorea',
    icon: primaryIcon
  },
  {
    id: 2,
    name: 'Hutan Lindung Bukit Barisan',
    province: 'Sumatera Barat',
    coords: [-0.68, 100.35],  //  Di daratan Sumatera Barat
    trees: 800,
    date: 'Maret 2024',
    species: 'Kruing, Meranti',
    icon: accentIcon
  },
  {
    id: 3,
    name: 'Taman Nasional Way Kambas',
    province: 'Lampung',
    coords: [-5.03, 105.65],  //  Di Lampung (bukan di laut!)
    trees: 1200,
    date: 'April 2024',
    species: 'Bakau, Nyirih',
    icon: primaryIcon
  },
  {
    id: 4,
    name: 'Hutan Adat Riau',
    province: 'Riau',
    coords: [0.50, 101.80],  //  Di daratan Riau
    trees: 600,
    date: 'Juni 2024',
    species: 'Meranti, Jelutung',
    icon: accentIcon
  },
  {
    id: 5,
    name: 'Taman Nasional Bukit Duabelas',
    province: 'Jambi',
    coords: [-1.60, 103.90],  //  Di Jambi
    trees: 900,
    date: 'Juli 2024',
    species: 'Meranti, Keruing',
    icon: primaryIcon
  },
  {
    id: 6,
    name: 'Gunung Dempo',
    province: 'Sumatera Selatan',
    coords: [-4.03, 103.13],  //  Di Sumatera Selatan
    trees: 700,
    date: 'September 2024',
    species: 'Kopi, Meranti',
    icon: accentIcon
  }
]

const MapPage = () => {
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
              <div className="flex gap-4 mt-8">
                <button className="bg-accent-400 text-charcoal px-6 py-3 rounded-lg hover:bg-accent-500 transition font-medium">
                  Donasi Pohon
                </button>
                <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition">
                  Mulai Tanam
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Peta Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary-500 mb-4 text-center">
              PETA PERSEBARAN PROYEK PENANAMAN HIDUPOHON
            </h2>
            <p className="text-charcoal text-center mb-8 max-w-2xl mx-auto">
              Bergabunglah bersama kami untuk melestarikan alam Indonesia. Setiap pohon yang Anda tanam membantu menjaga keseimbangan ekosistem dan masa depan bumi.
            </p>

            {/* Map Container */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <MapContainer 
                center={[1.5, 101.0]} 
                zoom={6} 
                style={{ height: '600px', width: '100%' }}
                scrollWheelZoom={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {plantingLocations.map((location) => (
                  <Marker 
                    key={location.id} 
                    position={location.coords} 
                    icon={location.icon}
                  >
                    <Popup>
                      <div className="min-w-[200px]">
                        <div className="flex items-center space-x-2 mb-2">
                          <TreePine className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          <h3 className="font-bold text-primary-500 text-sm">{location.name}</h3>
                        </div>
                        <div className="space-y-1 text-xs text-charcoal">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-accent-400 flex-shrink-0" />
                            <span>{location.province}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Sprout className="w-4 h-4 text-accent-400 flex-shrink-0" />
                            <span>{location.species}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-accent-400 flex-shrink-0" />
                            <span>{location.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TreePine className="w-4 h-4 text-accent-400 flex-shrink-0" />
                            <span className="font-bold">{location.trees} pohon ditanam</span>
                          </div>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-cream rounded-lg p-8">
                <MapPin className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary-500 mb-2">6</h3>
                <p className="text-charcoal">Titik Penanaman Pohon</p>
              </div>
              <div className="bg-cream rounded-lg p-8">
                <TreePine className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary-500 mb-2">5.700+</h3>
                <p className="text-charcoal">Total Pohon Ditanam</p>
              </div>
              <div className="bg-cream rounded-lg p-8">
                <Leaf className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary-500 mb-2">23</h3>
                <p className="text-charcoal">Titik Telah Menjadi Lokasi Penghijauan Kami</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-charcoal mb-4">
                INGIN MENAMBAH Titik Lokasi? SALURKAN BANTUANMU KE SEKARANG!
              </p>
              <button className="bg-primary-500 text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition font-medium">
                Mulai Donasi
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default MapPage