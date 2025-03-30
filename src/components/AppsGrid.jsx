import { useState, useEffect } from 'react' // Added useEffect import
import { appsData } from '../data/appsData'
import AppCard from './AppCard'
import { motion } from 'framer-motion'
import Loader from './Loader' // Make sure to import Loader

export default function AppsGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isLoading, setIsLoading] = useState(true)

  const filteredApps = appsData.filter(app =>
    selectedCategory === 'all' ? true : app.category === selectedCategory
  )

  // Simulated loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="apps" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-8"
        >
          Explore Applications
        </motion.h2>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {['all', 'tools', 'games', 'fun'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Conditional Rendering */}
        {isLoading ? (
          <Loader />
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No apps found in this category
          </div>
        )}
      </div>
    </section>
  )
}