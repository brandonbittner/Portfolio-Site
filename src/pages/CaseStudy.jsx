import { useParams, Link } from 'react-router-dom'
import styles from './CaseStudy.module.css'
import { projects } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/#work">← Back to work</Link>
      </div>
    )
  }

  return (
    <article className={styles.page}>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className={styles.hero}>
        {project.employer && (
          <p className={styles.overline}>{project.employer}</p>
        )}
        <h1 className={styles.title}>{project.title}</h1>
      </header>

    </article>
  )
}
