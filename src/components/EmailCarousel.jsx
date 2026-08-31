import { useState, useEffect, useRef } from 'react'
import styles from './EmailCarousel.module.css'

const EMAILS = [
  { src: '/images/lsu-email-1.jpg', label: 'Application Received' },
  { src: '/images/lsu-email-2.jpg', label: 'Initial Disclosures Sent' },
  { src: '/images/lsu-email-3.jpg', label: 'Loan In Processing' },
  { src: '/images/lsu-email-4.jpg', label: 'Initial Approval' },
  { src: '/images/lsu-email-5.jpg', label: 'Cleared to Close' },
  { src: '/images/lsu-email-6.jpg', label: 'Loan Funded' },
]

export default function EmailCarousel() {
  const [active, setActive] = useState(0)
  const hovered = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!hovered.current) {
        setActive(prev => (prev + 1) % EMAILS.length)
      }
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setActive(i => (i - 1 + EMAILS.length) % EMAILS.length)
  const next = () => setActive(i => (i + 1) % EMAILS.length)

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => { hovered.current = true }}
      onMouseLeave={() => { hovered.current = false }}
    >
      {/* Header row */}
      <div className={styles.header}>
        <span className={styles.label}>{EMAILS[active].label}</span>
        <span className={styles.counter}>{active + 1} / {EMAILS.length}</span>
      </div>

      {/* Main display */}
      <div className={styles.main}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className={styles.imageWrap}>
          {EMAILS.map((email, i) => (
            <img
              key={i}
              src={email.src}
              alt={email.label}
              className={`${styles.img} ${i === active ? styles.imgActive : ''}`}
            />
          ))}
        </div>

        <button className={styles.arrow} onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbs}>
        {EMAILS.map((email, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ''}`}
            onClick={() => setActive(i)}
          >
            <img src={email.src} alt={email.label} />
          </button>
        ))}
      </div>
    </div>
  )
}
