export default function WhatsInside() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Package/box container */}
      <g transform="translate(160, 90)">
        <rect
          x="-60"
          y="-40"
          width="120"
          height="80"
          rx="12"
          stroke="#FF9500"
          strokeWidth="3"
          fill="none"
        />

        {/* Box opening effect */}
        <path
          d="M-60 -40 L0 -60 L60 -40"
          stroke="#FF9500"
          strokeWidth="3"
          fill="#FF9500"
          opacity="0.2"
        />
        <path
          d="M0 -60 L0 -20"
          stroke="#FF9500"
          strokeWidth="2"
          strokeDasharray="4,2"
        />
      </g>

      {/* Components floating out */}
      <g>
        {/* Button component */}
        <g transform="translate(80, 50)">
          <rect x="0" y="0" width="40" height="16" rx="8" fill="#007AFF" />
          <text x="12" y="10" fontSize="8" fill="white">
            Button
          </text>
          <path
            d="M20 -10 Q25 -15 20 -20"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Input component */}
        <g transform="translate(200, 60)">
          <rect
            x="0"
            y="0"
            width="50"
            height="16"
            rx="4"
            stroke="#5AC8FA"
            strokeWidth="2"
            fill="none"
          />
          <text x="8" y="10" fontSize="8" fill="#5AC8FA">
            Input
          </text>
          <path
            d="M25 -8 Q30 -12 25 -16"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Card component */}
        <g transform="translate(60, 120)">
          <rect
            x="0"
            y="0"
            width="45"
            height="30"
            rx="6"
            stroke="#4CD964"
            strokeWidth="2"
            fill="#4CD964"
            opacity="0.2"
          />
          <rect x="4" y="4" width="20" height="4" rx="2" fill="#4CD964" />
          <rect x="4" y="10" width="16" height="2" rx="1" fill="#4CD964" />
          <rect x="4" y="14" width="24" height="2" rx="1" fill="#4CD964" />
          <text x="4" y="26" fontSize="8" fill="#4CD964">
            Card
          </text>
          <path
            d="M22 35 Q27 40 22 45"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Modal component */}
        <g transform="translate(220, 120)">
          <rect
            x="0"
            y="0"
            width="40"
            height="32"
            rx="8"
            stroke="#FFCC00"
            strokeWidth="2"
            fill="none"
          />
          <rect x="4" y="4" width="32" height="4" rx="2" fill="#FFCC00" />
          <rect
            x="4"
            y="12"
            width="24"
            height="2"
            rx="1"
            fill="#FFCC00"
            opacity="0.7"
          />
          <rect
            x="4"
            y="16"
            width="28"
            height="2"
            rx="1"
            fill="#FFCC00"
            opacity="0.7"
          />
          <circle cx="32" cy="8" r="2" fill="#FF3A2D" />
          <text x="8" y="28" fontSize="8" fill="#FFCC00">
            Modal
          </text>
          <path
            d="M20 37 Q25 42 20 47"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Form component */}
        <g transform="translate(100, 30)">
          <rect
            x="0"
            y="0"
            width="35"
            height="25"
            rx="4"
            stroke="#FF2D55"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="4"
            y="4"
            width="27"
            height="3"
            rx="1.5"
            fill="#FF2D55"
            opacity="0.7"
          />
          <rect
            x="4"
            y="9"
            width="27"
            height="3"
            rx="1.5"
            fill="#FF2D55"
            opacity="0.7"
          />
          <rect x="4" y="14" width="15" height="6" rx="3" fill="#FF2D55" />
          <text x="6" y="31" fontSize="8" fill="#FF2D55">
            Form
          </text>
          <path
            d="M17 -5 Q22 -10 17 -15"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* Navigation component */}
        <g transform="translate(240, 100)">
          <rect
            x="0"
            y="0"
            width="30"
            height="20"
            rx="3"
            stroke="#34AADC"
            strokeWidth="2"
            fill="none"
          />
          <rect x="3" y="3" width="6" height="2" rx="1" fill="#34AADC" />
          <rect x="12" y="3" width="6" height="2" rx="1" fill="#34AADC" />
          <rect x="21" y="3" width="6" height="2" rx="1" fill="#34AADC" />
          <rect
            x="3"
            y="8"
            width="24"
            height="1"
            rx="0.5"
            fill="#34AADC"
            opacity="0.5"
          />
          <rect
            x="3"
            y="12"
            width="24"
            height="5"
            rx="2"
            fill="#34AADC"
            opacity="0.3"
          />
          <text x="3" y="28" fontSize="8" fill="#34AADC">
            Nav
          </text>
          <path
            d="M15 -3 Q20 -8 15 -13"
            stroke="#34AADC"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </g>
      </g>

      {/* Content inventory */}
      <g transform="translate(40, 30)">
        <rect
          x="0"
          y="0"
          width="80"
          height="60"
          rx="6"
          stroke="#007AFF"
          strokeWidth="1"
          fill="#007AFF"
          opacity="0.1"
        />
        <text x="20" y="12" fontSize="10" fill="#007AFF">
          Contents:
        </text>
        <g fontSize="8" fill="#007AFF">
          <text x="8" y="22">
            • 30+ Components
          </text>
          <text x="8" y="30">
            • Dark/Light themes
          </text>
          <text x="8" y="38">
            • TypeScript
          </text>
          <text x="8" y="46">
            • Accessibility
          </text>
          <text x="8" y="54">
            • Documentation
          </text>
        </g>
      </g>

      {/* Magic sparkles */}
      <g fill="#FFCC00" opacity="0.8">
        <circle cx="140" cy="40" r="2" />
        <circle cx="180" cy="35" r="1.5" />
        <circle cx="120" cy="140" r="1" />
        <circle cx="260" cy="80" r="1.5" />
        <circle cx="70" cy="100" r="1" />

        <path d="M140 35 L142 40 L140 45 L138 40 Z" />
        <path d="M180 30 L181.5 35 L180 40 L178.5 35 Z" />
        <path d="M260 75 L261.5 80 L260 85 L258.5 80 Z" />
      </g>
    </svg>
  );
}
