import { Link } from 'react-router-dom'
import styles from './ProjectGrid.module.css'

export default function ProjectGrid({ title, projects, id }) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {projects.map((p) => (
        <div key={p.id} className={styles.card}>

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
              <h3 className={styles.cardTitle}>{p.title}</h3>
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
      ))}
    </section>
  )
}
