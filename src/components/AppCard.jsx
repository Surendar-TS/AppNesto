// AppCard.jsx (Modified)

import { motion } from 'framer-motion'
// Optional: Import Link if you need specific handling for internal React Router routes
// import { Link } from 'react-router-dom';

export default function AppCard({ app }) {
  // --- Determine if the link is internal (starts with '/') or external ---
  const isInternal = app.link.startsWith('/');
  // Use a regular anchor tag for external links or simple internal links
  const WrapperTag = 'a';
  // If you were using React Router for internal links specifically:
  // const WrapperTag = isInternal ? Link : 'a';

  return (
    // Use WrapperTag ('a' in this case) as the main clickable element
    <WrapperTag
      href={app.link} // Use the link directly
      // Use 'to' prop if WrapperTag was React Router's Link for internal routes
      // to={isInternal ? app.link : undefined}
      target={!isInternal ? "_blank" : undefined} // Open external links in new tab
      rel={!isInternal ? "noopener noreferrer" : undefined}
      className="block no-underline" // Make it block and remove default link underline
    >
      {/* Apply motion, styling, and hover effects to this div */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="
          bg-white rounded-xl shadow-lg /* Base styles */
          hover:shadow-xl /* Keep or adjust hover shadow */
          transition-all duration-300 ease-in-out /* Smooth transitions */
          transform /* Enable transforms */
          hover:scale-105 /* <<< --- POP UP EFFECT --- */
          cursor-pointer /* Indicate clickability */
          p-6 /* Apply padding here */
          h-full /* Make cards take full height in grid */
          flex flex-col /* Arrange content vertically */
        "
      >
        <div className="text-center flex flex-col flex-grow"> {/* Center content, allow description to grow */}
          <div className="text-4xl mb-4">{app.emoji}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">{app.title}</h3>
          {/* Make description grow to fill space */}
          <p className="text-gray-600 mb-4 flex-grow">{app.description}</p>

          {/* --- BUTTON IS REMOVED --- */}
          {/* The entire card is now the link/button */}

        </div>
      </motion.div>
    </WrapperTag> // Close the WrapperTag ('a')
  );
}