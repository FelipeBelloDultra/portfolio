import React from 'react';

import php from '../../../../../../assets/icons/php.png'
import laravel from '../../../../../../assets/icons/laravel.png'
import codeigniter from '../../../../../../assets/icons/codeigniter.webp'
import nodejs from '../../../../../../assets/icons/nodejs.png'
import react from '../../../../../../assets/icons/react.png'
import ionic from '../../../../../../assets/icons/ionic.png'
import json from '../../../../../../assets/icons/json.png'
import restApi from '../../../../../../assets/icons/restApi.png'
import linux from '../../../../../../assets/icons/linux.png'

const ConhecimentosModerados = ({ skills }) => {
  return (
    <>
      <div className="ability-option">
        <div className="ability-skills">
          <img src={php} alt={skills.php.name} />
          <p>{skills.php.name}</p>
        </div>
        <div className="ability-skills">
          <img src={laravel} alt={skills.laravel.name} />
          <p>{skills.laravel.name}</p>
        </div>
        <div className="ability-skills">
          <img src={codeigniter} alt={skills.codeigniter.name} />
          <p>{skills.codeigniter.name}</p>
        </div>
        <div className="ability-skills">
          <img src={nodejs} alt={skills.nodejs.name} />
          <p>{skills.nodejs.name}</p>
        </div>
        <div className="ability-skills">
          <img src={react} alt={skills.reactjs.name} />
          <p>{skills.reactjs.name}</p>
        </div>
      </div>

      <div className="ability-option">
        <div className="ability-skills">
          <img src={react} alt={skills.reactNative.name} />
          <p>{skills.reactNative.name}</p>
        </div>
        <div className="ability-skills">
          <img src={ionic} alt={skills.ionic.name} />
          <p>{skills.ionic.name}</p>
        </div>
        <div className="ability-skills">
          <img src={json} alt={skills.json.name} />
          <p>{skills.json.name}</p>
        </div>
        <div className="ability-skills">
          <img src={restApi} alt={skills.restApi.name} />
          <p>{skills.restApi.name}</p>
        </div>
        <div className="ability-skills">
          <img src={linux} alt={skills.linux.name} />
          <p>{skills.linux.name}</p>
        </div>
      </div>
    </>
  );
};

export default ConhecimentosModerados;
