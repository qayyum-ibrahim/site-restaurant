export default function Arrow({ dir = "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" className={`arrow arrow--${dir}`}>
      <path d="M4 12h15m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
