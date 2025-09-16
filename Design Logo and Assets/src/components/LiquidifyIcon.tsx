interface LiquidifyIconProps {
  size?: number;
  className?: string;
}

export function LiquidifyIcon({ size = 120, className = "" }: LiquidifyIconProps) {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Base container with iOS rounded corners */}
      <div 
        className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
        style={{ borderRadius: size * 0.225 }} // iOS-style corner radius
      >
        {/* Liquid glass layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
        
        {/* Central liquid orb */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/60 via-white/30 to-transparent backdrop-blur-sm"
          style={{ 
            width: size * 0.5, 
            height: size * 0.5,
            filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.2))'
          }}
        >
          {/* Inner liquid core */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/80 to-white/20"
            style={{ 
              width: size * 0.25, 
              height: size * 0.25 
            }}
          />
        </div>

        {/* Floating liquid drops */}
        <div 
          className="absolute rounded-full bg-gradient-to-br from-white/50 to-white/20 backdrop-blur-sm"
          style={{ 
            width: size * 0.15, 
            height: size * 0.15,
            top: size * 0.2,
            left: size * 0.25,
            filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.1))'
          }}
        />
        <div 
          className="absolute rounded-full bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"
          style={{ 
            width: size * 0.12, 
            height: size * 0.12,
            top: size * 0.65,
            right: size * 0.2,
            filter: 'drop-shadow(0 2px 6px rgba(255,255,255,0.1))'
          }}
        />
        <div 
          className="absolute rounded-full bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm"
          style={{ 
            width: size * 0.08, 
            height: size * 0.08,
            top: size * 0.3,
            right: size * 0.35,
            filter: 'drop-shadow(0 1px 4px rgba(255,255,255,0.1))'
          }}
        />

        {/* Highlight overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"
          style={{ borderRadius: size * 0.225 }}
        />
        
        {/* Bottom shadow */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent"
          style={{ borderRadius: `0 0 ${size * 0.225}px ${size * 0.225}px` }}
        />
      </div>

      {/* External glow/shadow */}
      <div 
        className="absolute inset-0 rounded-full opacity-30"
        style={{
          borderRadius: size * 0.225,
          boxShadow: `0 ${size * 0.1}px ${size * 0.3}px rgba(59, 130, 246, 0.4), 0 ${size * 0.05}px ${size * 0.15}px rgba(96, 165, 250, 0.3)`
        }}
      />
    </div>
  );
}