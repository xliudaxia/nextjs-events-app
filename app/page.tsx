"use client"
import EventList from "@/components/events/EventList";
import NewsletterRegistration from "@/components/input/NewsletterRegistration";
import { useEvents } from "../utils/hooks";

export default function Home() {
  const [events] = useEvents();

  return (
    <main>
      <NewsletterRegistration />
      <EventList items={events} />
    </main>
  );
}
