export default function Use() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Code editor interface */}
      <g transform="translate(40, 30)">
        <rect
          x="0"
          y="0"
          width="240"
          height="120"
          rx="8"
          stroke="#007AFF"
          strokeWidth="2"
          fill="none"
        />

        {/* Editor header */}
        <rect
          x="0"
          y="0"
          width="240"
          height="24"
          rx="8"
          fill="#007AFF"
          opacity="0.1"
        />
        <circle cx="12" cy="12" r="3" fill="#FF3A2D" />
        <circle cx="24" cy="12" r="3" fill="#FFCC00" />
        <circle cx="36" cy="12" r="3" fill="#4CD964" />

        {/* Code content */}
        <g transform="translate(12, 36)">
          {/* Import statement */}
          <rect x="0" y="0" width="4" height="12" fill="#FF9500" />
          <rect
            x="8"
            y="0"
            width="80"
            height="12"
            rx="2"
            fill="#5AC8FA"
            opacity="0.2"
          />
          <text x="12" y="8" fontSize="8" fill="#007AFF">
            import Component
          </text>

          {/* Component usage */}
          <g transform="translate(0, 20)">
            <rect x="0" y="0" width="4" height="12" fill="#4CD964" />
            <rect
              x="8"
              y="0"
              width="100"
              height="12"
              rx="2"
              fill="#4CD964"
              opacity="0.2"
            />
            <text x="12" y="8" fontSize="8" fill="#4CD964">
              &lt;Component /&gt;
            </text>
          </g>

          {/* Props example */}
          <g transform="translate(0, 40)">
            <rect x="0" y="0" width="4" height="12" fill="#FFCC00" />
            <rect
              x="8"
              y="0"
              width="120"
              height="12"
              rx="2"
              fill="#FFCC00"
              opacity="0.2"
            />
            <text x="12" y="8" fontSize="8" fill="#FF9500">
              theme="dark"
            </text>
          </g>

          {/* Event handler */}
          <g transform="translate(0, 60)">
            <rect x="0" y="0" width="4" height="12" fill="#FF2D55" />
            <rect
              x="8"
              y="0"
              width="140"
              height="12"
              rx="2"
              fill="#FF2D55"
              opacity="0.2"
            />
            <text x="12" y="8" fontSize="8" fill="#FF2D55">
              onClick=&#123;handler&#125;
            </text>
          </g>
        </g>
      </g>

      {/* Live preview/result */}
      <g transform="translate(300, 40)">
        <rect
          x="0"
          y="0"
          width="60"
          height="80"
          rx="6"
          stroke="#34AADC"
          strokeWidth="2"
          fill="white"
        />
        <rect x="8" y="8" width="44" height="24" rx="4" fill="#007AFF" />
        <rect
          x="8"
          y="36"
          width="44"
          height="16"
          rx="2"
          stroke="#5AC8FA"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="30" cy="60" r="8" fill="#4CD964" />
        <rect x="8" y="72" width="20" height="4" rx="2" fill="#FFCC00" />
        <rect x="32" y="72" width="20" height="4" rx="2" fill="#FF9500" />
      </g>

      {/* Connection arrow from code to preview */}
      <g stroke="#34AADC" strokeWidth="2" strokeLinecap="round">
        <path d="M280 90 Q290 85 300 90" />
        <polygon points="298,88 300,90 298,92" fill="#34AADC" />
      </g>

      {/* API/Props indicator */}
      <g transform="translate(60, 160)">
        <rect
          x="0"
          y="0"
          width="200"
          height="16"
          rx="8"
          stroke="#5AC8FA"
          strokeWidth="1"
          fill="none"
        />
        <g fontSize="8" fill="#5AC8FA">
          <text x="8" y="10">
            theme
          </text>
          <text x="35" y="10">
            size
          </text>
          <text x="55" y="10">
            variant
          </text>
          <text x="85" y="10">
            onClick
          </text>
          <text x="120" y="10">
            disabled
          </text>
          <text x="160" y="10">
            children
          </text>
        </g>
      </g>

      {/* Interactive elements */}
      <g transform="translate(40, 160)">
        <circle cx="0" cy="0" r="4" fill="#4CD964" />
        <path
          d="M-2 -1 L0 1 L2 -1"
          stroke="white"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      <g transform="translate(280, 160)">
        <circle cx="0" cy="0" r="4" fill="#FF9500" />
        <line
          x1="-2"
          y1="-2"
          x2="2"
          y2="2"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="-2"
          y1="2"
          x2="2"
          y2="-2"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </g>

      {/* Usage examples */}
      <g transform="translate(20, 20)">
        <text fontSize="8" fill="#007AFF">
          Easy to use:
        </text>
      </g>

      <g transform="translate(200, 20)">
        <text fontSize="8" fill="#4CD964">
          Live preview:
        </text>
      </g>
    </svg>
  );
}
