import { LiquidifyIcon } from './LiquidifyIcon';
import { DownloadSection } from './DownloadSection';

export function AssetShowcase() {
  const sizes = [
    { name: 'App Icon', size: 180, description: 'Primary app icon for iOS/macOS' },
    { name: 'Large', size: 120, description: 'Large display usage' },
    { name: 'Medium', size: 80, description: 'Medium components' },
    { name: 'Small', size: 48, description: 'Toolbar and navigation' },
    { name: 'Favicon', size: 32, description: 'Browser favicon' },
    { name: 'Tiny', size: 16, description: 'Ultra compact usage' }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <LiquidifyIcon size={200} />
        </div>
        <div>
          <h1>Liquidify</h1>
          <p className="text-muted-foreground">Component Library Design Assets</p>
        </div>
      </div>

      {/* Download Section */}
      <DownloadSection />

      {/* Size Variations */}
      <div className="space-y-8">
        <h2>Icon Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sizes.map((item) => (
            <div key={item.name} className="space-y-4 p-6 rounded-lg border bg-card">
              <div className="flex justify-center">
                <LiquidifyIcon size={item.size} />
              </div>
              <div className="text-center space-y-1">
                <h3>{item.name}</h3>
                <p className="text-muted-foreground">{item.size}×{item.size}px</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dark Mode Variants */}
      <div className="space-y-6">
        <h2>Dark Mode Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-lg border bg-card text-center space-y-4">
            <h3>Light Mode</h3>
            <div className="bg-gray-50 p-8 rounded-lg">
              <LiquidifyIcon size={120} />
            </div>
          </div>
          <div className="p-8 rounded-lg border bg-card text-center space-y-4">
            <h3>Dark Mode</h3>
            <div className="bg-gray-900 p-8 rounded-lg">
              <LiquidifyIcon size={120} />
            </div>
          </div>
        </div>
      </div>

      {/* Usage Examples */}
      <div className="space-y-6">
        <h2>Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Navigation Bar */}
          <div className="space-y-4">
            <h3>Navigation Bar</h3>
            <div className="p-4 bg-white border rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <LiquidifyIcon size={32} />
                <span className="font-medium">Liquidify</span>
              </div>
            </div>
          </div>

          {/* App Header */}
          <div className="space-y-4">
            <h3>App Header</h3>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border rounded-lg">
              <div className="flex items-center space-x-4">
                <LiquidifyIcon size={48} />
                <div>
                  <h4>Liquidify UI</h4>
                  <p className="text-sm text-muted-foreground">Component Library</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card Component */}
          <div className="space-y-4">
            <h3>Card Component</h3>
            <div className="p-6 bg-card border rounded-lg space-y-4">
              <div className="flex items-center space-x-3">
                <LiquidifyIcon size={40} />
                <div>
                  <h4>Getting Started</h4>
                  <p className="text-sm text-muted-foreground">Install and configure Liquidify</p>
                </div>
              </div>
            </div>
          </div>

          {/* Loading State */}
          <div className="space-y-4">
            <h3>Loading State</h3>
            <div className="p-6 bg-card border rounded-lg text-center space-y-3">
              <div className="inline-block animate-pulse">
                <LiquidifyIcon size={48} />
              </div>
              <p className="text-sm text-muted-foreground">Loading components...</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="space-y-6">
        <h2>Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-card border rounded-lg space-y-3">
            <h3>Design Principles</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Apple Human Interface Guidelines compliant</li>
              <li>• Liquid glass morphism effects</li>
              <li>• Translucent layering system</li>
              <li>• Adaptive to light/dark modes</li>
              <li>• Scalable vector approach</li>
            </ul>
          </div>
          <div className="p-6 bg-card border rounded-lg space-y-3">
            <h3>Implementation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Pure CSS gradients and effects</li>
              <li>• Backdrop blur filters</li>
              <li>• Dynamic sizing system</li>
              <li>• Performance optimized</li>
              <li>• React component based</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}