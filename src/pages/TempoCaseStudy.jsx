import { useEffect, useState, useCallback } from 'react'
import styles from './CaseStudy.module.css'

const SECTIONS = [
  { id: 'overview',      label: 'Overview' },
  { id: 'case-study-1', label: 'Relationship Tracker' },
  { id: 'case-study-2', label: 'Lead Tracker' },
  { id: 'case-study-3', label: 'Marketing Library' },
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

            <div className={`${styles.statsSection} ${styles.statsSectionCentered}`}>
              <h3 className={styles.pullQuote}>That Philosophy Shows Up in the Numbers</h3>
              <div className={styles.statsGrid2}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>300+</span>
                  <span className={styles.statLabel}>Active Users</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>2,500+</span>
                  <span className={styles.statLabel}>Weekly Sales Activities Logged</span>
                </div>
              </div>
            </div>

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
                { title: 'Email Center',        quarter: 'Q3 2026',       img: '/images/tempo-email-center.png',   body: "Gives LOs full visibility into the automated email campaigns marketing sends to their contacts, weekly updates, refinance alerts, birthday and anniversary emails, and more, including performance metrics and the ability to manage who's enrolled." },
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

          {[
            {
              id: 'case-study-1',
              title: 'Relationship Tracker',
              quarter: 'Q2 2025',
              problem: {
                headline: 'No System to Evaluate Business Relationships',
                body: ["The common pushback LOs gave when told to do more sales activities was \"I don't know who to call.\" Digging into that, we found most LOs were operating on loose instinct or gut feel about which business relationships were strong, which were weakening, and whether the strength of these relationships have meaningfully changed over time. Without a real system to track that, partnerships often slipped away quietly, not from any dramatic falling out, but simply because an LO forgot to check in or hadn't called in a while."],
                goalsIntro: 'From that problem, we defined a clear set of goals for the feature:',
                goals: [
                  'Give LOs a clear, at-a-glance view of the strength of their business relationships',
                  'Surface which relationships are thriving, which are cooling off, and which need attention before they\'re lost',
                  'Automate relationship scoring based on real activity data instead of memory or gut feel',
                  'Make relationship intel accessible wherever an LO is already working with a contact, not siloed in a separate tool',
                ],
              },
              process: {
                headline: 'Defining How to Value a Relationship',
                blocks: [
                  { type: 'text', content: 'Before any design work could start, we had to answer a harder question: with the data available, how do we score a relationship in a way that actually reflects its value, and captures how that value changes over time? That took a combined effort with our sales team, CEO, and sales coaching team to work out.' },
                  { type: 'text', content: 'We landed on two data sources: sales activities (the controllable actions an LO takes) and loan outcomes like application submitted, credit pulled, rate locked, and loan funded (the business a relationship actually returns). We already had a points system valuing sales activities based on what our sales coaching team found most predictive of funded loans, so we extended that same scale to loan outcomes, giving us one unified way to weigh both effort and results.' },
                  { type: 'placeholder' },
                  { type: 'text', content: "The next problem was reflecting change over time. A referral partner who sent five loans last year but hasn't called in months isn't as strong a relationship as the score might suggest if it only counted lifetime totals. To solve this, every activity and outcome was assigned a decay period, points earned fade the longer it's been since that activity occurred, at a rate specific to how lasting its impact tends to be. A phone call (8 points) decays over 30 days; a funded loan (50 points) decays over 90. That combination of point values and decay rates gave us a score that reflected current relationship health, not just history." },
                  { type: 'placeholder' },
                  { type: 'text', content: 'We validated the model with a test group of about 10 LOs, running their existing contacts through the algorithm and reviewing the resulting rankings with them. Feedback was consistently positive, the rankings matched their own sense of who their strongest referral partners actually were. From there, we scoped the experience around two views: a high-level dashboard for comparing relationships at a glance, and a deeper single-relationship view showing how that score had progressed over time.' },
                ],
              },
              solution: {
                headline: 'Relationship Tracker Table',
                blocks: [
                  { type: 'image', src: '/images/tempo-relationship-tracker.png', alt: 'Relationship Tracker Table' },
                  { type: 'text', content: 'We started by designing a dashboard that gives LOs a scannable, high-level view of every tracked relationship in one place, ranked and color-coded to surface who\'s thriving, who\'s cooling off, and who needs attention, all at a glance.' },
                  { type: 'featureRowLeft', src: '/images/tempo-rt-tier-system.png', alt: 'Relationship Tier System', subhead: 'Relationship Tier System', body: 'Every relationship is automatically tagged as one of 3 relationship tiers based on referral and funding history, so LOs can gain a quick overview of what that relationship has provided them at a glance.',
                    rightBlocks: [
                      { type: 'tierChart', tiers: [
                        { tag: '/images/tempo-tag-prospect.svg',   label: 'Prospect',   definition: 'A relationship that has not yet provided a lead or referral' },
                        { tag: '/images/tempo-tag-connection.svg', label: 'Connection', definition: 'A relationship that has provided a lead or referral, but not one that has closed a loan' },
                        { tag: '/images/tempo-tag-partner.svg',    label: 'Partner',    definition: 'A relationship that has provided at least 1 lead or referral that has closed a loan' },
                      ]},
                      { type: 'text', content: 'Every relationship starts as a Prospect, someone with no referral history yet. As they begin sending referrals, they move up to Connection, and once one of those referrals results in a funded loan, they become a Partner. The goal for LOs is to move as many relationships up that ladder as possible over time. Tiers update automatically as activity comes in, but LOs can manually override a relationship\'s status if they feel it\'s been misclassified.' },
                    ],
                  },
                  { type: 'subhead', content: 'Trend Indicators' },
                  { type: 'text', content: 'A color-coded change column shows how each relationship is moving, giving an instant read on momentum without opening anything.' },
                  { type: 'scoreRow', scores: [
                    '/images/tempo-score-1.svg',
                    '/images/tempo-score-2.svg',
                    '/images/tempo-score-3.svg',
                    '/images/tempo-score-4.svg',
                    '/images/tempo-score-5.svg',
                  ]},
                  { type: 'subhead', content: 'Last Contact & Last Lead Recency Indicators' },
                  { type: 'text', content: 'Color-coded columns surface how recently an LO has reached out and how recently that relationship has sent them business, two of the clearest signals of relationship health.' },
                  { type: 'scoreRow', fill: true, scores: [
                    '/images/tempo-recency-1.svg',
                    '/images/tempo-recency-2.svg',
                    '/images/tempo-recency-3.svg',
                    '/images/tempo-recency-4.svg',
                    '/images/tempo-recency-5.svg',
                  ]},
                  { type: 'featureRowRight', src: '/images/tempo-rt-priority-list.png', alt: 'Priority List', subhead: 'Priority List', body: 'LOs can favorite up to 50 relationships into a dedicated list, a curated view of the partnerships they care about most or want to keep top of mind.',
                    rightBlocks: [
                      { type: 'subhead', content: 'Focused Views' },
                      { type: 'text', content: 'Additional tabs break the full list down by what matters most in the moment, relationships needing attention, ones on the rise, or grouped by tier.' },
                      { type: 'image', src: '/images/tempo-rt-focused-views.png', alt: 'Focused Views' },
                    ],
                  },
                  { type: 'pullQuote', content: 'Beyond the Dashboard' },
                  { type: 'text', content: 'Every contact enrolled in the Relationship Tracker has a dedicated Relationship tab inside their existing contact modal. Clicking into a relationship from the Relationship Tracker opens straight to this tab, but because it lives inside the contact modal itself, that same relationship data is accessible anywhere in Tempo a user can already click into a contact, no need to go back to the dashboard just to check where things stand.' },
                  { type: 'dualImg', images: [
                    { src: '/images/tempo-rt-tracker-modal.jpg', alt: 'Relationship Tracker Contact Modal', flex: 1483 },
                    { src: '/images/tempo-rt-modal-mobile-1.png', alt: 'Relationship Trend Graph', flex: 505 },
                  ]},
                  { type: 'subhead', content: 'Relationship Trend Graph' },
                  { type: 'text', content: "A graph showing how the relationship's score has moved over different time frames, giving LOs a clear read on whether things are trending up, holding steady, or slipping." },
                  { type: 'subhead', content: 'Relationship Activities Table' },
                  { type: 'text', content: "A full breakdown of every activity completed with that contact, and how many points each is currently contributing to the score with decay factored in, giving LOs real insight into exactly what's making up a relationship's score." },
                ],
              },
            },
            {
              id: 'case-study-2',
              title: 'Lead Tracker',
              quarter: 'Q3 2025',
              problem: {
                headline: 'No System to Keep Leads Moving',
                body: ['Every LO had their own way of tracking leads, memory, handwritten lists, personal spreadsheets, and none of it was standardized or reliable. Many of the tools LOs used to track their leads got bloated quickly, filled with leads that had gone cold months ago but sat in their systems idly without an exit mechanism, taking attention away from the leads that were actually worthwhile. Without a reliable system, hot leads were far too easy to lose track of. Some sat idle for weeks without follow-up, others got forgotten entirely, and LOs had no clear sense of which leads were actually worth their time versus which had already gone cold.'],
                goalsIntro: 'From that problem, we defined a clear set of goals for the feature:',
                goals: [
                  'Give LOs a clear view of where every lead stands in their journey to the pipeline',
                  'Score leads based on real activity and engagement, not memory or guesswork',
                  'Create urgency to keep leads moving forward instead of sitting idle',
                ],
              },
              process: {
                headline: 'Connecting the Dots With Relationship Tracker',
                blocks: [
                  { type: 'text', content: "From the start, the team saw an opportunity to build Lead Tracker with tight synergy to Relationship Tracker, which had shipped just before it. Where Relationship Tracker gave LOs a big-picture view of their business relationships, Lead Tracker would do the same for active leads, and both ultimately served the same purpose: helping LOs quickly decide who to spend their time on. Knowing LOs would move back and forth between the two constantly, designing them as sibling features made sense from day one." },
                  { type: 'text', content: "That meant reusing much of Relationship Tracker's underlying system rather than starting over. The scoring model carried over almost exactly, with only the outcome point values adjusted to better reflect what makes a lead valuable, giving LOs a clear read on which leads were \"hot\" and likely to convert." },
                  { type: 'text', content: "Rather than the spreadsheet or table format most LOs were already using, we took inspiration from Kanban boards, a format our own product team relied on daily and found effective for exactly this kind of \"keep things moving\" goal. Working with the sales team, we mapped leads to three stages based on real conversion behavior: New Leads, Credit Pulled, and Pre-Approved." },
                  { type: 'dualPlaceholder' },
                  { type: 'subhead', content: 'Adding a Layer of Urgency' },
                  { type: 'text', content: "With those stages defined, we built an expiration system that solved two problems at once: pushing LOs to keep moving a lead forward instead of letting it idle, and automatically clearing cold leads so the tracker stayed focused on what was still active. Each stage's expiration window was set based on real conversion behavior, earlier stages carry tighter deadlines since leads are most likely to go cold right after first contact, while later stages get more breathing room as the relationship becomes more committed. Once an application is submitted, the lead graduates out of the tracker entirely, they're no longer a lead, they're a client." },
                  { type: 'placeholder' },
                ],
              },
              solution: {
                headline: 'Lead Tracker Board',
                blocks: [
                  { type: 'dualImg', images: [
                    { src: '/images/tempo-lt-board-1.png', alt: 'Lead Tracker Board Desktop', flex: 1757 },
                    { src: '/images/tempo-lt-board-mobile.jpg', alt: 'Lead Tracker Board Mobile', flex: 490 },
                  ]},
                  { type: 'text', content: 'We designed the Lead Tracker as a Kanban-style board, giving LOs a clear, at-a-glance view of every active lead and exactly where they stand in the process.' },
                  { type: 'subhead', content: 'Three-Column Kanban Board' },
                  { type: 'text', content: 'Leads are organized into three columns, New, Credit Pulled, and Pre-Approved, giving LOs a clear view of where every lead stands and what share of their pipeline sits in each stage.' },
                  { type: 'image', src: '/images/tempo-lt-kanban.jpg', alt: 'Lead Tracker Kanban Board' },
                  { type: 'subhead', content: 'Expiration Indicators' },
                  { type: 'text', content: 'Reusing the same color system from Relationship Tracker, each lead shows an at-a-glance signal of how much time is left before it expires.' },
                  { type: 'scoreRow', scores: [
                    '/images/tempo-expiry-1.svg',
                    '/images/tempo-expiry-2.svg',
                    '/images/tempo-expiry-3.svg',
                    '/images/tempo-expiry-4.svg',
                    '/images/tempo-expiry-5.svg',
                  ]},
                  { type: 'featureRowLeft', wide: true, src: '/images/tempo-lt-expired.png', alt: 'Expired View', subhead: 'Expired View', body: "Leads that expire aren't gone for good. A dedicated table shows every expired lead with the option to revive it, so a cold lead can always be brought back in." },
                  { type: 'featureRowLeft', wide: true, src: '/images/tempo-lt-paused.png', alt: 'Pausing Leads', subhead: 'Pausing Leads', body: "If a lead isn't ready to move forward, LOs can pause it and schedule it to automatically reappear in the tracker later. Pausing prompts for a quick reason, so there's context waiting when it resurfaces. All paused leads live in a dedicated waiting view." },
                  { type: 'subhead', content: 'Progression Indicators' },
                  { type: 'text', content: 'Lead cards get distinct styling to flag key moments at a glance, when a lead is brand new, recently revived, recently promoted to the next stage, or about to graduate out of the tracker and into the loan pipeline.' },
                  { type: 'imageRow', images: [
                    '/images/tempo-lt-progress-1.png',
                    '/images/tempo-lt-progress-2.png',
                    '/images/tempo-lt-progress-3.png',
                    '/images/tempo-lt-progress-4.png',
                  ]},
                ],
              },
            },
            {
              id: 'case-study-3',
              title: 'Marketing Library',
              quarter: 'Q2 2026',
              problem: { headline: 'Problem headline placeholder', body: ['Problem body text placeholder.'] },
              process: { headline: 'Process headline placeholder', body: ['Process body text placeholder.'] },
              solution: { headline: 'Solution headline placeholder', body: ['Solution body text placeholder.'] },
            },
          ].map(({ id, title, quarter, problem, process, solution }) => (
            <section key={id} id={id} className={`${styles.section} ${styles.miniCaseStudy}`}>
              <div className={styles.miniCaseStudyHeader}>
                <span className={styles.caseStudyTag}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                  </svg>
                  Case Study
                </span>
                <h2 className={styles.miniCaseStudyTitle}>{title}</h2>
                <span className={styles.miniCaseStudyQuarter}>{quarter}</span>
              </div>
              <div className={styles.miniCaseStudyBody}>

                <div className={styles.miniSection}>
                  <h3 className={styles.sectionLabel}>Problem</h3>
                  <p className={styles.pullQuote}>{problem.headline}</p>
                  <div className={styles.body_text}>
                    {problem.body.map((p, i) => <p key={i}>{p}</p>)}
                    {problem.goalsIntro && <p>{problem.goalsIntro}</p>}
                  </div>
                  {problem.goals && (
                    <ul className={styles.checklist}>
                      {problem.goals.map((g, i) => <li key={i}>{g}</li>)}
                    </ul>
                  )}
                </div>

                <div className={styles.miniSection}>
                  <h3 className={styles.sectionLabel}>Process</h3>
                  <p className={styles.pullQuote}>{process.headline}</p>
                  {process.blocks ? (
                    process.blocks.map((block, i) =>
                      block.type === 'placeholder'
                        ? <div key={i} className={styles.placeholder} />
                        : block.type === 'dualPlaceholder'
                          ? <div key={i} className={styles.dualPlaceholder}>
                              <div className={styles.placeholder} />
                              <div className={styles.placeholder} />
                            </div>
                          : block.type === 'subhead'
                            ? <h4 key={i} className={styles.miniSubhead}>{block.content}</h4>
                            : <div key={i} className={styles.body_text}><p>{block.content}</p></div>
                    )
                  ) : (
                    <div className={styles.body_text}>
                      {process.body.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  )}
                </div>

                <div className={styles.miniSection}>
                  <h3 className={styles.sectionLabel}>Solution</h3>
                  <p className={styles.pullQuote}>{solution.headline}</p>
                  {solution.blocks ? (
                    solution.blocks.map((block, i) =>
                      block.type === 'placeholder'
                        ? <div key={i} className={styles.placeholder} />
                        : block.type === 'image'
                          ? <img key={i} src={block.src} alt={block.alt} className={styles.featureImg} onClick={() => openLightbox(block.src, block.alt)} />
                          : block.type === 'dualImgCaptioned'
                            ? <div key={i} className={styles.dualImgCaptioned}>
                                {block.images.map((img, ii) => (
                                  <div key={ii} className={styles.dualImgCaptionedCol}>
                                    <img src={img.src} alt={img.alt} className={styles.featureImg} onClick={() => openLightbox(img.src, img.alt)} />
                                    <div className={styles.featureInfo}>
                                      <span className={styles.featureTitle}>{img.subhead}</span>
                                      <p className={styles.featureText}>{img.body}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                          : block.type === 'dualImg'
                            ? <div key={i} className={`${styles.dualImgCrop}${block.equal ? ` ${styles.dualImgCropEqual}` : ''}`}>
                                {block.images.map(img => (
                                  <img key={img.src} src={img.src} alt={img.alt} className={styles.featureImg} style={img.flex ? { flex: img.flex } : undefined} onClick={() => openLightbox(img.src, img.alt)} />
                                ))}
                              </div>
                            : block.type === 'pullQuote'
                              ? <p key={i} className={styles.pullQuote}>{block.content}</p>
                            : block.type === 'subhead'
                              ? <h4 key={i} className={styles.miniSubhead}>{block.content}</h4>
                              : block.type === 'featureRowLeft'
                                ? <div key={i} className={`${styles.featureRow} ${block.wide ? styles.featureRowWide : styles.featureRowCompact}`}>
                                    {block.src
                                      ? <img src={block.src} alt={block.alt} className={styles.featureImg} onClick={() => openLightbox(block.src, block.alt)} />
                                      : <div className={styles.placeholder} />
                                    }
                                    <div className={styles.featureInfo}>
                                      <span className={styles.featureTitle}>{block.subhead}</span>
                                      <p className={styles.featureText}>{block.body}</p>
                                      {block.rightBlocks && block.rightBlocks.map((rb, ri) =>
                                        rb.type === 'tierChart'
                                          ? <div key={ri} className={styles.tierChart}>
                                              {rb.tiers.map((tier) => (
                                                <div key={tier.label} className={styles.tierRow}>
                                                  <span className={styles.tierTagCell}>
                                                    <img src={tier.tag} alt={tier.label} className={styles.tierTag} />
                                                  </span>
                                                  <p className={styles.tierDefinition}>{tier.definition}</p>
                                                </div>
                                              ))}
                                            </div>
                                          : rb.type === 'text'
                                            ? <p key={ri} className={styles.featureText}>{rb.content}</p>
                                            : null
                                      )}
                                    </div>
                                  </div>
                                : block.type === 'tierChart'
                                ? <div key={i} className={styles.tierChart}>
                                    {block.tiers.map((tier) => (
                                      <div key={tier.label} className={styles.tierRow}>
                                        <img src={tier.tag} alt={tier.label} className={styles.tierTag} />
                                        <p className={styles.tierDefinition}>{tier.definition}</p>
                                      </div>
                                    ))}
                                  </div>
                                : block.type === 'imageRow'
                                ? <div key={i} className={styles.imageRow}>
                                    {block.images.map((src, ii) =>
                                      src
                                        ? <img key={ii} src={src} alt={`Image ${ii + 1}`} className={styles.imageRowImg} onClick={() => openLightbox(src, `Image ${ii + 1}`)} />
                                        : <div key={ii} className={styles.imageRowPlaceholder} />
                                    )}
                                  </div>
                                : block.type === 'scoreRow'
                                ? <div key={i} className={`${styles.scoreRow}${block.fill ? ` ${styles.scoreRowFill}` : ''}`}>
                                    {block.scores.map((src, si) => (
                                      <img key={si} src={src} alt={`Score ${si + 1}`} className={`${styles.scoreImg}${block.fill ? ` ${styles.scoreImgFill}` : ''}`} />
                                    ))}
                                  </div>
                                : block.type === 'featureRowRight'
                                ? <div key={i} className={`${styles.featureRow} ${styles.featureRowRight}`}>
                                    <img src={block.src} alt={block.alt} className={styles.featureImg} onClick={() => openLightbox(block.src, block.alt)} />
                                    <div className={styles.featureInfo}>
                                      <span className={styles.featureTitle}>{block.subhead}</span>
                                      <p className={styles.featureText}>{block.body}</p>
                                      {block.rightBlocks && block.rightBlocks.map((rb, ri) =>
                                        rb.type === 'subhead'
                                          ? <span key={ri} className={styles.featureTitle} style={{ marginTop: '1rem', display: 'block' }}>{rb.content}</span>
                                          : rb.type === 'text'
                                            ? <p key={ri} className={styles.featureText}>{rb.content}</p>
                                            : rb.type === 'image'
                                              ? <img key={ri} src={rb.src} alt={rb.alt} className={styles.featureImg} style={{ marginTop: '0.75rem' }} onClick={() => openLightbox(rb.src, rb.alt)} />
                                              : null
                                      )}
                                    </div>
                                  </div>
                                : <div key={i} className={styles.body_text}><p>{block.content}</p></div>
                    )
                  ) : (
                    <div className={styles.body_text}>
                      {solution.body.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  )}
                </div>

              </div>
            </section>
          ))}

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
