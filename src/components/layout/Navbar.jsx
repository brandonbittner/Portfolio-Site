import { NavLink, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Brandon Bittner
      </NavLink>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Home
        </NavLink>

        {/* Work scrolls to the #work section on the home page */}
        <a
          href="/#work"
          className={pathname === '/' ? `${styles.link}` : styles.link}
        >
          Work
        </a>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}
