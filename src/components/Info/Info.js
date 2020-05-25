import React, { memo } from 'react';

import { Home, About, Skills, Contact } from './Components';
import './styles.css';

const Info = (props) => {
  return (
    <div className="info" id="home">
      <div className="info-home">
        <Home
          showOnLoad={props.showOnLoad}
        />
      </div>
      <div className="info-about" id="sobre">
        <About
          showOnLoad={props.showOnLoad}
          showRightOnLoad={props.showRightOnLoad}
          showOpacityOnLoad={props.showOpacityOnLoad}
        />
      </div>
      <div className="info-skills" id="habilidade">
        <Skills
          showOnLoad={props.showOnLoad}
          showRightOnLoad={props.showRightOnLoad}
        />
      </div>
      <div className="info-contact" id="contato">
        <Contact
          showOpacityOnLoad={props.showOpacityOnLoad}
        />
      </div>
    </div>
  );
};

export default memo(Info);
