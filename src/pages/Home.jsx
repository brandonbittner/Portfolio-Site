import { Link } from 'react-router-dom'
import styles from './Home.module.css'

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
            UI/UX &amp;<br />Graphic Design
          </h1>
          <div className={styles.statsCard}>
            <div className={styles.statBlock}>
              <span className={styles.statNum}>5+</span>
              <span className={styles.statLabel}>Years crafting<br />digital products</span>
            </div>
            <div className={styles.statLine} />
            <div className={styles.statBlock}>
              <span className={styles.statNum}>30+</span>
              <span className={styles.statLabel}>Projects<br />delivered</span>
            </div>
          </div>
        </div>

      </section>

      {/* ── About Teaser ─────────────────────────────────────── */}
      <section className={styles.about}>
        <div className={styles.aboutMeta}>
          <span className={styles.aboutStar} aria-hidden="true">✦</span>
          <span className={styles.aboutLabel}>About Me</span>
        </div>
        <div className={styles.aboutRight}>
          <p className={styles.aboutStatement}>
            I craft thoughtful digital experiences
            that connect strategy, usability,
            and visual clarity.
          </p>
          <Link to="/about" className={styles.aboutLink}>
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

    </div>
  )
}
