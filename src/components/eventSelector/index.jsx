import styles from "./styles.module.css";

/* убрал из функции {dates, selectedEvent, onSelect } selectedEvent т.к. ругалса eslint. selectedEvent здесь мы не используем*/
function EventSelector({ events, onSelect }) {
  if (!events) return null;

  return (
    <div>
      <h4>Select event:</h4>

      <div className={styles.buttonContainer}>
        {events.map((event) => (
          <button key={event.id} onClick={() => onSelect(event)}>
            {event.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default EventSelector;
