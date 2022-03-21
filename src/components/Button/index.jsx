import P from "prop-types";
import { ButtonEl } from "./style";

export const Button = ({ text, onClick, disabled, type }) => (
  <ButtonEl type={type} onClick={onClick} disabled={disabled}>
    {text}
  </ButtonEl>
);

Button.propTypes = {
  text: P.node.isRequired,
  onClick: P.func,
  disabled: P.bool,
  type: P.string,
};