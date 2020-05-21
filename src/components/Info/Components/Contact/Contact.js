import React from 'react';

import './styles.css';

const Contact = (props) => {
  return (
    <div className={`contact-content ${props.showOpacityOnLoad}`}>
      <div className="git-hub">
        <h2>{'< '}<span>GitHub</span> /></h2>
        <div className="link-content">
          <i className="fa fa-github"></i>
          <a href="https://github.com/FelipeBelloDultra" target="blank">/FelipeBelloDultra</a>
        </div>
      </div>
      <div className="linkedin">
        <h2>{'< '}<span>Linkedin</span> /></h2>
        <div className="link-content">
          <i className="fa fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/felipebellodultra/" target="blank">/felipebellodultra</a>
        </div>
      </div>
      <div className="email">
        <h2>{'< '}<span>Email</span> /></h2>
        <div className="link-content">
          <i className="fa fa-envelope-square"></i>
          <p>felipe_bello_dultra@hotmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
