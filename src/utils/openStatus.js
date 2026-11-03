import { hours } from "../data/site.js";

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const formatTime = (t) => {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "pm" : "am";
  const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, "0")}${suffix}` : `${h12}${suffix}`;
};

// Current day (0 = Sunday) and minutes past midnight in Lagos, whatever the visitor's time zone.
function lagosNow(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lagos",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

const byDay = (day) => hours.find((h) => h.day === day);

// Returns { open, today, label } where label is a short sentence for the badge.
export function getOpenStatus(date = new Date()) {
  const { day, minutes } = lagosNow(date);
  const today = byDay(day);
  const yesterday = byDay((day + 6) % 7);

  // A late close (after midnight) from yesterday still counts.
  if (yesterday.open && toMinutes(yesterday.close) < toMinutes(yesterday.open) && minutes < toMinutes(yesterday.close)) {
    return { open: true, today: day, label: `Open now until ${formatTime(yesterday.close)}` };
  }

  if (today.open) {
    const open = toMinutes(today.open);
    let close = toMinutes(today.close);
    if (close < open) close += 24 * 60;
    if (minutes >= open && minutes < close) {
      return { open: true, today: day, label: `Open now until ${formatTime(today.close)}` };
    }
    if (minutes < open) {
      return { open: false, today: day, label: `Closed now. Opens today at ${formatTime(today.open)}` };
    }
  }

  for (let i = 1; i <= 7; i++) {
    const next = byDay((day + i) % 7);
    if (next.open) {
      const when = i === 1 ? "tomorrow" : next.label;
      return { open: false, today: day, label: `Closed now. Opens ${when} at ${formatTime(next.open)}` };
    }
  }
  return { open: false, today: day, label: "Closed now" };
}

export { formatTime };
