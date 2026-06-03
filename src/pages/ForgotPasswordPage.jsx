import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Mail, ArrowLeft } from 'lucide-react'

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Link reset password telah dikirim ke ${email} (Ini masih demo)`)
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Navbar Sederhana */}
      <nav className="bg-primary-500 text-white py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-accent-400" />
            <span className="text-2xl font-bold">HIDUPOHON</span>
          </Link>
        </div>
      </nav>

      {/* Forgot Password Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary-500 mb-2">
              Lupa Kata Sandi?
            </h1>
            <p className="text-charcoal">
              Masukkan email Anda untuk mendapatkan link reset password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            {/* Email Input */}
            <div className="mb-6">
              <label className="block text-charcoal font-medium mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email Anda"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition font-medium mb-4"
            >
              Kirim Link Reset Password
            </button>

            {/* Back to Login */}
            <Link 
              to="/login" 
              className="flex items-center justify-center text-primary-500 hover:text-primary-600 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke halaman login
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordPage