export default function Prototyping() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4"
        y="6"
        width="8"
        height="12"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="20"
        y="6"
        width="8"
        height="12"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />

      <rect x="6" y="8" width="4" height="1.5" rx="0.5" fill="#606060" />
      <rect x="6" y="10.5" width="3" height="1.5" rx="0.5" fill="#606060" />
      <rect x="6" y="13" width="4" height="1.5" rx="0.5" fill="#606060" />

      <rect x="22" y="8" width="4" height="1.5" rx="0.5" fill="#606060" />
      <rect x="22" y="10.5" width="3" height="1.5" rx="0.5" fill="#606060" />
      <rect x="22" y="13" width="4" height="1.5" rx="0.5" fill="#606060" />

      <path
        d="M13 12L17 12"
        stroke="#404040"
        strokeWidth="2"
        strokeLinecap="round"
        markerEnd="url(#arrowhead)"
      />

      <circle
        cx="8"
        cy="22"
        r="2"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="16"
        cy="26"
        r="2"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="24"
        cy="22"
        r="2"
        stroke="#808080"
        strokeWidth="1.5"
        fill="none"
      />

      <path
        d="M10 22L14 24M18 26L22 24"
        stroke="#808080"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" fill="#404040" />
        </marker>
      </defs>
    </svg>
  );
}
