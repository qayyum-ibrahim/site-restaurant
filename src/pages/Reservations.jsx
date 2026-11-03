import { useEffect, useMemo, useRef, useState } from "react";
import PageTitle from "../components/PageTitle.jsx";
import PageHero from "../components/PageHero.jsx";
import Section from "../components/Section.jsx";
import Button from "../components/Button.jsx";
import useReveal from "../hooks/useReveal.js";
import { hours, site } from "../data/site.js";
import {
  lastSeatingBuffer,
  maxGuests,
  reservationsAside,
  reservationsPage,
  reservationsSuccess,
  timeSlots,
} from "../data/reservations.js";
import { formatTime } from "../utils/openStatus.js";
import "./Reservations.css";

const empty = { name: "", phone: "", date: "", time: "", guests: "2", note: "" };
const NOTE_MAX = 300;

const toMinutes = (t) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};

const pad = (n) => String(n).padStart(2, "0");
const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const parseDate = (iso) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
};

// Slots for the chosen date, from opening time to the last seating.
function slotsFor(iso) {
  if (!iso) return [];
  const day = hours.find((h) => h.day === parseDate(iso).getDay());
  if (!day?.open) return [];
  const open = toMinutes(day.open);
  let close = toMinutes(day.close);
  if (close < open) close += 24 * 60;
  return timeSlots.filter((t) => {
    const m = toMinutes(t);
    return m >= open && m <= close - lastSeatingBuffer;
  });
}

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your full name.";
  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone.trim()) errors.phone = "Enter a phone number so we can confirm.";
  else if (!/^\+?[\d\s()-]+$/.test(values.phone.trim()) || digits.length < 10 || digits.length > 15)
    errors.phone = "Enter a valid phone number, for example +234 800 000 0000.";
  if (!values.date) errors.date = "Choose a date.";
  else if (values.date < todayISO()) errors.date = "Choose today or a later date.";
  else if (!slotsFor(values.date).length) errors.date = "We are closed on Mondays. Choose another day.";
  if (!errors.date && !values.time) errors.time = "Choose a time.";
  const guests = Number(values.guests);
  if (!guests || guests < 1 || guests > maxGuests) errors.guests = `Choose between 1 and ${maxGuests} guests.`;
  if (values.note.length > NOTE_MAX) errors.note = `Keep the note under ${NOTE_MAX} characters.`;
  return errors;
}

const fieldOrder = ["name", "phone", "date", "time", "guests", "note"];

