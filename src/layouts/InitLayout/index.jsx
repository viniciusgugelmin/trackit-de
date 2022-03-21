import { LinkTo } from "../../components/Link";
import { Button } from "../../components/Button";
import P from "prop-types";
import logo from "../../assets/images/logo.svg";

import { InitLayoutEl, Logo, linkToStyle, Form } from "./style";

export const InitLayout = ({ linkTo, linkText, onSubmit, buttonText, loading, children }) => {
  return (
    <InitLayoutEl>
      <Logo src={logo} alt="logo" />
      <Form onSubmit={onSubmit}>
        {children}
        <Button type="submit" text={buttonText} disabled={loading} />
      </Form>
      {!loading && (
        <LinkTo to={linkTo} style={linkToStyle}>
          {linkText}
        </LinkTo>
      )}
    </InitLayoutEl>
  );
};

InitLayout.propTypes = {
  linkTo: P.string.isRequired,
  linkText: P.string.isRequired,
  onSubmit: P.func.isRequired,
  buttonText: P.string.isRequired,
  loading: P.bool.isRequired,
  children: P.node.isRequired,
};