import "./checkboxSlider.scss";

export default function CheckboxSlider({ darkMode, onClick }) {
  return (
    <label className="checkbox-slider-label">
      <input
        onClick={onClick}
        checked={darkMode}
        onChange={() => darkMode}
        className="checkbox-slider-label__input"
        type="checkbox"
      />
      <div className="checkbox-slider-label__fakebox"></div>
    </label>
  );
}
