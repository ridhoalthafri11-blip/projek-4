import styles from './StatusCard.module.css'

function StatusCard({ status, description, accent, darkMode }) {
  return (
    <section
      className={`${styles.statusCard} ${darkMode ? styles.dark : ''}`}
      style={{ '--accent': accent }}
    >
      <div className={styles.iconWrap}>✨</div>
      <div className={styles.content}>
        <p className={styles.statusLabel}>Status Motivasi</p>
        <h2 className={styles.statusTitle}>{status}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  )
}

export default StatusCard
