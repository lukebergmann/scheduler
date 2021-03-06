// LIBRARY
import React from "react";
// COMPONENTS
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  const selectedDays = props.days.map((day) => {
    return (
      <DayListItem
        key={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === props.day}
        setDay={props.setDay}
      />
    );
  });
  return <ul>{selectedDays}</ul>;
}
