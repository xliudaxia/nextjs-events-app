import React, { Fragment } from "react";
import { getEventById } from "@/data/dummy-data";
import EventContent from "@/components/events/EventContent";
import EventLogistics from "@/components/events/EventLogistics";
import EventSummary from "@/components/events/EventSummary";

const EventDetail = ({ params }: { params: { eventId: string } }) => {

  const { eventId } = params;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No Event found</p>;
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
    </Fragment>
  );
};

export default EventDetail;
