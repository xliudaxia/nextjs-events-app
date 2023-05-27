"use client"
import React from "react";
import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/data/dummy-data";
import EventSearch from "@/components/events/EventSearch";
import { useRouter } from "next/navigation";

const Events = () => {
  const router = useRouter()
  const featuredEvents = getFeaturedEvents();

  const findEventsHandler = (year:string, month: string) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }
  return (
    <main>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={featuredEvents} />
    </main>
  );
};

export default Events;
