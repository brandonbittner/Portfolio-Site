import { Link } from 'react-router-dom'
import styles from './ProjectGrid.module.css'

export default function ProjectGrid({ title, projects, id }) {
  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </header>

      <div className={styles.list}>
        {projects.map((p) => (
          <Link key={p.id} to={`/work/${p.slug}`} className={styles.card}>
            <div className={styles.cardImage}>
              {p.coverImage && (
                <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
              )}
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardInfo}>
                <span className={styles.cardYear}>{p.year}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardSummary}>{p.summary}</p>
                <div className={styles.cardTags}>
                  {p.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.cardCta}>
                <span className={styles.ctaBtn}>
                  Read Full Case Study
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
