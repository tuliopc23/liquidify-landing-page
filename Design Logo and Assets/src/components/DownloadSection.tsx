import { Button } from './ui/button';
import { Download } from 'lucide-react';
import { LiquidifyIconSVG, generateLiquidifyIconSVG } from './LiquidifyIconSVG';

export function DownloadSection() {
  const downloadSVG = (size: number, filename: string) => {
    const svgContent = generateLiquidifyIconSVG(size);
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadSizes = [
    { name: 'App Icon', size: 1024, filename: 'liquidify-app-icon-1024.svg' },
    { name: 'Large', size: 512, filename: 'liquidify-large-512.svg' },
    { name: 'Medium', size: 256, filename: 'liquidify-medium-256.svg' },
    { name: 'Small', size: 128, filename: 'liquidify-small-128.svg' },
    { name: 'Favicon', size: 64, filename: 'liquidify-favicon-64.svg' },
    { name: 'Tiny', size: 32, filename: 'liquidify-tiny-32.svg' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2>Download SVG Assets</h2>
        <p className="text-muted-foreground">Get production-ready SVG files for your projects</p>
        <div className="flex justify-center">
          <LiquidifyIconSVG size={120} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloadSizes.map((item) => (
          <div key={item.name} className="p-6 border rounded-lg bg-card space-y-4">
            <div className="flex justify-center">
              <LiquidifyIconSVG size={80} />
            </div>
            <div className="text-center space-y-2">
              <h3>{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.size}×{item.size}px</p>
              <Button
                onClick={() => downloadSVG(item.size, item.filename)}
                className="w-full"
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download SVG
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border rounded-lg bg-card space-y-4">
        <h3>Package Download</h3>
        <p className="text-sm text-muted-foreground">Download all sizes in one package</p>
        <Button
          onClick={() => {
            // Download all sizes
            downloadSizes.forEach((item, index) => {
              setTimeout(() => {
                downloadSVG(item.size, item.filename);
              }, index * 100); // Stagger downloads to avoid browser blocking
            });
          }}
          className="w-full"
        >
          <Download className="w-4 h-4 mr-2" />
          Download All Sizes
        </Button>
      </div>

      <div className="p-6 border rounded-lg bg-muted/50 space-y-3">
        <h3>Usage Instructions</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• SVG files are vector-based and infinitely scalable</li>
          <li>• Perfect for web applications, mobile apps, and print</li>
          <li>• Use the appropriate size for your specific use case</li>
          <li>• App Icon size (1024px) is ideal for high-resolution displays</li>
          <li>• Favicon size (64px) works well for browser tabs and bookmarks</li>
        </ul>
      </div>
    </div>
  );
}