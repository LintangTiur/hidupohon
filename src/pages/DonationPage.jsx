import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Leaf, TreePine, CreditCard } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'

const DonationPage = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [donationType, setDonationType] = useState('pohon')

  const amounts = [25000, 50000, 100000, 250000, 500000]
  
  const paymentMethods = [
    { id: 'gopay', name: 'Gopay'},
    { id: 'bca', name: 'BCA'},
    { id: 'alfamart', name: 'Alfamart'},
    { id: 'ovo', name: 'OVO'},
    { id: 'mandiri', name: 'Mandiri'},
    { id: 'indodana', name: 'Dana'},
    { id: 'shopeepay', name: 'ShopeePay'},
    { id: 'bni', name: 'BNI'},
  ]

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const handleContinue = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (!amount || amount < 25000) {
      alert('Pilih nominal minimal Rp 25.000')
      return
    }
    if (!selectedPayment) {
      alert('Pilih metode pembayaran')
      return
    }

    // Simpan data donasi sementara di localStorage
    const donationData = {
      userId: user?.id,
      amount,
      paymentMethod: selectedPayment,
      donationType,
      species: donationType === 'pohon' ? 'Pohon Meranti' : 'Donasi Umum',
      quantity: donationType === 'pohon' ? Math.floor(amount / 25000) : 1
    }
    localStorage.setItem('pending_donation', JSON.stringify(donationData))
    navigate('/konfirmasi-pembayaran')
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
          <Link to="/profile" className="text-sm hover:text-accent-400 transition">
            ← Kembali ke Profil
          </Link>
        </div>
      </nav>

      {/* Donation Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-primary-500 mb-8 text-center">
            Donasi untuk Hutan Sumatera
          </h1>

          {/* Toggle Type */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 flex">
              <button
                onClick={() => setDonationType('pohon')}
                className={`px-6 py-2 rounded-md font-medium transition flex items-center space-x-2 ${
                  donationType === 'pohon'
                    ? 'bg-primary-500 text-white'
                    : 'text-charcoal hover:bg-gray-100'
                }`}
              >
                <TreePine className="w-5 h-5" />
                <span>POHON</span>
              </button>
              <button
                onClick={() => setDonationType('uang')}
                className={`px-6 py-2 rounded-md font-medium transition flex items-center space-x-2 ${
                  donationType === 'uang'
                    ? 'bg-accent-400 text-white'
                    : 'text-charcoal hover:bg-gray-100'
                }`}
              >
                <CreditCard className="w-5 h-5" />
                <span>UANG</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Amount Selection */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-charcoal mb-4">
                Pilih Nominal Donasi
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-3 px-4 rounded-lg border-2 transition font-medium ${
                      selectedAmount === amount
                        ? 'border-primary-500 bg-primary-50 text-primary-500'
                        : 'border-gray-200 text-charcoal hover:border-primary-500'
                    }`}
                  >
                    {formatRupiah(amount)}
                  </button>
                ))}
              </div>

              <input
                type="number"
                placeholder="Jumlah lainnya (min. Rp 25.000)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition mb-4"
              />

              {donationType === 'pohon' && (
                <div className="bg-cream rounded-lg p-4">
                  <p className="text-sm text-charcoal">
                     Setiap <strong>Rp 25.000</strong> = 1 pohon yang ditanam
                  </p>
                  <p className="text-sm text-primary-500 font-bold mt-1">
                     Anda akan menanam: {Math.floor((selectedAmount || parseInt(customAmount) || 0) / 25000)} pohon
                  </p>
                </div>
              )}
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-charcoal mb-4">
                Metode Pembayaran
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setSelectedPayment(method.name)}
                    className={`py-3 px-4 rounded-lg border-2 transition font-medium flex items-center justify-center space-x-2 ${
                      selectedPayment === method.name
                        ? 'border-primary-500 bg-primary-50 text-primary-500'
                        : 'border-gray-200 text-charcoal hover:border-primary-500'
                    }`}
                  >
                    <span>{method.icon}</span>
                    <span>{method.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Summary & CTA */}
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                <p className="text-charcoal">Total Donasi:</p>
                <p className="text-3xl font-bold text-primary-500">
                  {formatRupiah(selectedAmount || parseInt(customAmount) || 0)}
                </p>
              </div>
              <button
                onClick={handleContinue}
                className="bg-accent-400 text-charcoal px-8 py-4 rounded-lg hover:bg-accent-500 transition font-bold text-lg shadow-md"
              >
                Konfirmasi & Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonationPage