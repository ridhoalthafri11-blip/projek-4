import styles from './ProgressBar.module.css'

function ProgressBar({ current, target, darkMode }) {
  const percentage = Math.min(Math.max((current / target) * 100, 0), 100)

  return (
    <section
      className={`${styles.progressCard} ${darkMode ? styles.dark : ''}`}
      aria-label="Progress hafalan"
    >
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>Progress Tahunan</p>
          <h2 className={styles.title}>Target Hafalan</h2>
        </div>
        <div className={styles.badge}>{Math.round(percentage)}% selesai</div>
      </div>

      <div className={styles.statsRow}>
        <div className={styles.statBlock}>
          <span className={styles.statValue}>{current}</span>
          <span className={styles.statLabel}>hafalan saat ini</span>
        </div>
        <div className={styles.statBlock}>
          <span className={styles.statValue}>{target}</span>
          <span className={styles.statLabel}>target harian</span>
        </div>
      </div>

      <div className={styles.track} aria-hidden="true">
        <div className={styles.fill} style={{ width: `${percentage}%` }} />
      </div>

      <p className={styles.summary}>
        {current} / {target} hafalan tercapai — terus menjaga konsistensi.
      </p>
    </section>
  )
}

export default ProgressBar
