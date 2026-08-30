import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './CaseStudy.module.css'
import { projects } from '../data/projects'

const SECTIONS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'process',    label: 'Process' },
  { id: 'solution',   label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
]

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    const observers = []

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-30% 0px -60% 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

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

      {/* ── Divider ─────────────────────────────────────────── */}
      <hr className={styles.divider} />

      {/* ── Body: sidebar nav + content ─────────────────────── */}
      <div className={styles.body}>

        {/* Left sticky nav */}
        <nav className={styles.sidenav}>
          {SECTIONS.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.navItem} ${activeSection === id ? styles.navActive : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right content */}
        <div className={styles.content}>

          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionLabel}>Overview</h2>
            <p className={styles.pullQuote}>Turning a routine status email into borrowers' clearest guide through the mortgage process.</p>

            <div className={styles.body_text}>
              <p>UMortgage's automated loan status emails — triggered by milestones in the company's loan origination system (Arive) and sent directly to borrowers — were plain, text-heavy notifications that gave no real sense of where someone stood in the mortgage process or what to do next. For an audience already navigating one of the most confusing financial transactions of their lives, that was a missed opportunity.</p>
              <p>What started as a simple request to refresh the email header became a full ground-up redesign — one built to give borrowers clarity on where their loan stood, what the current step involved, and what action to take next.</p>
            </div>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Role</span>
                <span className={styles.metaValue}>Product Designer, Strategy, Design, Development</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Timeline</span>
                <span className={styles.metaValue}>Q1–Q2 2025</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Tools</span>
                <span className={styles.metaValue}>Figma, Stripo, Arive</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Scale</span>
                <span className={styles.metaValue}>Emails sent on behalf of ~300 loan originators, ~4,500 emails sent monthly</span>
              </div>
            </div>
          </section>

          <section id="problem" className={styles.section}>
            <h2 className={styles.sectionLabel}>Problem</h2>
            <p className={styles.pullQuote}>Loan status emails that left borrowers in the dark about their loan status</p>
            <div className={styles.body_text}>
              <p>I was asked by our marketing team to redesign a set of legacy emails sent to borrowers from our loan origination system (LOS) whenever their loan file hit certain milestones in the process. Once I looked into it, the emails were unclear at their core. Borrowers had no real sense of where their loan stood or what came next. Conversations with loan originators (LOs) revealed an even bigger gap: many didn't even know these emails were being sent to their own borrowers, and engagement was poor across the board.</p>
              <p>That confirmed this needed to be more than a visual refresh. This was a chance to fix a real, underused touchpoint in the borrower experience.</p>
            </div>
            <div className={styles.placeholder}>Legacy email screenshots</div>
            <p className={styles.caption}>Screenshots of UMortgage's legacy loan status update emails</p>
            <div className={styles.body_text}>
              <p>Digging deeper, the core issue became clear: borrowers had no sense of where they actually stood in a long, multi-step process. They couldn't tell how far along their loan was, what had already happened, or what still needed to happen before closing.</p>
              <p>Conversations with loan originators pointed to a related pattern. Borrowers were often slow to complete required action items, which caused real delays in the loan timeline. But the LOs I spoke with were clear that this usually wasn't procrastination. Borrowers simply didn't know what was being asked of them or why it mattered.</p>
              <p>From there, I defined a clear set of goals for the redesign:</p>
            </div>
            <ul className={styles.checklist}>
              <li>Give borrowers a clear sense of where their loan stood in the mortgage process</li>
              <li>Explain what the next step of the process included</li>
              <li>Provide clear action items to the borrower that would help keep their file moving in a timely manner</li>
            </ul>
          </section>
          <section id="process" className={styles.section}>
            <h2 className={styles.sectionLabel}>Process</h2>
            <p className={styles.pullQuote}>Competitive Research</p>
            <div className={styles.body_text}>
              <p>I started by looking at how other mortgage lenders handled their own loan status emails, hoping to find a pattern worth building on. Most were just as unclear as ours. Plain text updates with little sense of progress or context, which told me this wasn't a problem anyone in the industry had really solved.</p>
              <p>Rather than stay locked into mortgage-specific examples, I looked at how other industries communicated progress during a waiting period. I was particularly drawn to how delivery services use online trackers to give people clarity on their order status within the context of the overall delivery process. That was the same experience borrowers needed, just applied to a mortgage instead of a package.</p>
            </div>
            <div className={styles.placeholderRow}>
              <div className={styles.placeholderCol}>
                <div className={styles.placeholder}>Placeholder</div>
                <p className={styles.caption}>UPS Shipment Tracker</p>
              </div>
              <div className={styles.placeholderCol}>
                <div className={styles.placeholder}>Placeholder</div>
                <p className={styles.caption}>Domino's Pizza Tracker</p>
              </div>
            </div>
            <p className={styles.pullQuote}>Mapping Milestones to Email Triggers</p>
            <div className={styles.body_text}>
              <p>With a direction in mind, the next challenge was figuring out what to actually build it around. Arive, our loan origination system, only supports a fixed set of email triggers tied to specific system events. Those triggers don't necessarily line up with the moments that actually matter to a borrower.</p>
              <p>To solve for this, I ran two parallel conversations. First, with loan originators, to define the handful of milestones borrowers most needed to hear about, the moments that would actually help someone understand where they stood. Second, with our loan ops team and an Arive subject matter expert, to understand exactly what triggers were available and what system event each one corresponded to.</p>
              <p>From there, I cross-referenced the two. In some cases, a borrower milestone lined up directly with an available trigger. In others, there wasn't a perfect match, so I found the trigger that fired closest to the right moment in the process, close enough to keep the information timely and useful without waiting on a system limitation to catch up. That mapping became the backbone for the entire email series: five milestones, each backed by a trigger that could reliably fire at the right point in a borrower's loan.</p>
            </div>
            <div className={styles.placeholder}>Two-Column Milestone Mapping Grid</div>
            <p className={styles.pullQuote}>Design & Iteration</p>
          </section>
          <section id="solution"   className={styles.section} />
          <section id="reflection" className={styles.section} />

        </div>

      </div>

    </article>
  )
}
