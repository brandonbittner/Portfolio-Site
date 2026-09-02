import { useRef, useEffect, useCallback } from 'react'
import styles from './LaptopScrollSection.module.css'

export default function LaptopScrollSection({ laptopSrc, pageSrc, pageAlt = 'Webpage screenshot' }) {
  const containerRef = useRef(null)
  const wrapperRef   = useRef(null)
  const viewportRef  = useRef(null)
  const pageImgRef   = useRef(null)
  const offsetRef    = useRef(0)
  const canScrollRef = useRef(false)
  const lockedRef    = useRef(false)
  const isActiveRef  = useRef(false)

  const getDist = useCallback(() => {
    const el = containerRef.current
    if (!el) return Infinity
    const rect = el.getBoundingClientRect()
    const containerCenter = rect.top + rect.height / 2
    return Math.abs(containerCenter - window.innerHeight / 2)
  }, [])

  const getMax = useCallback(() => {
    const vp  = viewportRef.current
    const img = pageImgRef.current
    if (!vp || !img) return 0
    return Math.max(0, img.offsetHeight - vp.offsetHeight)
  }, [])

  const lock = useCallback(() => {
    if (lockedRef.current) return
    lockedRef.current = true
    document.documentElement.style.overflow = 'hidden'
  }, [])

  const unlock = useCallback(() => {
    if (!lockedRef.current) return
    lockedRef.current = false
    document.documentElement.style.overflow = ''
  }, [])

  const setActive = useCallback((active) => {
    const wrapper = wrapperRef.current
    const el = containerRef.current
    if (!wrapper || !el || active === isActiveRef.current) return
    isActiveRef.current = active
    wrapper.style.transform = active ? 'scale(1.14)' : 'scale(1)'
    el.style.padding = active ? '4rem 0' : '0'
  }, [])

  // Scroll listener: proactively locks when laptop enters center zone,
  // unlocks when it leaves, resets canScroll only once far away.
  useEffect(() => {
    const onScroll = () => {
      const dist = getDist()

      // Reset canScroll once laptop is clearly past the section
      if (canScrollRef.current && dist > window.innerHeight * 0.55) {
        canScrollRef.current = false
      }

      if (!canScrollRef.current) {
        if (dist < 220) {
          lock()         // pre-lock: stops the next scroll frame
        } else {
          unlock()
        }
        setActive(dist < window.innerHeight * 0.28)
      } else {
        unlock()
        setActive(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [getDist, lock, unlock, setActive])

  // Wheel listener: proactively locks when approaching center, handles internal scroll
  useEffect(() => {
    const onWheel = (e) => {
      if (canScrollRef.current) return

      const dist = getDist()

      // Adaptive threshold: lock earlier for fast scrolls to catch momentum,
      // tighter for slow scrolls so it locks at true center
      const speed = Math.abs(e.deltaY)
      const lockDist = speed > 80 ? 320 : speed > 30 ? 240 : 180

      if (dist < lockDist) {
        lock()
      }

      if (!lockedRef.current) return

      e.preventDefault()

      const max       = getMax()
      const newOffset = Math.max(0, Math.min(max, offsetRef.current + e.deltaY))

      if (newOffset === offsetRef.current) {
        canScrollRef.current = true
        unlock()
        setActive(false)
        return
      }

      offsetRef.current = newOffset
      if (pageImgRef.current) {
        pageImgRef.current.style.transform = `translateY(-${newOffset}px)`
      }

      if (newOffset <= 0 || newOffset >= max) {
        canScrollRef.current = true
        unlock()
        setActive(false)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      unlock()
    }
  }, [getDist, getMax, lock, unlock, setActive])

  return (
    <div ref={containerRef} className={styles.container}>
      <div ref={wrapperRef} className={styles.laptopWrapper}>
        <div ref={viewportRef} className={styles.screenViewport}>
          <img
            ref={pageImgRef}
            src={pageSrc}
            alt={pageAlt}
            className={styles.pageImg}
          />
        </div>
        <img src={laptopSrc} alt="Laptop mockup" className={styles.laptopImg} />
      </div>
    </div>
  )
}
