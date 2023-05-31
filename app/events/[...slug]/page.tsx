import React from "react";
import { getFilteredEvents } from "@/data/dummy-data";
import EventList from "@/components/events/EventList";
import ResultsTitle from "@/components/ResultTitlte/ResultsTitle";
import ErrorAlert from "@/components/ErrorAlert/ErrorAlert";
import BaseLink from "@/components/ui/BaseLink";

const FilterEventPage = (props: any) => {
  const { params } = props;
  const { slug } = params;
  if (!slug) {
    return <p className="center">Loading……</p>;
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
  const filterdEvents = getFilteredEvents({
    year: filteredYear,
    month: filterdMonth,
  });
  
  if (!filterdEvents || filterdEvents.length == 0) {
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
      <EventList items={filterdEvents} />
    </div>
  );
};

export default FilterEventPage;
