export default function InputField({ label, id, value, onInputChange }) {
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        value={value}
        onChange={(event) => onInputChange(id, event.target.value)}
      />
    </p>
  );
}
