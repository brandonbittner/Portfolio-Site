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

    </article>
  )
}
