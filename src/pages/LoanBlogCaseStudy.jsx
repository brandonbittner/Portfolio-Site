import { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import styles from './CaseStudy.module.css'
import LaptopScrollSection from '../components/LaptopScrollSection'

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
          <img src="/images/loan-blog-hero.jpg" alt="Loan Product Blog Website hero" className={styles.splashImg} />
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
                  onClick={() => openLightbox('/images/loan-blog-draft-1.jpg', 'Initial loan product guideline draft')}
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
                  onClick={() => openLightbox('/images/loan-blog-draft-2.jpg', 'Edited loan product guideline draft')}
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
                <img src="/images/loan-blog-cms-1.png" alt="CMS structure screenshot 1" className={styles.iterationImg} onClick={() => openLightbox('/images/loan-blog-cms-1.png', 'CMS structure screenshot 1')} />
                <img src="/images/loan-blog-cms-2.png" alt="CMS structure screenshot 2" className={styles.iterationImg} onClick={() => openLightbox('/images/loan-blog-cms-2.png', 'CMS structure screenshot 2')} />
              </div>
              <div className={styles.placeholderCaptionsRow}>
                <p className={styles.caption}>Calculator CMS module that let's the user select the calculator type, color theme, or no calculator at all</p>
                <p className={styles.caption}>Program comparison table module allows the user to select criterias to compare programs by and what programs to compare them against</p>
              </div>
            </div>
          </section>

          {/* ── Solution ───────────────────────────────────────── */}
          <section id="solution" className={styles.section}>
            <h2 className={styles.sectionLabel}>Solution</h2>
            <p className={styles.pullQuote}>A repeatable webpage structure that adapts to any loan program</p>
            <LaptopScrollSection
              laptopSrc="/images/laptopmockup.png"
              pageSrc="/images/30yr-conventional.jpg"
              pageAlt="Conventional 30-year fixed mortgage page"
            />
            <div className={styles.mobileScreensRow}>
              <img src="/images/loan-blog-mobile-1.jpg" alt="Mobile screen 1" className={styles.mobileScreen} onClick={() => openLightbox('/images/loan-blog-mobile-1.jpg', 'Mobile screen 1')} />
              <img src="/images/loan-blog-mobile-2.jpg" alt="Mobile screen 2" className={styles.mobileScreen} onClick={() => openLightbox('/images/loan-blog-mobile-2.jpg', 'Mobile screen 2')} />
              <img src="/images/loan-blog-mobile-3.jpg" alt="Mobile screen 3" className={styles.mobileScreen} onClick={() => openLightbox('/images/loan-blog-mobile-3.jpg', 'Mobile screen 3')} />
              <img src="/images/loan-blog-mobile-4.jpg" alt="Mobile screen 4" className={styles.mobileScreen} onClick={() => openLightbox('/images/loan-blog-mobile-4.jpg', 'Mobile screen 4')} />
            </div>
            <div className={styles.body_text}>
              <p>The result was a browsable landing page listing UMortgage's full loan product lineup, with each program built out on its own dedicated page using the standardized structure the team designed and validated. Every page follows the same core shape, overview, value props, requirements, and how to apply, while still flexing to fit what each individual program actually needs.</p>
            </div>
            <div className={styles.featureRow}>
              <div className={styles.body_text}>
                <p>Alongside the individual product pages, the team also had to design a navigation page that let users actually find their way through the full lineup. It uses a tagging system to categorize each loan product, a search feature for finding a specific program directly, and loan type filtering so users can narrow the list down to the kind of loan they're looking for.</p>
              </div>
              <img
                src="/images/loan-blog-landing-page.jpg"
                alt="Loan product landing page"
                className={styles.featureImg}
                onClick={() => openLightbox('/images/loan-blog-landing-page.jpg', 'Loan product landing page')}
              />
            </div>
            <p className={styles.pullQuote} style={{ marginBottom: '2rem' }}>Built to Flex Where It Needs to</p>
            <div className={styles.featureList}>
              <div className={styles.featureRow}>
                <img
                  src="/images/loan-blog-comparison-table.png"
                  alt="Comparison table feature"
                  className={styles.featureImg}
                  onClick={() => openLightbox('/images/loan-blog-comparison-table.png', 'Comparison table feature')}
                />
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Comparison Tables</h3>
                  <p className={styles.featureText}>A dynamic table lets users stack multiple loan programs side by side, pulling in the relevant details for whichever programs are selected so borrowers can compare their options directly instead of flipping between pages.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <img
                  src="/images/loan-blog-calculator.png"
                  alt="Mortgage calculator feature"
                  className={styles.featureImg}
                  onClick={() => openLightbox('/images/loan-blog-calculator.png', 'Mortgage calculator feature')}
                />
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Mortgage Calculators</h3>
                  <p className={styles.featureText}>Depending on the program, a page might surface a refinance-savings calculator, a monthly-payment calculator, or no calculator at all, toggled based on what actually makes sense for that loan type.</p>
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureDualImg}>
                  <img
                    src="/images/loan-blog-content-container-1.png"
                    alt="Content container example 1"
                    className={styles.featureImg}
                    onClick={() => openLightbox('/images/loan-blog-content-container-1.png', 'Content container example 1')}
                  />
                  <img
                    src="/images/loan-blog-content-container-2.png"
                    alt="Content container example 2"
                    className={styles.featureImg}
                    onClick={() => openLightbox('/images/loan-blog-content-container-2.png', 'Content container example 2')}
                  />
                </div>
                <div className={styles.featureInfo}>
                  <h3 className={styles.featureTitle}>Content Containers</h3>
                  <p className={styles.featureText}>Three containers throughout each page (used for things like value props, requirements, and FAQs) support dynamic icon selection and a layout that adapts to however many points our copywriter wants to include for a given program.</p>
                </div>
              </div>
            </div>
            <p className={styles.pullQuote}>Built for Search & AI Visibility</p>
            <div className={styles.body_text}>
              <p>Beyond the page structure itself, two more pieces were built specifically to support the SEO and AI-visibility goals from Research. Our copywriter did extensive research into SEO around mortgage-related keywords, specifically the terms and phrasing tied to individual loan programs, and used that research to shape how each page's content was written and structured.</p>
              <p>On the AI side, each page's content was also paired with a structured backend markdown file that fed into an AI-readable data source, helping large language models pull accurate program information directly from UMortgage's content when generating responses to mortgage-related questions.</p>
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
                  <h3 className={styles.learnedTitle}>Designing Adaptable Systems</h3>
                  <p className={styles.learnedText}>This project pushed me to think in terms of a flexible content system rather than a single page, building something that could hold whatever a copywriter needed to say about any program, not just the four we tested it against.</p>
                </div>
              </div>

              <div className={styles.learnedCard}>
                <div className={styles.learnedIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                    <path d="m21 3 1 11h-2" />
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                    <path d="M3 4h8" />
                  </svg>
                </div>
                <div className={styles.learnedContent}>
                  <h3 className={styles.learnedTitle}>Cross-Disciplinary Collaboration</h3>
                  <p className={styles.learnedText}>Being involved with our copywriter and data engineer from the very start was what made a system this flexible possible in the first place. I'm not an expert in writing or backend systems, so building this out on my own simply wasn't realistic, it was the combination of all three of our areas of expertise that made the final system as robust as it is.</p>
                </div>
              </div>

              <div className={styles.learnedCard}>
                <div className={styles.learnedIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </div>
                <div className={styles.learnedContent}>
                  <h3 className={styles.learnedTitle}>Content strategy beyond visual design</h3>
                  <p className={styles.learnedText}>Being close to the SEO and AI-visibility side of this project gave me a better sense of how content strategy and structure affect discoverability, not just how a page looks or functions.</p>
                </div>
              </div>
            </div>

            <p className={styles.pullQuote}>Where I'd Push Further</p>
            <div className={styles.body_text}>
              <p>If I could revisit this project, I'd want to put more structure around measuring its impact from the start, tracking SEO performance and AI-response visibility over time, rather than shipping the system without a clear way to see which decisions had the biggest impact.</p>
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
