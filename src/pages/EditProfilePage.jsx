import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Leaf, User, ArrowLeft } from 'lucide-react'
import { AuthContext } from '../context/AuthContext'

const EditProfilePage = () => {
  const { user, updateProfile } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    nama: user?.nama || '',
    username: user?.username || '',
    bio: user?.bio || ''
  })
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const result = updateProfile(formData)
    setMessage(result.message)
    
    if (result.success) {
      setTimeout(() => {
        navigate('/profile')
      }, 1500)
    }
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
          <Link to="/profile" className="text-sm hover:text-accent-400 transition">
            ← Kembali ke Profil
          </Link>
        </div>
      </nav>

      {/* Edit Profile Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500 mb-2">
              Edit Profil
            </h1>
            <p className="text-charcoal">
              Perbarui informasi profil Anda
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-primary-500 rounded-lg shadow-lg p-8 text-white">
            {/* Avatar Preview */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Display Name */}
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">
                Display Name
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama yang akan ditampilkan"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent-400 transition"
              />
            </div>

            {/* Username */}
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="@username"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent-400 transition"
              />
            </div>

            {/* Bio */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-2">
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Ceritakan tentang diri Anda..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent-400 transition resize-none"
              ></textarea>
            </div>

            {/* Message */}
            {message && (
              <div className="mb-4 p-3 bg-accent-400 text-charcoal rounded-lg text-center font-medium">
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-accent-400 text-charcoal py-3 rounded-lg hover:bg-accent-500 transition font-bold text-lg"
            >
              Terapkan
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage