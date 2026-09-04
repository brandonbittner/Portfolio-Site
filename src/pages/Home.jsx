import styles from './Home.module.css'
import { projects } from '../data/projects'
import ProjectGrid from '../components/sections/ProjectGrid'

const caseStudies  = projects.filter(p => p.section === 'case-studies')
const selectedWork = projects.filter(p => p.section === 'selected-work')

export default function Home() {
  return (
    <div className={styles.page}>

      <section className={styles.hero}>
        <div className={styles.heroHeadline}>
          <span>Hey!</span>
          <img src="/images/brandon-hero.jpeg" alt="Brandon Bittner" className={styles.heroPill} />
          <span>I'm Brandon.</span>
        </div>
      </section>

      <ProjectGrid id="work" title="Case Studies"  projects={caseStudies} />
      <ProjectGrid          title="Selected Work"  projects={selectedWork} />

    </div>
  )
}
