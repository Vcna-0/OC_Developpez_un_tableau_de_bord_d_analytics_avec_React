import styles from './App.module.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import ActivityChart from './components/ActivityChart/ActivityChart'
import UserToggle from './components/Toggle/UserToggle'
import DataSourceToggle from './components/Toggle/DataSourceToggle'
import { useEffect, useState } from 'react'
import { getUserData, getUserActivity, getUserAverageSessions, getUserPerformance } from './services/apiService'
import SessionAverage from './components/SessionAverage/SessionAverage'
import Performance from './components/Performance/Performance'
import Score from './components/Score/Score'
import KeyDataCard from './components/KeyDataCard/KeyDataCard'
import appleIcon from './assets/apple.svg'
import energyIcon from './assets/energy.svg'
import chickenIcon from './assets/chicken.svg'
import cheeseburgerIcon from './assets/cheeseburger.svg'

function App() {
  const [activityData, setActivityData] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [userData, setUserData] = useState(null)
  const [avgSessions, setAvgSessions] = useState([])
  const [performanceData, setPerformanceData] = useState([])
  const [userId, setUserId] = useState(12)
  const [useMock, setUseMock] = useState(false)

  console.log("allUsers", allUsers);
  // console.log("userData", userData);
  // console.log("activityData", activityData);
  // console.log("avgSessions", avgSessions);
  // console.log("performanceData", performanceData);
  // console.log("userId", userId);



  // Fetch all users data on mount or when useMock changes
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const user12 = await getUserData(12, useMock)
        const user18 = await getUserData(18, useMock)
        setAllUsers([user12.data, user18.data])
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchAllUsers()
  }, [useMock])

  // Fetch current user data and activity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataRes = await getUserData(userId, useMock)
        setUserData(userDataRes.data)

        const activityRes = await getUserActivity(userId, useMock)
        const formattedData = activityRes.data.sessions.map((session, index) => ({
          day: index + 1,
          kilogram: session.kilogram,
          calories: session.calories
        }))
        setActivityData(formattedData)
        // Fetch average sessions (duree moyenne des sessions)
        try {
          const avgRes = await getUserAverageSessions(userId, useMock)
          // avgRes.data.sessions expected shape: [{ day: 1..7, sessionLength: number }, ...]
          setAvgSessions(avgRes.data.sessions)
        } catch (err) {
          console.error('Error fetching average sessions:', err)
        }
        // Fetch performance data (radar chart)
        try {
          const perfRes = await getUserPerformance(userId, useMock)
          // perfRes.data.data expected shape: [{ value: number, kind: 1..6 }, ...]
          setPerformanceData(perfRes.data.data)
        } catch (err) {
          console.error('Error fetching performance data:', err)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [userId, useMock])

  const handleUserToggle = (newUserId) => {
    setUserId(newUserId)
  }

  const handleDataSourceToggle = (newUseMock) => {
    setUseMock(newUseMock)
  }

  return (
    <div>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        <SideMenu />
        <section className={styles.content}>
          <div className={styles.toolbar}>
            <div>
              {userData && (
                <>
                  <h2 className={styles.greeting}>
                    Bonjour <span>{userData.userInfos.firstName}</span>
                  </h2>
                  <p>Felicitation ! Vous avez explose vos objectifs hier</p>
                </>
              )}
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {allUsers.length > 0 && (
                <UserToggle
                  users={allUsers}
                  currentUserId={userId}
                  onToggle={handleUserToggle}
                />
              )}
              <DataSourceToggle
                useMock={useMock}
                onToggle={handleDataSourceToggle}
              />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '24px', marginTop: '24px' }}>
            {/* Main content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* ActivityChart*/}
              <ActivityChart data={activityData} />

              {/* SessionAverage, Performance, Score */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
                <SessionAverage data={avgSessions} />
                <Performance data={performanceData} />
                <Score data={{ score: userData?.score ?? userData?.todayScore ?? 0 }} />
              </div>
            </div>

            {/*KeyDataCards*/}
            {userData && (
              <div className={styles.keyDataSection}>
                <KeyDataCard
                  icon={<img src={energyIcon} alt="Energie" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#FF000014"
                  value={userData.keyData.calorieCount}
                  unit="kCal"
                  label="Calories"
                />
                <KeyDataCard
                  icon={<img src={chickenIcon} alt="Proteines" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#4E90F014"
                  value={userData.keyData.proteinCount}
                  unit="g"
                  label="Proteines"
                />
                <KeyDataCard
                  icon={<img src={appleIcon} alt="Glucides" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#F3A50514"
                  value={userData.keyData.carbohydrateCount}
                  unit="g"
                  label="Glucides"
                />
                <KeyDataCard
                  icon={<img src={cheeseburgerIcon} alt="Lipides" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#FD519214"
                  value={userData.keyData.lipidCount}
                  unit="g"
                  label="Lipides"
                />
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
