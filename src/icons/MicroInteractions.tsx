export default function MicroInteractions() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central interaction point */}
      <g transform="translate(160, 90)">
        <circle
          cx="0"
          cy="0"
          r="15"
          stroke="#FF9500"
          strokeWidth="3"
          fill="#FF9500"
          opacity="0.3"
        />
        <circle cx="0" cy="0" r="8" fill="#FF9500" />

        {/* Ripple effects */}
        <circle
          cx="0"
          cy="0"
          r="25"
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
        <circle
          cx="0"
          cy="0"
          r="35"
          stroke="#FF9500"
          strokeWidth="1"
          fill="none"
          opacity="0.4"
        />
        <circle
          cx="0"
          cy="0"
          r="45"
          stroke="#FF9500"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
        />
      </g>

      {/* Interaction elements around the center */}
      <g>
        {/* Hover state */}
        <g transform="translate(80, 50)">
          <rect
            x="0"
            y="0"
            width="40"
            height="20"
            rx="10"
            stroke="#5AC8FA"
            strokeWidth="2"
            fill="none"
          />
          <rect
            x="5"
            y="5"
            width="30"
            height="10"
            rx="5"
            fill="#5AC8FA"
            opacity="0.5"
          />
          <path
            d="M20 -10 L20 -5"
            stroke="#5AC8FA"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Click/tap animation */}
        <g transform="translate(200, 50)">
          <circle
            cx="20"
            cy="10"
            r="12"
            stroke="#4CD964"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="20" cy="10" r="6" fill="#4CD964" />
          <path
            d="M12 2 L8 -2 M28 2 L32 -2 M12 18 L8 22 M28 18 L32 22"
            stroke="#4CD964"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Swipe gesture */}
        <g transform="translate(60, 130)">
          <path
            d="M0 0 Q20 -10 40 0 Q60 10 80 0"
            stroke="#FFCC00"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <polygon points="75,-2 80,0 75,2" fill="#FFCC00" />
          <circle cx="10" cy="0" r="3" fill="#FFCC00" opacity="0.8" />
          <circle cx="30" cy="-5" r="2" fill="#FFCC00" opacity="0.6" />
          <circle cx="50" cy="5" r="2" fill="#FFCC00" opacity="0.4" />
        </g>

        {/* Loading state */}
        <g transform="translate(200, 130)">
          <circle
            cx="20"
            cy="0"
            r="10"
            stroke="#007AFF"
            strokeWidth="3"
            fill="none"
            strokeDasharray="15,5"
          />
          <circle cx="20" cy="0" r="4" fill="#007AFF" />
        </g>
      </g>

      {/* Connection lines */}
      <path
        d="M100 60 Q140 80 145 90"
        stroke="#34AADC"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3,2"
      />
      <path
        d="M220 60 Q180 80 175 90"
        stroke="#34AADC"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3,2"
      />
      <path
        d="M100 130 Q140 110 145 90"
        stroke="#34AADC"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3,2"
      />
      <path
        d="M220 130 Q180 110 175 90"
        stroke="#34AADC"
        strokeWidth="1"
        fill="none"
        strokeDasharray="3,2"
      />
    </svg>
  );
}
