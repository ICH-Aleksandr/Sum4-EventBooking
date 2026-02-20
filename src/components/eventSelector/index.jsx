function EventSelector({ events, selectedEvent, onSelect }) {
  if (!events) return null;

  return (
    <div>
      <h4>Select event:</h4>
      {events.map((event) => (
        <button key={event.id} onClick={() => onSelect(event)}>
          {event.title}
        </button>
      ))}
    </div>
  );
}

export default EventSelector;
