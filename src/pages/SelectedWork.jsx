import { useCallback, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './SelectedWork.module.css'
import { projects } from '../data/projects'
import Carousel from '../components/Carousel'

export default function SelectedWork() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug && p.section === 'selected-work')
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox])

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

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero} data-nav-dark>
        <div className={styles.heroImage}>
          {project.coverImage ? (
            <img src={project.coverImage} alt={project.title} className={styles.heroImg} />
          ) : (
            <div className={styles.heroPlaceholder} />
          )}
        </div>

        <div className={styles.heroContent}>
          <div className={styles.tagRow}>
            <span className={styles.showcaseTag}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Showcase
            </span>
            {project.employer && (
              <span className={styles.employer}>{project.employer}</span>
            )}
          </div>
          <h1 className={styles.title}>{project.title}</h1>
          {project.overview && (
            <p className={styles.overview}>{project.overview}</p>
          )}
          {project.tags?.length > 0 && (
            <p className={styles.typeTags}>{project.tags.join(', ')}</p>
          )}
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      {project.workSections?.length > 0 && (
        <div className={styles.body}>
          {project.workSections.map((section) => (
            <div key={section.title} className={styles.workSection}>
              <div className={styles.sectionLabel}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
              </div>
              <div className={styles.sectionContent}>
                {(section.groups ?? [{ items: section.items }]).map((group, gi) => (
                  <div key={gi} className={styles.group}>
                    {group.subhead && <p className={styles.groupSubhead}>{group.subhead}</p>}
                    <div className={group.layout === 'logos' ? styles.logosGrid : styles.sectionItems}>
                      {group.items.map((item, i) => (
                        item.type === 'pair'
                          ? (
                            <div key={i} className={styles.imagePair}>
                              {item.images.map((img, j) => (
                                <div key={j} className={styles.imagePairCol} style={{ flex: img.aspectRatio }}>
                                  <div className={styles.itemImage}>
                                    <img
                                      src={img.image}
                                      alt=""
                                      className={`${styles.itemImg} ${styles.itemImgClickable}`}
                                      onClick={() => openLightbox(img.image, '')}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          )
                          : item.type === 'carousel'
                          ? (
                            <div
                              key={i}
                              className={`${styles.carouselItem} ${item.fullWidth ? styles.carouselFullWidth : ''}`}
                              style={item.maxWidth ? { maxWidth: item.maxWidth } : undefined}
                            >
                              {item.label && <p className={styles.itemLabel}>{item.label}</p>}
                              <Carousel slides={item.slides} onImageClick={openLightbox} />
                            </div>
                          )
                          : (
                            <figure key={i} className={styles.item}>
                              <div className={styles.itemImage}>
                                {item.image
                                  ? (
                                    <img
                                      src={item.image}
                                      alt={group.subhead}
                                      className={`${styles.itemImg} ${styles.itemImgClickable}`}
                                      onClick={() => openLightbox(item.image, group.subhead)}
                                    />
                                  )
                                  : <div className={styles.itemPlaceholder} />
                                }
                              </div>
                            </figure>
                          )
                      ))}
                    </div>
                    {gi < (section.groups?.length ?? 1) - 1 && <hr className={styles.groupDivider} />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div className={styles.lightboxInner} onClick={e => e.stopPropagation()}>
            <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxImg} />
            {lightbox.alt && <p className={styles.lightboxLabel}>{lightbox.alt}</p>}
          </div>
        </div>
      )}

    </article>
  )
}
