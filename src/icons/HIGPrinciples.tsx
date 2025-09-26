export default function HIGPrinciples() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background safe area */}
      <rect x="16" y="16" width="288" height="148" fill="none" />

      {/* Browser window frame */}
      <g transform="translate(40, 30)">
        <rect
          x="0"
          y="0"
          width="240"
          height="120"
          rx="12"
          stroke="#007AFF"
          strokeWidth="3"
          fill="rgba(255,255,255,0.1)"
        />

        {/* Browser chrome */}
        <rect
          x="0"
          y="0"
          width="240"
          height="24"
          rx="12"
          fill="#007AFF"
          opacity="0.1"
        />
        <circle cx="12" cy="12" r="3" fill="#FF3B30" />
        <circle cx="24" cy="12" r="3" fill="#FFCC00" />
        <circle cx="36" cy="12" r="3" fill="#4CD964" />

        {/* Address bar */}
        <rect
          x="52"
          y="6"
          width="140"
          height="12"
          rx="6"
          fill="rgba(255,255,255,0.3)"
          stroke="#007AFF"
          strokeWidth="1"
        />

        {/* HIG Principles Grid Layout */}
        <g transform="translate(20, 35)">
          {/* Main content grid */}
          <rect
            x="0"
            y="0"
            width="200"
            height="70"
            rx="8"
            stroke="#007AFF"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4,4"
          />

          {/* Three core principles with enhanced visual design */}

          {/* Clarity - Eye icon with clarity rays */}
          <g transform="translate(20, 15)">
            <rect
              x="0"
              y="0"
              width="50"
              height="40"
              rx="6"
              fill="#007AFF"
              opacity="0.15"
            />
            <circle
              cx="25"
              cy="20"
              r="10"
              stroke="#007AFF"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="25" cy="20" r="4" fill="#007AFF" />
            {/* Clarity rays */}
            <line
              x1="15"
              y1="10"
              x2="12"
              y2="7"
              stroke="#007AFF"
              strokeWidth="1.5"
            />
            <line
              x1="35"
              y1="10"
              x2="38"
              y2="7"
              stroke="#007AFF"
              strokeWidth="1.5"
            />
            <line
              x1="15"
              y1="30"
              x2="12"
              y2="33"
              stroke="#007AFF"
              strokeWidth="1.5"
            />
            <line
              x1="35"
              y1="30"
              x2="38"
              y2="33"
              stroke="#007AFF"
              strokeWidth="1.5"
            />
          </g>

          {/* Deference - Minimalist layers */}
          <g transform="translate(75, 15)">
            <rect
              x="0"
              y="0"
              width="50"
              height="40"
              rx="6"
              fill="#007AFF"
              opacity="0.25"
            />
            <rect
              x="10"
              y="8"
              width="30"
              height="24"
              rx="4"
              stroke="#007AFF"
              strokeWidth="2"
              fill="rgba(255,255,255,0.3)"
            />
            <rect
              x="15"
              y="12"
              width="20"
              height="16"
              rx="2"
              stroke="#007AFF"
              strokeWidth="1.5"
              fill="none"
            />
            <rect x="20" y="16" width="10" height="8" rx="1" fill="#007AFF" />
          </g>

          {/* Depth - Layered perspective */}
          <g transform="translate(130, 15)">
            <rect
              x="0"
              y="0"
              width="50"
              height="40"
              rx="6"
              fill="#007AFF"
              opacity="0.35"
            />
            <rect
              x="8"
              y="6"
              width="34"
              height="28"
              rx="4"
              stroke="#007AFF"
              strokeWidth="2"
              fill="rgba(255,255,255,0.2)"
            />
            <rect
              x="12"
              y="10"
              width="26"
              height="20"
              rx="3"
              stroke="#007AFF"
              strokeWidth="1.5"
              fill="rgba(255,255,255,0.1)"
            />
            <rect x="16" y="14" width="18" height="12" rx="2" fill="#007AFF" />
          </g>

          {/* Connection lines showing system unity */}
          <line
            x1="45"
            y1="55"
            x2="100"
            y2="65"
            stroke="#007AFF"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="100"
            y1="55"
            x2="155"
            y2="65"
            stroke="#007AFF"
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="155"
            y1="55"
            x2="45"
            y2="65"
            stroke="#007AFF"
            strokeWidth="2"
            opacity="0.6"
          />
        </g>

        {/* Web responsive indicators */}
        <g transform="translate(200, 35)">
          {/* Desktop */}
          <rect
            x="0"
            y="0"
            width="16"
            height="10"
            rx="2"
            stroke="#34AADC"
            strokeWidth="1.5"
            fill="none"
          />
          <rect x="0" y="10" width="16" height="2" rx="1" fill="#34AADC" />

          {/* Tablet */}
          <rect
            x="0"
            y="15"
            width="12"
            height="16"
            rx="2"
            stroke="#34AADC"
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="6" cy="29" r="1" fill="#34AADC" />

          {/* Mobile */}
          <rect
            x="0"
            y="35"
            width="8"
            height="14"
            rx="2"
            stroke="#34AADC"
            strokeWidth="1.5"
            fill="none"
          />
          <line
            x1="2"
            y1="37"
            x2="6"
            y2="37"
            stroke="#34AADC"
            strokeWidth="1"
          />
        </g>
      </g>

      {/* Apple ecosystem indicators */}
      <g transform="translate(20, 20)">
        {/* Apple logo inspired element */}
        <path
          d="M8,12 C8,8 12,6 12,6 C12,6 16,8 16,12 C16,16 12,18 12,18 C12,18 8,16 8,12 Z"
          fill="#007AFF"
          opacity="0.3"
        />
        <circle cx="12" cy="8" r="1.5" fill="#007AFF" />
      </g>

      {/* Web globe indicator */}
      <g transform="translate(280, 20)">
        <circle
          cx="12"
          cy="12"
          r="8"
          stroke="#34AADC"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M4,12 Q12,4 20,12 Q12,20 4,12"
          stroke="#34AADC"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M4,12 Q12,20 20,12 Q12,4 4,12"
          stroke="#34AADC"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="4"
          y1="12"
          x2="20"
          y2="12"
          stroke="#34AADC"
          strokeWidth="1.5"
        />
      </g>

      {/* Design system pattern indicators */}
      <g transform="translate(20, 140)">
        <rect x="0" y="0" width="6" height="6" rx="1" fill="#5AC8FA" />
        <rect
          x="8"
          y="0"
          width="6"
          height="6"
          rx="1"
          fill="#5AC8FA"
          opacity="0.7"
        />
        <rect
          x="16"
          y="0"
          width="6"
          height="6"
          rx="1"
          fill="#5AC8FA"
          opacity="0.4"
        />
      </g>

      <g transform="translate(270, 140)">
        <rect x="0" y="0" width="6" height="6" rx="1" fill="#5AC8FA" />
        <rect
          x="8"
          y="0"
          width="6"
          height="6"
          rx="1"
          fill="#5AC8FA"
          opacity="0.7"
        />
        <rect
          x="16"
          y="0"
          width="6"
          height="6"
          rx="1"
          fill="#5AC8FA"
          opacity="0.4"
        />
      </g>
    </svg>
  );
}
