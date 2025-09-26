export default function LayoutGrid() {
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
        y="4"
        width="10"
        height="10"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="18"
        y="4"
        width="10"
        height="10"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="4"
        y="18"
        width="10"
        height="10"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />
      <rect
        x="18"
        y="18"
        width="10"
        height="10"
        rx="2"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />

      <line
        x1="16"
        y1="2"
        x2="16"
        y2="30"
        stroke="#606060"
        strokeWidth="1"
        strokeDasharray="2,2"
      />
      <line
        x1="2"
        y1="16"
        x2="30"
        y2="16"
        stroke="#606060"
        strokeWidth="1"
        strokeDasharray="2,2"
      />

      <circle cx="9" cy="9" r="1.5" fill="#808080" />
      <circle cx="23" cy="9" r="1.5" fill="#808080" />
      <circle cx="9" cy="23" r="1.5" fill="#808080" />
      <circle cx="23" cy="23" r="1.5" fill="#808080" />
    </svg>
  );
}
