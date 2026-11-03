import "./PageHero.css";

// Top of an inner page: eyebrow, the page h1 and a short lede over an ember glow.
export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <header className="page-hero">
      <div className="container page-hero__inner">
        <span className="eyebrow page-hero__in" style={{ "--d": "0ms" }}>
          {eyebrow}
        </span>
        <h1 className="page-hero__in" style={{ "--d": "100ms" }}>
          {title}
        </h1>
        {lede && (
          <p className="page-hero__lede page-hero__in" style={{ "--d": "200ms" }}>
            {lede}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
