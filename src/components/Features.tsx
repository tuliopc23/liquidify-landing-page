import React from "react";

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-system-gray-200 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-system-gray-200 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-system-gray-900 mb-4">
            Dive into LiqUIdify
          </h2>
          <p className="font-sans text-lg text-system-gray-600 max-w-2xl mx-auto">
            Built with meticulous attention to detail, every component embodies
            Apple's design philosophy.
          </p>
        </div>

        {/* Enhanced Main Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Blue Card - Enhanced */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-apple-blue to-apple-blue/90 p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <i className="bi bi-apple text-white text-2xl"></i>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-sans">
                  New overview
                </span>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2">
                Explore the new design principles
              </h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Learn how to design and develop beautiful interfaces that
                leverage Liquid Glass.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white text-sm font-sans hover:text-white/80 transition-colors"
              >
                Read overview <i className="bi bi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* Gray Card - Enhanced */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-system-gray-100 to-system-gray-50 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-system-gray-200/50 rounded-full -translate-y-16 translate-x-16"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-system-gray-200 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <i className="bi bi-droplet-half text-system-gray-600 text-2xl"></i>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-system-gray-600 text-sm font-sans">
                  New article
                </span>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2 text-system-gray-900">
                Adopting Liquid Glass
              </h3>
              <p className="text-system-gray-600 text-sm mb-4 leading-relaxed">
                Find out how to bring the new material to your app.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-apple-blue text-sm font-sans hover:text-apple-blue/80 transition-colors"
              >
                Read article <i className="bi bi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>

          {/* Purple Card - Enhanced */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-apple-purple to-apple-purple/90 p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>

            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <i className="bi bi-code-slash text-white text-2xl"></i>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-white/80 text-sm font-sans">
                  New sample
                </span>
              </div>
              <h3 className="font-sans font-semibold text-xl mb-2">
                Building with Liquid Glass
              </h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Enhance your app experience with system-provided and custom
                Liquid Glass.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-white text-sm font-sans hover:text-white/80 transition-colors"
              >
                View sample code <i className="bi bi-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="apple-card-glass p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="font-sans font-bold text-3xl lg:text-4xl text-system-gray-900 mb-2 group-hover:text-apple-blue transition-colors duration-300">
                60+
              </div>
              <div className="font-sans text-system-gray-600 text-sm">
                Components
              </div>
            </div>
            <div className="group">
              <div className="font-sans font-bold text-3xl lg:text-4xl text-system-gray-900 mb-2 group-hover:text-apple-purple transition-colors duration-300">
                100%
              </div>
              <div className="font-sans text-system-gray-600 text-sm">
                TypeScript
              </div>
            </div>
            <div className="group">
              <div className="font-sans font-bold text-3xl lg:text-4xl text-system-gray-900 mb-2 group-hover:text-apple-green transition-colors duration-300">
                A11Y
              </div>
              <div className="font-sans text-system-gray-600 text-sm">
                Accessible
              </div>
            </div>
            <div className="group">
              <div className="font-sans font-bold text-3xl lg:text-4xl text-system-gray-900 mb-2 group-hover:text-apple-orange transition-colors duration-300">
                MIT
              </div>
              <div className="font-sans text-system-gray-600 text-sm">
                License
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
