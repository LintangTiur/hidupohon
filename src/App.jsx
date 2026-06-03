import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ProtectedRoute from './components/layout/ProtectedRoute'

// Home Components
import HeroSection from './components/home/HeroSection'
import AboutSection from './components/home/AboutSection'
import StatsSection from './components/home/StatsSection'
import DonationSection from './components/home/DonationSection'
import TestimonialSection from './components/home/TestimonialSection'
import CommentSection from './components/home/CommentSection'

// Pages
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import AboutPage from './pages/AboutPage'
import EducationPage from './pages/EducationPage'
import SyaratPage from './pages/SyaratPage'
import MapPage from './pages/MapPage'
import ProgramPage from './pages/ProgramPage'
import ProfilePage from './pages/ProfilePage'
import EditProfilePage from './pages/EditProfilePage'
import DonationPage from './pages/DonationPage'
import PaymentConfirmationPage from './pages/PaymentConfirmationPage'

function App() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={
        <div className="min-h-screen bg-cream flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <DonationSection />
            <TestimonialSection />
            <CommentSection />
          </main>
          <Footer />
        </div>
      } />

      {/* Auth Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Content Routes */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/syarat" element={<SyaratPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/program" element={<ProgramPage />} />

      {/* Protected Routes (butuh login) */}
      <Route path="/profile" element={
        <ProtectedRoute>
          <ProfilePage />
        </ProtectedRoute>
      } />
      <Route path="/edit-profile" element={
        <ProtectedRoute>
          <EditProfilePage />
        </ProtectedRoute>
      } />
      <Route path="/donasi" element={
        <ProtectedRoute>
          <DonationPage />
        </ProtectedRoute>
      } />
      <Route path="/konfirmasi-pembayaran" element={
        <ProtectedRoute>
          <PaymentConfirmationPage />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App