import React from 'react';

const Documentation: React.FC = () => {
  return (
    <section id="docs" className="py-20 bg-white relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-apple-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-apple-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-system-gray-900 mb-4">
            Complete Documentation
          </h2>
          <p className="font-inter text-lg text-system-gray-600 max-w-2xl mx-auto">
            Everything you need to build beautiful applications with LiqUIdify.
          </p>
        </div>

        {/* Enhanced Installation Guide */}
        <div className="apple-card-glass p-8 lg:p-12 mb-8 bg-gradient-to-br from-white/90 to-white/70">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-inter font-semibold text-xl text-system-gray-900 mb-6 text-center">
              Get Started in Seconds
            </h3>
            
            <div className="space-y-4">
              <div className="bg-system-gray-900 rounded-xl p-6 overflow-x-auto shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-inter text-system-gray-400 text-sm ml-4">Terminal</span>
                </div>
                <code className="font-mono text-apple-green text-sm">
                  npm install liquidify-react
                </code>
              </div>

              <div className="bg-system-gray-900 rounded-xl p-6 overflow-x-auto shadow-xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-inter text-system-gray-400 text-sm ml-4">App.tsx</span>
                </div>
                <pre className="font-mono text-apple-blue text-sm">
{`import { Button, Card } from 'liquidify-react';

function App() {
  return (
    <Card variant="glass">
      <Button variant="liquid">
        Hello LiqUIdify!
      </Button>
    </Card>
  );
}`}
                </pre>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a 
                href="https://github.com/tuliopc23/LiqUIdify" 
                target="_blank" 
                rel="noopener noreferrer"
                className="apple-button shadow-lg hover:shadow-xl"
              >
                <i className="bi bi-github mr-2"></i>
                View Documentation
              </a>
              <a 
                href="https://developer.apple.com/documentation/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="apple-button-secondary shadow-lg hover:shadow-xl"
              >
                <i className="bi bi-apple mr-2"></i>
                Apple HIG Reference
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Quick Start', icon: 'bi-rocket-takeoff', link: '#installation', color: 'apple-blue' },
            { title: 'Component API', icon: 'bi-book', link: '#api', color: 'apple-purple' },
            { title: 'Design Tokens', icon: 'bi-palette', link: '#tokens', color: 'apple-green' },
            { title: 'Examples', icon: 'bi-code-square', link: '#examples', color: 'apple-orange' }
          ].map((item, index) => (
            <a 
              key={index}
              href={item.link}
              className="apple-card-glass p-6 text-center hover:scale-105 transition-all duration-300 group bg-gradient-to-br from-white/80 to-white/60"
            >
              <div className={`w-12 h-12 bg-${item.color}/10 rounded-xl mx-auto mb-3 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                <i className={`${item.icon} text-${item.color} text-lg`}></i>
              </div>
              <h4 className="font-inter font-medium text-system-gray-900 text-sm">
                {item.title}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
