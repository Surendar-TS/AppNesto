import { featuresData } from '../data/featuresData'
import FeatureCard from './FeatureCard'
import { motion } from 'framer-motion'

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Choose AppNesto?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}