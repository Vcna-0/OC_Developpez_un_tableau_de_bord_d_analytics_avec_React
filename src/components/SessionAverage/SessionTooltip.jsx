import styles from './SessionAverage.module.css'

function SessionTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    const value = payload[0].value
    return (
      <div className={styles.tooltipWrapper}>
        <div className={styles.tooltipBox}>{`${value} min`}</div>
      </div>
    )
  }
  return null
}

export default SessionTooltip
