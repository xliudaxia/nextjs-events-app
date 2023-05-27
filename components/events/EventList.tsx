import React from "react";
import { Event } from "@/types";
import EventItem from "./EventItem";
import styles from './EventList.module.css'

/** 活动列表 */
const EventList = (props: { items: Event[] }) => {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
