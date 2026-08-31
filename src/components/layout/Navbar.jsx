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
      const darkSection = document.querySelector('[data-nav-dark]')
      if (!darkSection) { setIsDark(false); return }
      setIsDark(darkSection.getBoundingClientRect().bottom > NAV_HEIGHT)
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

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${styles.link} ${isDark ? styles.linkDark : ''} ${isActive ? styles.active : ''}`
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
