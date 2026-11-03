import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import Section from "../components/Section.jsx";
import Img from "../components/Img.jsx";
import Lightbox from "../components/Lightbox.jsx";
import useReveal from "../hooks/useReveal.js";
import { galleryImages, galleryPage } from "../data/gallery.js";
import "./Gallery.css";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const triggers = useRef([]);
  const lastActive = useRef(null);

  useReveal();

  // Return focus to the photo that was open, once the modal is gone.
  useEffect(() => {
    if (active !== null) lastActive.current = active;
    else if (lastActive.current !== null) triggers.current[lastActive.current]?.focus();
  }, [active]);

  const close = () => setActive(null);

  return (
    <>
      <PageTitle title="Gallery" description="Photos of the fire, the food and the room at Saffron & Smoke, a modern West African grill in Lagos." />
      <PageHero eyebrow={galleryPage.eyebrow} title={galleryPage.title} lede={galleryPage.lede} />

      <Section className="gallery-section">
        <ul className="gallery">
          {galleryImages.map((image, i) => (
            <li
              key={image.src}
              className={`gallery__item reveal${image.feature ? " gallery__item--feature" : ""}`}
              style={{ "--cols": image.cols, "--rows": image.rows, "--d": `${(i % 4) * 80}ms` }}
            >
              <button
                ref={(el) => (triggers.current[i] = el)}
                type="button"
                className="gallery__btn"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${image.caption}`}
              >
                <Img src={image.src} alt={image.alt} ratio="auto" label={image.caption} />
                <span className="gallery__caption" aria-hidden="true">
                  <span>{image.caption}</span>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {active !== null && <Lightbox images={galleryImages} index={active} onChange={setActive} onClose={close} />}
    </>
  );
}
