import { Link } from 'react-router-dom'
import styles from './Home.module.css'

import { projects } from '../data/projects'

const TAGS = [
  { label: 'UI/UX Design',   rotate: -8,  left: '54%', top: '43%' },
  { label: 'Brand Identity', rotate:  6,  left: '63%', top: '13%' },
  { label: 'Motion',         rotate: -5,  left: '73%', top: '56%' },
]

export default function Home() {
  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>

        <div className={styles.arch} aria-hidden="true" />

        <img
          src="/images/headshot.jpg"
          alt="Brandon Bittner"
          className={styles.photo}
        />

        {TAGS.map((t, i) => (
          <div
            key={t.label}
            className={styles.tag}
            style={{
              '--r': `${t.rotate}deg`,
              left: t.left,
              top: t.top,
              animationDelay: `${0.45 + i * 0.13}s`,
            }}
          >
            {t.label}
          </div>
        ))}

        <div className={styles.heroBottom}>
          <p className={styles.greeting}>Hey, I'm Brandon.</p>
          <h1 className={styles.headline}>
            I'm a <em className={styles.dim}>systems-minded</em> designer
            who thrives on solving complex problems — translating them
            across <em className={styles.dim}>branding</em>,{' '}
            <em className={styles.dim}>product</em>, and{' '}
            <em className={styles.dim}>interface</em> into experiences
            that are effortless and enjoyable
          </h1>
          <div className={styles.rolesCard}>
            <span className={styles.role}>UX Design</span>
            <div className={styles.statLine} />
            <span className={styles.role}>Product Strategy</span>
            <div className={styles.statLine} />
            <span className={styles.role}>Brand Design</span>
          </div>
        </div>

      </section>

      {/* ── Work ─────────────────────────────────────────────── */}
      <section id="work" className={styles.work}>
        <header className={styles.workHeader}>
          <div className={styles.workMeta}>
            <span className={styles.workStar} aria-hidden="true">✦</span>
            <span className={styles.workLabel}>Selected Work</span>
          </div>
        </header>

        <div className={styles.grid}>
          {projects.map((p) => (
            <Link key={p.id} to={`/work/${p.slug}`} className={styles.card}>
              {p.coverImage && (
                <img src={p.coverImage} alt={p.title} className={styles.cardImg} />
              )}
              <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{p.title}</h2>
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

    </div>
  )
}
