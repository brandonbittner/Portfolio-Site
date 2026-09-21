import { useState } from 'react'
import styles from './Carousel.module.css'

export default function Carousel({ slides, caption, onImageClick }) {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)

  return (
    <figure className={styles.wrapper}>
      <div className={styles.track}>
        <img
          src={slides[index]}
          alt={`${caption ? caption + ' — ' : ''}slide ${index + 1}`}
          className={`${styles.slide} ${onImageClick ? styles.slideClickable : ''}`}
          onClick={() => onImageClick?.(slides[index], caption)}
        />

        {slides.length > 1 && (
          <>
            <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous slide">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next slide">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}
