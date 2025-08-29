import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-system-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-apple-blue rounded-lg flex items-center justify-center">
                <i className="bi bi-droplet-fill text-white text-sm"></i>
              </div>
              <span className="font-inter font-semibold text-xl text-system-gray-900">
                LiqUIdify
              </span>
            </div>
            <p className="font-inter text-system-gray-600 max-w-md mb-6 text-sm leading-relaxed">
              Bringing Apple's revolutionary Liquid Glass design language to
              React. Build beautiful, accessible interfaces with 60+ premium
              components.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/tuliopc23/LiqUIdify"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-system-gray-200 rounded-lg flex items-center justify-center hover:bg-system-gray-300 transition-colors"
              >
                <i className="bi bi-github text-system-gray-700"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-system-gray-200 rounded-lg flex items-center justify-center hover:bg-system-gray-300 transition-colors"
              >
                <i className="bi bi-twitter text-system-gray-700"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-inter font-medium text-system-gray-900 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Playground
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-medium text-system-gray-900 mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  GitHub Issues
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Discussions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
                >
                  Contributing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-system-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="font-inter text-system-gray-600 text-sm">
            © 2024 LiqUIdify. Built with care for the React community.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
            >
              Privacy
            </a>
            <a
              href="#"
              className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
            >
              Terms
            </a>
            <a
              href="#"
              className="font-inter text-system-gray-600 hover:text-apple-blue transition-colors text-sm"
            >
              MIT License
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
