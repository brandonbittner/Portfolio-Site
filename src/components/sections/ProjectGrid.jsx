import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectGrid.module.css'

const FILTERS = [
  { label: 'All',            value: 'all' },
  { label: 'Graphic Design', value: 'graphic-design' },
  { label: 'Product Design', value: 'product-design' },
]

export default function ProjectGrid({ title, projects, id }) {
  const [active, setActive] = useState('all')

  const visible = active === 'all'
    ? projects
    : projects.filter(p => p.type === active)

  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.filters}>
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`${styles.filterBtn} ${active === f.value ? styles.filterActive : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.grid}>
        {visible.map((p) => (
          <Link key={p.id} to={`/work/${p.slug}`} className={styles.card}>
            {p.coverImage && (
              <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
            )}
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <div className={styles.cardMeta}>
                {p.tags.map((tag) => (
                  <span key={tag} className={styles.cardTag}>{tag}</span>
                ))}
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <p className={styles.cardSummary}>{p.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
