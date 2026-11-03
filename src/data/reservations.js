export const reservationsPage = {
  eyebrow: "Reservations",
  title: "Reserve a table",
  lede: "Tell us when you are coming and how many of you there are. We hold every table for 15 minutes.",
};

// Booking slots every 30 minutes. The form only offers the slots of the chosen day.
export const timeSlots = [
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00",
];

// Last seating is this many minutes before closing.
export const lastSeatingBuffer = 60;

export const maxGuests = 8;

export const reservationsAside = {
  title: "Good to know",
  items: [
    { term: "Larger groups", text: "For 9 or more guests, call us and we will set the long table by the grill." },
    { term: "Dietary needs", text: "Tell us about allergies in the note. Most dishes can be made without nuts or shellfish." },
    { term: "Running late", text: "Call ahead and we will do our best to keep your table." },
  ],
};

export const reservationsSuccess = {
  title: "Your table is held",
  body: "Thank you, {name}. We have noted a table for {guests} on {date} at {time}. We will call {phone} to confirm.",
  note: "This is a demo. No booking was made and nothing was sent.",
  again: "Make another booking",
};
