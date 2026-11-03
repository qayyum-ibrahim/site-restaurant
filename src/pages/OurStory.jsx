import PageTitle from "../components/PageTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import Img from "../components/Img.jsx";
import useReveal from "../hooks/useReveal.js";
import { reserveLink } from "../data/site.js";
import { storyCta, storyPage, storySections, storyValues } from "../data/story.js";
import "./OurStory.css";

export default function OurStory() {
  useReveal();

  return (
    <>
      <PageTitle title="Our Story" description="The chef, the idea and the fire behind Saffron & Smoke, a modern West African grill in Lagos." />
      <PageHero eyebrow={storyPage.eyebrow} title={storyPage.title} lede={storyPage.lede} />

      {storySections.map((section, i) => (
        <Section
          key={section.id}
          id={section.id}
          tone={i % 2 ? "surface" : "default"}
          className={`chapter${i % 2 ? " chapter--flip" : ""}`}
          aria-labelledby={`${section.id}-title`}
        >
          <div className="chapter__grid">
            <div className="chapter__media reveal">
              <Img src={section.image.src} alt={section.image.alt} ratio={i === 1 ? "3 / 2" : "4 / 5"} label={section.image.label} />
              <span className="chapter__num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="chapter__text reveal" style={{ "--d": "120ms" }}>
              <span className="eyebrow">{section.eyebrow}</span>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.body.map((p) => (
                <p key={p} className="muted">
                  {p}
                </p>
              ))}
              {section.quote && (
                <blockquote className="chapter__quote">
                  <p>&ldquo;{section.quote}&rdquo;</p>
                </blockquote>
              )}
            </div>
          </div>
        </Section>
      ))}

      <section className="story-stats" aria-label="By the numbers">
        <div className="container">
          <dl className="story-stats__grid">
            {storyValues.map((item, i) => (
              <div key={item.label} className="reveal" style={{ "--d": `${i * 100}ms` }}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Section narrow className="story-cta" aria-labelledby="story-cta-title">
        <div className="story-cta__inner reveal">
          <h2 id="story-cta-title">{storyCta.title}</h2>
          <div className="story-cta__actions">
            <Button to={reserveLink.to}>{storyCta.button}</Button>
            <Button to="/menu" variant="ghost">
              {storyCta.secondary}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
