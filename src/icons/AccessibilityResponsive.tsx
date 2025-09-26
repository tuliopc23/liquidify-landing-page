export default function AccessibilityResponsive() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Accessibility figure */}
      <g transform="translate(80, 40)">
        <circle
          cx="40"
          cy="20"
          r="12"
          stroke="#FF2D55"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="20"
          y1="45"
          x2="60"
          y2="45"
          stroke="#FF2D55"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="40"
          y1="45"
          x2="40"
          y2="70"
          stroke="#FF2D55"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="70"
          x2="30"
          y2="100"
          stroke="#FF2D55"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="55"
          y1="70"
          x2="50"
          y2="100"
          stroke="#FF2D55"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Responsive design - multiple screen sizes */}
      <g transform="translate(140, 30)">
        {/* Desktop */}
        <rect
          x="0"
          y="20"
          width="60"
          height="40"
          rx="4"
          stroke="#FF2D55"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="4"
          y="24"
          width="52"
          height="28"
          rx="2"
          fill="#FF2D55"
          opacity="0.2"
        />
        <rect x="20" y="60" width="20" height="4" rx="2" fill="#FF2D55" />

        {/* Tablet */}
        <rect
          x="80"
          y="10"
          width="40"
          height="60"
          rx="6"
          stroke="#FF2D55"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="84"
          y="14"
          width="32"
          height="44"
          rx="2"
          fill="#FF2D55"
          opacity="0.2"
        />
        <circle cx="100" cy="64" r="3" fill="#FF2D55" />

        {/* Phone */}
        <rect
          x="140"
          y="0"
          width="25"
          height="50"
          rx="6"
          stroke="#FF2D55"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="143"
          y="6"
          width="19"
          height="32"
          rx="2"
          fill="#FF2D55"
          opacity="0.2"
        />
        <circle cx="152.5" cy="44" r="2" fill="#FF2D55" />
      </g>

      {/* Adaptive flow lines */}
      <path
        d="M160 50 Q180 65 200 50 Q220 35 240 50"
        stroke="#34AADC"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M180 70 Q200 85 220 70 Q240 55 260 70"
        stroke="#34AADC"
        strokeWidth="2"
        fill="none"
      />

      {/* Accessibility indicators */}
      <g transform="translate(40, 120)">
        <rect
          x="0"
          y="0"
          width="240"
          height="20"
          rx="10"
          stroke="#FF2D55"
          strokeWidth="2"
          fill="none"
        />
        <rect x="4" y="4" width="60" height="12" rx="6" fill="#4CD964" />
        <rect x="72" y="4" width="80" height="12" rx="6" fill="#5AC8FA" />
        <rect x="160" y="4" width="76" height="12" rx="6" fill="#FFCC00" />
      </g>
    </svg>
  );
}
