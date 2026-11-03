import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";
import Arrow from "../components/Arrow.jsx";
import useReveal from "../hooks/useReveal.js";
import { hoursSummary, reserveLink, site } from "../data/site.js";
import { formatPrice, signatureDishes } from "../data/menu.js";
import { finalCta, hero, signatures, storyTeaser, visit } from "../data/home.js";
import "./Home.css";

export default function Home() {
  useReveal();

  return (
    <>
      <PageTitle
        title={null}
        description="Saffron & Smoke is a modern West African grill in Lagos. Fire-cooked suya, smoked jollof and charred seafood in a warm, candle-lit room."
      />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <Img src={hero.image.src} alt={hero.image.alt} ratio="auto" eager className="hero__img" />
        </div>
        <div className="hero__embers" aria-hidden="true" />
        <div className="container hero__inner">
          <span className="eyebrow hero__in" style={{ "--d": "0ms" }}>
            {hero.eyebrow}
          </span>
          <h1 id="hero-title" className="hero__title hero__in" style={{ "--d": "120ms" }}>
            Saffron <em>&amp;</em> Smoke
          </h1>
          <p className="hero__lede hero__in" style={{ "--d": "240ms" }}>
            {hero.lede}
          </p>
          <div className="hero__actions hero__in" style={{ "--d": "360ms" }}>
            <Button to={reserveLink.to}>{hero.primary}</Button>
            <Button to="/menu" variant="ghost">
              {hero.secondary}
            </Button>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      <Section className="story-teaser">
        <div className="story-teaser__grid">
          <div className="story-teaser__media reveal">
            <Img src={storyTeaser.image.src} alt={storyTeaser.image.alt} ratio="4 / 5" label="Over the coals" />
            <div className="story-teaser__stat">
              <strong>{storyTeaser.stat.value}</strong>
              <span>{storyTeaser.stat.label}</span>
            </div>
          </div>
          <div className="story-teaser__text reveal" style={{ "--d": "120ms" }}>
            <span className="eyebrow">{storyTeaser.eyebrow}</span>
            <h2>{storyTeaser.title}</h2>
            {storyTeaser.body.map((p) => (
              <p key={p} className="muted">
                {p}
              </p>
            ))}
            <Link to="/our-story" className="text-link">
              {storyTeaser.link} <Arrow />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="surface" className="signatures" aria-labelledby="signatures-title">
        <header className="signatures__head reveal">
          <div>
            <span className="eyebrow">{signatures.eyebrow}</span>
            <h2 id="signatures-title">{signatures.title}</h2>
          </div>
          <p className="muted">{signatures.intro}</p>
        </header>

        <ol className="dishes">
          {signatureDishes.map((dish, i) => (
            <li key={dish.id} className="dish reveal" style={{ "--d": `${(i % 3) * 100}ms` }}>
              <div className="dish__media">
                <Img src={dish.image} alt={dish.name} ratio="4 / 3" label={dish.name} />
                <span className="dish__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="dish__body">
                <div className="dish__top">
                  <h3>{dish.name}</h3>
                  <span className="dish__price">{formatPrice(dish.price)}</span>
                </div>
                <p className="muted">{dish.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="signatures__foot reveal">
          <Button to="/menu" variant="ghost">
            {signatures.link}
          </Button>
        </div>
      </Section>

      <section className="visit" aria-label={visit.eyebrow}>
        <div className="container visit__grid">
          <div className="visit__col reveal">
            <h2 className="visit__title">{visit.hoursTitle}</h2>
            <dl className="visit__hours">
              {hoursSummary.map((row) => (
                <div key={row.days}>
                  <dt>{row.days}</dt>
                  <dd className={row.time === "Closed" ? "is-closed" : undefined}>{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="visit__col reveal" style={{ "--d": "100ms" }}>
            <h2 className="visit__title">{visit.findTitle}</h2>
            <address>
              <p className="visit__big">{site.address}</p>
            </address>
            <Link to="/contact" className="text-link">
              {visit.directions} <Arrow />
            </Link>
          </div>
          <div className="visit__col reveal" style={{ "--d": "200ms" }}>
            <h2 className="visit__title">{visit.callTitle}</h2>
            <p className="visit__big">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="muted">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="final-cta__media">
          <Img src={finalCta.image.src} alt={finalCta.image.alt} ratio="auto" />
        </div>
        <div className="container container--narrow final-cta__inner reveal">
          <span className="eyebrow">{finalCta.eyebrow}</span>
          <h2 id="final-cta-title">{finalCta.title}</h2>
          <p>{finalCta.body}</p>
          <Button to={reserveLink.to}>{finalCta.button}</Button>
        </div>
      </section>
    </>
  );
}
