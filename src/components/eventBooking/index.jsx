import { useState } from "react";
import eventsData from "../eventsData";
import DateSelector from "../dateSelector";
import EventSelector from "../eventSelector";
import SeatSelector from "../seatSelector";

function EventBooking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className={styles.container}>
      {/* <EventDetails />
      <SeatSelector
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <h4>Selected seats: {selectedSeats.join(", ") || "none"}</h4> */}
    </div>
  );
}

export default EventBooking;