function Field({ id, label, hint, error, children }) {
  return (
    <div className={`field${error ? " has-error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {hint && !error && (
        <p className="field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.3" />
            <path d="M8 4.5v4.2M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

export default function Reservations() {
  useReveal();
  const [values, setValues] = useState(empty);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [booking, setBooking] = useState(null);
  const formRef = useRef(null);
  const successRef = useRef(null);

  const errors = useMemo(() => validate(values), [values]);
  const slots = useMemo(() => slotsFor(values.date), [values.date]);
  const show = (name) => (submitted || touched[name]) && errors[name];

  useEffect(() => {
    if (booking) successRef.current?.focus();
  }, [booking]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => {
      const next = { ...v, [name]: value };
      // Drop a time that is not offered on the newly chosen day.
      if (name === "date" && next.time && !slotsFor(value).includes(next.time)) next.time = "";
      return next;
    });
  };

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const first = fieldOrder.find((f) => errors[f]);
    if (first) {
      formRef.current?.elements[first]?.focus();
      return;
    }
    setBooking({ ...values });
  };

  const reset = () => {
    setValues(empty);
    setTouched({});
    setSubmitted(false);
    setBooking(null);
  };

  const describe = (name, hint) =>
    show(name) ? `${name}-error` : hint ? `${name}-hint` : undefined;

  const successText = booking
    ? reservationsSuccess.body
        .replace("{name}", booking.name.trim().split(/\s+/)[0])
        .replace("{guests}", `${booking.guests} ${booking.guests === "1" ? "guest" : "guests"}`)
        .replace(
          "{date}",
          parseDate(booking.date).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" })
        )
        .replace("{time}", formatTime(booking.time))
        .replace("{phone}", booking.phone.trim())
    : "";

  const errorCount = Object.keys(errors).length;

  return (
    <>
      <PageTitle
        title="Reservations"
        description="Reserve a table at Saffron & Smoke, a modern West African grill in Lagos. Choose a date, time and party size."
      />
      <PageHero eyebrow={reservationsPage.eyebrow} title={reservationsPage.title} lede={reservationsPage.lede} />

      <Section className="booking" aria-label="Booking form">
        <div className="booking__grid">
          <div className="booking__panel reveal">
            {booking ? (
              <div className="booking__success" aria-live="polite">
                <span className="booking__check" aria-hidden="true">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="m15 24.5 6 6 12-13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h2 ref={successRef} tabIndex={-1}>
                  {reservationsSuccess.title}
                </h2>
                <p>{successText}</p>
                <p className="booking__demo">{reservationsSuccess.note}</p>
                <Button variant="ghost" onClick={reset}>
                  {reservationsSuccess.again}
                </Button>
              </div>
            ) : (
              <form ref={formRef} className="booking__form" onSubmit={onSubmit} noValidate>
                {submitted && errorCount > 0 && (
                  <p className="booking__summary" role="alert">
                    Please fix {errorCount === 1 ? "1 field" : `${errorCount} fields`} below.
                  </p>
                )}

                <Field id="name" label="Full name" error={show("name")}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(show("name"))}
                    aria-describedby={describe("name")}
                    required
                  />
                </Field>

                <Field id="phone" label="Phone" hint="We call to confirm on the day." error={show("phone")}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="+234 800 000 0000"
                    value={values.phone}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(show("phone"))}
                    aria-describedby={describe("phone", true)}
                    required
                  />
                </Field>

                <div className="booking__row">
                  <Field id="date" label="Date" hint="Closed on Mondays." error={show("date")}>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={todayISO()}
                      value={values.date}
                      onChange={onChange}
                      onBlur={onBlur}
                      aria-invalid={Boolean(show("date"))}
                      aria-describedby={describe("date", true)}
                      required
                    />
                  </Field>

                  <Field
                    id="time"
                    label="Time"
                    hint={values.date ? undefined : "Choose a date first."}
                    error={show("time")}
                  >
                    <div className="select">
                      <select
                        id="time"
                        name="time"
                        value={values.time}
                        onChange={onChange}
                        onBlur={onBlur}
                        disabled={!slots.length}
                        aria-invalid={Boolean(show("time"))}
                        aria-describedby={describe("time", !values.date)}
                        required
                      >
                        <option value="">Select a time</option>
                        {slots.map((t) => (
                          <option key={t} value={t}>
                            {formatTime(t)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Field>

                  <Field id="guests" label="Guests" error={show("guests")}>
                    <div className="select">
                      <select
                        id="guests"
                        name="guests"
                        value={values.guests}
                        onChange={onChange}
                        onBlur={onBlur}
                        aria-invalid={Boolean(show("guests"))}
                        aria-describedby={describe("guests")}
                        required
                      >
                        {Array.from({ length: maxGuests }, (_, i) => String(i + 1)).map((n) => (
                          <option key={n} value={n}>
                            {n} {n === "1" ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </Field>
                </div>

                <Field
                  id="note"
                  label="Note (optional)"
                  hint={`Allergies, a birthday, a quiet corner. ${values.note.length}/${NOTE_MAX}`}
                  error={show("note")}
                >
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    value={values.note}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(show("note"))}
                    aria-describedby={describe("note", true)}
                  />
                </Field>

                <div className="booking__submit">
                  <Button type="submit">Reserve a table</Button>
                  <p className="booking__fine">No payment needed. Nothing is sent: this is a demo form.</p>
                </div>
              </form>
            )}
          </div>

          <aside className="booking__aside reveal" style={{ "--d": "120ms" }} aria-labelledby="aside-title">
            <h2 id="aside-title">{reservationsAside.title}</h2>
            <dl>
              {reservationsAside.items.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd className="muted">{item.text}</dd>
                </div>
              ))}
            </dl>
            <p className="booking__call">
              <span className="muted">Rather talk to us?</span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
