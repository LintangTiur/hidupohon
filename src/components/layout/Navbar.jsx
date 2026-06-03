import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Leaf, User, LogOut } from 'lucide-react'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Program Kami', href: '/program' },
    { name: 'Peta Sebaran', href: '/map' },
    { name: 'Edukasi', href: '/education' },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
    setIsOpen(false)
  }

  return (
    <nav className="bg-primary-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-accent-400" />
            <span className="text-2xl font-bold">HIDUPOHON</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:text-accent-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              // Jika sudah login
              <div className="flex items-center space-x-3">
                <Link 
                  to="/profile" 
                  className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                >
                  <User className="w-5 h-5" />
                  <span>{user.nama || user.email}</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-lg transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              // Jika belum login
              <>
                <Link 
                  to="/login" 
                  className="bg-accent-400 text-charcoal px-4 py-2 rounded-lg hover:bg-accent-500 transition font-medium"
                >
                  Masuk
                </Link>
                <Link 
                  to="/register" 
                  className="bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition font-medium"
                >
                  Daftar
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 hover:text-accent-400 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="flex flex-col space-y-2 mt-4">
                <Link 
                  to="/profile" 
                  className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-5 h-5" />
                  <span>Profil Saya</span>
                </Link>
                <button 
                  onClick={handleLogout}
                  className="flex items-center justify-center space-x-2 bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-lg transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Keluar</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 mt-4">
                <Link 
                  to="/login" 
                  className="bg-accent-400 text-charcoal px-4 py-2 rounded-lg hover:bg-accent-500 transition text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Masuk
                </Link>
                <Link 
                  to="/register" 
                  className="bg-secondary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition text-center font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar