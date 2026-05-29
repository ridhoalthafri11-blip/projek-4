import { useEffect, useMemo, useState } from 'react'
import Counter from '../components/Counter/Counter'
import HistoryList from '../components/HistoryList/HistoryList'
import ProgressBar from '../components/ProgressBar/ProgressBar'
import StatusCard from '../components/StatusCard/StatusCard'
import styles from './Dashboard.module.css'

const TARGET = 30

function Dashboard() {
  const [count, setCount] = useState(12)
  const [darkMode, setDarkMode] = useState(false)
  const [history, setHistory] = useState(() => [
    {
      id: 'seed-1',
      action: 'Mulai',
      detail: 'Dashboard dimulai dengan 12 hafalan.',
      total: 12,
      time: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      level: 'Awal',
    },
  ])

  useEffect(() => {
    document.body.style.background = darkMode
      ? 'radial-gradient(circle at top, rgba(4, 120, 87, 0.16), transparent 22%), #020617'
      : 'radial-gradient(circle at top, rgba(16, 185, 129, 0.16), transparent 22%), #f8fafc'
    document.body.style.color = darkMode ? '#f8fafc' : '#1f2937'

    return () => {
      document.body.style.background = ''
      document.body.style.color = ''
    }
  }, [darkMode])

  const status = useMemo(() => {
    if (count <= 5) {
      return {
        title: 'Semangat Menghafal 📖',
        description: 'Yuk, mulai dari kecil dan konsisten. Setiap ayat membawa barakah.',
        accent: '#059669',
      }
    }

    if (count <= 15) {
      return {
        title: 'MasyaAllah Bagus ✨',
        description: 'Perjalananmu sudah mulai berjalan baik. Tetap semangat dan istiqamah.',
        accent: '#0891b2',
      }
    }

    return {
      title: 'Hafizh Hebat 🏆',
      description: 'Alhamdulillah, progresmu luar biasa. Terus tingkatkan kualitas hafalan.',
      accent: '#d97706',
    }
  }, [count])

  const addHistoryEntry = (action, nextCount, detail, level) => {
    const time = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    })

    setHistory((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        action,
        detail,
        total: nextCount,
        time,
        level,
      },
      ...current,
    ].slice(0, 6))
  }

  const increment = () => {
    const next = count + 1
    setCount(next)
    addHistoryEntry('+1 Hafalan', next, `Hafalan bertambah menjadi ${next}.`, 'Naik')
  }

  const decrement = () => {
    const next = Math.max(count - 1, 0)
    setCount(next)
    addHistoryEntry('-1 Hafalan', next, `Hafalan berkurang menjadi ${next}.`, 'Turun')
  }

  const reset = () => {
    setCount(0)
    addHistoryEntry('Reset', 0, 'Hafalan direset kembali ke 0.', 'Ulang')
  }

  return (
    <main className={`${styles.dashboardShell} ${darkMode ? styles.dark : ''}`}>
      <section className={styles.dashboardCard}>
        <div className={styles.heroArea}>
          <div className={styles.topRow}>
            <div className={styles.kickerRow}>
              <span className={styles.badge}>Aplikasi Hafalan</span>
              <span className={styles.badgeMuted}>React + Vite</span>
            </div>

            <button
              className={styles.themeToggle}
              type="button"
              onClick={() => setDarkMode((current) => !current)}
            >
              {darkMode ? '☀️ Mode Terang' : '🌙 Dark Mode'}
            </button>
          </div>

          <div className={styles.heroText}>
            <p className={styles.eyebrow}>Mini Project Portfolio</p>
            <h1 className={styles.title}>Penghitung Hafalan Santri</h1>
            <p className={styles.subtitle}>
              Pantau progres hafalan secara real-time dengan tampilan islami, modern,
              dan interaktif.
            </p>
          </div>

          <div className={styles.summaryGrid}>
            <div className={styles.summaryTile}>
              <span className={styles.summaryNumber}>{count}</span>
              <span className={styles.summaryLabel}>hafalan tercapai</span>
            </div>
            <div className={styles.summaryTile}>
              <span className={styles.summaryNumber}>{TARGET}</span>
              <span className={styles.summaryLabel}>target harian</span>
            </div>
          </div>
        </div>

        <div className={styles.contentGrid}>
          <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
            onReset={reset}
            darkMode={darkMode}
          />

          <div className={styles.rightColumn}>
            <ProgressBar current={count} target={TARGET} darkMode={darkMode} />
            <StatusCard
              status={status.title}
              description={status.description}
              accent={status.accent}
              darkMode={darkMode}
            />
            <HistoryList history={history} darkMode={darkMode} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
