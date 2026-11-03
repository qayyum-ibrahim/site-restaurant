import PageTitle from "./PageTitle.jsx";
import Section from "./Section.jsx";

// Temporary page body until the page is built in its phase.
export default function Placeholder({ title, h1, description }) {
  return (
    <>
      <PageTitle title={title} description={description} />
      <Section className="placeholder">
        <span className="eyebrow">Saffron &amp; Smoke</span>
        <h1>{h1 ?? title}</h1>
      </Section>
    </>
  );
}
