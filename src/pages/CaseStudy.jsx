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

      {/* ── Hero splash image ───────────────────────────────── */}
      <div className={styles.splash}>
        {project.heroImage || project.coverImage ? (
          <img
            src={project.heroImage || project.coverImage}
            alt={project.title}
            className={styles.splashImg}
          />
        ) : (
          <div className={styles.splashPlaceholder}>Hero Placeholder</div>
        )}
      </div>

      {/* ── Title block ─────────────────────────────────────── */}
      <div className={styles.titleBlock}>
        <div className={styles.tagRow}>
          <span className={styles.caseStudyTag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            </svg>
            Case Study
          </span>
          {project.employer && (
            <span className={styles.employer}>{project.employer}</span>
          )}
        </div>
        <h1 className={styles.projectTitle}>{project.title}</h1>
      </div>

    </article>
  )
}
