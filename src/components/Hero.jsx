import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome to 
            <span className="block mt-4 text-blue-200">
              <TypeAnimation
                sequence={[
                  'AppNesto',
                  2000,
                  'Productivity Tools',
                  2000,
                  'Fun Apps',
                  2000,
                ]}
                speed={25}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Discover simple, focused web applications for your daily needs
          </p>
        </motion.div>
      </div>
    </section>
  )
}