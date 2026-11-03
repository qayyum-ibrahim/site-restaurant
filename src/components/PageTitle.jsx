import { useEffect } from "react";
import { site } from "../data/site.js";

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function PageTitle({ title, description }) {
  useEffect(() => {
    const full = title ? `${title} | ${site.name}` : `${site.name} | West African grill in Lagos`;
    document.title = full;
    setMeta('meta[property="og:title"]', "content", full);
    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
    }
  }, [title, description]);

  return null;
}
