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
          <picture>
            <source media="(max-width: 639px)" srcSet="/images/tempo-thumbnail.jpg" />
            <img src="/images/hero-tempo.jpg" alt="Tempo" className={styles.splashImg} />
          </picture>
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
            <span className={styles.employer}>UMortgage</span>
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
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Recognition</span>
                    <span className={styles.metaValue}>2026 HousingWire Tech100 Recipient</span>
                  </div>
                </div>
                <div className={styles.metaGrid}>
                  <div className={styles.teamHeader}>Team</div>
                  {[
                    { name: 'Sean Grapevine', role: 'Product Manager',   linkedin: 'https://www.linkedin.com/in/sean-grapevine/', avatar: '/images/team-sean-grapevine.jpg' },
                    { name: 'Chris Le',        role: 'Software Engineer', linkedin: 'https://www.linkedin.com/in/cl118/', avatar: '/images/avatar-chris-le.jpg' },
                    { name: 'Adyson Harrah',   role: 'Data Engineer',     linkedin: 'https://www.linkedin.com/in/adyson-harrah-94a815195/', avatar: '/images/team-adyson-harrah.jpg' },
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
                { title: 'Relationship Tracker', quarter: 'Q2 2025', img: '/images/tempo-relationship-tracker.png', caseStudyId: 'case-study-1', body: "Analyzes an LO's logged sales activity to score the strength of their relationships, surfacing which partnerships are thriving and which need attention before they go cold." },
                { title: 'Lead Tracker',        quarter: 'Q3 2025', img: '/images/tempo-lead-tracker-1.png',        caseStudyId: 'case-study-2', body: "Tracks a contact's full journey from initial lead to entry into the loan pipeline, using stage-based timers that create urgency to keep leads moving instead of sitting idle and getting forgotten." },
                { title: 'My Day',              quarter: 'Q4 2025', img: '/images/tempo-my-day.jpg',                               body: 'An Outlook-integrated calendar and time-blocking tool that helps LOs plan their day around high-value sales activities. LOs manage their full schedule directly inside Tempo, with the ability to create and execute on sales activity time blocks.' },
                { title: 'Marketing Library',   quarter: 'Q2 2026', img: '/images/tempo-contacts.png',              caseStudyId: 'case-study-3', body: "A centralized, easily searchable home for UMortgage's 500+ customizable marketing assets, giving LOs a fast way to find what they need and giving the marketing team an efficient way to share new assets as they're created." },
                { title: 'Database Uploads',    quarter: 'Q2 2026', img: '/images/tempo-lead-tracker-2.png', body: "Allows LOs to upload their own contact databases and get them fully integrated into Tempo's systems and features in bulk, eliminating the manual work of entering and enrolling contacts one-by-one." },
                { title: 'Email Center',        quarter: 'Q3 2026',       img: '/images/tempo-email-center.png',   body: "Gives LOs full visibility into the automated email campaigns marketing sends to their contacts, weekly updates, refinance alerts, birthday and anniversary emails, and more, including performance metrics and the ability to manage who's enrolled." },
              ].map(({ title, quarter, img, body, caseStudyId }) => (
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
                    {caseStudyId && (
                      <a href={`#${caseStudyId}`} className={styles.jumpLink}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 5v14M5 12l7 7 7-7"/>
                        </svg>
                        Jump to Case Study
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div id="case-studies" className={styles.miniCaseStudyIntro}>
            <h2 className={styles.miniCaseStudyIntroHead}>Featured Case Studies</h2>
            <p className={styles.miniCaseStudyIntroBody}>Rather than walk through every feature, here's a closer look at three that best capture how we approach problems and build solutions inside Tempo.</p>
          </div>

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
                  { type: 'scoreChart', groups: [
                    { title: 'Activity Points', items: [
                      { label: 'Face-to-Face Meeting', pts: 12 },
                      { label: 'Open House',           pts: 10 },
                      { label: 'Event',                pts: 10 },
                      { label: 'Phone Conversation',   pts: 8  },
                      { label: 'Thank You Card',       pts: 4  },
                      { label: 'Text Conversation',    pts: 2  },
                    ]},
                    { title: 'Loan Outcome Points', items: [
                      { label: 'Loan Funded',        pts: 50 },
                      { label: 'Loan Locked',        pts: 25 },
                      { label: 'Credit Pull',        pts: 10 },
                      { label: 'Application Intake', pts: 6  },
                    ]},
                  ]},
                  { type: 'text', content: "The next problem was reflecting change over time. A referral partner who sent five loans last year but hasn't called in months isn't as strong a relationship as the score might suggest if it only counted lifetime totals. To solve this, every activity and outcome was assigned a decay period, points earned fade the longer it's been since that activity occurred, at a rate specific to how lasting its impact tends to be. A phone call (8 points) decays over 30 days; a funded loan (50 points) decays over 90. That combination of point values and decay rates gave us a score that reflected current relationship health, not just history." },
                  { type: 'scoreChart', suffix: ' days', groups: [
                    { title: 'Activity Decay', items: [
                      { label: 'Face-to-Face Meeting', pts: 30 },
                      { label: 'Open House',           pts: 30 },
                      { label: 'Event',                pts: 30 },
                      { label: 'Phone Conversation',   pts: 14 },
                      { label: 'Thank You Card',       pts: 14 },
                      { label: 'Text Conversation',    pts: 7  },
                    ]},
                    { title: 'Loan Outcome Decay', items: [
                      { label: 'Loan Funded',        pts: 120 },
                      { label: 'Loan Locked',        pts: 90  },
                      { label: 'Credit Pull',        pts: 60  },
                      { label: 'Application Intake', pts: 30  },
                    ]},
                  ]},
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
                  { type: 'imageBlurb', src: '/images/tempo-kanban-inspiration.png', alt: 'Jira Kanban board inspiration', blurb: "Our own Jira board was the starting point. The same \"move it forward or it stalls\" logic that ran our team's workload became the foundation for how Lead Tracker handles active leads." },
                  { type: 'subhead', content: 'Adding a Layer of Urgency' },
                  { type: 'text', content: "With those stages defined, we built an expiration system that solved two problems at once: pushing LOs to keep moving a lead forward instead of letting it idle, and automatically clearing cold leads so the tracker stayed focused on what was still active. Each stage's expiration window was set based on real conversion behavior, earlier stages carry tighter deadlines since leads are most likely to go cold right after first contact, while later stages get more breathing room as the relationship becomes more committed. Once an application is submitted, the lead graduates out of the tracker entirely, they're no longer a lead, they're a client." },
                  { type: 'stageTimeline', stages: [
                    { label: 'New Lead',     days: 10 },
                    { label: 'Credit Pulled', days: 14 },
                    { label: 'Pre-Approved',  days: 60 },
                  ]},
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
                  { type: 'pullQuote', content: 'Lead Profile Inside the Contact Modal' },
                  { type: 'image', src: '/images/tempo-lt-lead-modal.jpg', alt: 'Lead Profile Contact Modal' },
                  { type: 'text', content: "Like the Relationship Tracker, every lead also gets a dedicated tab inside its contact modal, with the same score history graph and activity breakdown showing exactly what's contributing to the lead's score. The one addition here is Lead Actions, giving LOs quick access to pause or cancel a lead directly from the same view." },
                ],
              },
            },
            {
              id: 'case-study-3',
              title: 'Marketing Library',
              quarter: 'Q2 2026',
              problem: {
                blocks: [
                  { type: 'pullQuote', content: '500+ Assets, No Easy Way to Find Them' },
                  { type: 'text', content: "Since 2022, UMortgage's marketing team had built out a library of 500+ customizable marketing assets (flyers, social graphics, slide decks, event promo, and more), but the system for actually finding and using them wasn't up to par. The system was very unintuitive and lacked search features making it incredibly difficult for our Loan Originators to find the resources they were looking for. This often led to frustration and requests for assets that we already provided (not to mention the time spent responding to requests weighing down the marketing team). Our loan originators weren't uninterested in using our marketing team's offerings, they just couldn't reliably find and access them." },
                  { type: 'pullQuote', content: 'Managing the Library Was Its Own Struggle' },
                  { type: 'text', content: "On the marketing side, the tool used to manage and upload the library had become increasingly clunky. Years of workaround habits had left it disorganized in ways that made it harder to maintain, let alone improve, or hand off cleanly to anyone else." },
                  { type: 'goals', intro: 'From that problem, we defined a clear set of goals for the feature:', items: [
                    "Create one easily navigable centralized home for LOs to find and use marketing's customizable assets",
                    'Create a browsing experience that is functional and enjoyable whether an LO is searching for something specific or just exploring general options',
                    'Give marketing a fast, simple way to upload new assets as they\'re created and migrate old assets into the new library',
                  ]},
                ],
              },
              process: {
                headline: 'Learning from What Our LOs Already Knew',
                blocks: [
                  { type: 'text', content: "Rather than designing from scratch, I drew inspiration from asset library experiences LOs had already used through lender-partners, familiar interaction patterns meant more of the design's job was already done before an LO ever opened it. Instead of pitching leadership with mockups, I built a working prototype, loaded with real demo assets, and presented it side-by-side with the existing library. That comparison alone was enough to get fast approval to move forward." },
                  { type: 'subhead', content: 'Designing for Two Kinds of Search' },
                  { type: 'text', content: "Talking to LOs about what they want out of a marketing asset library surfaced two distinct ways they approached our resources and offerings: some came in looking for one specific asset they already knew existed, while others had only a general goal in mind, like wanting a social post, with no particular asset picked out. I quickly realized that in order for this tool to solve the pain points previously outlined, it was vital to design a filtering and organization system that works for both." },
                  { type: 'text', content: "That same problem carried into arguably the biggest decision of the project: how to tag and categorize assets. In the old system, each asset lived under a single category page, forcing awkward fits for anything that didn't cleanly belong to one bucket. These awkward fits led to those assets being very difficult for users to track down. Working directly with the marketing team, we broke down the existing categories and rebuilt them from the ground up, creating an organization system that any resource we've ever made can fit into. We also made the decision to allow assets to be tagged by multiple categories (something that wasn't possible in our previous library) so that any assets that don't fit cleanly into one group can be found when searching for multiple." },
                  { type: 'filterChart', categories: [
                    { title: 'Type',             tags: ['Flyer', 'Social Media', 'Presentation Deck', 'Guide', 'Event Promo', 'Script', 'Blog', 'Misc'] },
                    { title: 'Loan Programs',    tags: ['Conventional', 'FHA', 'HELOC', 'Incentives', 'Non-QM', 'Refinance', 'Specialty', 'USDA', 'VA'] },
                    { title: 'Recruiting',       tags: ['Client Recruiting', 'LO Recruiting', 'Partner Recruiting'] },
                    { title: 'Loan Fulfillment', tags: ['Borrower Intake', 'CTC', 'Funding', 'Open House', 'Processing', 'Pre-Approval', 'Qualification', 'Selling', 'Under Contract'] },
                    { title: 'Education',        tags: ['Borrower Education', 'Partner Education'] },
                    { title: 'Timely Content',   tags: ['Mortgage Market', 'Mortgage News', 'New Products', 'Seasonal'] },
                  ]},
                  { type: 'subhead', content: 'Building the Upload Experience, and the Product Itself' },
                  { type: 'text', content: "With the LO-facing experience taking shape, I turned to the upload flow marketing would use to add new assets. Having uploaded assets myself under the old system, I had a clear sense of the pain points to solve for going in. Once a working prototype was ready, I tested it unmoderated with three marketing team members, no instructions, just asked to upload an asset. This user testing allowed me to quickly find clunky points of the process and iron them out to create a fluid experience that our team was immediately comfortable with." },
                ],
              },
              solution: {
                headline: 'The Marketing Library',
                blocks: [
                  { type: 'image', src: '/images/tempo-ml-library.png', alt: 'The Marketing Library' },
                  { type: 'text', content: 'We designed the Marketing Asset Library as a single, searchable home for every customizable asset LOs need, organized to work whether they know exactly what they\'re looking for or are just browsing.' },
                  { type: 'featureRowLeft', wide: true, src: '/images/tempo-ml-collections.png', alt: 'Collections', subhead: 'Collections', body: 'Related assets are grouped into collection folders, like a full set of open house materials, so everything tied to a theme or use case lives in one place.' },
                  { type: 'subhead', content: 'Featured Assets' },
                  { type: 'text', content: 'The marketing team can pin or feature specific assets at the top of the page, giving priority visibility to whatever\'s most relevant or timely.' },
                  { type: 'image', src: '/images/tempo-ml-featured.png', alt: 'Featured Assets' },
                  { type: 'featureRowLeft', src: '/images/tempo-ml-filtering.png', alt: 'Filtering', subhead: 'Filtering', body: 'Assets are broken down into filters that match how LOs actually search, with the ability to select multiple filters at once to narrow things down further.', rightBlocks: [
                    { type: 'subhead', content: 'Sort By' },
                    { type: 'text', content: 'LOs can sort content by New to see marketing\'s latest assets, or by Popular to find what other LOs have been using most.' },
                    { type: 'image', src: '/images/tempo-ml-sort.png', alt: 'Sort By', width: '160px', maxHeight: '100px' },
                  ] },
                  { type: 'pullQuote', content: 'Asset Modals' },
                  { type: 'image', src: '/images/tempo-ml-asset-modal.jpg', alt: 'Asset Modal' },
                  { type: 'text', content: 'Clicking into an asset opens a simple, focused view built around one core need: getting an LO from Tempo into the actual editable template as quickly as possible. Since nearly every asset lives in Canva, the modal links directly out to it. For assets that come in multiple formats, like social graphics with separate Facebook, Instagram, and Stories sizing, the modal surfaces a dedicated link for each version instead of forcing LOs to guess which template fits. Assets that come with suggested social copy include that text right in the modal with a one-click copy button, so LOs can paste it straight into their post.' },
                  { type: 'featureRowLeft', wide: true, src: '/images/tempo-ml-flag.png', alt: 'Asset Flagging', subhead: 'Asset Flagging', body: 'Loan guidelines change often, sometimes without marketing knowing, which can quietly make an asset outdated. A flag button lets LOs report issues like bad info, broken links, or compliance concerns, automatically creating a Jira ticket for marketing to fix it, keeping the library accurate over time.' },
                  { type: 'pullQuote', content: 'The Upload Experience' },
                  { type: 'image', src: '/images/tempo-ml-upload.png', alt: 'The Upload Experience' },
                  { type: 'text', content: 'Rather than managing assets in a separate CMS, I built the entire upload and editing experience directly inside Tempo, keeping everything marketing needed in one place. Certain accounts are marked with marketing admin permissions, unlocking edit and upload controls invisible to regular users throughout the library.' },
                  { type: 'featureRowLeft', wide: true, src: '/images/tempo-ml-upload-breakdown.png', alt: 'Upload Flow', subhead: null, body: 'Uploading an asset is broken into three parts: Asset Type, Asset Content, and Asset Resources. Selecting an asset type dynamically changes the inputs shown next, since a social graphic and a presentation deck need very different information to go live.', transparent: true, largeBody: true },
                  { type: 'subhead', content: 'Asset Content & Tagging' },
                  { type: 'text', content: 'The Asset Content section covers the essentials, title, thumbnail, and tags, plus any additional fields specific to that asset type, like social copy for social graphics or a training video link for presentation decks. Tags are organized into an accordion of groups that can be expanded and toggled individually, with the option to create a new tag or group on the fly if nothing existing fits.' },
                  { type: 'imageRow', images: [
                    { src: '/images/tempo-ml-upload-type.png', caption: 'Users can upload multiple thumbnail images to create a carousel that shows different styles and options' },
                    { src: '/images/tempo-ml-upload-content.png', caption: 'Adding suggested social copy allows users to copy with a single click and paste into their posts' },
                    { src: '/images/tempo-ml-upload-resources.png', caption: 'Users can select multiple tags for any asset to make it easier to find' },
                  ] },
                  { type: 'featureRowLeft', src: '/images/tempo-ml-resource-links.png', alt: 'Resource Links', subhead: 'Resource Links', body: 'Marketing pastes in the actual resource links for an asset, with a Canva Resource toggle that adds a small Canva icon to the link so LOs know at a glance it\'s an editable template.' },
                  { type: 'featureRowLeft', src: '/images/tempo-ml-scheduling.png', alt: 'Asset Scheduling', subhead: 'Asset Scheduling', body: 'Assets go live immediately by default, but marketing can schedule a future go-live date instead. Until then, the asset stays visible to admins only, invisible to regular users.' },
                  { type: 'featureRowLeft', src: '/images/tempo-ml-expiration.png', alt: 'Asset Expiration', subhead: 'Asset Expiration', body: 'An optional expiration date automatically removes an asset from the library once it passes, keeping content current without manual cleanup. Admins can still access expired assets later if needed.' },
                  { type: 'pullQuote', content: 'Putting it to the test' },
                  { type: 'richText', segments: [
                    { text: 'To validate the new flow, I tested it against the old upload process with members of the marketing team. On average, upload time per asset ' },
                    { text: 'dropped from roughly 2.5 minutes to about 20 seconds', bold: true },
                    { text: ', a big enough gap that migrating the full library of 500+ existing assets took only about two weeks.' },
                  ] },
                  { type: 'text', content: 'The impact showed up on the LO side too. In the first quarter post-launch, 106 unique users generated nearly 1,930 content views and almost 1,200 template link clicks, numbers that grew the very next quarter to 136 users, over 2,000 views, and more than 1,250 link clicks. Just as telling, the steady stream of "help me find X" emails to marketing largely disappeared, with the requests still coming in almost entirely from new LOs who hadn\'t yet been onboarded to Tempo.' },
                ],
              },
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
                  {problem.blocks ? (
                    problem.blocks.map((block, i) =>
                      block.type === 'pullQuote'
                        ? <p key={i} className={styles.pullQuote}>{block.content}</p>
                        : block.type === 'subhead'
                          ? <h4 key={i} className={styles.miniSubhead}>{block.content}</h4>
                          : block.type === 'goals'
                            ? <>
                                <div key={`intro-${i}`} className={styles.body_text}><p>{block.intro}</p></div>
                                <ul key={`list-${i}`} className={styles.checklist}>{block.items.map((g, gi) => <li key={gi}>{g}</li>)}</ul>
                              </>
                            : <div key={i} className={styles.body_text}><p>{block.content}</p></div>
                    )
                  ) : (
                    <>
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
                    </>
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
                          : block.type === 'stageTimeline'
                            ? <div key={i} className={styles.stageTimeline}>
                                <span className={styles.stageTimelineTitle}>Lead Expiration Deadlines For Each Tracker Stage</span>
                                <div className={styles.stageTable}>
                                  <div className={styles.stageTableHeader}>
                                    {block.stages.map((stage, si) => (
                                      <span key={si}>{stage.label}</span>
                                    ))}
                                  </div>
                                  <div className={styles.stageTableRow}>
                                    {block.stages.map((stage, si) => (
                                      <span key={si}>{stage.days} days</span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            : block.type === 'filterChart'
                              ? <div key={i} className={styles.filterChartWrapper}>
                                  <span className={styles.stageTimelineTitle}>Asset Filter & Organizational Breakdown</span>
                                  <div className={styles.filterChart}>
                                  {block.categories.map((cat, ci) => (
                                    <div key={ci} className={styles.filterCategory}>
                                      <div className={styles.filterCategoryTitle}>{cat.title}</div>
                                      <div className={styles.filterTags}>
                                        {cat.tags.map((tag, ti) => (
                                          <span key={ti} className={styles.filterTag}>{tag}</span>
                                        ))}
                                      </div>
                                    </div>
                                  ))}
                                  </div>
                                </div>
                            : block.type === 'imageBlurb'
                            ? <div key={i} className={`${styles.featureRow} ${styles.featureRowWide}`}>
                                <img src={block.src} alt={block.alt} className={styles.featureImg} onClick={() => openLightbox(block.src, block.alt)} />
                                <div className={styles.featureInfo}>
                                  <p className={styles.featureText} style={{ color: '#94a3b8' }}>{block.blurb}</p>
                                </div>
                              </div>
                            : block.type === 'scoreChart'
                            ? <div key={i} className={styles.scoreChart}>
                                {block.groups.map((group, gi) => (
                                  <div key={gi} className={styles.scoreChartGroup}>
                                    <div className={styles.scoreChartGroupTitle}>{group.title}</div>
                                    {group.items.map((item, ii) => (
                                      <div key={ii} className={styles.scoreChartRow}>
                                        <span className={styles.scoreChartLabel}>{item.label}</span>
                                        <span className={styles.scoreChartPts}>
                                          {block.suffix && (
                                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                                            </svg>
                                          )}
                                          {item.pts}{block.suffix || 'pts'}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                ))}
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
                          ? <img key={i} src={block.src} alt={block.alt} className={`${styles.featureImg} ${styles.standaloneImg}${block.small ? ` ${styles.standaloneImgSmall}` : ''}`} onClick={() => openLightbox(block.src, block.alt)} />
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
                                      ? <img src={block.src} alt={block.alt} className={`${styles.featureImg}${block.transparent ? ` ${styles.featureImgTransparent}` : ''}`} onClick={() => openLightbox(block.src, block.alt)} />
                                      : <div className={styles.placeholder} />
                                    }
                                    <div className={styles.featureInfo}>
                                      {block.subhead && <span className={styles.featureTitle}>{block.subhead}</span>}
                                      {block.largeBody
                                        ? <div className={styles.body_text}><p>{block.body}</p></div>
                                        : <p className={styles.featureText}>{block.body}</p>
                                      }
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
                                            : rb.type === 'subhead'
                                              ? <h4 key={ri} className={styles.miniSubhead} style={{ marginTop: '0.75rem' }}>{rb.content}</h4>
                                              : rb.type === 'image'
                                                ? <img key={ri} src={rb.src} alt={rb.alt} style={{ marginTop: '0.5rem', width: rb.width || '200px', height: rb.maxHeight || 'auto', maxHeight: rb.maxHeight, objectFit: rb.maxHeight ? 'cover' : undefined, objectPosition: rb.maxHeight ? 'top' : undefined, display: 'block', borderRadius: '12px' }} onClick={() => openLightbox(rb.src, rb.alt)} />
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
                                    {block.images.map((item, ii) => {
                                      const src = typeof item === 'string' ? item : item?.src
                                      const caption = typeof item === 'object' && item?.caption
                                      return (
                                        <div key={ii} className={styles.imageRowCol}>
                                          <div className={styles.imageRowImgWrap}>
                                            {src
                                              ? <img src={src} alt={caption || `Image ${ii + 1}`} className={styles.imageRowImg} onClick={() => openLightbox(src, caption || `Image ${ii + 1}`)} />
                                              : <div className={styles.imageRowPlaceholder} />
                                            }
                                          </div>
                                          {caption && <p className={styles.imageRowCaption}>{caption}</p>}
                                        </div>
                                      )
                                    })}
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
                                      {block.src && <img src={block.src} alt={block.alt} className={styles.featureImgRightMobile} onClick={() => openLightbox(block.src, block.alt)} />}
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
                                : block.type === 'richText'
                                  ? <div key={i} className={styles.body_text}><p>{block.segments.map((seg, si) => seg.bold ? <strong key={si}>{seg.text}</strong> : seg.text)}</p></div>
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
