function DateSelector({ dates, selectedDate, onSelect }) {
  return (
    <div>
      <h4>Select date:</h4>
      {dates.map((item) => (
        <button key={item.id} onClick={() => onSelect(item)}>
          {item.date.toLocaleDateString()}
        </button>
      ))}
    </div>
  );
}

export default DateSelector;
