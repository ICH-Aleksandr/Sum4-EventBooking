import styles from "./styles.module.css";
import { useState } from "react";
import EventDetails from "../eventDetails";
import SeatSelector from "../seatSelector";

function EventBooking() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  return (
    <div className={styles.container}>
      <EventDetails />
      <SeatSelector
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
      />
      <h4>Selected seats: {selectedSeats.join(", ") || "none"}</h4>
    </div>
  );
}
export default EventBooking;
