"use client"
import { Event } from "../types";
import { useEffect, useState } from "react";

export const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEventList = () => {
    fetch("/api/events/")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setEvents(data.eventList);
      });
  };

  useEffect(() => {
    fetchEventList();
  }, []);

  return [events, isLoading] as const;
};
