"use client";
import React from "react";
import { Event } from "@/types";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/ResultTitlte/ResultsTitle";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";
import { useEvents } from "@/utils/hooks";
import BaseLink from "@/components/ui/BaseLink";

const FilterEventPage = (props: any) => {
  const [events, isLoading] = useEvents();
  const { params } = props;
  const { slug } = params;
  if (!slug) {
    return <div className="loading" />;
  }
  const filteredYear = +slug.at(0);
  const filterdMonth = +slug.at(1);
  if (
    isNaN(filteredYear) ||
    isNaN(filterdMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2020 ||
    filterdMonth < 1 ||
    filterdMonth > 12
  ) {
    return (
      <div className="center">
        <ErrorAlert>无效输入，请检查后重试</ErrorAlert>
        <BaseLink link="/events">查看全部</BaseLink>
      </div>
    );
  }

  const getFilteredEvents = (
    events: Event[],
    dateFilter: {
      year: number;
      month: number;
    }
  ) => {
    const { year, month } = dateFilter;

    let filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
      );
    });
    return filteredEvents;
  };

  const filteredEvents = getFilteredEvents(events, {
    year: filteredYear,
    month: filterdMonth,
  });

  if (isLoading) {
    return <div className="loading" />;
  }

  if (!filteredEvents || filteredEvents.length == 0) {
    return (
      <div className="center">
        <ErrorAlert>未查询到当前日期区间内数据</ErrorAlert>
        <BaseLink link="/events">查看全部</BaseLink>
      </div>
    );
  }
  const date = new Date(filteredYear, filterdMonth - 1);

  return (
    <div className="center">
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilterEventPage;
