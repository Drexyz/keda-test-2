import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <main className='overflow-hidden relative flex flex-col gap-0'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
