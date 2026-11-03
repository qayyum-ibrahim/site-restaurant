export const site = {
  name: "Saffron & Smoke",
  tagline: "Modern West African grill",
  city: "Lagos",
  address: "14 Ember Lane, Victoria Island, Lagos",
  phone: "+234 800 000 0000",
  email: "hello@saffronandsmoke.example",
};

export const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/our-story", label: "Our Story" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export const reserveLink = { to: "/reservations", label: "Reserve a table" };

// Opening hours. day: 0 = Sunday. Times are 24h "HH:MM". null = closed.
export const hours = [
  { day: 1, label: "Monday", open: null, close: null },
  { day: 2, label: "Tuesday", open: "17:00", close: "23:00" },
  { day: 3, label: "Wednesday", open: "17:00", close: "23:00" },
  { day: 4, label: "Thursday", open: "17:00", close: "23:00" },
  { day: 5, label: "Friday", open: "12:00", close: "00:30" },
  { day: 6, label: "Saturday", open: "12:00", close: "00:30" },
  { day: 0, label: "Sunday", open: "12:00", close: "22:00" },
];

// Short grouped version for strips and teasers.
export const hoursSummary = [
  { days: "Tue to Thu", time: "5pm to 11pm" },
  { days: "Fri and Sat", time: "12pm to 12:30am" },
  { days: "Sunday", time: "12pm to 10pm" },
  { days: "Monday", time: "Closed" },
];
