import React from "react";
import classes from "./EventList.module.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import EventCard from "./EventCard";

// A small, fake data set for demonstration
// You can expand these objects to include more details
const FAKE_EVENTS = [
  {
    id: 1,
    type: "fundraiser",
    title: "Community Fundraiser",
    date: "2024-02-12",
    location: "Town Hall",
    goalAmount: 2000,
  },
  {
    id: 2,
    type: "workshop",
    title: "First Aid Workshop",
    date: "2024-03-01",
    location: "Local Clinic",
    maxAttendees: 25,
  },
  {
    id: 3,
    type: "outreach",
    title: "Health Awareness Outreach",
    date: "2024-04-10",
    location: "City Park",
    audience: "General Public",
  },
  {
    id: 4,
    type: "fundraiser",
    title: "Cancer Research Fundraiser",
    date: "2024-06-05",
    location: "Conference Center",
    goalAmount: 5000,
  },
  {
    id: 5,
    type: "workshop",
    title: "CPR & AED Training",
    date: "2024-07-20",
    location: "Community College",
    maxAttendees: 15,
  },
];

const EventList = ({ selectedType }) => {
  // If selectedType is provided, we filter; otherwise, we show everything
  const eventsToDisplay = selectedType
    ? FAKE_EVENTS.filter(
        (event) => event.type.toLowerCase() === selectedType.toLowerCase()
      )
    : FAKE_EVENTS;

  console.log(eventsToDisplay);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1 className={classes.title}>Event List</h1>
        <IoIosAddCircleOutline className={classes.addIcon} />
      </div>

      <div className={classes.eventList}>
        {eventsToDisplay.length > 0 ? (
          eventsToDisplay.map((event) => (
            <EventCard key={event.id} {...event} />
          ))
        ) : (
          <p>
            No events found for <strong>{selectedType}</strong>.
          </p>
        )}
      </div>
    </div>
  );
};

export default EventList;
