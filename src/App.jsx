import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AppsGrid from './components/AppsGrid'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20"> {/* Spacing for fixed navbar */}
        <Hero />
        <AppsGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}