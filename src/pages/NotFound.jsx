import PageTitle from "../components/PageTitle.jsx";
import Button from "../components/Button.jsx";
import { reserveLink } from "../data/site.js";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <PageTitle title="Page not found" description="This page does not exist. Head back to Saffron & Smoke, a modern West African grill in Lagos." />
      <section className="not-found" aria-labelledby="nf-title">
        <div className="not-found__glow" aria-hidden="true" />
        <div className="container not-found__inner">
          <span className="not-found__code" aria-hidden="true">
            404
          </span>
          <span className="eyebrow">Page not found</span>
          <h1 id="nf-title">This plate has left the kitchen</h1>
          <p className="muted">The page you are looking for does not exist or has moved. The fire is still burning, though.</p>
          <div className="not-found__actions">
            <Button to="/">Back to home</Button>
            <Button to="/menu" variant="ghost">
              See the menu
            </Button>
            <Button to={reserveLink.to} variant="ghost">
              {reserveLink.label}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
