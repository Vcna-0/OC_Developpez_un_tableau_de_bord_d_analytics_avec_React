import { useUser } from '../../contexts/UserContext'
import UserToggle from '../Toggle/UserToggle'
import DataSourceToggle from '../Toggle/DataSourceToggle'
import styles from './DashboardHeader.module.css'

function DashboardHeader({ userData, allUsers }) {
  const { userId, useMock, setUserId, setUseMock } = useUser()

  return (
    <div className={styles.container}>
      <div>
        {userData && (
          <>
            <h2 className={styles.greeting}>
              Bonjour <span>{userData.userInfos.firstName}</span>
            </h2>
            <p className={styles.message}>Felicitation ! Vous avez explose vos objectifs hier</p>
          </>
        )}
      </div>
      <div className={styles.controls}>
        {allUsers.length > 0 && (
          <UserToggle users={allUsers} currentUserId={userId} onToggle={setUserId} />
        )}
        <DataSourceToggle useMock={useMock} onToggle={setUseMock} />
      </div>
    </div>
  )
}

export default DashboardHeader
