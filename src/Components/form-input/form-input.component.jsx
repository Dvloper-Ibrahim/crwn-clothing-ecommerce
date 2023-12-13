import "./form-input.styles.scss";

function FormInput({ label, ...otherProps }) {
  return (
    <div className="form-group">
      <input {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
