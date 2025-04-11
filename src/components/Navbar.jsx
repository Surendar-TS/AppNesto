// src/components/Navbar.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
// Import Link from react-scroll
import { Link, animateScroll as scroll } from 'react-scroll'; // Import animateScroll
import { HiMenu, HiX } from 'react-icons/hi';
// Make sure this path is correct relative to Navbar.jsx or from your public folder
import appNestoLogo from '/appnesto_icon.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { to: 'apps', text: 'Apps' },
    { to: 'features', text: 'Features' },
    { to: 'about', text: 'About' },
  ];

  // --- Function to scroll to top ---
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500, // Adjust scroll duration
      smooth: 'easeInOutQuad', // Adjust easing
    });
    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">

          {/* === Modified Logo/Brand Link === */}
          {/* Use a button or div with onClick to trigger scroll to top */}
          <motion.div
             whileHover={{ scale: 1.05 }} // Apply hover effect here
             transition={{ type: 'spring', stiffness: 400, damping: 17 }}
             onClick={scrollToTop} // Trigger scroll function
             className="flex items-center gap-2 cursor-pointer" // Added gap-2
             role="button" // Add role for accessibility
             aria-label="Scroll to top of page"
          >
            {/* Logo Image */}
            <img
              src={appNestoLogo}
              alt="AppNesto Logo"
              className="h-8 w-auto" // Adjust size as needed (h-8 = 32px)
            />
            {/* AppNesto Text */}
            <span className="text-2xl font-bold text-blue-600">
              AppNesto
            </span>
          </motion.div>
          {/* === End Modified Logo/Brand Link === */}


          {/* Desktop Menu (Hidden on Mobile) *
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink key={item.to} to={item.to} text={item.text} />
            ))}
          </div>
          */}

          {/* Mobile Menu Button 
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu" // More descriptive label
          >
            {isOpen ? (
              <HiX className="w-6 h-6 text-gray-700" /> // Add color
            ) : (
              <HiMenu className="w-6 h-6 text-gray-700" /> // Add color
            )}
          </button>
          */}
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div // Added motion here for consistency
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden`} // Use overflow-hidden with height animation
        >
          {/* Removed extra motion.div wrapper inside */}
          <div className="bg-white rounded-lg shadow-lg py-2 mt-2"> {/* Adjusted padding/margin */}
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70} // Keep offset for section scrolling
                duration={500}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block px-6 py-3 text-gray-600 hover:bg-gray-100 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

// Reusable NavLink component (no changes needed here)
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
  );
}