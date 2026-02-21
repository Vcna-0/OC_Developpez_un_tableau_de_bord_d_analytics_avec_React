import { createContext, useContext, useState } from 'react'

const UserContext = createContext(null)

export function UserProvider({ children }) {
  const [userId, setUserId] = useState(12)
  const [useMock, setUseMock] = useState(true)
  const [apiError, setApiError] = useState(null)

  const value = {
    userId,
    useMock,
    apiError,
    setUserId,
    setUseMock,
    setApiError,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
