import { useEffect, useState, useCallback } from 'react'
import styles from './CaseStudy.module.css'

const SECTIONS = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'process',    label: 'Process' },
  { id: 'solution',   label: 'Solution' },
  { id: 'reflection', label: 'Reflection' },
]

export default function TempoCaseStudy() {
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
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
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
        <div className={styles.splash}>
          <div className={styles.splashPlaceholder}>Hero Placeholder</div>
        </div>
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
            <span className={styles.employer}>Self-initiated</span>
          </div>
          <h1 className={styles.projectTitle}>Tempo</h1>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.body}>

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

        <div className={styles.content}>

          {/* ── Overview ── */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionLabel}>Overview</h2>
            <div className={styles.overviewLayout}>
              <div className={styles.overviewLeft}>
                <p className={styles.pullQuote}>Building an Award-Winning CRM for Mortgage Loan Originators from the Ground Up</p>
                <div className={styles.body_text}>
                  <p>Tempo began in the summer of 2024 as a simple cost-saving swap — replacing an expensive third-party sales-coaching tool with something built in-house. That short-term replacement laid the groundwork for Tempo to evolve into a multi-year project, seeking to create a centralized tool for UMortgage's 300+ loan originators to manage leads, relationships, marketing, and the bulk of their day-to-day business activities.</p>
                  <p>As the company's sole UI/UX designer, I've owned every screen and flow in Tempo since day one, but my role grew well past design, into product strategy, feature scoping, research, and even front-end development. The entirety of Tempo was designed and built entirely by our small team consisting of myself, a software engineer, a data engineer, and a product manager.</p>
                </div>
              </div>
              <div className={styles.overviewRight}>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Role</span>
                    <span className={styles.metaValue}>UX & Product Designer</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Timeline</span>
                    <span className={styles.metaValue}>Q2 2024 – Q3 2026</span>
                  </div>
                </div>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Team</span>
                  </div>
                  {[
                    { name: 'Sean Grapevine', role: 'Product Manager',   linkedin: '', avatar: '/images/team-sean-grapevine.jpg' },
                    { name: 'Chris Le',        role: 'Software Engineer', linkedin: '', avatar: '' },
                    { name: 'Adyson Harrah',   role: 'Data Engineer',     linkedin: '', avatar: '/images/team-adyson-harrah.jpg' },
                  ].map(({ name, role, linkedin, avatar }) => (
                    <div key={name} className={styles.teamRow}>
                      {avatar
                        ? <img src={avatar} alt={name} className={styles.teamAvatar} />
                        : <div className={styles.teamAvatar} />
                      }
                      <div className={styles.teamInfo}>
                        <span className={styles.teamName}>{name}</span>
                        <span className={styles.teamRole}>{role}</span>
                      </div>
                      <a
                        href={linkedin || undefined}
                        className={`${styles.teamLinkedIn} ${!linkedin ? styles.teamLinkedInEmpty : ''}`}
                        aria-label={`${name} on LinkedIn`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={!linkedin ? (e) => e.preventDefault() : undefined}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.statsSection}>
              <h3 className={styles.pullQuote}>What's Been Built</h3>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>6</span>
                  <span className={styles.statLabel}>Major Feature Releases</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Minor Feature Releases</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>Dozens</span>
                  <span className={styles.statLabel}>of Platform Enhancements</span>
                </div>
              </div>
            </div>

            <h3 className={styles.pullQuote}>The Philosophy Behind Tempo</h3>
            <div className={styles.body_text}>
              <p>At its core, Tempo is built around a simple idea: a loan originator's pipeline growth can mostly be derived from the volume and quality of their sales activities (calls, texts, meetings, events, etc.). UMortgage's sales coaching philosophy for LOs can essentially be boiled down to "ignore the noise, do more sales activities." The initial release of Tempo was simply a tool that let users track their sales activities, who they were with, and the value of each activity.</p>
            </div>
            <div className={styles.dualImgCrop}>
              <img
                src="/images/tempo-philosophy-1.png"
                alt="Tempo activity tracking"
                className={styles.featureImg}
                onClick={() => openLightbox('/images/tempo-philosophy-1.png', 'Tempo activity tracking')}
              />
              <img
                src="/images/tempo-philosophy-2.png"
                alt="Tempo sales activity log"
                className={styles.featureImg}
                onClick={() => openLightbox('/images/tempo-philosophy-2.png', 'Tempo sales activity log')}
              />
            </div>
            <p className={styles.caption}>Screens from the activity logging user flow in Tempo</p>
            <div className={styles.body_text}>
              <p>In the years since, our team has built on that foundation, combining sales activity data with loan pipeline data to power a suite of features that help LOs plan their day, see the big picture on their relationships, decide who to call, text, or meet with next, and win back time in their day, all in service of that same mantra: "ignore the noise, do more sales activities."</p>
            </div>
            <h3 className={styles.pullQuote}>Exploring the Tempo Platform</h3>

            <div className={styles.featureList}>
              {[
                { title: 'Relationship Tracker', quarter: 'Q2 2025', img: '/images/tempo-relationship-tracker.png',                               body: "Analyzes an LO's logged sales activity to score the strength of their relationships, surfacing which partnerships are thriving and which need attention before they go cold." },
                { title: 'Lead Tracker',        quarter: 'Q3 2025', img: '/images/tempo-lead-tracker-1.png', body: "Tracks a contact's full journey from initial lead to entry into the loan pipeline, using stage-based timers that create urgency to keep leads moving instead of sitting idle and getting forgotten." },
                { title: 'My Day',              quarter: 'Q4 2025', img: '/images/tempo-my-day.jpg',                               body: 'An Outlook-integrated calendar and time-blocking tool that helps LOs plan their day around high-value sales activities. LOs manage their full schedule directly inside Tempo, with the ability to create and execute on sales activity time blocks.' },
                { title: 'Marketing Library',   quarter: 'Q2 2026', img: '/images/tempo-contacts.png',       body: "A centralized, easily searchable home for UMortgage's 500+ customizable marketing assets, giving LOs a fast way to find what they need and giving the marketing team an efficient way to share new assets as they're created." },
                { title: 'Database Uploads',    quarter: 'Q2 2026', img: '/images/tempo-lead-tracker-2.png', body: "Allows LOs to upload their own contact databases and get them fully integrated into Tempo's systems and features in bulk, eliminating the manual work of entering and enrolling contacts one-by-one." },
                { title: 'Email Center',        quarter: null,       img: '/images/tempo-email-center.png',   body: "Gives LOs full visibility into the automated email campaigns marketing sends to their contacts, weekly updates, refinance alerts, birthday and anniversary emails, and more, including performance metrics and the ability to manage who's enrolled." },
              ].map(({ title, quarter, img, body }) => (
                <div key={title} className={styles.featureRow}>
                  {img
                    ? <img src={img} alt={title} className={styles.featureImg} onClick={() => openLightbox(img, title)} />
                    : <div className={styles.placeholder} />
                  }
                  <div className={styles.featureInfo}>
                    <div className={styles.featureTitleRow}>
                      <span className={styles.featureTitle}>{title}</span>
                      {quarter && <span className={styles.featureQuarter}>{quarter}</span>}
                    </div>
                    <p className={styles.featureText}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Problem ── */}
          <section id="problem" className={styles.section}>
            <h2 className={styles.sectionLabel}>Problem</h2>
            <p className={styles.pullQuote}>Problem headline placeholder</p>
            <div className={styles.body_text}>
              <p>Problem body text placeholder.</p>
            </div>
          </section>

          {/* ── Process ── */}
          <section id="process" className={styles.section}>
            <h2 className={styles.sectionLabel}>Process</h2>
            <p className={styles.pullQuote}>Process headline placeholder</p>
            <div className={styles.body_text}>
              <p>Process body text placeholder.</p>
            </div>
          </section>

          {/* ── Solution ── */}
          <section id="solution" className={styles.section}>
            <h2 className={styles.sectionLabel}>Solution</h2>
            <p className={styles.pullQuote}>Solution headline placeholder</p>
            <div className={styles.body_text}>
              <p>Solution body text placeholder.</p>
            </div>
          </section>

          {/* ── Reflection ── */}
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
