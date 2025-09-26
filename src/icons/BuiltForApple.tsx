export default function BuiltForApple() {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 320 180"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Apple ecosystem devices */}
      <g transform="translate(40, 30)">
        {/* iPhone */}
        <rect
          x="0"
          y="40"
          width="50"
          height="90"
          rx="12"
          stroke="#FF3B30"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="8"
          y="48"
          width="34"
          height="60"
          rx="4"
          fill="#FF3B30"
          opacity="0.3"
        />
        <circle cx="25" cy="118" r="4" fill="#FF3B30" />

        {/* iPad */}
        <rect
          x="70"
          y="20"
          width="80"
          height="110"
          rx="16"
          stroke="#FF3B30"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="78"
          y="28"
          width="64"
          height="84"
          rx="6"
          fill="#FF3B30"
          opacity="0.3"
        />
        <circle cx="110" cy="122" r="4" fill="#FF3B30" />

        {/* MacBook */}
        <path
          d="M170 70 L240 70 L238 100 L172 100 Z"
          stroke="#FF3B30"
          strokeWidth="3"
          fill="none"
        />
        <rect
          x="178"
          y="78"
          width="54"
          height="34"
          rx="2"
          fill="#FF3B30"
          opacity="0.3"
        />
        <rect x="170" y="100" width="70" height="8" rx="4" fill="#FF3B30" />

        {/* Connection lines showing ecosystem */}
        <path
          d="M25 60 Q60 50 110 60"
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M110 80 Q140 70 205 85"
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
        <path
          d="M25 100 Q120 120 205 100"
          stroke="#FF9500"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4,4"
        />
      </g>

      {/* Apple logo abstraction */}
      <g transform="translate(280, 40)">
        <circle cx="0" cy="0" r="8" fill="#FF3B30" />
        <path
          d="M-4 -8 Q0 -12 4 -8"
          stroke="#FF3B30"
          strokeWidth="2"
          fill="none"
        />
      </g>
    </svg>
  );
}
