import { useEffect, useRef, useState } from 'react'
import styles from './EmailScrollSection.module.css'

const EMAILS = [
  { src: '/images/lsu-email-1.jpg', label: 'Application Received' },
  { src: '/images/lsu-email-2.jpg', label: 'Initial Disclosures Sent' },
  { src: '/images/lsu-email-3.jpg', label: 'Loan In Processing' },
  { src: '/images/lsu-email-4.jpg', label: 'Initial Approval' },
  { src: '/images/lsu-email-5.jpg', label: 'Cleared to Close' },
  { src: '/images/lsu-email-6.jpg', label: 'Loan Funded' },
]

const GAP = 24
const SENSITIVITY = 2.0

export default function EmailScrollSection() {
  const containerRef = useRef(null)
  const railRef = useRef(null)
  const progressRef = useRef(0)
  const lockedRef = useRef(false)
  const [lightbox, setLightbox] = useState(null) // { src, label }

  const openLightbox = (email) => setLightbox(email)
  const closeLightbox = () => setLightbox(null)

  // Close on Escape
  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  useEffect(() => {
    const container = containerRef.current
    const rail = railRef.current
    if (!container || !rail) return

    const getMax = () => {
      return rail.scrollWidth - container.offsetWidth + 48
    }

    const isCentered = () => {
      const rect = container.getBoundingClientRect()
      const containerCenter = (rect.top + rect.bottom) / 2
      const viewportCenter = window.innerHeight / 2
      return Math.abs(containerCenter - viewportCenter) < 150
    }

    const lock = () => {
      const sw = window.innerWidth - document.documentElement.clientWidth
      if (sw > 0) document.documentElement.style.paddingRight = `${sw}px`
      document.documentElement.style.overflow = 'hidden'
      lockedRef.current = true
    }

    const unlock = () => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
      lockedRef.current = false
    }

    const onWheel = (e) => {
      // Don't intercept scroll when lightbox is open
      if (lockedRef.current === 'lightbox') return

      const goingDown = e.deltaY > 0

      if (lockedRef.current) {
        e.preventDefault()
        const p = progressRef.current
        const max = getMax()

        if (p <= 0 && !goingDown) { unlock(); return }
        if (p >= 1 && goingDown) { unlock(); return }

        const newP = Math.max(0, Math.min(1, p + e.deltaY / (max * SENSITIVITY)))
        progressRef.current = newP
        rail.style.transform = `translateX(${-newP * max}px)`
        return
      }

      if (!isCentered()) return

      const p = progressRef.current
      const canScroll = (goingDown && p < 1) || (!goingDown && p > 0)
      if (canScroll) {
        lock()
        e.preventDefault()
        const max = getMax()
        const newP = Math.max(0, Math.min(1, p + e.deltaY / (max * SENSITIVITY)))
        progressRef.current = newP
        rail.style.transform = `translateX(${-newP * max}px)`
      }
    }

    document.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      document.removeEventListener('wheel', onWheel)
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.viewport}>
          <div ref={railRef} className={styles.rail}>
            {EMAILS.map((email, i) => (
              <div key={i} className={styles.slide}>
                <p className={styles.slideLabel}>{email.label}</p>
                <div
                  className={styles.emailFrame}
                  onClick={() => openLightbox(email)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openLightbox(email)}
                >
                  <img src={email.src} alt={email.label} className={styles.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <p className={styles.lightboxLabel}>{lightbox.label}</p>
            <img src={lightbox.src} alt={lightbox.label} className={styles.lightboxImg} />
          </div>
        </div>
      )}
    </>
  )
}
