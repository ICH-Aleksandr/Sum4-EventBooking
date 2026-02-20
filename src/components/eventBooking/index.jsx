import { useState } from "react";
import eventsData from "../eventsData";
import DateSelector from "../dateSelector";
import EventSelector from "../eventSelector";
import SeatSelector from "../seatSelector";
import styles from "./styles.module.css";

function EventBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className={styles.container}>
      <DateSelector
        dates={eventsData}
        selectedDate={selectedDate}
        onSelect={(date) => {
          setSelectedDate(date);
          setSelectedEvent(null);
          setSelectedSeats([]);
        }}
      />

      <EventSelector
        events={selectedDate?.events}
        selectedEvent={selectedEvent}
        onSelect={(event) => {
          setSelectedEvent(event);
          setSelectedSeats([]);
        }}
      />

      <SeatSelector
        seats={selectedEvent?.seats}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />

      {selectedSeats.length > 0 && (
        <h4>Selected seats: {selectedSeats.join(", ")}</h4>
      )}
    </div>
  );
}

export default EventBooking;
