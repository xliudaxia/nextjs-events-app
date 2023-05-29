import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/data/dummy-data";
import NewsletterRegistration from "@/components/input/NewsletterRegistration";

export default function Home() {
  const events = getAllEvents()
  return (
    <main>
      <NewsletterRegistration />
      <EventList items={events} />
    </main>
  );
}
