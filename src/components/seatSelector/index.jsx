import styles from "./styles.module.css";

const seats = [
  "A21",
  "A22",
  "C14",
  "C15",
  "C36",
  "D23",
  "D24",
  "E13",
  "E14",
  "E15",
  "F36",
  "F37",
  "K23",
  "K24",
  "K25",
  "K26",
];

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
