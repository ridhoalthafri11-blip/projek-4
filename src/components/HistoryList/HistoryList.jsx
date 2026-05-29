import styles from './HistoryList.module.css'

function HistoryList({ history, darkMode }) {
  return (
    <section
      className={`${styles.historyCard} ${darkMode ? styles.dark : ''}`}
      aria-label="Riwayat hafalan"
    >
      <div className={styles.headerRow}>
        <div>
          <p className={styles.kicker}>Riwayat Hafalan</p>
          <h2 className={styles.title}>Catatan terbaru</h2>
        </div>
        <span className={styles.badge}>{history.length} catatan</span>
      </div>

      <ul className={styles.list}>
        {history.map((item) => (
          <li className={styles.item} key={item.id}>
            <div className={styles.itemTop}>
              <span className={styles.actionBadge}>{item.action}</span>
              <span className={styles.time}>{item.time}</span>
            </div>

            <p className={styles.detail}>{item.detail}</p>

            <div className={styles.metaRow}>
              <span className={styles.total}>{item.total} hafalan</span>
              <span className={styles.level}>{item.level}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HistoryList
