import React from 'react';

import './styles.css';

const Loading = (props) => {
  return (
    <div className={props.classes}>
      <h1>Carregando...</h1>
    </div>
  );
};

export default Loading;
