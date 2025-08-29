import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Enhanced Background with iCloud-inspired elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Floating geometric elements */}
        <div
          className="floating-element w-96 h-96 bg-apple-blue top-1/4 left-1/4"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="floating-element w-80 h-80 bg-apple-purple top-1/3 right-1/4"
          style={{ animationDelay: "7s" }}
        ></div>
        <div
          className="floating-element w-64 h-64 bg-apple-teal bottom-1/4 left-1/3"
          style={{ animationDelay: "14s" }}
        ></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Enhanced hero content */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-apple-green rounded-full animate-pulse"></div>
            <span className="font-inter text-sm text-system-gray-700">
              Now available for React
            </span>
          </div>

          <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-system-gray-900 mb-6 leading-tight tracking-tight">
            Build with
            <br />
            <span className="text-apple-blue">Liquid Glass</span>
          </h1>

          <p className="font-inter text-lg sm:text-xl text-system-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            60+ opinionated React components that bring Apple's revolutionary
            Liquid Glass design language to the web. Crafted with precision
            following Apple HIG guidelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="apple-button text-base px-8 py-4 shadow-lg">
              <i className="bi bi-download mr-2"></i>
              Install LiqUIdify
            </button>
            <a
              href="https://github.com/tuliopc23/LiqUIdify"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary text-base px-8 py-4 inline-flex items-center shadow-lg"
            >
              <i className="bi bi-github mr-2"></i>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Enhanced Featured Cards with iCloud-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="apple-card-glass p-8 text-left group hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-apple-blue to-apple-blue/80 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-ui-checks text-white text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-lg text-system-gray-900 mb-3">
              Interactive Components
            </h3>
            <p className="font-inter text-system-gray-600 text-sm leading-relaxed">
              Buttons, forms, modals with liquid glass effects and smooth
              animations
            </p>
          </div>

          <div className="apple-card-glass p-8 text-left group hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-apple-purple to-apple-purple/80 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-layout-text-window-reverse text-white text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-lg text-system-gray-900 mb-3">
              Layout Systems
            </h3>
            <p className="font-inter text-system-gray-600 text-sm leading-relaxed">
              Grids, containers, and responsive layouts that adapt beautifully
            </p>
          </div>

          <div className="apple-card-glass p-8 text-left group hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-apple-green to-apple-green/80 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <i className="bi bi-palette text-white text-xl"></i>
            </div>
            <h3 className="font-inter font-semibold text-lg text-system-gray-900 mb-3">
              Design Tokens
            </h3>
            <p className="font-inter text-system-gray-600 text-sm leading-relaxed">
              Colors, typography, and spacing system following Apple guidelines
            </p>
          </div>
        </div>

        {/* Code preview snippet */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="apple-card-glass p-6 text-left">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-inter text-system-gray-500 text-sm ml-4">
                App.tsx
              </span>
            </div>
            <pre className="font-mono text-sm text-system-gray-800 overflow-x-auto">
              {`import { Button, Card } from 'liquidify-react';

<Card variant="glass">
  <Button variant="liquid">
    Hello LiqUIdify!
  </Button>
</Card>`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
