export default function InstallDownload() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Package/download container */}
      <g transform="translate(120, 40)">
        <rect
          x="0"
          y="0"
          width="80"
          height="60"
          rx="8"
          stroke="#4CD964"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="8"
          y="8"
          width="64"
          height="44"
          rx="4"
          fill="#4CD964"
          opacity="0.2"
        />

        {/* Download arrow */}
        <g transform="translate(40, 30)">
          <line
            x1="0"
            y1="-15"
            x2="0"
            y2="15"
            stroke="#4CD964"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <polygon points="-8,8 0,16 8,8" fill="#4CD964" />
        </g>

        {/* Package info */}
        <rect x="12" y="12" width="24" height="3" rx="1.5" fill="#4CD964" />
        <rect
          x="12"
          y="18"
          width="32"
          height="2"
          rx="1"
          fill="#4CD964"
          opacity="0.7"
        />
        <rect
          x="12"
          y="22"
          width="20"
          height="2"
          rx="1"
          fill="#4CD964"
          opacity="0.5"
        />
      </g>

      {/* Installation steps */}
      <g transform="translate(40, 120)">
        {/* Step 1: npm install */}
        <g>
          <circle cx="10" cy="10" r="8" fill="#007AFF" />
          <text x="6" y="14" fontSize="10" fill="white">
            1
          </text>
          <rect
            x="25"
            y="4"
            width="60"
            height="12"
            rx="6"
            stroke="#007AFF"
            strokeWidth="1"
            fill="none"
          />
          <text x="30" y="12" fontSize="8" fill="#007AFF">
            npm install
          </text>
        </g>

        {/* Step 2: import */}
        <g transform="translate(100, 0)">
          <circle cx="10" cy="10" r="8" fill="#FF9500" />
          <text x="6" y="14" fontSize="10" fill="white">
            2
          </text>
          <rect
            x="25"
            y="4"
            width="50"
            height="12"
            rx="6"
            stroke="#FF9500"
            strokeWidth="1"
            fill="none"
          />
          <text x="30" y="12" fontSize="8" fill="#FF9500">
            import
          </text>
        </g>

        {/* Step 3: use */}
        <g transform="translate(180, 0)">
          <circle cx="10" cy="10" r="8" fill="#4CD964" />
          <text x="6" y="14" fontSize="10" fill="white">
            3
          </text>
          <rect
            x="25"
            y="4"
            width="40"
            height="12"
            rx="6"
            stroke="#4CD964"
            strokeWidth="1"
            fill="none"
          />
          <text x="30" y="12" fontSize="8" fill="#4CD964">
            use
          </text>
        </g>
      </g>

      {/* Download progress */}
      <g transform="translate(80, 110)">
        <rect
          x="0"
          y="0"
          width="160"
          height="6"
          rx="3"
          stroke="#34AADC"
          strokeWidth="1"
          fill="none"
        />
        <rect x="2" y="2" width="120" height="2" rx="1" fill="#4CD964" />
        <text x="165" y="5" fontSize="8" fill="#4CD964">
          75%
        </text>
      </g>

      {/* Cloud/CDN source */}
      <g transform="translate(60, 60)">
        <path
          d="M0 10 Q0 0 10 0 Q20 0 25 5 Q30 0 40 0 Q50 0 50 10 Q50 20 40 20 L10 20 Q0 20 0 10 Z"
          fill="#5AC8FA"
          opacity="0.6"
        />
        <circle cx="15" cy="10" r="2" fill="white" />
        <circle cx="25" cy="8" r="1.5" fill="white" />
        <circle cx="35" cy="12" r="1.8" fill="white" />
      </g>

      {/* Transfer arrows */}
      <g
        stroke="#34AADC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="4,2"
      >
        <path d="M110 70 Q115 75 120 70" />
        <path d="M130 70 Q135 75 140 70" />
        <path d="M150 70 Q155 75 160 70" />
        <polygon points="158,68 160,70 158,72" fill="#34AADC" />
      </g>

      {/* File size indicator */}
      <g transform="translate(240, 80)">
        <rect
          x="0"
          y="0"
          width="40"
          height="20"
          rx="4"
          stroke="#FFCC00"
          strokeWidth="1"
          fill="#FFCC00"
          opacity="0.2"
        />
        <text x="8" y="12" fontSize="8" fill="#FFCC00">
          2.1KB
        </text>
      </g>

      {/* Success checkmark */}
      <g transform="translate(200, 45)">
        <circle cx="20" cy="20" r="12" fill="#4CD964" />
        <path
          d="M14 20 L18 24 L26 16"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
