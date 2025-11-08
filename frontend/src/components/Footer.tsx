import React from 'react'

const Footer = () => {
  return (
        <footer className="relative z-10 bg-amber-100/80 backdrop-blur-md border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
                Terms & Conditions
              </a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-gray-600 hover:text-red-500 transition-colors duration-300">
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500 text-sm font-light">
              Made with ❤️ by Angshuman
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer