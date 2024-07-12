import { InputHTMLAttributes, FC } from "react";

import { Group, InputLabel, Input } from "./form-input.styles";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <InputLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === "string" &&
              otherProps.value.length
          )}
        >
          {label}
        </InputLabel>
        // <label
        //   className={`${otherProps.value.length ? "shrink" : ""} input-label`}
        // >
        //   {label}
        // </label>
      )}
    </Group>
  );
};

export default FormInput;
