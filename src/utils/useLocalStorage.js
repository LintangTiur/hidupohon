// Hook untuk menyimpan data di localStorage
export const useLocalStorage = () => {
  const getItem = (key) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : null
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return null
    }
  }

  const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error('Error writing to localStorage:', error)
      return false
    }
  }

  const removeItem = (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Error removing from localStorage:', error)
      return false
    }
  }

  return { getItem, setItem, removeItem }
}

// Helper functions untuk user
export const getUser = () => {
  const user = localStorage.getItem('hidupohon_user')
  return user ? JSON.parse(user) : null
}

export const setUser = (user) => {
  localStorage.setItem('hidupohon_user', JSON.stringify(user))
}

export const removeUser = () => {
  localStorage.removeItem('hidupohon_user')
}

// Helper untuk users list (simulasi database)
export const getUsers = () => {
  const users = localStorage.getItem('hidupohon_users')
  return users ? JSON.parse(users) : []
}

export const saveUsers = (users) => {
  localStorage.setItem('hidupohon_users', JSON.stringify(users))
}

// Helper untuk donation history
export const getDonations = () => {
  const donations = localStorage.getItem('hidupohon_donations')
  return donations ? JSON.parse(donations) : []
}

export const saveDonation = (donation) => {
  const donations = getDonations()
  donations.push({
    ...donation,
    id: Date.now(),
    date: new Date().toISOString(),
    status: 'success'
  })
  localStorage.setItem('hidupohon_donations', JSON.stringify(donations))
}