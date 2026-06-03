import { Leaf, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-primary-500    text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-accent-400" />
              <span className="text-2xl font-bold">HIDUPOHON</span>
            </div>
            <p className="text-primary-100 text-sm leading-relaxed">
              Bersama menghijaukan kembali Indonesia dengan satu pohon setiap waktu.
            </p>
          </div>

          {/* Tautan Cepat */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-primary-100 hover:text-primary-400 transition">Tentang Kami</a></li>
              <li><a href="/program" className="text-primary-100 hover:text-primary-400 transition">Program Kami</a></li>
              <li><a href="/map" className="text-primary-100 hover:text-primary-400 transition">Peta Sebaran</a></li>
              <li><a href="/education" className="text-primary-100 hover:text-primary-400 transition">Edukasi</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/syarat" className="text-primary-100 hover:text-primary-400 transition">Syarat & Ketentuan</a></li>
              <li><a href="/privasi" className="text-primary-100 hover:text-primary-400 transition">Kebijakan Privasi</a></li>
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100 text-sm">0823-6567-7588</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100 text-sm">hidupohon00@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <span className="text-primary-100 text-sm">Jl. Pendidikan Profesi Dr. H. Mochtar Iskandar No. 1A, Medan Estate, Kec. Percut Sei Tuan, Sumatera Utara, 20371</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-400 mt-8 pt-8 text-center text-primary-100 text-sm">
          <p>© 2026 HIDUPOHON. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer