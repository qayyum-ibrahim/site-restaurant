import { useState } from "react";
import "./Img.css";

// Shows /images/<src>. If the file is missing or fails, a brand-colored fallback is shown.
export default function Img({ src, alt, ratio = "4 / 3", className = "", label, eager = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`img ${className}`} style={{ aspectRatio: ratio }}>
      {!failed ? (
        <img
          src={`/images/${src}`}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="img__fallback" role="img" aria-label={alt}>
          <svg className="img__mark" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 10c3 9 13 14 13 27a13 13 0 0 1-26 0c0-7 4-11 7-15 1 5 3 7 6 8-2-7-2-13 0-20z" />
          </svg>
          {label && <span className="img__label">{label}</span>}
        </div>
      )}
    </div>
  );
}
