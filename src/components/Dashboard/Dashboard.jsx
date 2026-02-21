import { useEffect, useState } from 'react'
import { useUser } from '../../contexts/UserContext'
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from '../../services/apiService'
import DashboardHeader from './DashboardHeader'
import ChartsGrid from './ChartsGrid'
import KeyDataSection from './KeyDataSection'
import Error404 from '../Error404/Error404'
import Loader from '../Loader/Loader'
import styles from './Dashboard.module.css'

function Dashboard() {
  const { userId, useMock, apiError, setApiError } = useUser()

  const [activityData, setActivityData] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [userData, setUserData] = useState(null)
  const [avgSessions, setAvgSessions] = useState([])
  const [performanceData, setPerformanceData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const user12 = await getUserData(12, useMock)
        const user18 = await getUserData(18, useMock)
        setAllUsers([user12.data, user18.data])
        setApiError(null)
      } catch (error) {
        console.error('Error fetching users:', error)
        if (!useMock) {
          setApiError("Impossible de se connecter au serveur. L'API n'est peut-etre pas demarree.")
        }
      }
    }

    fetchAllUsers()
  }, [useMock, setApiError])

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const userDataRes = await getUserData(userId, useMock)
        setUserData(userDataRes.data)
        setApiError(null)

        const activityRes = await getUserActivity(userId, useMock)
        const formattedData = activityRes.data.sessions.map((session, index) => ({
          day: index + 1,
          kilogram: session.kilogram,
          calories: session.calories,
        }))
        setActivityData(formattedData)

        try {
          const avgRes = await getUserAverageSessions(userId, useMock)
          setAvgSessions(avgRes.data.sessions)
        } catch (err) {
          console.error('Error fetching average sessions:', err)
        }

        try {
          const perfRes = await getUserPerformance(userId, useMock)
          setPerformanceData(perfRes.data.data)
        } catch (err) {
          console.error('Error fetching performance data:', err)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
        if (!useMock) {
          setApiError("Impossible de se connecter au serveur. L'API n'est peut-etre pas demarree.")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [userId, useMock, setApiError])

  if (apiError) {
    return <Error404 />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.container}>
      <DashboardHeader userData={userData} allUsers={allUsers} />

      <div className={styles.mainGrid}>
        <ChartsGrid
          activityData={activityData}
          avgSessions={avgSessions}
          performanceData={performanceData}
          userData={userData}
        />

        <KeyDataSection userData={userData} />
      </div>
    </div>
  )
}

export default Dashboard
