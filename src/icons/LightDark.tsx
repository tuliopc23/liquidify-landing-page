export default function LightDark() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Split screen design */}
      <defs>
        <linearGradient id="lightToDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#34AADC" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#007AFF" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <rect
        x="16"
        y="16"
        width="288"
        height="148"
        fill="url(#lightToDark)"
        rx="12"
      />

      {/* Light mode side */}
      <g transform="translate(40, 40)">
        <rect
          x="0"
          y="0"
          width="120"
          height="100"
          rx="8"
          fill="white"
          opacity="0.9"
        />

        {/* Sun symbol */}
        <g transform="translate(60, 20)">
          <circle cx="0" cy="0" r="8" fill="#FFCC00" />
          <g stroke="#FFCC00" strokeWidth="2" strokeLinecap="round">
            <line x1="0" y1="-15" x2="0" y2="-12" />
            <line x1="11" y1="-11" x2="9" y2="-9" />
            <line x1="15" y1="0" x2="12" y2="0" />
            <line x1="11" y1="11" x2="9" y2="9" />
            <line x1="0" y1="15" x2="0" y2="12" />
            <line x1="-11" y1="11" x2="-9" y2="9" />
            <line x1="-15" y1="0" x2="-12" y2="0" />
            <line x1="-11" y1="-11" x2="-9" y2="-9" />
          </g>
        </g>

        {/* Light mode interface elements */}
        <rect x="20" y="45" width="80" height="8" rx="4" fill="#007AFF" />
        <rect x="20" y="58" width="60" height="6" rx="3" fill="#34AADC" />
        <rect x="20" y="68" width="70" height="6" rx="3" fill="#5AC8FA" />
        <rect x="20" y="78" width="50" height="6" rx="3" fill="#4CD964" />
      </g>

      {/* Dark mode side */}
      <g transform="translate(160, 40)">
        <rect
          x="0"
          y="0"
          width="120"
          height="100"
          rx="8"
          fill="#1a1a1a"
          opacity="0.9"
        />

        {/* Moon symbol */}
        <g transform="translate(60, 20)">
          <path
            d="M-8,-8 Q8,-8 8,8 Q-8,8 -8,-8 Q-2,-2 -2,2 Q-8,8 -8,-8"
            fill="#5AC8FA"
          />
          <circle cx="-2" cy="-2" r="1.5" fill="#34AADC" />
          <circle cx="2" cy="2" r="1" fill="#34AADC" />
          <circle cx="-4" cy="4" r="0.8" fill="#34AADC" />
        </g>

        {/* Dark mode interface elements */}
        <rect x="20" y="45" width="80" height="8" rx="4" fill="#5AC8FA" />
        <rect x="20" y="58" width="60" height="6" rx="3" fill="#34AADC" />
        <rect x="20" y="68" width="70" height="6" rx="3" fill="#007AFF" />
        <rect x="20" y="78" width="50" height="6" rx="3" fill="#FF9500" />
      </g>

      {/* Toggle switch in center */}
      <g transform="translate(160, 90)">
        <rect
          x="-20"
          y="-8"
          width="40"
          height="16"
          rx="8"
          stroke="#007AFF"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="8" cy="0" r="6" fill="#007AFF" />
        <path
          d="M-8 -12 Q0 -8 8 -12"
          stroke="#FFCC00"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M-8 12 Q0 8 8 12"
          stroke="#5AC8FA"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Theme transition arrows */}
      <g stroke="#34AADC" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M130 90 Q145 85 155 90" />
        <path d="M165 90 Q175 85 190 90" />
        <polygon points="152,88 155,90 152,92" fill="#34AADC" />
        <polygon points="168,92 165,90 168,88" fill="#34AADC" />
      </g>
    </svg>
  );
}
