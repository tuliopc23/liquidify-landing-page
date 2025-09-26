export default function AccessibleFastThemable() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three pillars: Accessible, Fast, Themable */}
      <g transform="translate(50, 40)">
        {/* Accessible - universal symbol */}
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke="#4CD964"
          strokeWidth="3"
          fill="none"
        />
        <circle cx="30" cy="20" r="6" fill="#4CD964" />
        <path
          d="M15 35 L45 35"
          stroke="#4CD964"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M30 35 L30 55"
          stroke="#4CD964"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M20 55 L25 70"
          stroke="#4CD964"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 55 L35 70"
          stroke="#4CD964"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Fast - speed lines */}
        <g transform="translate(90, 0)">
          <circle cx="30" cy="40" r="20" fill="#5AC8FA" />
          <path
            d="M15 30 L5 30 M15 40 L0 40 M15 50 L5 50"
            stroke="#5AC8FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M45 30 L55 30 M45 40 L60 40 M45 50 L55 50"
            stroke="#5AC8FA"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <polygon points="30,25 40,40 30,55 20,40" fill="white" />
        </g>

        {/* Themable - color palette */}
        <g transform="translate(180, 10)">
          <rect
            x="0"
            y="0"
            width="40"
            height="60"
            rx="8"
            stroke="#FFCC00"
            strokeWidth="3"
            fill="none"
          />
          <rect x="8" y="8" width="24" height="8" rx="2" fill="#FF3B30" />
          <rect x="8" y="20" width="24" height="8" rx="2" fill="#007AFF" />
          <rect x="8" y="32" width="24" height="8" rx="2" fill="#4CD964" />
          <rect x="8" y="44" width="24" height="8" rx="2" fill="#FFCC00" />
        </g>
      </g>

      {/* Connecting elements */}
      <path
        d="M80 90 Q160 110 240 90"
        stroke="#34AADC"
        strokeWidth="2"
        fill="none"
        strokeDasharray="6,3"
      />

      {/* Corner indicators */}
      <rect x="28" y="28" width="8" height="8" rx="2" fill="#4CD964" />
      <rect x="284" y="28" width="8" height="8" rx="2" fill="#5AC8FA" />
      <rect x="28" y="144" width="8" height="8" rx="2" fill="#FFCC00" />
      <rect x="284" y="144" width="8" height="8" rx="2" fill="#FF3B30" />
    </svg>
  );
}
