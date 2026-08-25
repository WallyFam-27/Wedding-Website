export function Flourish({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 180 18"
      className={`mx-auto h-4 w-40 text-gold ${className}`}
      fill="none"
    >
      <path
        d="M4 9h62M114 9h62"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M90 2.5c-4.5 3.2-8 6.5-8 6.5s3.5 3.3 8 6.5c4.5-3.2 8-6.5 8-6.5S94.5 5.7 90 2.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  )
}
