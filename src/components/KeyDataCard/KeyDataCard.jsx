import styles from './KeyDataCard.module.css'

function KeyDataCard({ icon, iconBgColor, value, unit, label }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBox} style={{ backgroundColor: iconBgColor }}>
        {icon}
      </div>
      <div className={styles.content}>
        <p className={styles.value}>{value}{unit}</p>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  )
}

export default KeyDataCard
