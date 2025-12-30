import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'
import styles from './Score.module.css'

function Score({ data = {} }) {
  let rawScore = data?.score ?? 0
  if (rawScore > 0 && rawScore <= 1) {
    rawScore = rawScore * 100
  }
  const score = Math.max(0, Math.min(100, Math.round(rawScore)))

  const chartData = [{ name: 'score', value: score, fill: '#FF0000' }]

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Score</h3>
      <div className={styles.chartWrapper}>
        <div className={styles.centerCircle} />
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="90%"
            data={chartData}
            startAngle={90}
            endAngle={-270}
            barSize={10}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{ fill: '#FBFBFB' }}
              clockWise
              dataKey="value"
              cornerRadius={10}
              angleAxisId={0}
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
