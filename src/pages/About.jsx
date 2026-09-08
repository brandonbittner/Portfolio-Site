import { useState, useEffect } from 'react'
import styles from './About.module.css'

const philosophies = [
  {
    num: '01',
    title: 'Every screen is part of the larger system.',
    body: 'A solution should connect to everything around it, so the product works within the larger ecosystem, not just on its own.',
  },
  {
    num: '02',
    title: 'The best insights come from asking.',
    body: 'Hearing how someone actually experiences a problem, in their own words, shapes better design decisions.',
  },
  {
    num: '03',
    title: 'Great design is a team sport.',
    body: 'Collaborating with other disciplines early and often throughout the process leads to stronger outcomes.',
  },
]

const hobbies = [
  { title: 'Hobby one', body: 'A line or two about this interest.' },
  { title: 'Hobby two', body: 'A line or two about this interest.' },
  { title: 'Hobby three', body: 'A line or two about this interest.' },
]

const hobbyImgs = [
  '/images/hobby-1.jpg',
  '/images/hobby-2.jpg',
  '/images/hobby-3.jpg',
  '/images/hobby-4.jpg',
]

export default function About() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(i => (i + 1) % hobbyImgs.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.page}>

      {/* Section 1 — Intro */}
      <section className={styles.introSection}>
        <div className={styles.introCard}>
          <div className={styles.introLeft}>
            <h1 className={styles.introName}>I'm Brandon, a product designer & professional problem solver.</h1>
            <p className={styles.introPara}>
              I'm a UX & Product Designer who finds the most fun working inside of complex systems & developing solutions that simplifies the complicated and makes user's day-to-day lives just a little easier.
            </p>
            <p className={styles.introPara}>
              My path started in graphic design, but I kept finding myself most drawn to digital experiences and systems-based work that was bigger than a single artifact. I quickly became passionate about creating living, breathing systems that evolve over time and users return to every day. That pull led me into product design, where I find endless joy in discovering user pain points and creating elegant solutions to solve them.
            </p>
            <p className={styles.introPara}>
              I never back down from complexity. I believe design is one of the most powerful tools we have for shaping how people experience the world, and that no point of friction is too small to be worth solving.
            </p>
          </div>
          <div className={styles.introRight}>
            <picture>
              <source media="(max-width: 639px)" srcSet="/images/brandon-hero-mobile.jpg" />
              <img src="/images/brandon-hero.jpeg" alt="Brandon Bittner" className={styles.photo} />
            </picture>
            <div className={styles.contactList}>
              <a href="mailto:brandonbittner@outlook.com" className={styles.contactRow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5FA7FF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className={styles.contactEmail}>brandonbittner@outlook.com</span>
              </a>
              <div className={styles.contactDivider} />
              <div className={styles.contactRow}>
                <span className={styles.contactText}>Based in</span><span className={styles.contactEmail}> Greater Philadelphia Area</span>
              </div>
              <div className={styles.contactDivider} />
              <div className={styles.contactRow}>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5FA7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="12" y1="18" x2="12" y2="12"/>
                    <line x1="9" y1="15" x2="15" y2="15"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections 2 & 3 — dark */}
      <div className={styles.darkArea} data-nav-dark>

        {/* Section 2 — Design Philosophies */}
        <section className={styles.darkSection}>
          <h2 className={styles.darkSectionTitle}>What Guides My Work</h2>
          <div className={styles.philosophyGrid}>
            {philosophies.map(item => (
              <div key={item.num} className={styles.darkCard}>
                <span className={styles.philosophyNum}>{item.num}</span>
                <h3 className={styles.darkCardTitle}>{item.title}</h3>
                <p className={styles.darkCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 — Hobbies */}
        <section className={styles.darkSection}>
          <div className={styles.hobbiesLayout}>
            <div className={styles.hobbiesLeft}>
              <h2 className={styles.hobbiesTitle}>Outside of work</h2>
              <p className={styles.hobbiesBody}>When I'm not designing, you'll probably find me out on a run (<a href="https://www.strava.com/athletes/148598347" target="_blank" rel="noopener noreferrer" className={styles.stravaLink}>connect with me on Strava!</a>), enjoying a summer night at Citizen's Bank Park, hitting the links, or hanging out at home with my 2 cats, Dude & Stella.</p>
            </div>
            <div className={styles.hobbiesRight}>
              {/* mobile-only: large focused image */}
              <div className={styles.hobbyPreview}>
                <img src={hobbyImgs[activeIdx]} alt="" className={styles.hobbyPreviewImg} />
              </div>
              {/* thumbnail strip — always shows all 4 */}
              {hobbyImgs.map((src, i) => (
                <div
                  key={src}
                  className={`${styles.hobbySlide} ${i === activeIdx ? styles.hobbySlideActive : ''}`}
                  onClick={() => setActiveIdx(i)}
                >
                  <img src={src} alt="" className={styles.hobbyImg} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className={styles.darkFooter}>
          <p className={styles.darkFooterCopy}>&copy; {new Date().getFullYear()} Brandon Bittner. All rights reserved.</p>
        </footer>

      </div>

    </div>
  )
}
