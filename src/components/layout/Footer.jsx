import { useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const { pathname } = useLocation()
  const isDark = pathname === '/about'

  return (
    <footer className={`${styles.footer} ${isDark ? styles.footerDark : ''}`}>
      <p className={`${styles.copy} ${isDark ? styles.copyDark : ''}`}>
        &copy; {new Date().getFullYear()} Brandon Bittner. All rights reserved.
      </p>
    </footer>
  )
}
