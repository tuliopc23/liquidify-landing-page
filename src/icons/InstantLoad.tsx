export default function InstantLoad() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lightning bolt for speed */}
      <g transform="translate(160, 90)">
        <path
          d="M-20,-40 L-5,-10 L-15,-10 L20,40 L5,10 L15,10 L-20,-40 Z"
          fill="#FFCC00"
          stroke="#FF9500"
          strokeWidth="2"
        />
        <path
          d="M-12,-25 L0,-8 L-8,-8 L12,25 L0,8 L8,8 L-12,-25 Z"
          fill="#FF9500"
        />
      </g>

      {/* Speed indicators */}
      <g transform="translate(80, 60)">
        {/* Progress bars showing instant load */}
        <rect
          x="0"
          y="0"
          width="160"
          height="12"
          rx="6"
          stroke="#5AC8FA"
          strokeWidth="2"
          fill="none"
        />
        <rect x="2" y="2" width="156" height="8" rx="4" fill="#4CD964" />

        <rect
          x="0"
          y="20"
          width="160"
          height="12"
          rx="6"
          stroke="#5AC8FA"
          strokeWidth="2"
          fill="none"
        />
        <rect x="2" y="22" width="156" height="8" rx="4" fill="#4CD964" />

        <rect
          x="0"
          y="40"
          width="160"
          height="12"
          rx="6"
          stroke="#5AC8FA"
          strokeWidth="2"
          fill="none"
        />
        <rect x="2" y="42" width="156" height="8" rx="4" fill="#4CD964" />

        {/* Completion indicators */}
        <g fill="#4CD964">
          <circle cx="170" cy="6" r="4" />
          <circle cx="170" cy="26" r="4" />
          <circle cx="170" cy="46" r="4" />
          <path
            d="M167 3 L169 5 L173 1"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M167 23 L169 25 L173 21"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M167 43 L169 45 L173 41"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* Speed lines */}
      <g stroke="#FF9500" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <line x1="50" y1="40" x2="40" y2="40" />
        <line x1="50" y1="50" x2="35" y2="50" />
        <line x1="50" y1="60" x2="40" y2="60" />
        <line x1="50" y1="70" x2="30" y2="70" />

        <line x1="270" y1="110" x2="280" y2="110" />
        <line x1="270" y1="120" x2="285" y2="120" />
        <line x1="270" y1="130" x2="280" y2="130" />
        <line x1="270" y1="140" x2="290" y2="140" />
      </g>

      {/* Network/CDN representation */}
      <g transform="translate(50, 130)">
        <circle cx="0" cy="0" r="8" fill="#007AFF" />
        <circle cx="60" cy="0" r="8" fill="#007AFF" />
        <circle cx="120" cy="0" r="8" fill="#007AFF" />
        <circle cx="180" cy="0" r="8" fill="#007AFF" />
        <circle cx="220" cy="0" r="8" fill="#007AFF" />

        <g stroke="#34AADC" strokeWidth="2" strokeDasharray="4,2">
          <line x1="8" y1="0" x2="52" y2="0" />
          <line x1="68" y1="0" x2="112" y2="0" />
          <line x1="128" y1="0" x2="172" y2="0" />
          <line x1="188" y1="0" x2="212" y2="0" />
        </g>
      </g>

      {/* Time indicator */}
      <g transform="translate(40, 40)">
        <text fontSize="10" fill="#FF9500">
          0ms
        </text>
      </g>
      <g transform="translate(260, 40)">
        <text fontSize="10" fill="#4CD964">
          Loaded!
        </text>
      </g>
    </svg>
  );
}
