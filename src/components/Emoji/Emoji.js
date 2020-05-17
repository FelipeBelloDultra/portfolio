import React, { memo } from 'react';

const Emoji = (props) => (
  <p
    className={`react-site ${props.showOnLoad}`}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    value={props.label}
  >
    <i>Desenvolvido com React</i>
    <br />
    <i>Feito com </i>{props.symbol}
  </p>
);

export default memo(Emoji);
