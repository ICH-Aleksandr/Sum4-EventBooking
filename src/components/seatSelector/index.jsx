import styles from "./styles.module.css";

function SeatSelector({ selectedSeats, setSelectedSeats }) {
  const toggleSeat = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className={styles.container}>
      <h4>Select seats:</h4>

      <div className={styles.seats}>
        {seats.map((seat) => (
          <button
            key={seat}
            onClick={() => toggleSeat(seat)}
            className={
              selectedSeats.includes(seat) ? styles.selected : styles.seat
            }
          >
            {seat}
          </button>
        ))}
      </div>
    </div>
  );
}
export default SeatSelector;
