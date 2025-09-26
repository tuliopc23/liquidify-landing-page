export default function SystemizedStyling() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Design system grid */}
      <g transform="translate(60, 30)">
        {/* Primary components grid */}
        <rect
          x="0"
          y="0"
          width="200"
          height="120"
          rx="8"
          stroke="#007AFF"
          strokeWidth="2"
          fill="none"
        />

        {/* Component categories */}
        <g>
          {/* Colors */}
          <g transform="translate(20, 20)">
            <rect
              x="0"
              y="0"
              width="40"
              height="20"
              rx="4"
              stroke="#FF3B30"
              strokeWidth="1"
              fill="#FF3B30"
              opacity="0.3"
            />
            <circle cx="8" cy="6" r="3" fill="#FF3B30" />
            <circle cx="16" cy="6" r="3" fill="#FF9500" />
            <circle cx="24" cy="6" r="3" fill="#FFCC00" />
            <circle cx="32" cy="6" r="3" fill="#4CD964" />
            <circle cx="8" cy="14" r="3" fill="#5AC8FA" />
            <circle cx="16" cy="14" r="3" fill="#007AFF" />
            <circle cx="24" cy="14" r="3" fill="#FF2D55" />
            <circle cx="32" cy="14" r="3" fill="#34AADC" />
          </g>

          {/* Typography */}
          <g transform="translate(80, 20)">
            <rect
              x="0"
              y="0"
              width="40"
              height="20"
              rx="4"
              stroke="#5AC8FA"
              strokeWidth="1"
              fill="#5AC8FA"
              opacity="0.3"
            />
            <rect x="4" y="4" width="32" height="2" rx="1" fill="#5AC8FA" />
            <rect x="4" y="8" width="24" height="2" rx="1" fill="#5AC8FA" />
            <rect x="4" y="12" width="28" height="2" rx="1" fill="#5AC8FA" />
            <rect x="4" y="16" width="20" height="2" rx="1" fill="#5AC8FA" />
          </g>

          {/* Spacing */}
          <g transform="translate(140, 20)">
            <rect
              x="0"
              y="0"
              width="40"
              height="20"
              rx="4"
              stroke="#4CD964"
              strokeWidth="1"
              fill="#4CD964"
              opacity="0.3"
            />
            <rect x="4" y="4" width="4" height="4" fill="#4CD964" />
            <rect x="12" y="4" width="4" height="4" fill="#4CD964" />
            <rect x="20" y="4" width="4" height="4" fill="#4CD964" />
            <rect x="28" y="4" width="4" height="4" fill="#4CD964" />
            <rect x="4" y="12" width="8" height="4" fill="#4CD964" />
            <rect x="16" y="12" width="8" height="4" fill="#4CD964" />
            <rect x="28" y="12" width="8" height="4" fill="#4CD964" />
          </g>

          {/* Components */}
          <g transform="translate(20, 60)">
            <rect
              x="0"
              y="0"
              width="160"
              height="40"
              rx="4"
              stroke="#FFCC00"
              strokeWidth="1"
              fill="#FFCC00"
              opacity="0.2"
            />

            {/* Button component */}
            <rect x="8" y="8" width="32" height="12" rx="6" fill="#007AFF" />
            <rect
              x="8"
              y="22"
              width="32"
              height="12"
              rx="6"
              stroke="#007AFF"
              strokeWidth="1"
              fill="none"
            />

            {/* Input component */}
            <rect
              x="48"
              y="8"
              width="40"
              height="12"
              rx="4"
              stroke="#34AADC"
              strokeWidth="1"
              fill="none"
            />
            <rect
              x="48"
              y="22"
              width="40"
              height="12"
              rx="4"
              fill="#34AADC"
              opacity="0.3"
            />

            {/* Card component */}
            <rect
              x="96"
              y="8"
              width="56"
              height="24"
              rx="6"
              stroke="#FF9500"
              strokeWidth="1"
              fill="#FF9500"
              opacity="0.2"
            />
            <rect x="100" y="12" width="20" height="4" rx="2" fill="#FF9500" />
            <rect x="100" y="18" width="16" height="2" rx="1" fill="#FF9500" />
            <rect x="100" y="22" width="24" height="2" rx="1" fill="#FF9500" />
          </g>
        </g>

        {/* System connections */}
        <g stroke="#34AADC" strokeWidth="1" fill="none" strokeDasharray="2,2">
          <path d="M40 40 Q60 50 80 40" />
          <path d="M120 40 Q140 50 160 40" />
          <path d="M60 50 Q90 55 120 50" />
          <path d="M40 60 Q100 45 160 60" />
        </g>
      </g>

      {/* Token indicators */}
      <g transform="translate(280, 60)">
        <circle cx="0" cy="0" r="8" fill="#FF3B30" />
        <circle cx="0" cy="20" r="8" fill="#007AFF" />
        <circle cx="0" cy="40" r="8" fill="#4CD964" />
        <circle cx="0" cy="60" r="8" fill="#FFCC00" />
      </g>
    </svg>
  );
}
