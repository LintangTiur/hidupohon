import { createContext, useState, useEffect } from 'react'
import { getUser, setUser, removeUser, getUsers, saveUsers } from '../utils/useLocalStorage'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUserState] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Cek apakah user sudah login saat app dibuka
    const storedUser = getUser()
    if (storedUser) {
      setUserState(storedUser)
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    const users = getUsers()
    const foundUser = users.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      setUser(foundUser)
      setUserState(foundUser)
      return { success: true, message: 'Login berhasil!' }
    }
    return { success: false, message: 'Email atau password salah!' }
  }

  const register = (userData) => {
    const users = getUsers()
    
    // Cek apakah email sudah terdaftar
    const existingUser = users.find(u => u.email === userData.email)
    if (existingUser) {
      return { success: false, message: 'Email sudah terdaftar!' }
    }

    const newUser = {
      ...userData,
      id: Date.now(),
      joinDate: new Date().toISOString(),
      donations: []
    }

    users.push(newUser)
    saveUsers(users)
    setUser(newUser)
    setUserState(newUser)
    return { success: true, message: 'Registrasi berhasil!' }
  }

  const logout = () => {
    removeUser()
    setUserState(null)
  }

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData }
    setUser(updatedUser)
    setUserState(updatedUser)

    // Update juga di users list
    const users = getUsers()
    const updatedUsers = users.map(u => 
      u.id === user.id ? updatedUser : u
    )
    saveUsers(updatedUsers)
    
    return { success: true, message: 'Profil berhasil diperbarui!' }
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      login, 
      register, 
      logout, 
      updateProfile 
    }}>
      {children}
    </AuthContext.Provider>
  )
}