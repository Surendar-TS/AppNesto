// src/components/Navbar.jsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenu, HiX } from 'react-icons/hi' // Menu icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Mobile menu items data
  const menuItems = [
    { to: 'apps', text: 'Apps' },
    { to: 'features', text: 'Features' },
    { to: 'about', text: 'About' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-600 cursor-pointer"
          >
            AppNesto
          </motion.div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to} text={item.text} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Mobile menu"
          >
            {isOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg py-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-3 text-gray-600 hover:bg-gray-50 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.nav>
  )
}

// Reusable NavLink component
function NavLink({ to, text }) {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors"
    >
      {text}
    </Link>
  )
}