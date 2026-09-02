import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './CaseStudy.module.css'

const SECTIONS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'process',    label: 'Process' },
  { id: 'solution',   label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
]

export default function LoanBlogCaseStudy() {
  const [activeSection, setActiveSection] = useState('overview')
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

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

  return (
    <>
    <article className={styles.page}>

      <div className={styles.pageTop} data-nav-dark>
        {/* ── Hero splash image ───────────────────────────────── */}
        <div className={styles.splash}>
          <div className={styles.splashPlaceholder}>Hero Placeholder</div>
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
            <span className={styles.employer}>UMortgage</span>
          </div>
          <h1 className={styles.projectTitle}>Loan Product Blog Website</h1>
        </div>
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

          {/* ── Overview ───────────────────────────────────────── */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionLabel}>Overview</h2>
            <div className={styles.overviewLayout}>
              <div className={styles.overviewLeft}>
                <p className={styles.pullQuote}>Creating a self-serve way for borrowers to actually understand UMortgage's available loan products</p>
                <div className={styles.body_text}>
                  <p>For years, potential borrowers had no way to learn about UMortgage's dozens of loan products without first talking to a loan originator. Even LOs themselves didn't have a single resource to point prospective borrowers to when explaining programs and guidelines, which meant borrowers were often in the dark about what options they really had.</p>
                  <p>To close the gap, I worked with a small team to build a blog-style digital experience that allowed our marketing team to rapidly create informational pages on all of UMortgage's loan products, providing borrowers with a place to explore our full product lineup and understand what was available to them before ever talking to an LO.</p>
                </div>
              </div>

              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Role</span>
                  <span className={styles.metaValue}>UX & Product Designer</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Timeline</span>
                  <span className={styles.metaValue}>Q3 2025</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Tools</span>
                  <span className={styles.metaValue}>Figma, Sanity CMS</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Problem ────────────────────────────────────────── */}
          <section id="problem" className={styles.section}>
            <h2 className={styles.sectionLabel}>Problem</h2>
            <p className={styles.pullQuote}>UMortgage had no easily accessible platform for loan program information, creating pain points for multiple parties</p>
            <div className={styles.body_text}>
              <p>The absence of quick, on-hand loan program information wasn't a problem the team stumbled into, it was a long-standing pain point the business had lived with for years without a clear path to solving it. That pain point didn't land the same way for everyone, though. It showed up differently depending on who you asked, borrowers, LOs, or marketing, but all three were feeling the effects of the same missing piece.</p>
            </div>
            <p className={styles.painPointHeadline}>Pain Points For Each Group</p>
            <div className={styles.painPointRow}>
              <div className={styles.painPointCard}>
                <span className={styles.painPointLabel}>Borrowers</span>
                <p className={styles.painPointText}>No easily accessible resources to learn about all of our loan products</p>
              </div>
              <div className={styles.painPointCard}>
                <span className={styles.painPointLabel}>Loan Originators</span>
                <p className={styles.painPointText}>No single comprehensive resource or location to send to prospects</p>
              </div>
              <div className={styles.painPointCard}>
                <span className={styles.painPointLabel}>Marketing Team</span>
                <p className={styles.painPointText}>Have informational resources to share, but no accessible way for users to find them</p>
              </div>
            </div>
            <div className={styles.body_text}>
              <p>For marketing specifically, solving this also lined up with a broader goal, improving the site's SEO and making sure UMortgage's information showed up when borrowers asked mortgage questions through tools like ChatGPT. Borrowers were increasingly turning to those tools for answers before ever reaching out to an LO, and our marketing team saw an opportunity for UMortgage's educational resources to be included in those responses.</p>
              <p>All of that information gave us a clear set of goals to work towards when designing a solution:</p>
            </div>
            <ul className={styles.checklist}>
              <li>Create a self-serve way for borrowers to learn about our loan products</li>
              <li>Provide Loan Originators with loan program resources they can easily find and distribute to their borrowers</li>
              <li>Build the solution in a way that the marketing team can easily add new resources and maintain existing ones</li>
              <li>Improve UMortgage's SEO results for educational mortgage content searches</li>
              <li>Get UMortgage's information included in AI-generated responses to mortgage questions</li>
            </ul>
          </section>

          {/* ── Process ────────────────────────────────────────── */}
          <section id="process" className={styles.section}>
            <h2 className={styles.sectionLabel}>Process</h2>
            <p className={styles.pullQuote}>Finding a standard structure</p>
            <div className={styles.body_text}>
              <p>Before anything else, the team identified the core challenge: build a standard structure that would let marketing rapidly produce genuinely helpful, informative loan program resources, while fitting them into a tight design system whose frontend could adapt to whatever each resource needed. As a small team with limited bandwidth, a repeatable structure meant the copywriter could format and publish new program pages independently, without needing design or engineering involved every time, and without the team having to build and maintain a one-off layout for every product.</p>
            </div>
            <div className={styles.body_text}>
              <p>To find that structure, our copywriter first drafted informational guidelines for four structurally different loan products, a 30-year conventional, a cash-out refinance, a HELOC, and a VA loan, writing each one freely with whatever information he felt gave a comprehensive picture of the program. Rather than designing around assumptions, the team broke all four drafts down into their essential recurring parts: an overview, value props, requirements, and program intricacies. Those recurring parts became the foundation for a single standardized page structure.</p>
            </div>
            <div className={styles.placeholderRow}>
              <div className={styles.placeholderImagesRow}>
                <img
                  src="/images/loan-blog-draft-1.jpg"
                  alt="Initial loan product guideline draft"
                  className={styles.iterationImg}
                />
                <div className={styles.iterationArrow}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <img
                  src="/images/loan-blog-draft-2.jpg"
                  alt="Edited loan product guideline draft"
                  className={styles.iterationImg}
                />
              </div>
              <div className={styles.colorKey}>
                <div className={styles.colorKeyItem}>
                  <span className={styles.colorSwatch} style={{ background: '#d2e1f0' }} />
                  <span className={styles.colorKeyLabel}>Basic Program Information</span>
                </div>
                <div className={styles.colorKeyItem}>
                  <span className={styles.colorSwatch} style={{ background: '#d2f0e1' }} />
                  <span className={styles.colorKeyLabel}>Program Benefits</span>
                </div>
                <div className={styles.colorKeyItem}>
                  <span className={styles.colorSwatch} style={{ background: '#fff0c3' }} />
                  <span className={styles.colorKeyLabel}>Eligibility Requirements</span>
                </div>
                <div className={styles.colorKeyItem}>
                  <span className={styles.colorSwatch} style={{ background: '#e1d2f0' }} />
                  <span className={styles.colorKeyLabel}>Program Intricacies</span>
                </div>
              </div>
            </div>
            <p className={styles.pullQuote}>Validating the Structure</p>
            <div className={styles.body_text}>
              <p>With those recurring parts identified, I built a wireframe around them, giving the standardized structure something concrete to actually test rather than just a list of pieces on paper. Our copywriter then took his original conventional 30-year guideline and reformatted it to fit the new structure, plugging that reformatted content back into the wireframe to see whether it held up. It did, confirming the structure could hold a real, fully-written program guide rather than just fitting the four drafts it had been distilled from.</p>
            </div>
            <div className={styles.placeholder}>Image placeholder</div>
            <p className={styles.pullQuote}>Building a Flexible CMS Structure</p>
            <div className={styles.body_text}>
              <p>With the structure validated, the next challenge was making it hold up in a real CMS, not just on a wireframe. Working closely with our copywriter and data engineer, the team built out Sanity architecture flexible enough to handle any loan product, despite how much variation existed between programs. That meant building toggleable calculators that could show a refinance-savings calculator, a monthly-payment calculator, or no calculator at all depending on the program; qualification containers that could scale from a single requirement up to five or more without breaking the layout; a large icon library giving our copywriter a wide range of icons to pull from to visually supplement whatever value props, qualifications, or FAQs he ended up writing for a given program; and a dynamic comparison table that let users stack multiple loan programs against each other.</p>
            </div>
            <div className={styles.placeholderRow}>
              <div className={styles.placeholderImagesRow}>
                <div className={styles.placeholder} style={{ flex: 1 }}>Image placeholder</div>
                <div className={styles.placeholder} style={{ flex: 1 }}>Image placeholder</div>
              </div>
            </div>
            <div className={styles.body_text}>
              <p>None of this was a one-size-fits-all template bolted onto every page, it was a system built to flex around whatever a given program actually needed, while still giving our copywriter a structure he could work within independently.</p>
            </div>
          </section>

          {/* ── Solution ───────────────────────────────────────── */}
          <section id="solution" className={styles.section}>
            <h2 className={styles.sectionLabel}>Solution</h2>
            <p className={styles.pullQuote}>What I Built</p>
            <div className={styles.body_text}>
              <p>Solution body text placeholder.</p>
            </div>
            <div className={styles.featureList}>
              <div className={styles.featureRow}>
                <div className={styles.placeholder}>Image placeholder</div>
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Feature title placeholder</h3>
                  <p className={styles.featureText}>Feature body text placeholder.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.placeholder}>Image placeholder</div>
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Feature title placeholder</h3>
                  <p className={styles.featureText}>Feature body text placeholder.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.placeholder}>Image placeholder</div>
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Feature title placeholder</h3>
                  <p className={styles.featureText}>Feature body text placeholder.</p>
                </div>
              </div>
            </div>
            <p className={styles.pullQuote}>Rollout</p>
            <div className={styles.body_text}>
              <p>Rollout body text placeholder.</p>
            </div>
          </section>

          {/* ── Reflection ─────────────────────────────────────── */}
          <section id="reflection" className={styles.section}>
            <h2 className={styles.sectionLabel}>Reflection</h2>
            <p className={styles.pullQuote}>What I've Learned From This Project</p>

            <div className={styles.learnedGrid}>
              <div className={styles.learnedCard}>
                <div className={styles.learnedIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <div className={styles.learnedContent}>
                  <h3 className={styles.learnedTitle}>Learned title placeholder</h3>
                  <p className={styles.learnedText}>Learned body text placeholder.</p>
                </div>
              </div>

              <div className={styles.learnedCard}>
                <div className={styles.learnedIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 6H9c-1.5-1.5-3-3.5-3-6a6 6 0 0 1 6-6z" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                </div>
                <div className={styles.learnedContent}>
                  <h3 className={styles.learnedTitle}>Learned title placeholder</h3>
                  <p className={styles.learnedText}>Learned body text placeholder.</p>
                </div>
              </div>

              <div className={styles.learnedCard}>
                <div className={styles.learnedIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div className={styles.learnedContent}>
                  <h3 className={styles.learnedTitle}>Learned title placeholder</h3>
                  <p className={styles.learnedText}>Learned body text placeholder.</p>
                </div>
              </div>
            </div>

            <p className={styles.pullQuote}>Where I'd Push Further</p>
            <div className={styles.body_text}>
              <p>Retrospective body text placeholder.</p>
            </div>
          </section>

        </div>
      </div>

    </article>

    {lightbox && (
      <div className={styles.lightboxOverlay} onClick={closeLightbox}>
        <div className={styles.lightboxInner} onClick={(e) => e.stopPropagation()}>
          <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <p className={styles.lightboxLabel}>{lightbox.alt}</p>
          <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxImg} />
        </div>
      </div>
    )}
    </>
  )
}
