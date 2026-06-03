import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TreePine, Banknote } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'

const DonationSection = () => {
  const [activeTab, setActiveTab] = useState('pohon')
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const amounts = [25000, 50000, 100000, 250000, 500000]

  const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(amount)
  }

  const handleLanjutkanDonasi = () => {
    const amount = selectedAmount || parseInt(customAmount)
    if (!amount || amount < 25000) {
      alert('Pilih nominal minimal Rp 25.000')
      return
    }
    
    if (!user) {
      alert('Silakan login terlebih dahulu untuk berdonasi')
      navigate('/login')
      return
    }
    
    // Simpan data donasi sementara
    const donationData = {
      userId: user.id,
      amount: amount,
      paymentMethod: null,
      donationType: activeTab,
      species: activeTab === 'pohon' ? 'Pohon Meranti' : 'Donasi Umum',
      quantity: activeTab === 'pohon' ? Math.floor(amount / 25000) : 1
    }
    localStorage.setItem('pending_donation', JSON.stringify(donationData))
    navigate('/donasi')
  }

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Toggle Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md p-1 flex">
              <button
                onClick={() => setActiveTab('pohon')}
                className={`px-6 py-2 rounded-md font-medium transition flex items-center space-x-2 ${
                  activeTab === 'pohon'
                    ? 'bg-primary-500 text-white'
                    : 'text-charcoal hover:bg-gray-100'
                }`}
              >
                <TreePine className="w-5 h-5" />
                <span>POHON</span>
              </button>
              <button
                onClick={() => setActiveTab('uang')}
                className={`px-6 py-2 rounded-md font-medium transition flex items-center space-x-2 ${
                  activeTab === 'uang'
                    ? 'bg-accent-400 text-white'
                    : 'text-charcoal hover:bg-gray-100'
                }`}
              >
                <Banknote className="w-5 h-5" />
                <span>UANG</span>
              </button>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-charcoal mb-6 text-center">
              {activeTab === 'pohon' 
                ? 'Pilih nominal yang ingin Anda donasikan'
                : 'Pilih jumlah donasi dalam rupiah'}
            </h3>

            {/* Amount Buttons */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
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

            {/* Custom Amount */}
            <div className="mb-6">
              <input
                type="number"
                placeholder="Jumlah lainnya"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition"
              />
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleLanjutkanDonasi}
              className="w-full bg-accent-400 text-white py-4 rounded-lg hover:bg-accent-500 transition font-bold text-lg shadow-md"
            >
              Lanjutkan Donasi
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DonationSection