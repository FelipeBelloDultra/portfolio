import React, { memo } from 'react';

import './styles.css';

const Info = () => {
  return (
    <div className="info" id="home">
      <div className="info-content">
        <h4>Home</h4>
      </div>
      <div className="info-content" id="sobre">
        <h4>Sobre</h4>
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
