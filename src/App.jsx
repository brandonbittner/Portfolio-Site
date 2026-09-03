import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudy from './pages/CaseStudy'
import LoanBlogCaseStudy from './pages/LoanBlogCaseStudy'
import TempoCaseStudy from './pages/TempoCaseStudy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work/loan-product-blog-website" element={<LoanBlogCaseStudy />} />
        <Route path="work/tempo" element={<TempoCaseStudy />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
