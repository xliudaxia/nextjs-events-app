import React from "react";
import Image from "next/image";
import { Event } from "@/types";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import BaseLink from "../ui/BaseLink";
import styles from "./EventItem.module.css";

/** 活动记录 */
const EventItem = (props: Omit<Omit<Event, "description">, "isFeatured">) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("zh-CN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const foramttedAdress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <Image width={200} height={100} src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{foramttedAdress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <BaseLink link={exploreLink}>
              <span>Explore Event</span>
              <span className={styles.icon}>
                <ArrowRightIcon />
              </span>
          </BaseLink>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
