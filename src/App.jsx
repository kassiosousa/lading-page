import Header from './components/header'
import Intro from './components/introduction'
import About from './components/about'
import Work from './components/work'
import Contact from './components/contact'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/footer'

function App() {
  return (
    <div className="font-sans text-white">
      <Header />
      <main>
        <Intro />
        <About />
        <Work />
        <Contact />
        <WhatsAppButton />
      </main>
      <Footer />
    </div>
  )
}

export default App
