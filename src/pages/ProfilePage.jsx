import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, User, Mail, Calendar, TreePine, Edit, LogOut } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'
import { getDonations } from '../utils/useLocalStorage'

const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext)
  const donations = getDonations()
  const userDonations = donations.filter(d => d.userId === user?.id)

  const totalDonation = userDonations.reduce((sum, d) => sum + (d.amount || 0), 0)

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  if (!user) return null

  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar Sederhana */}
      <nav className="bg-primary-500 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-accent-400" />
            <span className="text-2xl font-bold">HIDUPOHON</span>
          </Link>
          <Link to="/" className="text-sm hover:text-accent-400 transition">
            ← Kembali ke Beranda
          </Link>
        </div>
      </nav>

      {/* Profile Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-primary-500 text-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
              
              {/* Info */}
              <div className="flex-grow text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{user.nama || 'User'}</h1>
                <p className="text-primary-100 mb-4">@{user.username || user.email.split('@')[0]}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Bergabung {new Date(user.joinDate).toLocaleDateString('id-ID')}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/edit-profile"
                  className="flex items-center justify-center space-x-2 bg-accent-400 text-charcoal px-4 py-2 rounded-lg hover:bg-accent-500 transition font-medium"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit Profil</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Keluar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-2">
                <TreePine className="w-8 h-8 text-primary-500" />
                <h3 className="text-lg font-bold text-charcoal">Total Donasi</h3>
              </div>
              <p className="text-3xl font-bold text-primary-500">{userDonations.length}</p>
              <p className="text-sm text-gray-500">pohon yang telah didonasikan</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-2">
                <TreePine className="w-8 h-8 text-accent-400" />
                <h3 className="text-lg font-bold text-charcoal">Total Kontribusi</h3>
              </div>
              <p className="text-3xl font-bold text-accent-400">Rp {totalDonation.toLocaleString('id-ID')}</p>
              <p className="text-sm text-gray-500">telah disumbangkan</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center space-x-3 mb-2">
                <TreePine className="w-8 h-8 text-secondary-500" />
                <h3 className="text-lg font-bold text-charcoal">Status</h3>
              </div>
              <p className="text-3xl font-bold text-secondary-500">Aktif</p>
              <p className="text-sm text-gray-500">member sejak {new Date(user.joinDate).getFullYear()}</p>
            </div>
          </div>

          {/* Bio Section */}
          {user.bio && (
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-bold text-primary-500 mb-4">Tentang Saya</h2>
              <p className="text-charcoal leading-relaxed">{user.bio}</p>
            </div>
          )}

          {/* Donation History */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-primary-500 mb-4">Riwayat Donasi</h2>
            
            {userDonations.length === 0 ? (
              <div className="text-center py-8">
                <TreePine className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-charcoal mb-4">Anda belum melakukan donasi</p>
                <Link 
                  to="/donasi"
                  className="inline-block bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition"
                >
                  Mulai Donasi
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userDonations.map((donation) => (
                  <div key={donation.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-charcoal">{donation.species || 'Pohon'}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(donation.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-primary-500">Rp {donation.amount?.toLocaleString('id-ID')}</p>
                        <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          {donation.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage