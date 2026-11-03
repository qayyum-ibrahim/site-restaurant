import { Link } from "react-router-dom";
import { site } from "../data/site.js";

export default function Logo({ onClick }) {
  return (
    <Link to="/" className="logo" onClick={onClick} aria-label={`${site.name}, home`}>
      <svg className="logo__mark" viewBox="0 0 64 64" aria-hidden="true">
        <path d="M32 6c3.5 10 15 15.5 15 30a15 15 0 0 1-30 0c0-8 4.5-12.5 8-17 1 5.5 3.5 8 7 9-2.5-8-2.5-14.5 0-22z" fill="var(--color-accent)" />
        <path d="M32 33c2.2 4.4 6.5 6.6 6.5 12a6.5 6.5 0 0 1-13 0c0-4.4 4.3-6.6 6.5-12z" fill="var(--color-gold)" />
      </svg>
      <span className="logo__word">
        Saffron <em>&amp;</em> Smoke
      </span>
    </Link>
  );
}
