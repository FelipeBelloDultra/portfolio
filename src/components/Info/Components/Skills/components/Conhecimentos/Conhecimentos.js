import React from 'react';

import html from '../../../../../../assets/icons/html.png'
import css from '../../../../../../assets/icons/css.png'
import bootstrap from '../../../../../../assets/icons/bootstrap.png'
import javascript from '../../../../../../assets/icons/javascript.png'
import sql from '../../../../../../assets/icons/sql.png'
import bancoDeDados from '../../../../../../assets/icons/bancoDeDados.png'

const Conhecimentos = ({ skills }) => {
  return (
    <>
      <div className="ability-option">
        <div className="ability-skills">
          <img src={html} alt={skills.html.name} />
          <p>{skills.html.name}</p>
        </div>
        <div className="ability-skills">
          <img src={css} alt={skills.css.name} />
          <p>{skills.css.name}</p>
        </div>
        <div className="ability-skills">
          <img src={bootstrap} alt={skills.bootstrap.name} />
          <p>{skills.bootstrap.name}</p>
        </div>
      </div>

      <div className="ability-option">
        <div className="ability-skills">
          <img src={javascript} alt={skills.javascript.name} />
          <p>{skills.javascript.name}</p>
        </div>
        <div className="ability-skills">
          <img src={sql} alt={skills.sql.name} />
          <p>{skills.sql.name}</p>
        </div>
        <div className="ability-skills">
          <img src={bancoDeDados} alt={skills.bancoDeDados.name} />
          <p>{skills.bancoDeDados.name}</p>
        </div>
      </div>
    </>
  );
};

export default Conhecimentos;
