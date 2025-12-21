import styles from './App.module.css'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import ActivityChart from './components/ActivityChart/ActivityChart'
import UserToggle from './components/UserToggle/UserToggle'
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

  console.log("allUsers", allUsers);
  // console.log("userData", userData);
  // console.log("activityData", activityData);
  // console.log("avgSessions", avgSessions);
  // console.log("performanceData", performanceData);
  // console.log("userId", userId);



  // Fetch all users data on mount
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const user12 = await getUserData(12)
        const user18 = await getUserData(18)
        setAllUsers([user12.data, user18.data])
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchAllUsers()
  }, [])

  // Fetch current user data and activity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataRes = await getUserData(userId)
        setUserData(userDataRes.data)

        const activityRes = await getUserActivity(userId)
        const formattedData = activityRes.data.sessions.map((session, index) => ({
          day: index + 1,
          kilogram: session.kilogram,
          calories: session.calories
        }))
        setActivityData(formattedData)
        // Fetch average sessions (durée moyenne des sessions)
        try {
          const avgRes = await getUserAverageSessions(userId)
          // avgRes.data.sessions expected shape: [{ day: 1..7, sessionLength: number }, ...]
          setAvgSessions(avgRes.data.sessions)
        } catch (err) {
          console.error('Error fetching average sessions:', err)
        }
        // Fetch performance data (radar chart)
        try {
          const perfRes = await getUserPerformance(userId)
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
  }, [userId])

  const handleUserToggle = (newUserId) => {
    setUserId(newUserId)
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
                  <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </>
              )}
            </div>
            {allUsers.length > 0 && (
              <UserToggle
                users={allUsers}
                currentUserId={userId}
                onToggle={handleUserToggle}
              />
            )}
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
                  icon={<img src={energyIcon} alt="Énergie" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#FF000014"
                  value={userData.keyData.calorieCount}
                  unit="kCal"
                  label="Calories"
                />
                <KeyDataCard
                  icon={<img src={chickenIcon} alt="Protéines" style={{ width: 20, height: 20 }} />}
                  iconBgColor="#4E90F014"
                  value={userData.keyData.proteinCount}
                  unit="g"
                  label="Protéines"
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
