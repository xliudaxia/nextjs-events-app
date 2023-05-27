import EventList from "@/components/events/EventList";
import { getAllEvents } from "@/data/dummy-data";

export default function Home() {
  const events = getAllEvents()
  return (
    <main>
      <EventList items={events} />
    </main>
  );
}
