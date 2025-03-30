export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">AppNesto</h3>
            <nav className="flex justify-center space-x-6 mb-4">
              <a href="#apps" className="hover:text-white transition-colors">
                Apps
              </a>
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </nav>
          </div>
          <p className="text-sm">
            © 2024 AppNesto. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }