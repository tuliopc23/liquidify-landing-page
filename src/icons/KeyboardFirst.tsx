export default function KeyboardFirst() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Keyboard layout */}
      <g transform="translate(60, 60)">
        <rect
          x="0"
          y="0"
          width="200"
          height="60"
          rx="8"
          stroke="#007AFF"
          strokeWidth="2"
          fill="none"
        />

        {/* Key rows */}
        <g fill="#5AC8FA" opacity="0.3">
          {/* Top row */}
          <rect x="8" y="8" width="12" height="12" rx="2" />
          <rect x="24" y="8" width="12" height="12" rx="2" />
          <rect x="40" y="8" width="12" height="12" rx="2" />
          <rect x="56" y="8" width="12" height="12" rx="2" />
          <rect x="72" y="8" width="12" height="12" rx="2" />
          <rect x="88" y="8" width="12" height="12" rx="2" />
          <rect x="104" y="8" width="12" height="12" rx="2" />
          <rect x="120" y="8" width="12" height="12" rx="2" />
          <rect x="136" y="8" width="12" height="12" rx="2" />
          <rect x="152" y="8" width="12" height="12" rx="2" />
          <rect x="168" y="8" width="24" height="12" rx="2" />

          {/* Middle row */}
          <rect x="8" y="24" width="16" height="12" rx="2" />
          <rect x="28" y="24" width="12" height="12" rx="2" />
          <rect x="44" y="24" width="12" height="12" rx="2" />
          <rect x="60" y="24" width="12" height="12" rx="2" />
          <rect x="76" y="24" width="12" height="12" rx="2" />
          <rect x="92" y="24" width="12" height="12" rx="2" />
          <rect x="108" y="24" width="12" height="12" rx="2" />
          <rect x="124" y="24" width="12" height="12" rx="2" />
          <rect x="140" y="24" width="12" height="12" rx="2" />
          <rect x="156" y="24" width="12" height="12" rx="2" />
          <rect x="172" y="24" width="20" height="12" rx="2" />

          {/* Bottom row */}
          <rect x="8" y="40" width="32" height="12" rx="2" />
          <rect x="44" y="40" width="112" height="12" rx="2" />
          <rect x="160" y="40" width="32" height="12" rx="2" />
        </g>

        {/* Highlighted navigation keys */}
        <g fill="#FFCC00">
          {/* Tab key */}
          <rect x="8" y="24" width="16" height="12" rx="2" />
          {/* Enter key */}
          <rect x="172" y="24" width="20" height="12" rx="2" />
          {/* Space key */}
          <rect x="44" y="40" width="112" height="12" rx="2" />
        </g>

        {/* Arrow keys - special highlight */}
        <g transform="translate(160, 8)">
          <rect x="0" y="0" width="12" height="12" rx="2" fill="#FF9500" />
          <polygon points="6,3 9,6 6,9 3,6" fill="white" />
        </g>
      </g>

      {/* Navigation indicators */}
      <g transform="translate(80, 30)">
        <path
          d="M0 0 L10 5 L0 10"
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <text x="15" y="8" fontSize="10" fill="#FF9500">
          Tab Navigation
        </text>

        <g transform="translate(100, 0)">
          <circle
            cx="5"
            cy="5"
            r="3"
            stroke="#FFCC00"
            strokeWidth="2"
            fill="none"
          />
          <text x="15" y="8" fontSize="10" fill="#FFCC00">
            Focus Ring
          </text>
        </g>
      </g>

      {/* Keyboard shortcuts */}
      <g transform="translate(60, 140)">
        <rect
          x="0"
          y="0"
          width="200"
          height="20"
          rx="4"
          fill="#34AADC"
          opacity="0.2"
        />
        <g fill="#007AFF" fontSize="8">
          <text x="8" y="12">
            ⌘K
          </text>
          <text x="30" y="12">
            ⌘/
          </text>
          <text x="50" y="12">
            ESC
          </text>
          <text x="70" y="12">
            ⌘⏎
          </text>
          <text x="95" y="12">
            ↑↓
          </text>
          <text x="115" y="12">
            ⇥
          </text>
          <text x="130" y="12">
            ⌘⇧K
          </text>
          <text x="165" y="12">
            ⌘D
          </text>
        </g>
      </g>

      {/* Focus flow arrows */}
      <g
        stroke="#5AC8FA"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="3,2"
      >
        <path d="M80 90 Q120 100 160 90" />
        <path d="M160 90 Q200 100 240 90" />
        <polygon points="158,88 160,90 158,92" fill="#5AC8FA" />
        <polygon points="238,88 240,90 238,92" fill="#5AC8FA" />
      </g>
    </svg>
  );
}
