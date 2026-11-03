import "./Section.css";

export default function Section({ id, className = "", narrow = false, tone = "default", children, ...rest }) {
  return (
    <section id={id} className={`section section--${tone} ${className}`.trim()} {...rest}>
      <div className={`container${narrow ? " container--narrow" : ""}`}>{children}</div>
    </section>
  );
}
