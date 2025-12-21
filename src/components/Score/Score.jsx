import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import styles from './Score.module.css'

function Score({ data = {} }) {
  // support decimal (0..1) or percentage (0..100)
  let score = data?.score ?? 0
  if (score <= 1) score = score * 100
  score = Math.max(0, Math.min(100, Math.round(score)))

  const chartData = [
    { name: 'score', value: score, fill: '#FF0000' },
    { name: 'rest', value: 100 - score, fill: 'transparent' }
  ]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Score</h3>
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="50%" innerRadius="70%" outerRadius="90%" data={chartData} startAngle={90} endAngle={-270}>
            <RadialBar
              minAngle={1}
              clockWise
              dataKey="value"
              cornerRadius={50}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className={styles.textOverlay}>
          <span className={styles.scoreValue}>{score}%</span>
          <span className={styles.scoreLabel}>de votre<br />objectif</span>
        </div>
      </div>
    </div>
  )
}

export default Score
