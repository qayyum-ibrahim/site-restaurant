import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import OpenBadge from "../components/OpenBadge.jsx";
import useReveal from "../hooks/useReveal.js";
import { hours, reserveLink, site } from "../data/site.js";
import { contactDetails, contactPage, mapBox } from "../data/contact.js";
import { formatTime, getOpenStatus } from "../utils/openStatus.js";
import "./Contact.css";

export default function Contact() {
  useReveal();
  const [today, setToday] = useState(() => getOpenStatus().today);

  useEffect(() => {
    const id = setInterval(() => setToday(getOpenStatus().today), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <PageTitle
        title="Contact"
        description="Opening hours, address and phone for Saffron & Smoke, a modern West African grill on Victoria Island, Lagos."
      />
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lede={contactPage.lede}>
        <OpenBadge className="page-hero__in contact__badge" />
      </PageHero>

      <Section className="contact" aria-label="Hours and location">
        <div className="contact__grid">
          <div className="contact__hours reveal">
            <h2>{contactDetails.hoursTitle}</h2>
            <table className="hours-table">
              <caption className="visually-hidden">Opening hours, Lagos time</caption>
              <thead className="visually-hidden">
                <tr>
                  <th scope="col">Day</th>
                  <th scope="col">Hours</th>
                </tr>
              </thead>
              <tbody>
                {hours.map((row) => (
                  <tr key={row.day} className={row.day === today ? "is-today" : undefined}>
                    <th scope="row">
                      {row.label}
                      {row.day === today && <span className="hours-table__today">Today</span>}
                    </th>
                    <td className={row.open ? undefined : "is-closed"}>
                      {row.open ? `${formatTime(row.open)} to ${formatTime(row.close)}` : "Closed"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="contact__note muted">{contactDetails.hoursNote}</p>
          </div>

          <div className="contact__side">
            <div className="contact__block reveal" style={{ "--d": "100ms" }}>
              <h2>{contactDetails.visitTitle}</h2>
              <address>
                <p className="contact__big">{site.address}</p>
              </address>
              <p className="muted">{contactDetails.parking}</p>
            </div>
            <div className="contact__block reveal" style={{ "--d": "200ms" }}>
              <h2>{contactDetails.callTitle}</h2>
              <p className="contact__big">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="muted">
                  {site.email}
                </a>
              </p>
              <Button to={reserveLink.to} className="contact__cta">
                {reserveLink.label}
              </Button>
            </div>
          </div>
        </div>

        <figure className="map reveal" aria-label={mapBox.label}>
          <svg className="map__art" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M40 0H0v40" fill="none" stroke="rgba(201,163,91,0.07)" strokeWidth="1" />
              </pattern>
              <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(224,114,47,0.35)" />
                <stop offset="100%" stopColor="rgba(224,114,47,0)" />
              </radialGradient>
            </defs>
            <rect width="1200" height="500" fill="#1a1411" />
            <rect width="1200" height="500" fill="url(#map-grid)" />
            {/* Lagoon */}
            <path d="M0 400 C 220 360, 380 440, 600 410 S 980 360, 1200 400 V 500 H 0 Z" fill="#17201f" />
            <path d="M0 400 C 220 360, 380 440, 600 410 S 980 360, 1200 400" fill="none" stroke="rgba(201,163,91,0.2)" />
            {/* Main roads */}
            <g fill="none" stroke="rgba(243,235,224,0.13)" strokeLinecap="round">
              <path d="M-20 170 C 300 150, 600 210, 1220 160" strokeWidth="16" />
              <path d="M420 -20 C 440 140, 400 260, 470 420" strokeWidth="12" />
              <path d="M860 -20 C 820 120, 880 260, 840 410" strokeWidth="12" />
            </g>
            {/* Side streets */}
            <g fill="none" stroke="rgba(243,235,224,0.07)" strokeWidth="5" strokeLinecap="round">
              <path d="M0 80 L 1200 60" />
              <path d="M0 290 C 300 270, 700 320, 1200 280" />
              <path d="M160 0 L 200 400" />
              <path d="M640 0 C 620 160, 680 260, 650 410" />
              <path d="M1040 0 L 1010 390" />
              <path d="M470 230 L 860 250" />
            </g>
            {/* Blocks */}
            <g fill="rgba(201,163,91,0.05)">
              <rect x="220" y="190" width="170" height="80" rx="4" />
              <rect x="690" y="80" width="140" height="70" rx="4" />
              <rect x="900" y="190" width="100" height="80" rx="4" />
              <rect x="40" y="100" width="100" height="50" rx="4" />
            </g>
            <circle cx="650" cy="240" r="140" fill="url(#map-glow)" />
          </svg>
          <div className="map__pin" aria-hidden="true">
            <span className="map__pin-dot" />
            <span className="map__pin-label">{mapBox.pin}</span>
          </div>
          <figcaption className="map__caption">
            <span>{mapBox.caption}</span>
            <span>{site.address}</span>
          </figcaption>
        </figure>
      </Section>
    </>
  );
}
