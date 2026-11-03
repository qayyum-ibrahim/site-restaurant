import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav, reserveLink } from "../data/site.js";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (e.key === "Tab" && panelRef.current) {
        const items = [toggleRef.current, ...panelRef.current.querySelectorAll("a")];
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`header${scrolled || open ? " is-solid" : ""}${open ? " is-open" : ""}`}>
      <div className="container header__bar">
        <Logo />

        <nav className="header__nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className="header__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button to={reserveLink.to} variant="primary" className="btn--small header__cta">
          {reserveLink.label}
        </Button>

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className="header__panel" hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.to} style={{ "--i": i }}>
                <NavLink to={item.to} end={item.to === "/"} className="header__panel-link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button to={reserveLink.to} variant="primary" className="header__panel-cta">
          {reserveLink.label}
        </Button>
      </div>
    </header>
  );
}
