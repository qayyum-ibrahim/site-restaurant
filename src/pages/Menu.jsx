import { useRef } from "react";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import useReveal from "../hooks/useReveal.js";
import { categories, formatPrice, menu, menuPage, tagLabels } from "../data/menu.js";
import { reserveLink } from "../data/site.js";
import "./Menu.css";

const slug = (name) => name.toLowerCase();

function TagIcon({ tag }) {
  if (tag === "spicy") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 5c0-1.5 1-2.5 2.5-2.5M9 9c2-3 7-3 8 1 1 5-4 11-11 11 3-3 1-8 3-12z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 19C5 10 11 5 20 4c0 9-5 15-14 15zm0 0 8-8" />
    </svg>
  );
}

function Flame() {
  return (
    <svg viewBox="0 0 64 64" className="menu-item__flame" aria-hidden="true">
      <path d="M32 6c3.5 10 15 15.5 15 30a15 15 0 0 1-30 0c0-8 4.5-12.5 8-17 1 5.5 3.5 8 7 9-2.5-8-2.5-14.5 0-22z" />
    </svg>
  );
}

export default function Menu() {
  const [params, setParams] = useSearchParams();
  const tabRefs = useRef([]);
  const current = categories.find((c) => slug(c) === params.get("c")) ?? categories[0];
  const items = menu.filter((item) => item.category === current);

  useReveal([current]);

  const select = (cat, focus = false) => {
    setParams(cat === categories[0] ? {} : { c: slug(cat) }, { replace: true, preventScrollReset: true });
    if (focus) tabRefs.current[categories.indexOf(cat)]?.focus();
  };

  const onKeyDown = (e) => {
    const i = categories.indexOf(current);
    const last = categories.length - 1;
    const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(categories[next], true);
  };

  return (
    <>
      <PageTitle
        title="Menu"
        description="Starters, grill, mains, sides, desserts and drinks at Saffron & Smoke, a modern West African grill in Lagos."
      />
      <PageHero eyebrow={menuPage.eyebrow} title={menuPage.title} lede={menuPage.lede} />

      <div className="menu-tabs">
        <div className="container">
          <div className="menu-tabs__list" role="tablist" aria-label="Menu categories" onKeyDown={onKeyDown}>
            {categories.map((cat, i) => {
              const selected = cat === current;
              return (
                <button
                  key={cat}
                  ref={(el) => (tabRefs.current[i] = el)}
                  type="button"
                  role="tab"
                  id={`tab-${slug(cat)}`}
                  aria-selected={selected}
                  aria-controls="menu-panel"
                  tabIndex={selected ? 0 : -1}
                  className="menu-tabs__tab"
                  onClick={() => select(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <Section className="menu-section">
        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${slug(current)}`} tabIndex={0} className="menu-panel" key={current}>
          <div className="menu-panel__head">
            <h2>{current}</h2>
            <span className="menu-panel__count">{String(items.length).padStart(2, "0")} dishes</span>
          </div>

          <ul className="menu-list">
            {items.map((item, i) => (
              <li key={item.id} className="menu-item" style={{ "--i": i }}>
                <div className="menu-item__top">
                  <h3>
                    {item.signature && (
                      <>
                        <Flame />
                        <span className="visually-hidden">Signature dish: </span>
                      </>
                    )}
                    {item.name}
                  </h3>
                  <span className="menu-item__leader" aria-hidden="true" />
                  <span className="menu-item__price">{formatPrice(item.price)}</span>
                </div>
                <p className="muted">{item.description}</p>
                {item.tags.length > 0 && (
                  <ul className="menu-item__tags" aria-label="Dietary notes">
                    {item.tags.map((tag) => (
                      <li key={tag} className={`tag tag--${tag}`}>
                        <TagIcon tag={tag} />
                        {tagLabels[tag]}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="menu-foot reveal">
          <p className="muted">{menuPage.note}</p>
          <Button to={reserveLink.to}>{reserveLink.label}</Button>
        </div>
      </Section>
    </>
  );
}
