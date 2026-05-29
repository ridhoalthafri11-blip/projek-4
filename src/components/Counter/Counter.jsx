import styles from './Counter.module.css'

function Counter({ count, onIncrement, onDecrement, onReset, darkMode }) {
  return (
    <section
      className={`${styles.counterCard} ${darkMode ? styles.dark : ''}`}
      aria-label="Aksi penghitung hafalan"
    >
      <div className={styles.counterHeader}>
        <p className={styles.kicker}>Counter Hafalan</p>
        <h2 className={styles.counterTitle}>Jumlah Hafalan</h2>
      </div>

      <div className={styles.countDisplay} aria-live="polite">
        <span className={styles.countValue}>{count}</span>
        <span className={styles.countLabel}>hafalan</span>
      </div>

      <div className={styles.actionRow}>
        <button className={styles.secondaryButton} type="button" onClick={onDecrement}>
          − 1 Hafalan
        </button>
        <button className={styles.primaryButton} type="button" onClick={onIncrement}>
          + 1 Hafalan
        </button>
      </div>

      <button className={styles.resetButton} type="button" onClick={onReset}>
        Reset
      </button>
    </section>
  )
}

export default Counter
