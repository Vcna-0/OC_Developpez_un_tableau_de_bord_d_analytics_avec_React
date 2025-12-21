const API_BASE_URL = 'http://localhost:3000'

export const getUserData = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`)
    if (!response.ok) {
      throw new Error(`Error fetching user data: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch user data:', error)
    throw error
  }
}


export const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/activity`)
    if (!response.ok) {
      throw new Error(`Error fetching activity data: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch activity data:', error)
    throw error
  }
}


export const getUserAverageSessions = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/average-sessions`)
    if (!response.ok) {
      throw new Error(`Error fetching average sessions: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch average sessions:', error)
    throw error
  }
}


export const getUserPerformance = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}/performance`)
    if (!response.ok) {
      throw new Error(`Error fetching performance data: ${response.statusText}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch performance data:', error)
    throw error
  }
}
