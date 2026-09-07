import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectGrid.module.css'

export default function ProjectGrid({ title, projects, id }) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const SCROLL_START = 80   // px scrolled before animation begins
    const SCROLL_END   = 280  // px scrolled when animation completes
    const OFFSET       = 40   // px of initial push-down

    const update = () => {
      const scrollY = window.scrollY
      const progress = Math.max(0, Math.min(1, (scrollY - SCROLL_START) / (SCROLL_END - SCROLL_START)))
      wrapper.style.transform = `translateY(${OFFSET * (1 - progress)}px)`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      <div ref={wrapperRef} className={styles.cardsWrapper}>
          {projects.map((p, i) => (
            <div key={p.id} className={styles.cardWrapper}>
            {i > 0 && <div className={styles.cardDivider} />}
            <div className={styles.card}>

              <div className={styles.cardImage}>
                {p.coverImage && (
                  <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
                )}
              </div>

              <div className={styles.cardRight}>
                <div className={styles.cardTitleGroup}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardEmployer}>{p.employer}</span>
                    <span className={styles.cardYear}>{p.year}</span>
                  </div>
                  <Link to={`/work/${p.slug}`} className={styles.cardTitle}><h3>{p.title}</h3></Link>
                </div>
                <p className={styles.cardSummary}>{p.summary}</p>
                <div className={styles.cardTags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>
                <Link to={`/work/${p.slug}`} className={styles.ctaBtn}>
                  Read Case Study <span>→</span>
                </Link>
              </div>

            </div>
            </div>
          ))}
      </div>
    </section>
  )
}
