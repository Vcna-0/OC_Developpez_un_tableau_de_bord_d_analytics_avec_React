import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockData'

const API_BASE_URL = 'http://localhost:3000'

/**
 * Simulates network delay for mock data
 * @param {number} ms - Delay in milliseconds
 */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Fetches user main data
 * @param {number} userId - User ID (12 or 18)
 * @param {boolean} useMock - If true, return mock data instead of API data
 */
export const getUserData = async (userId, useMock = false) => {
  if (useMock) {
    await delay(100)
    const user = USER_MAIN_DATA.find(u => u.id === userId)
    if (!user) {
      throw new Error(`User ${userId} not found in mock data`)
    }
    return { data: user }
  }

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
 * Fetches user activity data
 * @param {number} userId - User ID (12 or 18)
 * @param {boolean} useMock - If true, return mock data instead of API data
 */
export const getUserActivity = async (userId, useMock = false) => {
  if (useMock) {
    await delay(100)
    const activity = USER_ACTIVITY.find(a => a.userId === userId)
    if (!activity) {
      throw new Error(`Activity for user ${userId} not found in mock data`)
    }
    return { data: activity }
  }

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
 * Fetches user average sessions data
 * @param {number} userId - User ID (12 or 18)
 * @param {boolean} useMock - If true, return mock data instead of API data
 */
export const getUserAverageSessions = async (userId, useMock = false) => {
  if (useMock) {
    await delay(100)
    const sessions = USER_AVERAGE_SESSIONS.find(s => s.userId === userId)
    if (!sessions) {
      throw new Error(`Average sessions for user ${userId} not found in mock data`)
    }
    return { data: sessions }
  }

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
 * @param {number} userId - User ID (12 or 18)
 * @param {boolean} useMock - If true, return mock data instead of API data
 */
export const getUserPerformance = async (userId, useMock = false) => {
  if (useMock) {
    await delay(100)
    const performance = USER_PERFORMANCE.find(p => p.userId === userId)
    if (!performance) {
      throw new Error(`Performance for user ${userId} not found in mock data`)
    }
    return { data: performance }
  }

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
