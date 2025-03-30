import { motion } from 'framer-motion'

export default function AppCard({ app }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
    >
      <div className="text-center">
        <div className="text-4xl mb-4">{app.emoji}</div>
        <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
        <p className="text-gray-600 mb-4">{app.description}</p>
        <a
          href={app.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Open App
        </a>
      </div>
    </motion.div>
  )
}