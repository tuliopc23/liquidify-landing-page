export default function TreeShakeable() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tree structure with modular components */}
      <g transform="translate(160, 150)">
        {/* Main trunk */}
        <rect x="-8" y="0" width="16" height="30" rx="4" fill="#4CD964" />

        {/* Branch structure */}
        <g transform="translate(0, -30)">
          <line
            x1="0"
            y1="0"
            x2="-40"
            y2="-20"
            stroke="#4CD964"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="40"
            y2="-20"
            stroke="#4CD964"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="-20"
            y2="-40"
            stroke="#4CD964"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="20"
            y2="-40"
            stroke="#4CD964"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="-50"
            stroke="#4CD964"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Modular leaves/components - some being "shaken off" */}
        <g>
          {/* Attached modules */}
          <circle cx="-40" cy="-50" r="8" fill="#007AFF" />
          <circle cx="40" cy="-50" r="8" fill="#007AFF" />
          <circle cx="-20" cy="-70" r="6" fill="#5AC8FA" />
          <circle cx="20" cy="-70" r="6" fill="#5AC8FA" />
          <circle cx="0" cy="-80" r="6" fill="#FFCC00" />

          {/* Falling/unused modules with motion trails */}
          <g opacity="0.6">
            <circle cx="60" cy="-30" r="6" fill="#FF3A2D" />
            <path
              d="M60 -40 Q65 -35 60 -30"
              stroke="#FF3A2D"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />

            <circle cx="-60" cy="-20" r="5" fill="#FF3A2D" />
            <path
              d="M-60 -30 Q-55 -25 -60 -20"
              stroke="#FF3A2D"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />

            <circle cx="80" cy="0" r="4" fill="#FF1300" />
            <path
              d="M80 -15 Q85 -8 80 0"
              stroke="#FF1300"
              strokeWidth="2"
              fill="none"
              strokeDasharray="2,2"
            />
          </g>
        </g>
      </g>

      {/* Bundle size indicator */}
      <g transform="translate(50, 40)">
        <rect
          x="0"
          y="0"
          width="80"
          height="20"
          rx="10"
          stroke="#34AADC"
          strokeWidth="2"
          fill="none"
        />
        <rect x="4" y="4" width="48" height="12" rx="6" fill="#4CD964" />
        <text x="90" y="15" fontSize="12" fill="#4CD964">
          Optimized
        </text>
      </g>

      {/* Unused code indicator */}
      <g transform="translate(190, 40)">
        <rect
          x="0"
          y="0"
          width="80"
          height="20"
          rx="10"
          stroke="#34AADC"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="4"
          y="4"
          width="72"
          height="12"
          rx="6"
          fill="#FF3A2D"
          opacity="0.3"
        />
        <line x1="10" y1="4" x2="70" y2="16" stroke="#FF3A2D" strokeWidth="2" />
        <line x1="10" y1="16" x2="70" y2="4" stroke="#FF3A2D" strokeWidth="2" />
      </g>
    </svg>
  );
}
