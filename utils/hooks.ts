"use client"
import { Event } from "../types";
import { useEffect, useState } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  const fetchEventList = () => {
    fetch("/api/events/")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data.eventList);
      });
  };

  useEffect(() => {
    fetchEventList();
  }, []);

  return [events] as const;
};
