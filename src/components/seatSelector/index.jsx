import styles from "./styles.module.css";

function SeatSelector({ seats, selectedSeats, setSelectedSeats }) {
  if (!seats) return null;

  const toggleSeat = (seat) => {
    if (seat.isSelected) return;

    if (selectedSeats.includes(seat.label)) {
      setSelectedSeats(selectedSeats.filter((item) => item !== seat.label));
    } else {
      setSelectedSeats([...selectedSeats, seat.label]);
    }
  };

  return (
    <div className={styles.container}>
      <h4>Select seats:</h4>

      <div className={styles.seats}>
        {seats.map((seat) => (
          <button
            key={seat.id}
            disabled={seat.isSelected}
            onClick={() => toggleSeat(seat)}
          >
            {seat.label}
          </button>
        ))}
      </div>
    </div>
  );
}
export default SeatSelector;
