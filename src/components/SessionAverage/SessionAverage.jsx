import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, Rectangle } from 'recharts'
import SessionTooltip from './SessionTooltip'
import styles from './SessionAverage.module.css'

function CustomCursor({ points, width, height }) {
  if (!points || points.length === 0) return null

  const { x } = points[0]

  return (
    <Rectangle
      x={x}
      y={0}
      width={width - x + 10}
      height={height + 50}
      fill="rgba(0, 0, 0, 0.1)"
      style={{ transition: 'all 0.15s ease-out' }}
    />
  )
}

function SessionAverage({ data = [] }) {
  const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  const formatted = Array.isArray(data)
    ? data.map((d) => ({ day: d.day, sessionLength: d.sessionLength ?? d.sessionLength }))
    : []

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Durée moyenne des sessions</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formatted} margin={{ top: 40, right: 10, left: 10, bottom: 10 }}>
          <XAxis
            dataKey="day"
            tickFormatter={(d) => dayLetters[d - 1] || ''}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }}
          />
          <Tooltip
            content={<SessionTooltip />}
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, stroke: '#ffffff', fill: '#ffffff' }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SessionAverage
