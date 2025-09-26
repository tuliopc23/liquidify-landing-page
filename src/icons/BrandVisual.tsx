export default function BrandVisual() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="10"
        stroke="#404040"
        strokeWidth="2"
        fill="none"
      />

      <path d="M16 8L20 12L16 16L12 12L16 8Z" fill="#606060" />
      <path d="M16 16L20 20L16 24L12 20L16 16Z" fill="#606060" />

      <circle cx="16" cy="6" r="1.5" fill="#808080" />
      <circle cx="26" cy="16" r="1.5" fill="#808080" />
      <circle cx="16" cy="26" r="1.5" fill="#808080" />
      <circle cx="6" cy="16" r="1.5" fill="#808080" />

      <path
        d="M22 10L24 8M10 22L8 24M22 22L24 24M10 10L8 8"
        stroke="#808080"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <circle cx="16" cy="16" r="2" fill="#404040" />
    </svg>
  );
}
