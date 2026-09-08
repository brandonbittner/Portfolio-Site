import { useEffect, useLayoutEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const [isDark, setIsDark] = useState(false)
  const [ready, setReady] = useState(false)

  useLayoutEffect(() => {
    const NAV_HEIGHT = 64

    const checkTheme = () => {
      const darkSections = document.querySelectorAll('[data-nav-dark]')
      const isOverDark = Array.from(darkSections).some(el => {
        const { top, bottom } = el.getBoundingClientRect()
        return top < NAV_HEIGHT && bottom > 0
      })
      setIsDark(isOverDark)
    }

    checkTheme()
    window.addEventListener('scroll', checkTheme, { passive: true })
    return () => window.removeEventListener('scroll', checkTheme)
  }, [pathname])

  useEffect(() => { setReady(true) }, [])

  return (
    <header className={`${styles.header} ${isDark ? styles.headerDark : ''} ${ready ? styles.headerReady : ''}`}>
      <NavLink to="/" className={`${styles.logo} ${isDark ? styles.logoDark : ''}`}>
        Brandon Bittner
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.link} ${isDark ? styles.linkDark : ''} ${isActive ? styles.active : ''}`
          }
        >
          Home
        </NavLink>

        {/* Work scrolls to the #work section on the home page */}
        <a
          href="/#work"
          className={`${styles.link} ${isDark ? styles.linkDark : ''}`}
        >
          Work
        </a>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.link} ${isDark ? styles.linkDark : ''} ${isActive ? styles.active : ''}`
          }
        >
          About
        </NavLink>

      </nav>
    </header>
  )
}
