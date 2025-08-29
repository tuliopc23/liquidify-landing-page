import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-system-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-apple-blue rounded-lg flex items-center justify-center">
              <i className="bi bi-droplet-fill text-white text-sm"></i>
            </div>
            <span className="font-inter font-semibold text-xl text-system-gray-900">LiqUIdify</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#components" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Components</a>
            <a href="#features" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Features</a>
            <a href="#docs" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Documentation</a>
            <a 
              href="https://github.com/tuliopc23/LiqUIdify" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 font-inter text-system-gray-700 hover:text-apple-blue transition-colors"
            >
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
            <button className="apple-button text-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} text-xl text-system-gray-900`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden apple-card mt-2 p-4">
            <div className="flex flex-col space-y-4">
              <a href="#components" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Components</a>
              <a href="#features" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Features</a>
              <a href="#docs" className="font-inter text-system-gray-700 hover:text-apple-blue transition-colors">Documentation</a>
              <a 
                href="https://github.com/tuliopc23/LiqUIdify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 font-inter text-system-gray-700 hover:text-apple-blue transition-colors"
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>
              <button className="apple-button text-sm w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
