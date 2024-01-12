import { Group, InputLabel, Input } from "./form-input.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <InputLabel shrink={otherProps.value.length}>{label}</InputLabel>
        // <label
        //   className={`${otherProps.value.length ? "shrink" : ""} input-label`}
        // >
        //   {label}
        // </label>
      )}
    </Group>
  );
}

export default FormInput;
