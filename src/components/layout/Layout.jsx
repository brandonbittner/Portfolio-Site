import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import styles from './Layout.module.css'

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      {pathname !== '/about' && <Footer />}
    </div>
  )
}
