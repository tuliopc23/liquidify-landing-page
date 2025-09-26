export default function UXUI() {
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
        width="24"
        height="16"
        rx="3"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />

      <rect x="7" y="9" width="4" height="2" rx="1" fill="#606060" />
      <rect x="7" y="12" width="6" height="2" rx="1" fill="#606060" />
      <rect x="7" y="15" width="3" height="2" rx="1" fill="#606060" />

      <circle
        cx="20"
        cy="11"
        r="2"
        stroke="#606060"
        strokeWidth="1.5"
        fill="none"
      />
      <rect x="18" y="15" width="4" height="2" rx="1" fill="#606060" />

      <path d="M16 24L13 28H19L16 24Z" fill="#808080" />
      <rect x="12" y="28" width="8" height="2" rx="1" fill="#808080" />

      <circle cx="9" cy="3" r="1" fill="#404040" />
      <circle cx="23" cy="3" r="1" fill="#404040" />
      <path
        d="M9 3C11 1 21 1 23 3"
        stroke="#404040"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}
