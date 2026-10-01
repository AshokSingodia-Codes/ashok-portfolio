import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><Experience /><Skills /><Projects /><Contact /></main>
    <Footer />
  </>)
}
