import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts'
import PerformanceTooltip from './PerformanceTooltip'
import styles from './Performance.module.css'

function Performance({ data = [] }) {
  // Map performance kind IDs to French labels
  const kindMap = {
    1: 'Cardio',
    2: 'Energie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité'
  }

  // Transform data: expected shape: [{ value: number, kind: 1..6 }, ...]
  const formatted = Array.isArray(data)
    ? data.map((d) => ({
        value: d.value,
        kind: kindMap[d.kind] || `Kind ${d.kind}`
      }))
    : []

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={formatted} margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
          <PolarGrid stroke="#ffffff" strokeOpacity={0.3} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: '#ffffff', fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 250]}
            tick={false}
            tickLine={false}
          />
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.7}
            connectNulls
          />
          <Tooltip content={<PerformanceTooltip />} cursor={{ stroke: '#FF0000', strokeWidth: 2 }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Performance
