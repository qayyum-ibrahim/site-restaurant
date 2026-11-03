import { useEffect, useState } from "react";
import { getOpenStatus } from "../utils/openStatus.js";
import "./OpenBadge.css";

// Live "Open now" badge, computed from the hours in src/data/site.js (Lagos time). Refreshes every minute.
export default function OpenBadge({ className = "" }) {
  const [status, setStatus] = useState(() => getOpenStatus());

  useEffect(() => {
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <p className={`open-badge ${status.open ? "is-open" : "is-closed"} ${className}`.trim()} role="status">
      <span className="open-badge__dot" aria-hidden="true" />
      {status.label}
    </p>
  );
}
