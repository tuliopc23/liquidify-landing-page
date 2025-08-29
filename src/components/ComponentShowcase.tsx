import React from 'react';

const ComponentShowcase: React.FC = () => {
  const componentCategories = [
    {
      title: 'Navigation',
      description: 'Tab bars, navigation bars, and menu systems',
      components: ['TabBar', 'NavigationBar', 'Sidebar', 'Breadcrumb'],
      icon: 'bi-compass',
      color: 'apple-blue',
      bgColor: 'from-apple-blue/5 to-apple-blue/10'
    },
    {
      title: 'Input & Forms',
      description: 'Text fields, buttons, and form controls',
      components: ['TextField', 'Button', 'Switch', 'Slider'],
      icon: 'bi-ui-checks-grid',
      color: 'apple-purple',
      bgColor: 'from-apple-purple/5 to-apple-purple/10'
    },
    {
      title: 'Data Display',
      description: 'Lists, tables, and data visualization',
      components: ['List', 'Table', 'Card', 'Badge'],
      icon: 'bi-bar-chart',
      color: 'apple-green',
      bgColor: 'from-apple-green/5 to-apple-green/10'
    },
    {
      title: 'Feedback',
      description: 'Alerts, modals, and progress indicators',
      components: ['Alert', 'Modal', 'Toast', 'Progress'],
      icon: 'bi-chat-dots',
      color: 'apple-orange',
      bgColor: 'from-apple-orange/5 to-apple-orange/10'
    }
  ];

  return (
    <section id="components" className="py-20 bg-gradient-to-b from-system-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-system-gray-900 mb-4">
            Component Library
          </h2>
          <p className="font-inter text-lg text-system-gray-600 max-w-2xl mx-auto">
            Comprehensive collection of components organized by functionality, 
            each designed with Apple's attention to detail.
          </p>
        </div>

        {/* Enhanced Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {componentCategories.map((category, index) => (
            <div 
              key={index} 
              className={`apple-card-glass p-8 bg-gradient-to-br ${category.bgColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-14 h-14 bg-${category.color}/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <i className={`${category.icon} text-${category.color} text-xl`}></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-inter font-semibold text-lg text-system-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="font-inter text-system-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.components.map((component, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-white/60 backdrop-blur-sm text-system-gray-700 rounded-lg text-xs font-inter border border-white/30 hover:bg-white/80 transition-colors duration-200"
                      >
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Interactive Demo */}
        <div className="apple-card-glass p-8 lg:p-12 text-center bg-gradient-to-br from-white/80 to-white/60">
          <h3 className="font-inter font-semibold text-xl text-system-gray-900 mb-4">
            Experience the Components
          </h3>
          <p className="font-inter text-system-gray-600 mb-8 max-w-xl mx-auto">
            See LiqUIdify components in action with our interactive playground.
          </p>
          
          {/* Enhanced Demo Components */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="apple-button shadow-lg hover:shadow-xl">
              <i className="bi bi-play-fill mr-2"></i>
              Primary Button
            </button>
            <button className="apple-button-secondary shadow-lg hover:shadow-xl">
              <i className="bi bi-heart mr-2"></i>
              Secondary Button
            </button>
            <div className="apple-card px-4 py-2 flex items-center space-x-2 shadow-lg">
              <div className="w-2 h-2 bg-apple-green rounded-full animate-pulse"></div>
              <span className="font-inter text-system-gray-700 text-sm">Online</span>
            </div>
          </div>

          <a 
            href="https://github.com/tuliopc23/LiqUIdify" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 font-inter text-apple-blue hover:text-apple-blue/80 transition-colors text-sm group"
          >
            <span>Explore all components</span>
            <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform duration-200"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
