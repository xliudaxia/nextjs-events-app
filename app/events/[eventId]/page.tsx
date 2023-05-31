"use client"
import React, { Fragment } from "react";
import { useEvents } from "@/utils/hooks";
import Comments from "@/components/input/Comments";
import EventContent from "@/components/events/EventContent";
import EventLogistics from "@/components/events/EventLogistics";
import EventSummary from "@/components/events/EventSummary";

const EventDetail = ({ params }: { params: { eventId: string } }) => {
  const { eventId } = params;
  const [events] = useEvents();
  const eventArray = events.filter((event) => event.id === eventId);
  const event = eventArray[0];

  if (!event) {
    return <p>Loading</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent> {event.description}</EventContent>
      <Comments eventId={event.id} />
    </Fragment>
  );
};

export default EventDetail;
