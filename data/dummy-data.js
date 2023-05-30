const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "AIGC Scenario Discussion",
    description:
      "AI Generated Content can fully leverage its technological advantages in creativity, expressiveness, iteration, dissemination, and personalization to create new forms of digital content generation and interaction.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/chatgpt.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/coding.jpg",
    isFeatured: false,
  },
  {
    id: "e3",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/duck.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  console.log("dateFilter", dateFilter);
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
