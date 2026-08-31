import { useEffect, useRef } from 'react'
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
const CENTER_THRESHOLD = 60

export default function EmailScrollSection() {
  const containerRef = useRef(null)
  const railRef = useRef(null)
  const progressRef = useRef(0)
  const lockedRef = useRef(false)
  const savedScrollY = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    const rail = railRef.current
    if (!container || !rail) return

    const getMax = () => {
      const first = rail.firstChild
      if (!first) return 0
      return (first.offsetWidth + GAP) * (EMAILS.length - 1)
    }

    const containerCenterOffset = () => {
      const rect = container.getBoundingClientRect()
      return Math.abs(((rect.top + rect.bottom) / 2) - (window.innerHeight / 2))
    }

    const lock = () => {
      savedScrollY.current = window.scrollY
      // Preserve scrollbar width so content doesn't shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollbarWidth > 0) {
        document.documentElement.style.paddingRight = `${scrollbarWidth}px`
      }
      // overflow:hidden stops momentum scroll at the layout level
      document.documentElement.style.overflow = 'hidden'
      lockedRef.current = true
    }

    const unlock = (direction) => {
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
      const buffer = Math.max(250, CENTER_THRESHOLD * 5)
      const targetY = direction === 'down'
        ? savedScrollY.current + buffer
        : Math.max(0, savedScrollY.current - buffer)
      window.scrollTo(0, targetY)
      lockedRef.current = false
    }

    const onWheel = (e) => {
      const goingDown = e.deltaY > 0

      if (lockedRef.current) {
        e.preventDefault()

        const p = progressRef.current
        const max = getMax()

        if (p <= 0 && !goingDown) { unlock('up'); return }
        if (p >= 1 && goingDown) { unlock('down'); return }

        const newP = Math.max(0, Math.min(1, p + e.deltaY / (max * SENSITIVITY)))
        progressRef.current = newP
        rail.style.transform = `translateX(${-newP * max}px)`
        return
      }

      // Not locked — check if we should lock
      if (containerCenterOffset() < CENTER_THRESHOLD) {
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
    }

    document.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      document.removeEventListener('wheel', onWheel)
      document.documentElement.style.overflow = ''
      document.documentElement.style.paddingRight = ''
    }
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.viewport}>
        <div ref={railRef} className={styles.rail}>
          {EMAILS.map((email, i) => (
            <div key={i} className={styles.slide}>
              <p className={styles.slideLabel}>{email.label}</p>
              <div className={styles.emailFrame}>
                <img src={email.src} alt={email.label} className={styles.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
