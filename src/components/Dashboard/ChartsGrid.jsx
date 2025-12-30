import ActivityChart from '../ActivityChart/ActivityChart'
import SessionAverage from '../SessionAverage/SessionAverage'
import Performance from '../Performance/Performance'
import Score from '../Score/Score'
import styles from './ChartsGrid.module.css'

function ChartsGrid({
  activityData,
  avgSessions,
  performanceData,
  userData,
}) {
  return (
    <div className={styles.container}>
      <ActivityChart data={activityData} />

      <div className={styles.smallChartsGrid}>
        <SessionAverage data={avgSessions} />
        <Performance data={performanceData} />
        <Score data={{ score: userData?.score ?? userData?.todayScore ?? 0 }} />
      </div>
    </div>
  )
}

export default ChartsGrid
