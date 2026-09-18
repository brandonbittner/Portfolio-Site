import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './SelectedWorksGrid.module.css'

export default function SelectedWorksGrid({ projects }) {
  const sectionRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const wrapper = wrapperRef.current
    if (!section || !wrapper) return

    const OFFSET = 40
    const TRIGGER_RANGE = 200

    const update = () => {
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.max(0, Math.min(1, (vh * 0.5 - rect.top) / TRIGGER_RANGE))
      wrapper.style.transform = `translateY(${OFFSET * (1 - progress)}px)`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!projects || projects.length === 0) return null

  return (
    <section ref={sectionRef} className={styles.section}>
      <h2 className={styles.sectionTitle}>Selected Works</h2>

      <div ref={wrapperRef} className={styles.cardsWrapper}>
        <div className={styles.grid}>
          {projects.map((p) => (
            <Link key={p.id} to={`/work/selected/${p.slug}`} className={styles.card}>
              <div className={styles.cardImage}>
                {p.coverImage && (
                  <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
                )}
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardEmployer}>{p.employer}</span>
                  <span className={styles.cardYear}>{p.year}</span>
                </div>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                {p.tags?.length > 0 && (
                  <div className={styles.cardTags}>
                    {p.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
