interface LiquidifyIconSVGProps {
  size?: number;
  className?: string;
}

export function LiquidifyIconSVG({ size = 120, className = "" }: LiquidifyIconSVGProps) {
  const cornerRadius = size * 0.225; // iOS-style corner radius
  
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Base gradient */}
        <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" /> {/* blue-400 */}
          <stop offset="50%" stopColor="#3b82f6" /> {/* blue-500 */}
          <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
        </linearGradient>
        
        {/* Glass layer gradients */}
        <linearGradient id="glassGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        
        <linearGradient id="glassGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.2)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        
        {/* Central orb gradients */}
        <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="70%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
        
        <radialGradient id="orbCoreGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </radialGradient>
        
        {/* Floating drops gradients */}
        <radialGradient id="dropGradient1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </radialGradient>
        
        <radialGradient id="dropGradient2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </radialGradient>
        
        <radialGradient id="dropGradient3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
        </radialGradient>
        
        {/* Highlight gradient */}
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        
        {/* Bottom shadow gradient */}
        <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
        </linearGradient>
        
        {/* Blur filter */}
        <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
        </filter>
        
        {/* Drop shadow filter */}
        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy={size * 0.02} stdDeviation={size * 0.04} floodColor="rgba(255,255,255,0.2)"/>
        </filter>
        
        {/* External glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy={size * 0.1} stdDeviation={size * 0.15} floodColor="rgba(59, 130, 246, 0.4)"/>
          <feDropShadow dx="0" dy={size * 0.05} stdDeviation={size * 0.075} floodColor="rgba(96, 165, 250, 0.3)"/>
        </filter>
      </defs>
      
      {/* External glow/shadow */}
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="none"
        filter="url(#glow)"
        opacity="0.3"
      />
      
      {/* Base container with rounded corners */}
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="url(#baseGradient)"
      />
      
      {/* Glass layers */}
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="url(#glassGradient1)"
      />
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="url(#glassGradient2)"
      />
      
      {/* Central liquid orb */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.25}
        fill="url(#orbGradient)"
        filter="url(#blur) url(#dropShadow)"
      />
      
      {/* Inner liquid core */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={size * 0.125}
        fill="url(#orbCoreGradient)"
      />
      
      {/* Floating liquid drops */}
      <circle
        cx={size * 0.32}
        cy={size * 0.27}
        r={size * 0.075}
        fill="url(#dropGradient1)"
        filter="url(#blur)"
      />
      <circle
        cx={size * 0.75}
        cy={size * 0.71}
        r={size * 0.06}
        fill="url(#dropGradient2)"
        filter="url(#blur)"
      />
      <circle
        cx={size * 0.69}
        cy={size * 0.34}
        r={size * 0.04}
        fill="url(#dropGradient3)"
        filter="url(#blur)"
      />
      
      {/* Highlight overlay */}
      <rect
        width={size}
        height={size}
        rx={cornerRadius}
        fill="url(#highlightGradient)"
      />
      
      {/* Bottom shadow */}
      <path
        d={`M 0 ${size * 0.67} Q 0 ${size} ${cornerRadius} ${size} L ${size - cornerRadius} ${size} Q ${size} ${size} ${size} ${size * 0.67} L ${size} ${size} L 0 ${size} Z`}
        fill="url(#shadowGradient)"
      />
    </svg>
  );
}

// Function to generate SVG string for download
export function generateLiquidifyIconSVG(size: number = 120): string {
  const cornerRadius = size * 0.225;
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa"/>
      <stop offset="50%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="glassGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
    <linearGradient id="glassGradient2" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="rgba(0,0,0,0.2)"/>
      <stop offset="50%" stop-color="rgba(255,255,255,0)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
    </linearGradient>
    <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.6)"/>
      <stop offset="70%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <radialGradient id="orbCoreGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.8)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.2)"/>
    </radialGradient>
    <radialGradient id="dropGradient1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.5)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.2)"/>
    </radialGradient>
    <radialGradient id="dropGradient2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.4)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
    </radialGradient>
    <radialGradient id="dropGradient3" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.3)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0.1)"/>
    </radialGradient>
    <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.2)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </linearGradient>
    <linearGradient id="shadowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(0,0,0,0)"/>
      <stop offset="100%" stop-color="rgba(0,0,0,0.3)"/>
    </linearGradient>
    <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur in="SourceGraphic" stdDeviation="1"/>
    </filter>
    <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="${size * 0.02}" stdDeviation="${size * 0.04}" flood-color="rgba(255,255,255,0.2)"/>
    </filter>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="${size * 0.1}" stdDeviation="${size * 0.15}" flood-color="rgba(59, 130, 246, 0.4)"/>
      <feDropShadow dx="0" dy="${size * 0.05}" stdDeviation="${size * 0.075}" flood-color="rgba(96, 165, 250, 0.3)"/>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="none" filter="url(#glow)" opacity="0.3"/>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#baseGradient)"/>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#glassGradient1)"/>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#glassGradient2)"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.25}" fill="url(#orbGradient)" filter="url(#blur) url(#dropShadow)"/>
  <circle cx="${size / 2}" cy="${size / 2}" r="${size * 0.125}" fill="url(#orbCoreGradient)"/>
  <circle cx="${size * 0.32}" cy="${size * 0.27}" r="${size * 0.075}" fill="url(#dropGradient1)" filter="url(#blur)"/>
  <circle cx="${size * 0.75}" cy="${size * 0.71}" r="${size * 0.06}" fill="url(#dropGradient2)" filter="url(#blur)"/>
  <circle cx="${size * 0.69}" cy="${size * 0.34}" r="${size * 0.04}" fill="url(#dropGradient3)" filter="url(#blur)"/>
  <rect width="${size}" height="${size}" rx="${cornerRadius}" fill="url(#highlightGradient)"/>
  <path d="M 0 ${size * 0.67} Q 0 ${size} ${cornerRadius} ${size} L ${size - cornerRadius} ${size} Q ${size} ${size} ${size} ${size * 0.67} L ${size} ${size} L 0 ${size} Z" fill="url(#shadowGradient)"/>
</svg>`;
}