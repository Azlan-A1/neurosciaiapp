export default function Logo({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7cf6c8" />
          <stop offset="1" stopColor="#9b8cff" />
        </linearGradient>
      </defs>
      <path
        d="M16 3c3.5 0 6 2.2 6 5.2 0 .7-.1 1.3-.4 1.9 2.5.7 4.4 2.9 4.4 5.6 0 1.4-.5 2.6-1.3 3.6 1.1.9 1.8 2.2 1.8 3.7 0 2.7-2.4 4.9-5.3 4.9-1.4 0-2.6-.5-3.5-1.3-.5.4-1 .7-1.7.9V18M16 3c-3.5 0-6 2.2-6 5.2 0 .7.1 1.3.4 1.9C7.9 10.8 6 13 6 15.7c0 1.4.5 2.6 1.3 3.6-1.1.9-1.8 2.2-1.8 3.7 0 2.7 2.4 4.9 5.3 4.9 1.4 0 2.6-.5 3.5-1.3.5.4 1 .7 1.7.9V18"
        stroke="url(#lg)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18" r="1.5" fill="#7cf6c8" />
    </svg>
  )
}
