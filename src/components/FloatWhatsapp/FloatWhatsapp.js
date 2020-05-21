import React, { memo } from 'react';

const FloatWhatsapp = (props) => (
  <a
    className={`whatsapp-logo ${props.showRightOnLoad}`}
    href="https://api.whatsapp.com/send?phone=5516997024900&text=Ol%C3%A1%20Felipe%2C%20tudo%20bem%3F%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20de%20seu%20site."
    target="blank"
  >
    <i className="fa fa-whatsapp"></i>
  </a>
);

export default memo(FloatWhatsapp);
