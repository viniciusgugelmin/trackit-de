import P from "prop-types";

import { InputEl, Label } from "./style";

export const Input = ({ value, setValue, type, placeholder, name, required = false }) => {
  return (
    <Label>
      <InputEl
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      />
    </Label>
  );
};

Input.propTypes = {
  value: P.string.isRequired,
  setValue: P.func.isRequired,
  type: P.string.isRequired,
  placeholder: P.string.isRequired,
  name: P.string.isRequired,
  required: P.bool,
};