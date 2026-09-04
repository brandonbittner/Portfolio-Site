import styles from './Home.module.css'
import { projects } from '../data/projects'
import ProjectGrid from '../components/sections/ProjectGrid'

const caseStudies  = projects.filter(p => p.section === 'case-studies')
const selectedWork = projects.filter(p => p.section === 'selected-work')

export default function Home() {
  return (
    <div className={styles.page}>

      <section className={styles.hero} data-nav-dark>
        <div className={styles.heroCenter}>
          <div className={styles.heroHeadline}>
            <span>Hey!</span>
            <img src="/images/brandon-hero.jpeg" alt="Brandon Bittner" className={styles.heroPill} />
            <span>I'm Brandon.</span>
          </div>
          <div className={styles.rolesBar}>
            <div className={styles.rolesCell}>UI/UX Designer</div>
            <div className={styles.rolesCell}>Product Designer</div>
            <div className={`${styles.rolesCell} ${styles.rolesCellLast}`}>Graphic Designer</div>
          </div>
          <p className={styles.heroSub}>I'm a <span className={styles.heroAccent}>systems-minded</span> designer who thrives on untangling <span className={styles.heroAccent}>complex problems</span>, turning them into experiences that are simple, clear, and <span className={styles.heroAccent}>genuinely enjoyable</span> to use.</p>
        </div>
        <div className={styles.heroDivider} />
      </section>

      <ProjectGrid id="work" title="Case Studies"  projects={caseStudies} />
      <ProjectGrid          title="Selected Work"  projects={selectedWork} />

    </div>
  )
}
