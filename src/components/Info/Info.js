import React, { memo } from 'react';

import { Home, About } from './Components';
import './styles.css';

const Info = (props) => {
  return (
    <div className="info" id="home">
      <div className="info-home">
        <Home showOnLoad={props.showOnLoad} />
      </div>
      <div className="info-about" id="sobre">
        <About
          showOnLoad={props.showOnLoad}
          showRightOnLoad={props.showRightOnLoad}
          showOpacityOnLoad={props.showOpacityOnLoad}
        />
      </div>
      <div className="info-content" id="habilidade">
        <h4>Habilidades</h4>
      </div>
      <div className="info-content" id="contato">
        <h4>Contato</h4>
      </div>
    </div>
  );
};

export default memo(Info);
