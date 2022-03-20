import P from "prop-types";
import { ButtonEl } from "./style";

export const Button = ({ text, onClick }) => <ButtonEl onClick={onClick}>{text}</ButtonEl>;

Button.propTypes = {
  text: P.node.isRequired,
  onClick: P.func.isRequired,
};