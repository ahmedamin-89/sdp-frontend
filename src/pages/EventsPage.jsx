import React, { useState } from "react";
import classes from "./Page.module.css";
import EventTypeSelector from "../components/Events/EventTypeSelector";
import EventList from "../components/Events/EventList";
import EventDetails from "../components/Events/EventDetails";
import styles from "./EventsPage.module.css";

const EventsPage = () => {
  const [selectedType, setSelectedType] = useState("Fundraiser");
  const [selectedEvent, setSelectedEvent] = useState({
    id: 5,
    type: "workshop",
    title: "CPR & AED Training",
    date: "2024-07-20",
    location: "Community College",
    maxAttendees: 15,
    goalAmount: 10000,
  });

  return (
    <div className={classes.container}>
      <div className={classes.rowSpaceBetween}>
        <h2 className={classes.title}>Events</h2>
        <EventTypeSelector
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
      <p>
        Browse and manage upcoming events such as Fundraisers, Workshops, and
        Outreach programs.
      </p>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <EventList selectedType={selectedType} />
        </div>
        <div className={styles.innerContainer}>
          <EventDetails {...selectedEvent} />
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
