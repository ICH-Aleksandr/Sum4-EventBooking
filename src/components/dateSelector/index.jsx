import styles from "./styles.module.css";

/* убрал из функции {dates, selectedDate, onSelect } selectedDate т.к. ругалса eslint. selectedDate здесь мы не используем*/
function DateSelector({ dates, onSelect }) {
  return (
    <div className={styles.container}>
      <h4>Select date:</h4>
      <div className={styles.buttonContainer}>
        {dates.map((item) => (
          <button key={item.id} onClick={() => onSelect(item)}>
            {item.date.toLocaleDateString()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DateSelector;
