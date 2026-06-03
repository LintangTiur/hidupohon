import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Leaf, CheckCircle, TreePine } from 'lucide-react'
import { saveDonation } from '../utils/useLocalStorage'

const PaymentConfirmationPage = () => {
  const navigate = useNavigate()
  const [donationData, setDonationData] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const pending = localStorage.getItem('pending_donation')
    if (pending) {
      setDonationData(JSON.parse(pending))
    } else {
      navigate('/donasi')
    }
  }, [navigate])

  const handleConfirm = () => {
    setIsProcessing(true)
    
    // Simulasi proses pembayaran (2 detik)
    setTimeout(() => {
      if (donationData) {
        saveDonation(donationData)
        localStorage.removeItem('pending_donation')
        setIsProcessing(false)
        setIsSuccess(true)
      }
    }, 2000)
  }

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  if (!donationData) return null

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4 text-center">
          <CheckCircle className="w-20 h-20 text-primary-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-primary-500 mb-4">
            Donasi Berhasil!
          </h1>
          <p className="text-charcoal mb-2">
            Terima kasih atas kontribusi Anda!
          </p>
          <p className="text-2xl font-bold text-accent-400 mb-6">
            {formatRupiah(donationData.amount)}
          </p>
          <p className="text-sm text-gray-500 mb-6">
            {donationData.donationType === 'pohon' 
              ? ` ${Math.floor(donationData.amount / 25000)} pohon akan segera ditanam`
              : 'Donasi Anda akan digunakan untuk program penghijauan'}
          </p>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/profile"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition font-medium"
            >
              Lihat Profil Saya
            </Link>
            <Link 
              to="/"
              className="bg-secondary-500 text-white px-6 py-3 rounded-lg hover:bg-secondary-600 transition font-medium"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar Sederhana */}
      <nav className="bg-primary-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-accent-400" />
            <span className="text-2xl font-bold">HIDUPOHON</span>
          </Link>
          <Link to="/donasi" className="text-sm hover:text-accent-400 transition">
            ← Kembali
          </Link>
        </div>
      </nav>

      {/* Confirmation Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-500 mb-8 text-center">
            Ringkasan Pembayaran
          </h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-primary-500 text-white p-6">
              <h2 className="text-xl font-bold mb-2">Konfirmasi Pesanan Anda</h2>
              <p className="text-primary-100 text-sm">
                Pilih metode pembayaran dan konfirmasi pesanan Anda
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Summary */}
                <div>
                  <h3 className="font-bold text-charcoal mb-4">Ringkasan Pesanan</h3>
                  <div className="bg-cream rounded-lg p-4 flex items-center space-x-4">
                    <div className="bg-primary-500 rounded-lg p-3">
                      <TreePine className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal">{donationData.species}</p>
                      <p className="text-sm text-gray-500">
                        {donationData.donationType === 'pohon' 
                          ? `${Math.floor(donationData.amount / 25000)} pohon`
                          : 'Donasi umum'}
                      </p>
                      <p className="text-sm text-gray-500">Biaya admin: Rp 2.500</p>
                      <p className="font-bold text-primary-500 mt-1">
                        Total: {formatRupiah(donationData.amount + 2500)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <h3 className="font-bold text-charcoal mb-4">Metode Pembayaran</h3>
                  <div className="bg-cream rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-accent-400 rounded-lg p-3">
                        <span className="text-2xl"></span>
                      </div>
                      <div>
                        <p className="font-bold text-charcoal">{donationData.paymentMethod}</p>
                        <p className="text-sm text-gray-500">Pembayaran instan</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                disabled={isProcessing}
                className={`w-full mt-6 py-4 rounded-lg font-bold text-lg transition shadow-md ${
                  isProcessing
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-accent-400 text-charcoal hover:bg-accent-500'
                }`}
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-charcoal"></div>
                    <span>Memproses...</span>
                  </span>
                ) : (
                  'KONFIRMASI DAN BAYAR'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentConfirmationPage