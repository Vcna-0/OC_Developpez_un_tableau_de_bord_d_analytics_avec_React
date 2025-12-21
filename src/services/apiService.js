const API_BASE_URL = 'http://localhost:3000'

/**
 * Fetches user general information
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} User data
 */
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

/**
 * Fetches user activity data (weight and calories)
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} Activity data with sessions
 */
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

/**
 * Fetches user average session duration
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} Average session data
 */
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

/**
 * Fetches user performance data
 * @param {number} userId - The user ID
 * @returns {Promise<Object>} Performance data
 */
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
