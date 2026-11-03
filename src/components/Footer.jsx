import { Link } from "react-router-dom";
import { nav, reserveLink, site } from "../data/site.js";
import Logo from "./Logo.jsx";
import "./Footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="muted">
            {site.tagline} in {site.city}. Fire, spice and candlelight.
          </p>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h2 className="footer__title">Explore</h2>
          <ul>
            {[...nav, reserveLink].map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__title">Visit</h2>
          <address>
            <p>{site.address}</p>
            <p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </address>
        </div>
      </div>

      <div className="container footer__base">
        <p>
          &copy; {year} {site.name}
        </p>
        <p className="footer__demo">Demo project. This is not a real business.</p>
      </div>
    </footer>
  );
}
