"use client"
import React from "react";
import EventList from "@/components/events/EventList";
import EventSearch from "@/components/events/EventSearch";
import { useRouter } from "next/navigation";
import { useEvents } from "@/utils/hooks";

const Events = () => {
  const router = useRouter()
  const [events] = useEvents();
  const findEventsHandler = (year:string, month: string) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <main>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </main>
  );
};

export default Events;
