import { LinkToEl } from "./style";

export const LinkTo = ({ to, style, children }) => {
  return (
    <LinkToEl to={to} style={style}>
      {children}
    </LinkToEl>
  );
};